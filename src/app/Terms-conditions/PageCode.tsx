'use client'; // If using App Router and animations or interactions require client-side rendering

// import Loader from "@/constants/loader";
// import Image from 'next/image';
import React from 'react';
// import MESSAGES from "@/constants/message_Constants";
import { useTermsData } from "@/app/Hooks/TermsandConditionsData";

const HealthCare = () => {

    const { TandCData, isLoading } = useTermsData();
 
  return (

    <div className="container TermsandConditions">
      <div className="grey-container">
      
        <h1 className="heading-txt text-center"
                  dangerouslySetInnerHTML={{
                    __html: TandCData?.TermsConditions?.pageHeading || `Terms and Conditions`,
                  }}
        />
        <div className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: TandCData?.TermsConditions?.pageContent || `<div class="loader"></div>`,
                  }}
        />
        
      </div>
    </div>
  );
};
 
export default HealthCare;
