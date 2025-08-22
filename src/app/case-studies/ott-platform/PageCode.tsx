'use client'; // If using App Router and animations or interactions require client-side rendering

import Loader from "@/constants/loader";
import Image from 'next/image';
import React from 'react';
import MESSAGES from "@/constants/message_Constants";
import { useOttPlatformData } from "@/app/Hooks/CaseStudyPageHooks/OttPlatform";

const OttPlatform = () => {

    const { OttPlatformData, isLoading } = useOttPlatformData();
 
  return (
    <div className="ott-platform only">
      <div className="banner" style={{ backgroundImage: `url(${OttPlatformData?.ottPLatform?.pageFields?.heroBanner?.banner?.node?.sourceUrl})` }}>
      {/* <div className="banner"> */}
      <h1 className="heading-txt fw-bold text-white"
                dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.heroBanner?.bannerText || `<div class="loader"></div>`,
                }}
              />
      </div>

      <div className="mt-50 mb-50 container">
        <Image
          src={OttPlatformData?.ottPLatform?.pageFields?.poster?.node?.sourceUrl || "/images/3d-rendering-biorobots-concept 1.png"}

          alt="Healthcare Professionals"
          className="img-fluid m-auto"
          width={1200}
          height={600}
        />
      </div>

      <div className="container intro-sec text-center">
        <h2 className="heading-txt fw-bold yllo-txt mb-30">Introduction</h2>
        <p className="web grey-txt mb-50">
          {OttPlatformData?.ottPLatform?.pageFields?.introduction || <Loader />}
        </p>
      </div>

      <div className="container custom_border mb-30">
        <h2 className="heading-txt fw-bold mb-30 white-txt text-center">
          Project <span className="yllo-txt">Overview</span>
        </h2>
        <h4>1. Background</h4>
        <p>
          {OttPlatformData?.ottPLatform?.pageFields?.projectOverview?.background || <Loader />}
        </p>
        <h4>2. Objective</h4>
        <Image src={OttPlatformData?.ottPLatform?.pageFields?.projectOverview?.objectivedesk?.node?.sourceUrl || "/images/Group (1).png"} alt="" className="project-overview_image desk " width={800} height={400} />
        <Image src={OttPlatformData?.ottPLatform?.pageFields?.projectOverview?.objectivemob?.node?.sourceUrl || "/images/ott_mobile.png"} alt="" className="project-overview_image mob" width={400} height={800} />
      </div>

      <div className="container px-5">
        <h3 className="heading-txt white-txt fw-bold text-center">Methodology</h3>
        <Image
          // src="/images/rpa-concept-with-blurry-hand-touching-screen 1.png"
          src={OttPlatformData?.ottPLatform?.pageFields?.methodology?.bannerImage?.node?.sourceUrl || "/images/rpa-concept-with-blurry-hand-touching-screen 1.png"}
          alt="Healthcare Professionals"
          className="img-fluid mt-30 mb-30"
          width={1200}
          height={600}
        />
        <div className="row below-img mb-50">
          <div className="col-md-6"
              dangerouslySetInnerHTML={{
                __html: OttPlatformData?.ottPLatform?.pageFields?.methodology?.smallSec1 || `<div class="loader"></div>`,
              }}
          />
          <div className="col-md-6"
              dangerouslySetInnerHTML={{
                __html: OttPlatformData?.ottPLatform?.pageFields?.methodology?.smallSec2 || `<div class="loader"></div>`,
              }}
          />
        </div>
      </div>

      <div className="container animationSec model-dev"
        dangerouslySetInnerHTML={{
            __html: OttPlatformData?.ottPLatform?.pageFields?.methodology?.modelDevelopment || `<div class="loader"></div>`,
        }}
      />

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
                __html: OttPlatformData?.ottPLatform?.pageFields?.threeBoxes?.smallSec1 || `<div class="loader"></div>`,
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
                __html: OttPlatformData?.ottPLatform?.pageFields?.threeBoxes?.smallSec2 || `<div class="loader"></div>`,
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
                __html: OttPlatformData?.ottPLatform?.pageFields?.threeBoxes?.smallSec3 || `<div class="loader"></div>`,
            }}
          />
        </div>

        
        </div> 
        
      </div>

      <div className="container mt-50 mb-50 animationSec evoandopti">
        <h3 className="heading-txt white-txt fw-bold mb-30">Evaluation and <span className="yllo-txt">Optimization</span></h3>
        <p>
          {OttPlatformData?.ottPLatform?.pageFields?.evaluationAndOptimization || <Loader />}
        </p>
      </div>

      
      <div className="container results-sec">
        <h3 className="heading-txt yllo-txt fw-bold mt-30 mb-50 px-5">Results</h3>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.results?.card1 || `<div class="loader"></div>`,
              }}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.results?.card2 || `<div class="loader"></div>`,
              }}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.results?.card3 || `<div class="loader"></div>`,
              }}
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card-sec"
              dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.results?.card4 || `<div class="loader"></div>`,
              }}
            />
          </div>
        </div>
      </div>


      <div className="container mt-50 mb-50 animationSec px-5">
        <h3 className="heading-txt white-txt fw-bold mb-30">Conclusion</h3>
        <p
              dangerouslySetInnerHTML={{
                  __html: OttPlatformData?.ottPLatform?.pageFields?.conclusion || `<div class="loader"></div>`,
              }}
            />
      </div>
    </div>
  );
};
 
export default OttPlatform;
