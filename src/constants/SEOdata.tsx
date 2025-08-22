// constants/seo.tsx
import { useQuery, gql } from "@apollo/client";

// This GraphQL query fetches dynamic SEO fallback data from a custom post type
const GET_DYNAMIC_SEO_FALLBACK = gql`
  query GetGlobalSEO($slug: String!) {
    seoGlobals(where: { name: $slug }) {
      nodes {
        seoTitle
        seoDescription
        seoCanonical
        seoImage {
          sourceUrl
        }
      }
    }
  }
`;

type UseSEODataProps = {
  id: number;
  fallbackSlug: string; // slug to fetch dynamic fallback SEO data
};

export const useSEOData = ({ id, fallbackSlug }: UseSEODataProps) => {
  const { data: pageData } = useQuery(
    gql`
      query GetSEOData($id: ID!) {
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
    `,
    {
      variables: { id },
    }
  );

  const { data: fallbackData } = useQuery(GET_DYNAMIC_SEO_FALLBACK, {
    variables: { slug: fallbackSlug },
  });

  const seo = pageData?.page?.seo;
  const fallback = fallbackData?.seoGlobals?.nodes?.[0];

  return {
    title: seo?.title || fallback?.seoTitle || "Primotech",
    description: seo?.metaDesc || fallback?.seoDescription || "",
    canonical: seo?.canonical || fallback?.seoCanonical || "",
    image: fallback?.seoImage?.sourceUrl || "",
    noindex: seo?.metaRobotsNoindex,
    nofollow: seo?.metaRobotsNofollow,
  };
};
