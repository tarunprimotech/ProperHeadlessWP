import { gql } from "@apollo/client";

export const GET_HOMEPAGE = gql`
  query GetHomepageSections {
    page(id: "26", idType: DATABASE_ID) {
      
    slug
      seo {
        title
        metaDesc
        canonical
        metaRobotsNoindex
        metaRobotsNofollow
        # metaRobotsAdvanced
        # focusKeyword
        breadcrumbs {
          text
          url
        }
      }
    
    homepage {
        sec1 {
          heading
          animationNames
          btnLink {
            url
            title
            target
          }
        }

        underHeroSection {
          headingWhite
          headingyello
          subHeading
        }

        leftImageSec {
          leftPhoto {
            node {
              id
              sourceUrl
              altText
            }
          }
          headingTextWhite
          headingTextYellow
          description
          buttonLink {
            url
            title
            target
          }
        }

        tabSection {
          tabHeading1
          tabHeading2
          tabHeading3 
          tabHeading4
          tabDescription1 
          tabDescription2
          tabDescription3
          tabDescription4
        }

        rightImageSection {
          rightImage {
            node {
              id
              sourceUrl
              altText
            }
          }
          headingTextWhite
          headingTextYellow
          subHeading
          description
          buttonLink {
            url
            title
            target
          }
        }

        horizontalScroll {
          slide1 {
            heading
            slideContent
            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          slide2 {
            heading
            slideContent
            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          slide3 {
            heading
            slideContent
            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          slide4 {
            heading
            slideContent
            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
          slide5 {
            heading
            slideContent
            image {
              node {
                id
                sourceUrl
                altText
              }
            }
          }
        }

        doubleSection {
          box1 {
            heading
            addImage{
              node {
                id
                sourceUrl
                altText
              }
            }
            description
          }
          box2 {
            heading
            addImage{
              node {
                id
                sourceUrl
                altText
              }
            }
            description
          }
        }

        partnerSection {
          sec1 {
            iconImage {
              node {
                sourceUrl
              }
            }
            heading
            description
          }
          sec2 {
            iconImage {
              node {
                sourceUrl
              }
            }  
            heading
            description
          }
          sec3 {
            iconImage {
              node {
                sourceUrl
              }
            }
            heading
            description
          }
        }
      }
    }
  }
`;
