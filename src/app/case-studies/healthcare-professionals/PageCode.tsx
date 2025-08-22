'use client'; // If using App Router and animations or interactions require client-side rendering

import Loader from "@/constants/loader";
import Image from 'next/image';
import React from 'react';
// import MESSAGES from "@/constants/message_Constants";
import { useHealthCareData } from "@/app/Hooks/CaseStudyPageHooks/HealthcareProfessional";

const HealthCare = () => {

    const { HealthData, isLoading } = useHealthCareData();
 
  return (
    <div className="ott-platform healthcare">
      <div className="banner" style={{ backgroundImage: `url(${HealthData?.HealthCare?.pageFields?.heroBanner?.banner?.node?.sourceUrl})` }}>
      {/* <div className="banner"> */}
      <h1 className="heading-txt fw-bold text-white"
                dangerouslySetInnerHTML={{
                  __html: HealthData?.HealthCare?.pageFields?.heroBanner?.bannerText || `<div class="loader"></div>`,
                }}
              />
      </div>

      <div className="mt-50 mb-50 container">
        <Image
          src={HealthData?.HealthCare?.pageFields?.poster?.node?.sourceUrl || "/images/3d-rendering-biorobots-concept 1.png"}

          alt="Healthcare Professionals"
          className="img-fluid m-auto"
          width={1200}
          height={600}
        />
      </div>

      <div className="container intro-sec text-center">
        <h2 className="heading-txt fw-bold yllo-txt mb-30">Introduction</h2>
        <p className="web grey-txt mb-50">
          {HealthData?.HealthCare?.pageFields?.introduction || <Loader />}
        </p>
      </div>

      <div className="container custom_border mb-30">
        <h2 className="heading-txt fw-bold mb-30 white-txt text-center">
          Project <span className="yllo-txt">Overview</span>
        </h2>
        <h4>1. Objective</h4>
        <p>
          {HealthData?.HealthCare?.pageFields?.projectOverview?.objective || <Loader />}
        </p>
        <h4>2. How It Works - Technology and Components</h4>
        <Image src={HealthData?.HealthCare?.pageFields?.projectOverview?.howItWorks?.node?.sourceUrl || "/images/Group (1).png"} alt="" className="project-overview_image" width={800} height={400} />
        {/* <Image src={HealthData?.HealthCare?.pageFields?.projectOverview?.objectivemob?.node?.sourceUrl || "/images/ott_mobile.png"} alt="" className="project-overview_image mob" width={400} height={800} /> */}
      </div>

      <div className="container">
        <h3 className="heading-txt white-txt fw-bold text-center systum_arc">System <span className="yllo-txt"> Architecture</span></h3>
        <Image
          // src="/images/rpa-concept-with-blurry-hand-touching-screen 1.png"
          src={HealthData?.HealthCare?.pageFields?.systemArchitecture?.bannerImage?.node?.sourceUrl || "/images/rpa-concept-with-blurry-hand-touching-screen 1.png"}
          alt="Healthcare Professionals"
          className="img-fluid mt-30 mb-30"
          width={1200}
          height={600}
        />
        <div className="row below-img mb-50">
          <div className="col-md-6"
              dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.systemArchitecture?.smallSec1 || `<div class="loader"></div>`,
              }}
          />
          <div className="col-md-6"
              dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.systemArchitecture?.smallSec2 || `<div class="loader"></div>`,
              }}
          />
        </div>
        <Image
          // src="/images/rpa-concept-with-blurry-hand-touching-screen 1.png"
          src={HealthData?.HealthCare?.pageFields?.systemArchitecture?.aiImage?.node?.sourceUrl || "/images/rpa-concept-with-blurry-hand-touching-screen 1.png"}
          alt="AI image"
          className="img-fluid mt-30 mb-30 m-auto"
          width={1200}
          height={600}
        />
      </div>

      <div className="container mt-50 animationSec">
        <h3 className="heading-txt white-txt fw-bold mb-30">Machine Learning <span className="yllo-txt">Model</span></h3>
        <div className=""
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.systemArchitecture?.mlModel || `<div class="loader"></div>`,
            }}
        />
      </div>

      <div className="container mb-50 mt-30">
        <div className="row image_machine_learning_sec pb-5">

        <div className="col-md-4 input-img">
            <Image
                src="/images/react-svgrepo-com 1 (1).png"
                alt="About Us Image"
                className="detail_machine_learning-image float-end rotate-up"
                width={100}
                height={100}
            />
          <div className="iner_machine_content"
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.threeBoxes?.smallSec1 || `<div class="loader"></div>`,
            }}
          />
        </div>

        <div className="col-md-4 input-img-two">
            <Image
                src="/images/react-svgrepo-com 1 (1).png"
                alt="About Us Image"
                className="detail_machine_learning-image float-end rotate-up"
                width={100}
                height={100}
            />
          <div className="iner_machine_content"
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.threeBoxes?.smallSec2 || `<div class="loader"></div>`,
            }}
          />
        </div>

        <div className="col-md-4 input-img-three">
            <Image
                src="/images/react-svgrepo-com 1 (1).png"
                alt="About Us Image"
                className="detail_machine_learning-image float-end rotate-up"
                width={100}
                height={100}
            />
          <div className="iner_machine_content"
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.threeBoxes?.smallSec3 || `<div class="loader"></div>`,
            }}
          />
        </div>

        
        </div> 
        
      </div>

      <div className="container mt-50 animationSec">
        <h3 className="heading-txt white-txt fw-bold mb-30">Web <span className="yllo-txt">Application</span></h3>
        <div className=""
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.webApplication || `<div class="loader"></div>`,
            }}
          />
      </div>

      <div className="container mt-50 animationSec">
        <h3 className="heading-txt white-txt fw-bold mb-30">User Feedback <span className="yllo-txt">Loop</span></h3>
        <div className=""
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.userFeedbackLoop || `<div class="loader"></div>`,
            }}
          />
      </div>

      <div className="container mt-50 animationSec">
        <h3 className="heading-txt white-txt fw-bold mb-30">Implementation <span className="yllo-txt">Details</span></h3>
        <div className=""
            dangerouslySetInnerHTML={{
                __html: HealthData?.HealthCare?.pageFields?.implementationDetails || `<div class="loader"></div>`,
            }}
          />
      </div>

      
      <div className="container px-5 mt-50 results_sec">
        <h3 className="heading-txt yllo-txt fw-bold mt-30 mb-50">Results</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: HealthData?.HealthCare?.pageFields?.results?.card1 || `<div class="loader"></div>`,
              }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: HealthData?.HealthCare?.pageFields?.results?.card2 || `<div class="loader"></div>`,
              }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: HealthData?.HealthCare?.pageFields?.results?.card3 || `<div class="loader"></div>`,
              }}
            />
          </div>
        </div>
      </div>


      <div className="container mt-50 mb-50 animationSec">
        <h3 className="heading-txt white-txt fw-bold mb-30">Conclusion</h3>
        <p
              dangerouslySetInnerHTML={{
                  __html: HealthData?.HealthCare?.pageFields?.conclusion || `<div class="loader"></div>`,
              }}
            />
      </div>
    </div>
  );
};
 
export default HealthCare;
