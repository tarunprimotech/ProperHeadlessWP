import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import BlogContent from "@/app/components/BlogContent";
import Link from "next/link";

// ✅ Query for single post with featured image + categories
const GET_NODE_BY_URI = gql`
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ... on Post {
        id
        title
        content
        date
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

// ✅ Query for related posts
const GET_RELATED_POSTS = gql`
  query GetRelatedPosts($categorySlug: String!, $excludeId: ID!) {
    posts(
      where: { categoryName: $categorySlug, notIn: [$excludeId] }
      first: 3
    ) {
      nodes {
        id
        title
        date
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

// ✅ Query for latest 3 published posts with categories
const GET_LATEST_POSTS = gql`
  query GetLatestPosts {
    posts(
      first: 4
      where: { orderby: { field: DATE, order: DESC }, status: PUBLISH }
    ) {
      nodes {
        id
        title
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

// ✅ Function to format date as "10 AUGUST, 2025"
const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("en-GB", { month: "long" }).toUpperCase();
  const year = d.getFullYear();
  return `${day} ${month}, ${year}`;
};

export default async function SingleNode({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const uri = `/${slug}/`;

  // ✅ Fetch single post
  const { data } = await client.query({
    query: GET_NODE_BY_URI,
    variables: { uri },
    fetchPolicy: "no-cache",
  });

  const node = data?.nodeByUri;

  if (!node) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <p>Not found</p>
      </main>
    );
  }

  // ✅ Fetch related posts if this is a post
  let relatedPosts: any[] = [];
  if (node.__typename === "Post" && node.categories?.nodes?.length > 0) {
    const categorySlug = node.categories.nodes[0].slug;
    const related = await client.query({
      query: GET_RELATED_POSTS,
      variables: { categorySlug, excludeId: node.id },
      fetchPolicy: "no-cache",
    });

    relatedPosts = related.data?.posts?.nodes || [];
  }

  // ✅ Fetch latest posts
  const latestData = await client.query({
    query: GET_LATEST_POSTS,
    fetchPolicy: "no-cache",
  });
  const latestPosts = latestData.data?.posts?.nodes || [];

  return (
    <main className="text-white">
      {/* Featured Image + Title Overlay */}
      <div className="blog-featured-section">
        {node.__typename === "Post" && node.featuredImage?.node?.sourceUrl ? (
          <img
            src={node.featuredImage.node.sourceUrl}
            alt={node.title}
            className="blog-featured-img"
          />
        ) : (
          <div className="blog-featured-img placeholder" />
        )}

        {/* Title Overlay */}
        <div className="blog-featured-overlay">
          <h1 className="blog-featured-title">{node.title}</h1>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-[1280px] mx-auto px-[30px] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: Blog Content */}
          <div className="lg:col-span-8 md:pr-10 lg:pr-[80px]">
            {node.__typename === "Post" && (
              <>
                {/* ✅ Published Date + Category */}
                <div className="flex items-center mb-6 blog-meta">
                  {/* Published Date with clock + border */}
                  <div className="blog-date flex items-center border border-[#FFFFFF33] px-3 py-1 rounded text-[18px] leading-[22px] font-[400] text-[#FFFFFF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                      />
                    </svg>
                    {formatDate(node.date)}
                  </div>

                  {/* Category */}
                  {node.categories?.nodes?.length > 0 && (
                    <span className="blog-category ml-[24px] text-[18px] leading-[22px] font-[500] font-[Poppins] bg-[#E98305] text-[#070707] px-3 py-1 rounded">
                      {node.categories.nodes[0].name}
                    </span>
                  )}
                </div>

                {/* Blog Body with Toggle */}
                <BlogContent content={node.content || ""} previewWords={200} />
              </>
            )}
          </div>

          {/* RIGHT: Related Articles + Newsletter */}
          <aside className="lg:col-span-4">
            {/* Related Articles Title */}
            <h3 className="font-[Poppins] font-bold text-[22px] leading-[26.4px] text-[#FFFFFF] mb-6">
              Related Articles
            </h3>

            {relatedPosts.length > 0 ? (
              <ul className="space-y-6 mb-10">
                {relatedPosts.map((post) => (
                  <li key={post.id} className="flex items-start space-x-4">
                    {post.featuredImage?.node?.sourceUrl ? (
                      <img
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        className="w-[110px] h-[88px] object-cover rounded-[6px] flex-shrink-0"
                      />
                    ) : (
                      <div className="w-[110px] h-[88px] bg-gray-700 rounded-[6px] flex-shrink-0" />
                    )}

                    <div className="flex flex-col">
                      {/* Title */}
                      <Link
                        href={post.uri}
                        className="font-medium text-white hover:text-yellow-400 block"
                      >
                        {post.title}
                      </Link>

                      {/* Date with Calendar Icon */}
                      <p
                        className="pt-2 text-white flex items-center gap-2"
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          fontSize: "12px",
                          lineHeight: "100%",
                          letterSpacing: "0.52px",
                          textTransform: "uppercase",
                        }}
                      >
                        <svg
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_5347_9578)">
                            <path
                              d="M14.1856 1.22667H12.7456V0.48C12.7456 0.337777 12.7012 0.222221 12.6123 0.133333C12.5234 0.0444441 12.4078 0 12.2656 0C12.1234 0 12.0078 0.0444441 11.919 0.133333C11.8301 0.222221 11.7856 0.337777 11.7856 0.48V1.22667H4.74563V0.48C4.74563 0.337777 4.70118 0.222221 4.61229 0.133333C4.5234 0.0444441 4.40785 0 4.26562 0C4.1234 0 4.00785 0.0444441 3.91896 0.133333C3.83007 0.222221 3.78562 0.337777 3.78562 0.48V1.22667H2.34563C1.77674 1.22667 1.28785 1.43111 0.878958 1.84C0.470069 2.24889 0.265625 2.73778 0.265625 3.30667V13.92C0.265625 14.4889 0.470069 14.9778 0.878958 15.3867C1.28785 15.7956 1.77674 16 2.34563 16H14.1856C14.7545 16 15.2434 15.7956 15.6523 15.3867C16.0612 14.9778 16.2656 14.4889 16.2656 13.92V3.30667C16.2656 2.73778 16.0612 2.24889 15.6523 1.84C15.2434 1.43111 14.7545 1.22667 14.1856 1.22667ZM2.34563 2.24H3.78562V2.77333C3.78562 2.88 3.83007 2.98667 3.91896 3.09333C4.00785 3.2 4.1234 3.25333 4.26562 3.25333C4.40785 3.25333 4.5234 3.2 4.61229 3.09333C4.70118 2.98667 4.74563 2.88 4.74563 2.77333V2.24H11.7856V2.77333C11.7856 2.88 11.8301 2.98667 11.919 3.09333C12.0078 3.2 12.1234 3.25333 12.2656 3.25333C12.4078 3.25333 12.5234 3.2 12.6123 3.09333C12.7012 2.98667 12.7456 2.88 12.7456 2.77333V2.24H14.1856C14.5056 2.24 14.7634 2.34667 14.959 2.56C15.1545 2.77333 15.2523 3.02222 15.2523 3.30667V4.48H1.27896V3.30667C1.27896 3.02222 1.37674 2.77333 1.57229 2.56C1.76785 2.34667 2.02562 2.24 2.34563 2.24ZM14.1856 14.9867H2.34563C2.02562 14.9867 1.76785 14.8889 1.57229 14.6933C1.37674 14.4978 1.27896 14.24 1.27896 13.92V5.49333H15.2523V13.92C15.2523 14.24 15.1545 14.4978 14.959 14.6933C14.7634 14.8889 14.5056 14.9867 14.1856 14.9867Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5347_9578">
                              <rect
                                width="16.53"
                                height="16"
                                fill="white"
                                transform="matrix(1 0 0 -1 0 16)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        {formatDate(post.date)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 text-sm mb-10">
                👉 No related posts found in this category.
              </p>
            )}

            {/* Newsletter Heading */}
            <h3 className="font-[Poppins] font-bold text-[22px] leading-[26.4px] text-[#FFFFFF] mb-6">
              Join Our Newsletter
            </h3>
          </aside>
        </div>
      </div>

      {/* ✅ Explore the Latest Section */}
      <div className="max-w-[1280px] mx-auto px-[30px] py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="explore-header font-[Poppins] font-bold text-[44px] leading-[56px] capitalize">
            Explore the <span className="yllo-txt">Latest</span>
          </h2>

          <Link
            href="/blog"
            className="explore-viewall-btn ml-auto inline-flex items-center justify-center rounded-md transition no-underline"
            style={{
              width: "170px",
              height: "63px",
              gap: "10px",
              padding: "18px 24px",
              borderRadius: "6px",
              border: "1px solid #F08705",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "-3%",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            View All
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.25 0.25L16.5 0.25C16.6989 0.25 16.8897 0.329018 17.0303 0.46967C17.171 0.610322 17.25 0.801088 17.25 1V12.25C17.25 12.6642 16.9142 13 16.5 13C16.0858 13 15.75 12.6642 15.75 12.25V2.81066L2.03033 16.5303C1.73744 16.8232 1.26256 16.8232 0.96967 16.5303C0.676777 16.2374 0.676777 15.7626 0.96967 15.4697L14.6893 1.75L5.25 1.75C4.83579 1.75 4.5 1.41421 4.5 1C4.5 0.585787 4.83579 0.25 5.25 0.25Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="explore-grid">
          {latestPosts
            .filter((post: any) => post.id !== node.id)
            .map((post: any) => (
              <div key={post.id} className="explore-card">
                {/* Post Image */}
                {post.featuredImage?.node?.sourceUrl ? (
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="explore-img"
                  />
                ) : (
                  <div className="explore-img placeholder" />
                )}

                <div className="explore-card-body">
                  {/* Post Title */}
                  <h3 className="explore-post-title">
                    {post.title
                      .split(" ")
                      .slice(0, 5)
                      .join(" ") +
                      (post.title.split(" ").length > 5 ? "..." : "")}
                  </h3>

                  {/* Category */}
                  {post.categories?.nodes?.length > 0 && (
                    <p className="explore-category">
                      {post.categories.nodes[0].name}
                    </p>
                  )}

                  {/* Read More Button */}
                  <Link
                    href={`/${post.uri.replace(/^\/|\/$/g, "")}`}
                    className="explore-read-btn"
                  >
                    Read More
                    <span className="ml-2 inline-flex">
                      <svg
                        width="16.5"
                        height="16.5"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.2426 12.5L12.4697 18.2729C12.1768 18.5658 12.1768 19.0406 12.4697 19.3335C12.7626 19.6264 13.2374 19.6264 13.5303 19.3335L20.5303 12.3335C20.8232 12.0406 20.8232 11.5658 20.5303 11.2729L13.5303 4.27285C13.2374 3.97996 12.7626 3.97996 12.4697 4.27285C12.1768 4.56574 12.1768 5.04061 12.4697 5.3335L18.2426 11.1064L3 11.1064C2.58579 11.1064 2.25 11.4422 2.25 11.8564C2.25 12.2706 2.58579 12.6064 3 12.6064L18.2426 12.6064L18.2426 12.5Z"
                          fill="white"
                        /> */}
                  <path
                    fillRule="evenodd"
                     clipRule="evenodd"
                     d="M8.25 4.25L19.5 4.25C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V16.25C20.25 16.6642 19.9142 17 19.5 17C19.0858 17 18.75 16.6642 18.75 16.25V6.81066L5.03033 20.5303C4.73744 20.8232 4.26256 20.8232 3.96967 20.5303C3.67678 20.2374 3.67678 19.7626 3.96967 19.4697L17.6893 5.75L8.25 5.75C7.83579 5.75 7.5 5.41421 7.5 5C7.5 4.58579 7.83579 4.25 8.25 4.25Z"
                     fill="#E98305"
                  />					
						
						
						
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}


