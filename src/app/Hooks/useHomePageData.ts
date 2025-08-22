import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_HOMEPAGE } from "@/lib/GraphQL/HomepageQueries";

export const useHomepageData = () => {
  const [homepageData, setHomepageData] = useState<{
    homepage: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomepageData = async () => {
      try {
        const { data } = await client.query({ query: GET_HOMEPAGE });
        setHomepageData({
          homepage: data?.page?.homepage || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomepageData();
  }, []);

  return { homepageData, isLoading };
};
