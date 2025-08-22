import React from "react";
import Image from 'next/image';
import { useHomepageData } from "@/app/Hooks/useHomePageData";
import client from "@/lib/apolloClient";
import MESSAGES from "@/constants/message_Constants";

// Type for partner section items
interface PartnerItem {
  icon: string;
  title: string;
  description: string;
}

const PartnerSections: React.FC = () => {

  const { homepageData, isLoading } = useHomepageData();

  // Array of partner section items
  const partnerItems: PartnerItem[] = [
    {
      icon: homepageData?.homepage?.partnerSection?.sec1?.iconImage?.node?.sourceUrl || `<div class="loader"></div>`,
      title: homepageData?.homepage?.partnerSection?.sec1?.heading || `<div class="loader"></div>`,
      description: homepageData?.homepage?.partnerSection?.sec1?.description || `<div class="loader"></div>`,
    },
    {
      icon: homepageData?.homepage?.partnerSection?.sec2?.iconImage?.node?.sourceUrl || `<div class="loader"></div>`,
      title: homepageData?.homepage?.partnerSection?.sec2?.heading || `<div class="loader"></div>`,
      description: homepageData?.homepage?.partnerSection?.sec2?.description || `<div class="loader"></div>`,
    },
    {
      icon: homepageData?.homepage?.partnerSection?.sec3?.iconImage?.node?.sourceUrl || `<div class="loader"></div>`,
      title: homepageData?.homepage?.partnerSection?.sec3?.heading || `<div class="loader"></div>`,
      description: homepageData?.homepage?.partnerSection?.sec3?.description || `<div class="loader"></div>`,
    },
  ];

  return (
    <section className="partner py-5 px-2 mb-30">
      <h6 className="text-center text-white fw-bold heading-txt mb-50">
        How We <span className="yllo-txt">Partner</span>
      </h6>
      <div className="container three-sec">
        <div className="row">
          {partnerItems.map((item, index) => (
            <div key={index} className="col-sm-12 col-md-4 mb-30">
              <div className="inside-cont text-center">
                <div className="yllo-area">
                {item.icon && item.icon.trim().startsWith("http") && (
                    <Image 
                      src={item.icon} 
                      height={100}
                      width={100}
                      alt="Partner Icon"
                    />
                  )}

                  {item.title}
                  </div>
                <p className="grey-area">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSections;
