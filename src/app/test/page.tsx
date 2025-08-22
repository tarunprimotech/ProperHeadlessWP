import client from "@/lib/apolloClient";
import { GET_HOMEPAGE } from "@/lib/GraphQL/HomepageQueries";

const getHomepageData = async () => {
  try {
    const { data } = await client.query({ query: GET_HOMEPAGE });
    return data.page.homepage;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
};

export default async function HomePage() {
  const homepageData = await getHomepageData();

  return (
    <div>
      <h1>{homepageData?.sec1?.heading || "No Heading Found"}</h1>
      {homepageData.sec1.btnLink.url}
    </div>
  );
}
