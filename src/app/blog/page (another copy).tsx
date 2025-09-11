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
      }
    }
    trending: posts(first: 4, where: { categoryName: "Trending" }) {
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

  return (
    <main className="bg-black text-white">
      {/* Hero Banner */}
      <section
        className="relative h-60 md:h-120 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://demo1.primotech.ai/wp-content/uploads/2025/09/blog_banner.png')`,
        }}
      >
        {/* Dark overlay + Flex container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-4xl font-bold text-white text-center">
            Blog
          </h1>
        </div>
      </section>


      {/* Recent Posts with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 mt-20 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="recent-posts-heading inline-block">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {recent.map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <article className="relative rounded-lg overflow-hidden group bg-black">
                  {/* Featured Image */}
                  {post.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  {/* Content */}
                  <div className="card-category absolute bottom-1">
                    {/* Category Badge */}
                    <span>
                      TECH
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-semibold group-hover:text-orange-500 transition line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Date with Icon */}
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
          <aside className="w-full lg:w-80 mt-10">
            <div className="flex">
              <button className="latest-news-btn px-4 py-2">
                Latest News
              </button>
              <button className="featured-btnspx-4 py-2">
                Featured
              </button>
            </div>
            <div className="space-y-6">
              {trending.map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <div className="flex items-center gap-4">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-24 h-20 object-cover rounded"
                      />
                    )}
                    <div>
                      <h4 className="text-sm font-semibold hover:text-orange-500 transition">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* All Articles */}
      <section className="max-w-7xl mx-auto px-6 py-12">
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
                  <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition">
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
