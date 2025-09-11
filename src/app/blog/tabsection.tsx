"use client";

import { useState } from "react";
import Link from "next/link";

export default function TabSection({ latestArticles, featuredArticles }: any) {
  const [activeTab, setActiveTab] = useState("latest");
  const posts = activeTab === "latest" ? latestArticles : featuredArticles;

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="mx-auto">
        {/* Tabs */}
        <div className="flex w-full mb-3 mt-5">
          <button
            onClick={() => setActiveTab("latest")}
            className={`flex-1 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 transition rounded-l-md ${
              activeTab === "latest"
                ? "bg-[#E98305] text-white !font-bold"
                : "bg-[#FFEACF] !text-black !font-bold"
            }`}
          >
            Latest News
          </button>

          <button
            onClick={() => setActiveTab("featured")}
            className={`flex-1 px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5 transition rounded-r-md ${
              activeTab === "featured"
                ? "bg-[#E98305] text-white !font-bold"
                : "bg-[#FFEACF] !text-black !font-bold"
            }`}
          >
            Featured
          </button>
        </div>

        {/* Posts */}
        <div className="transition-all duration-300 ease-in-out">
          {posts.slice(0, 4).map((post: any) => (
            <Link key={post.id} href={`/${post.slug}`} className="block">
              <div className="sidebar-cards flex gap-4 items-center pb-4 hover:opacity-90">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="sidebar-cards-imgs"
                  />
                )}
                <div>
                  {post.categories?.nodes?.[0]?.name && (
                    <span className="sidebar-cards-tags">
                      {post.categories.nodes[0].name}
                    </span>
                  )}
                  <h3 className="sidebar-cards-headings line-clamp-2">
                    {post.title}
                  </h3>
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
                    {new Date(post.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
