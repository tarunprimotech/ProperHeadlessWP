// lib/queries/getSEOData.ts 
import { gql } from "@apollo/client";
 
export const GET_Ott_DATA = gql`
 query GetPageData {
    page(id: 275, idType: DATABASE_ID) {
      ottPlatform {
        
        pageFields{
          
          heroBanner {
            banner {
              node {
                sourceUrl
              }
            }
            bannerText
          }
          
          poster {
            node {
              sourceUrl
            }
          }
          
          introduction
          
          projectOverview {
            background
            objectivedesk{
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
          
          threeBoxes {
            smallSec1
            smallSec2
            smallSec3
          }
          
          evaluationAndOptimization
          
          results {
            card1
            card2
            card3
            card4
          }
          
          conclusion
          
        }
        
        
        
      }
    }
  }
`;
