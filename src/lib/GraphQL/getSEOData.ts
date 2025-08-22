// lib/queries/getSEOData.ts
import { gql } from "@apollo/client";

export const GET_SEO_DATA = gql`
  query HomepageSEOData($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      seo {
        title
        metaDesc
        canonical
        metaRobotsNoindex
        metaRobotsNofollow
      }
    }
  }
`;
