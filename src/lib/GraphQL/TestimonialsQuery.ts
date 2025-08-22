import { gql } from "@apollo/client";

export const GET_TESTIMONIALS = gql`
  query GetTestimonials {
    testimonials {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
