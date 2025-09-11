"use client";
import { useState } from "react";
import Link from "next/link";

interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
    };
  };
  categories?: {
    nodes: { name: string }[];
  };
}

export default function AllArticlesWithPagination({ posts }: { posts: Post[] }) {
  const postsPerPage = 4; // 2 rows × 2 posts
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="max-w-[1320px] mx-auto py-8">
      <h2 className="recent-posts-heading inline-block">All Articles</h2>
      <img src="https://demo1.primotech.ai/wp-content/uploads/2025/09/Border-2.png" />
      
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-12">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/${post.slug}`} className="block group">
            <article className="rounded-lg">
              <div className="relative overflow-hidden rounded-lg">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="w-full h-100 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="all-articles-cards trending-card-category">
                  <span className="absolute m-4 top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.categories?.nodes[0]?.name || "Uncategorized"}
                  </span>
                </div>
              </div>
              <div className="all-article-card-content text-white">
                <h3 className="text-xl font-semibold mb-2 hover:text-orange-500 transition-all line-clamp-2">
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
                <div
                  className="all-articles-para line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-1 mt-[40px] sm:mt-[40px] lg:mt-[80px]">
        <button
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          className="pagination-styling"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`pagination-styling ${
              currentPage === index + 1 ? "bg-orange-500" : "bg-black"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
          className="pagination-styling"
        >
          Next
        </button>
      </div>
    </section>
  );
}
