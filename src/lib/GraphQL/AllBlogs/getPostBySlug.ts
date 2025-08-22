import { gql } from '@apollo/client';

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!, $asPreview: Boolean = false) {
    post(id: $slug, idType: SLUG, asPreview: $asPreview) {
      title
      content
      status
    }
  }
`;
