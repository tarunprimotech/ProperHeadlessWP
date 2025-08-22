
import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_Terms_DATA } from "@/lib/GraphQL/TermsAndConditions";

export const useTermsData = () => {
  const [TandCData, setTandCData] = useState<{
    TermsConditions: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTermsData = async () => {
      try {
        const { data } = await client.query({ query: GET_Terms_DATA });
        setTandCData({
            TermsConditions: data?.page?.termsAndConditions || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTermsData();
  }, []);

  return { TandCData, isLoading };
};
