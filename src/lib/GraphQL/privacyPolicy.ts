// lib/queries/getSEOData.ts 
import { gql } from "@apollo/client";
 
export const GET_PRIVACY_DATA = gql`
 query GetPageData {
    page(id: 429, idType: DATABASE_ID) {
      privacyPolicy {
        pageHeading
        pageContent
      }      
  }  
}
`;
