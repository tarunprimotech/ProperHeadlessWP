// src/lib/getDraftPostBySlug.ts
import client from '@/lib/apolloClient'; // your Apollo client file
import { GET_DRAFT_POST_BY_SLUG } from '@/lib/GraphQL/queries/getDraftPostBySlug';

export async function getDraftPostBySlug(slug: string) {
  try {
    const { data } = await client.query({
      query: GET_DRAFT_POST_BY_SLUG,
      variables: { slug },
      fetchPolicy: 'no-cache', // ensure it fetches the latest data
    });

    return data?.post ?? null;
  } catch (err) {
    console.error('Error fetching draft post:', err);
    return null;
  }
}
