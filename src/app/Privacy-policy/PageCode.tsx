'use client'; // If using App Router and animations or interactions require client-side rendering

// import Loader from "@/constants/loader";
// import Image from 'next/image';
import React from 'react';
// import MESSAGES from "@/constants/message_Constants";
import { usePrivacyPolicyData } from "@/app/Hooks/PrivacyPolicyData";

const HealthCare = () => {

    const { PrivacyData, isLoading } = usePrivacyPolicyData();
 
  return (

    <div className="container PrivacyPolicy">
      <div className="grey-container">
      
        <h1 className="heading-txt text-center"
                  dangerouslySetInnerHTML={{
                    __html: PrivacyData?.PrivacyPolicy?.pageHeading || `Privacy Policy`,
                  }}
        />
        <div className="page-content"
                  dangerouslySetInnerHTML={{
                    __html: PrivacyData?.PrivacyPolicy?.pageContent || `<div class="loader"></div>`,
                  }}
        />
        
      </div>
    </div>
  );
};
 
export default HealthCare;
