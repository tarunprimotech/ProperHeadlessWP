
import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_HP_DATA } from "@/lib/GraphQL/CaseStudyPages/healthcareProfessional";

export const useHealthCareData = () => {
  const [HealthData, setHealthDataData] = useState<{
    HealthCare: any;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHealthCareData = async () => {
      try {
        const { data } = await client.query({ query: GET_HP_DATA });
        setHealthDataData({
            HealthCare: data?.page?.healthcareProfessionals || null,
        });
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHealthCareData();
  }, []);

  return { HealthData, isLoading };
};
