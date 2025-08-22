// app/page.tsx

import Projects from "@/app/projects/PageCode";
import { GET_SEO_DATA } from "@/lib/GraphQL/getSEOData";
import client from "@/lib/apolloClient";
import { Metadata } from "next";

// Force server to render this page dynamically on every request
export const dynamic = "force-dynamic";

// Define your page ID statically here
const PAGE_ID = 163;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await client.query({
      query: GET_SEO_DATA,
      variables: { id: PAGE_ID }, // ✅ Pass ID as variable
      fetchPolicy: "no-cache",
    });

    const seo = data?.page?.seo;

    return {
      title: seo?.title || "Default Title",
      description: seo?.metaDesc || "Default description",
      alternates: {
        canonical: seo?.canonical || undefined,
      },
      robots: {
        index: seo?.metaRobotsNoindex !== "no",
        follow: seo?.metaRobotsNofollow !== "no",
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "Fallback Title",
      description: "Fallback description",
    };
  }
}

export default function HelloPage() {
  return <Projects />;
}
