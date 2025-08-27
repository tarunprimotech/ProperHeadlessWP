// app/Blogs/page.tsx
import client from '@/lib/apolloClient';
import { gql } from '@apollo/client';
import Link from 'next/link';

export const revalidate = 10;

const GET_PUBLISHED_POSTS = gql`
  query GetAllPublishedPosts {
    posts(where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
  }
`;

type BlogPostNode = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
};

type GetPublishedPostsResult = {
  posts: {
    nodes: BlogPostNode[];
  };
};

export default async function BlogPage() {
  const { data } = await client.query<GetPublishedPostsResult>({
    query: GET_PUBLISHED_POSTS,
    fetchPolicy: 'no-cache',
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-white-600">
        Blog Posts
      </h1>

      {/* Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.nodes.map((post: BlogPostNode) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                <Link
                  href={`/${post.slug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <div
                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
            <div className="mt-5">
              <Link
                href={`/${post.slug}`}
                className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
