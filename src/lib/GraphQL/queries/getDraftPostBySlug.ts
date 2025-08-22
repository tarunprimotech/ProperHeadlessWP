// src/graphql/queries/getDraftPostBySlug.ts
import { gql } from '@apollo/client';

export const GET_DRAFT_POST_BY_SLUG = gql`
  query GetDraftPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      status
    }
  }
`;
