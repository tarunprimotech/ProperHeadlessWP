'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

const PREVIEW_QUERY = gql`
  query GetPostById($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      title
      content
      status
    }
  }
`;

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('p');
  const preview = searchParams.get('preview') === 'true';
  const nonce = searchParams.get('preview_nonce');
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (postId && preview) {
      client.query({
        query: PREVIEW_QUERY,
        variables: { id: postId },
        context: {
          headers: {
            'X-WP-Nonce': nonce || '', // Send nonce from WordPress
          },
        },
        fetchPolicy: 'no-cache', // So it doesn't cache published only
      }).then(({ data }) => {
        setPost(data?.post);
      }).catch((error) => {
        console.error('Error loading preview:', error);
      });
    }
  }, [postId, preview, nonce]);

  if (!post) return <p>Loading draft post...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500">Status: {post.status}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}


