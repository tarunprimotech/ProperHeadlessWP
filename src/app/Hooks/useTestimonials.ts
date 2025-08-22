import { useState, useEffect } from "react";
import client from "@/lib/apolloClient";
import { GET_TESTIMONIALS } from "@/lib/GraphQL/TestimonialsQuery";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({ query: GET_TESTIMONIALS });
        setTestimonials(data?.testimonials?.nodes || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { testimonials, isLoading };
};
