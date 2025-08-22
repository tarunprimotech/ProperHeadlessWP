import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_PROJECT_SLIDES } from "@/lib/GraphQL/ProjectSliderQuery";

export const useProjectSlides = () => {
  const [projectSlides, setProjectSlides] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({ query: GET_PROJECT_SLIDES });
        setProjectSlides(data?.projectSlides?.nodes || []);
      } catch (error) {
        console.error("Error fetching project slides:", error);
      } finally {
        setIsLoading(false);
      } 
    };

    fetchData();
  }, []);

  return { projectSlides, isLoading };
};
