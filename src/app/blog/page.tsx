import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";
import "./style.css";
import TabSection from "./tabsection";
import AllArticlesWithPagination from "./AllArticlesWithPagination";

const GET_BLOG_DATA = gql`
  query GetBlogData {
    recent: posts(first: 6) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    trending: posts(first: 5, where: { categoryName: "trending" }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    all: posts(first: 10) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    featuredArticles: posts(first: 5, where: { categoryName: "featured-articles" }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    latestArticles: posts(first: 5, where: { categoryName: "latest-articles" }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
    popular: posts(first: 3, where: { categoryName: "popular" }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export default async function BlogLandingPage() {
  const { data } = await client.query({
    query: GET_BLOG_DATA,
    fetchPolicy: "no-cache",
  });

  const recent = data?.recent?.nodes ?? [];
  const trending = data?.trending?.nodes ?? [];
  const all = data?.all?.nodes ?? [];
  const featuredArticles = data?.featuredArticles?.nodes ?? [];
  const latestArticles = data?.latestArticles?.nodes ?? [];
  const popular = data?.popular?.nodes ?? [];

  return (
    <main className="bg-black text-white">
      {/* Hero Banner */}
      <section className="relative h-60 md:h-120 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://backend.primotech.ai/wp-content/uploads/2025/09/blog_banner.png')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="page-heading text-center">
            Blog
          </h1>
        </div>
      </section>

      {/* Recent Posts with Sidebar */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 mb-10 sm:mb-16 lg:mb-20 py-6 sm:py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[60px]">
          {/* Left Column */}
          <div className="flex-1 max-w-[920px]">
            <h2 className="recent-posts-heading inline-block">Recent Posts</h2>
            <img src="https://backend.primotech.ai/wp-content/uploads/2025/09/Border-2.png"/>
            {/* First Row: 3 posts */}
            <div className="blog-card grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-10">
              {recent.slice(0, 3).map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <article className="relative rounded-lg overflow-hidden group bg-black">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-full h-115 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="card-category absolute bottom-1">
                      <span>{post.categories?.nodes?.[0]?.name ?? "Tech"}</span>
                      <h3 className="recents-post-cards-headings line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="date flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 7.5h15A1.5 1.5 0 0121 9v11.25A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 20.25V9a1.5 1.5 0 011.5-1.5z"
                          />
                        </svg>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Second Row: 2 posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recent.slice(3, 5).map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <article className="relative rounded-lg overflow-hidden group bg-black">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-full h-115 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                    <div className="card-category absolute bottom-1">
                      <span>{post.categories?.nodes?.[0]?.name ?? "Tech"}</span>
                      <h3 className="recents-post-cards-headings line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="date flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 7.5h15A1.5 1.5 0 0121 9v11.25A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 20.25V9a1.5 1.5 0 011.5-1.5z"
                          />
                        </svg>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:max-w-[320px]">
            <TabSection latestArticles={latestArticles} featuredArticles={featuredArticles} />
          </div>
        </div>
      </section>


      {/* Trending News Section */}
      <section className="bg-[#292929] py-12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <h2 className="trending-news-heading mb-8 pb-2">Trending News</h2>
          <img src="https://backend.primotech.ai/wp-content/uploads/2025/09/Border-3.png" />

          {/* First Row: 2 Large Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 mb-10">
            {trending.slice(0, 2).map((post: any) => (
              <Link key={post.id} href={`/${post.slug}`} className="block group">
                <article className="relative rounded-lg overflow-hidden h-[400px]">
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 to-transparent" />
                  <div className="absolute trending-news-boxes trending-card-category bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded">
                      {post.categories?.nodes?.[0]?.name ?? "Trending"}
                    </span>
                    <h3 className="recents-post-cards-headings line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex date">
                      <p className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 7.5h15A1.5 1.5 0 0121 9v11.25A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 20.25V9a1.5 1.5 0 011.5-1.5z"
                          />
                        </svg>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Second Row: 3 Sidebar-Style Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {trending.slice(2, 5).map((post: any) => (
              <Link key={post.id} href={`/${post.slug}`} className="block group">
                <div className="flex items-center gap-8 pb-4">
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="sidebar-cards-imgs w-[120px] h-[90px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="flex-1 gap-0 trending-card-category">
                    {post.categories?.nodes?.[0]?.name && (
                      <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded">
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                    <h4 className="line-clamp-2 sidebar-cards-headings text-white font-semibold mt-1 hover:text-orange-400">
                      {post.title}
                    </h4>
                    <p className="flex items-center gap-2 sidebar-cards-dates text-gray-400 text-xs mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 7.5h15A1.5 1.5 0 0121 9v11.25A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 20.25V9a1.5 1.5 0 011.5-1.5z"
                        />
                      </svg>
                      {new Date(post.date)
                        .toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                        .toUpperCase()}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* All Articles - and - Popular News */}
      {/* All Articles */}
      <section className="bg-[#070707] py-6 sm:py-8 md:py-10 lg:py-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20 bg-[url('https://backend.primotech.ai/wp-content/uploads/2025/09/all-articles-bkg.jpg')] bg-no-repeat bg-right-bottom bg-contain">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Layout */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] items-start">
            
            {/* Left Column: All Articles */}
            <div className="w-full lg:w-[920px]">
              <AllArticlesWithPagination posts={all} />
            </div>

            {/* Right Column: Popular News */}
            <div className="w-full md:w-full lg:w-[330px] mx-auto py-6 sm:py-8">
              {/* Section Heading */}
              <h2 className="trending-news-heading mb-4 sm:mb-6 lg:mb-8 pb-0 text-left lg:text-left">
                Popular News
              </h2>
              <img
                src="https://backend.primotech.ai/wp-content/uploads/2025/09/Border-4.png"
                alt="divider"
                className="lg:mx-0 mb-4 sm:mb-6 lg:mb-8"
              />

              {/* Grid instead of flex for responsiveness */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-4">
                {popular.slice(0, 3).map((post: any) => (
                  <Link key={post.id} href={`/${post.slug}`} className="block group">
                    <article className="duration-300">
                      {/* Featured Image */}
                      {post.featuredImage?.node?.sourceUrl && (
                        <div className="relative overflow-hidden rounded-lg">
                          <img
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.title}
                            className="w-full h-52 sm:h-60 lg:h-70 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="py-4 sm:py-4 px-0 gap-2 trending-card-category">
                        {post.categories?.nodes?.[0]?.name && (
                          <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded mb-2">
                            {post.categories.nodes[0].name}
                          </span>
                        )}
                        <h3 className="sidebar-cards-headings text-white font-semibold text-sm sm:text-base line-clamp-2 mb-2 sm:mb-3 hover:text-orange-400">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-2 sidebar-cards-dates text-gray-400 text-xs">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 7.5h15A1.5 1.5 0 0121 9v11.25A1.5 1.5 0 0119.5 21h-15A1.5 1.5 0 013 20.25V9a1.5 1.5 0 011.5-1.5z"
                            />
                          </svg>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}