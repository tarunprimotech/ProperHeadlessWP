
import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_Ott_DATA } from "@/lib/GraphQL/CaseStudyPages/ottPlatform";

export const useOttPlatformData = () => {
  const [OttPlatformData, setOttPlatformData] = useState<{
    ottPLatform: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOttPlatformData = async () => {
      try {
        const { data } = await client.query({ query: GET_Ott_DATA });
        setOttPlatformData({
          ottPLatform: data?.page?.ottPlatform || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOttPlatformData();
  }, []);

  return { OttPlatformData, isLoading };
};
