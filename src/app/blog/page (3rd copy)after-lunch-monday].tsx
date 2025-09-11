"use client";
import { useState } from "react";
import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";
import "./style.css";

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

  return (
    <main className="bg-black text-white">
      {/* Hero Banner */}
      <section
        className="relative h-60 md:h-120 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://demo1.primotech.ai/wp-content/uploads/2025/09/blog_banner.png')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white text-center">
            Blog
          </h1>
        </div>
      </section>

      {/* Recent Posts with Sidebar */}
      <section className="max-w-[1320px] mx-auto px-6 mt-20 py-12">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="recent-posts-heading inline-block">Recent Posts</h2>

            {/* First Row: 3 posts */}
            <div className="blog-card grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-10">
              {recent.slice(0, 3).map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <article className="relative rounded-lg overflow-hidden group bg-black">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    <div className="card-category absolute bottom-1">
                      <span>
                        {post.categories?.nodes?.[0]?.name ?? "Tech"}
                      </span>
                      <h3 className="text-xl font-semibold group-hover:text-orange-500 transition line-clamp-2">
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
                        className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    <div className="card-category absolute bottom-1">
                      <span>
                        {post.categories?.nodes?.[0]?.name ?? "Tech"}
                      </span>
                      <h3 className="text-xl font-semibold group-hover:text-orange-500 transition line-clamp-2">
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

          {/* Right Sidebar */}
          <Sidebar latest={latestArticles} featured={featuredArticles} />
        </div>
      </section>

      {/* Trending News Section */}
      <section className="bg-[#1a1a1a] py-12">
        <div className="max-w-[1320px] mx-auto px-6">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-orange-500 mb-8 border-b border-gray-700 pb-2">
            Trending News
          </h2>

          {/* First Row: 2 Large Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded">
                      {post.categories?.nodes?.[0]?.name ?? "Trending"}
                    </span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-orange-400 line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm mt-2 text-gray-300">
                      <p>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      <span>· 20 mins</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Second Row: 3 Sidebar-Style Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.slice(2, 5).map((post: any) => (
              <Link key={post.id} href={`/${post.slug}`} className="block">
                <div className="flex items-center gap-4 pb-4">
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="sidebar-cards-imgs w-[120px] h-[90px] object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1">
                    {post.categories?.nodes?.[0]?.name && (
                      <span className="inline-block sidebar-cards-tags bg-orange-500 text-black text-xs font-semibold px-2 py-1 rounded">
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
                        className="w-4 h-4"
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

      {/* All Articles */}
      <section className="max-w-[1320px] mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-orange-500 inline-block">
          All Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {all.map((post: any) => (
            <Link key={post.id} href={`/${post.slug}`} className="block">
              <article className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4 bg-gray-900">
                  <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <div
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

/* Sidebar Component */
function Sidebar({ latest, featured }: { latest: any[]; featured: any[] }) {
  const [activeTab, setActiveTab] = useState<"latest" | "featured">("latest");
  const posts = activeTab === "latest" ? latest : featured;

  return (
    <aside className="w-full lg:w-[320px] mt-10">
      {/* Toggle Buttons */}
      <div className="flex rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab("latest")}
          className={`latest-news-btn w-1/2 px-4 py-2 transition-colors ${
            activeTab === "latest"
              ? "text-white"
              : "text-white hover:bg-gray-600"
          }`}
        >
          Latest Articles
        </button>

        <button
          onClick={() => setActiveTab("featured")}
          className={`feature-news-btn w-1/2 px-4 py-2 transition-colors ${
            activeTab === "featured"
              ? "text-black"
              : "text-black hover:bg-gray-600"
          }`}
        >
          Featured Articles
        </button>
      </div>

      {/* Posts List */}
      <div className="mt-6 space-y-6">
        {posts.length === 0 ? (
          <p className="text-gray-400 text-sm">No posts found.</p>
        ) : (
          posts.slice(0, 4).map((post: any) =>
            post?.slug ? (
              <Link key={post.id} href={`/${post.slug}`} className="block">
                <div className="sidebar-cards flex items-center gap-4 pb-4">
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="sidebar-cards-imgs"
                    />
                  )}
                  <div className="flex-1">
                    {post.categories?.nodes?.[0]?.name && (
                      <span className="inline-block sidebar-cards-tags">
                        {post.categories.nodes[0].name}
                      </span>
                    )}
                    <h4 className="line-clamp-2 sidebar-cards-headings">
                      {post.title}
                    </h4>
                    <p className="flex gap-2 sidebar-cards-dates">
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
            ) : (
              <div
                key={post.id}
                className="sidebar-cards flex items-center gap-4 pb-4 opacity-60 cursor-not-allowed"
              >
                <div className="flex-1">
                  <h4 className="line-clamp-2 sidebar-cards-headings">
                    {post.title || "Untitled"}
                  </h4>
                  <p className="text-sm text-gray-500">Slug missing</p>
                </div>
              </div>
            )
          )
        )}
      </div>
    </aside>
  );
}

