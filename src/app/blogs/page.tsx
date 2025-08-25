// app/Blogs/page.tsx
import client from '@/lib/apolloClient';
import { gql } from '@apollo/client';
import Link from 'next/link';

export const revalidate = 10;

const GET_DRAFT_POSTS = gql`
  query GetAllDraftPosts {
    posts(where: { status: DRAFT }) {
      nodes {
        id
        slug
        title
        excerpt
      }
    }
  }
`;

export default async function BlogPage() {
  const { data } = await client.query({
    query: GET_DRAFT_POSTS,
    fetchPolicy: 'no-cache',
  });

  type PostNode = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Draft Blog Posts</h1>
      {data.posts.nodes.map((post: PostNode) => (
        <div key={post.id} className="mb-4">
          <h2 className="text-xl font-semibold">
            <Link href={`/${post.slug}?preview=true`}>{post.title}</Link>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))}
    </div>
  );
}
