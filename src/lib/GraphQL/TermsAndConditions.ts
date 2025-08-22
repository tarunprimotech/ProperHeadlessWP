// lib/queries/getSEOData.ts 
import { gql } from "@apollo/client";
 
export const GET_Terms_DATA = gql`
 query GetPageData {
    page(id: 446, idType: DATABASE_ID) {
      termsAndConditions {
        pageHeading
        pageContent
      }      
  }  
}
`;
