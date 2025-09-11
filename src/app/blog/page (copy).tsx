import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";
import path from "@/../public/images/blog_banner.png";

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
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://demo1.primotech.ai/wp-content/uploads/2025/09/blog_banner.png')` }}
      >
        <div className="absolute inset-0 items-center"/>
        <h1 className="relative text-6xl text-center font-bold">Blog</h1>
      </section>

      {/* Recent Posts with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 border-b-4 border-orange-500 inline-block">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {recent.map((post: any) => (
                <Link key={post.id} href={`/${post.slug}`} className="block">
                  <article className="relative rounded-lg overflow-hidden group">
                    {post.featuredImage?.node?.sourceUrl && (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-gray-400 mb-1">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <h3 className="text-lg font-semibold group-hover:text-orange-500 transition">
                        {post.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80">
            <div className="flex gap-4 mb-6">
              <button className="bg-orange-500 px-4 py-2 rounded text-black font-semibold">
                Latest News
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded text-white font-semibold">
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
