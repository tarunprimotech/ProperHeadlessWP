import { gql } from "@apollo/client";

export const GET_PROJECT_SLIDES = gql` 
  query GetProjectSlides {
    projectSlides {
      nodes {
        title
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        projectSliderField {
          projectLink
        }
      }
    }
  }
`;
