
import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_Ecommerce_DATA } from "@/lib/GraphQL/CaseStudyPages/ImprovingEcommerce";

export const useEcommerceData = () => {
  const [ecommerceData, setEcommerceData] = useState<{
    ecommerce: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEcommerceData = async () => {
      try {
        const { data } = await client.query({ query: GET_Ecommerce_DATA });
        setEcommerceData({
          ecommerce: data?.page?.improvingEcommerce || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEcommerceData();
  }, []);

  return { ecommerceData, isLoading };
};
