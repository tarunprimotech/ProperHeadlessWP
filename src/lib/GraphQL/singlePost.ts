import { gql } from '@apollo/client';

export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
      template {
        __typename
        ... on Template_ForNextJs {
          templateName
        }
      }
      forNextJsFields {
        blogHeading
        featuredImg
      }
    }
  }
`;

