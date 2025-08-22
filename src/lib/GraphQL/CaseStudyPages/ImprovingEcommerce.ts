// lib/queries/getSEOData.ts
import { gql } from "@apollo/client";

export const GET_Ecommerce_DATA = gql`
  query GetPageData {
    page(id: 209, idType: DATABASE_ID) {
      improvingEcommerce {
        
        pageFields{
          
          heroBanner
          
          introduction
          
          projectOverview {
            background
            objectivedesk {
              node {
                sourceUrl
              }
            }
            objectivemob {
              node {
                sourceUrl
              }
            }
          }
          
          methodology {
            bannerImage {
              node {
                sourceUrl
              }
            }
            smallSec1
            smallSec2
            modelDevelopment
          }
          
          evaluationAndOptimization
          
          results {
            card1
            card2
            card3
            card4
            card5
          }
          
          conclusion
          
        }
        
        
        
      }
    }
  }
`;
