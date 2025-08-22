
import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_PRIVACY_DATA } from "@/lib/GraphQL/privacyPolicy";

export const usePrivacyPolicyData = () => {
  const [PrivacyData, setPrivacyData] = useState<{
    PrivacyPolicy: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacyData = async () => {
      try {
        const { data } = await client.query({ query: GET_PRIVACY_DATA });
        setPrivacyData({
            PrivacyPolicy: data?.page?.privacyPolicy || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrivacyData();
  }, []);

  return { PrivacyData, isLoading };
};
