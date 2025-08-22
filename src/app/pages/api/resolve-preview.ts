import { gql } from '@apollo/client';
import client from '@/lib/apolloClient';

export default async function handler(req, res) {
  const { postId } = req.query;

  if (!postId) {
    return res.status(400).json({ error: 'Missing postId' });
  }

  const GET_POST_BY_ID = gql`
    query GetPostByID($id: ID!) {
      post(id: $id, idType: DATABASE_ID, asPreview: true) {
        slug
        status
      }
    }
  `;

  try {
    const { data } = await client.query({
      query: GET_POST_BY_ID,
      variables: { id: postId },
      fetchPolicy: 'no-cache',
    });

    const post = data?.post;

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.status(200).json({ slug: post.slug });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
