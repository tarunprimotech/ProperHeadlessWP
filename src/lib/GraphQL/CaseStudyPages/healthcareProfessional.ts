// lib/queries/getSEOData.ts 
import { gql } from "@apollo/client";
 
export const GET_HP_DATA = gql`
 query GetPageData {
    page(id: 301, idType: DATABASE_ID) {
      healthcareProfessionals {
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
          
          projectOverview{
            objective
            howItWorks {
              node {
                sourceUrl
              }
            }
          }
          
          systemArchitecture{
            bannerImage{
              node{
                sourceUrl
              }
            }
            smallSec1
            smallSec2
            aiImage{
              node{
                sourceUrl
              }
            }
            mlModel
          }
          
          threeBoxes{
            smallSec1
            smallSec2
            smallSec3
          }
          
          webApplication
          
          userFeedbackLoop
          
          implementationDetails
          
          results{
            card1
            card2
            card3
          }
          
          conclusion
          
      }
    }
  }
}
`;
