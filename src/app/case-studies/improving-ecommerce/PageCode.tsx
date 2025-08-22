"use client"; 

import DefaultImg from "@/assets/images/default.png"
import Loader from "@/constants/loader";
// pages/improve-ecommerce.tsx
import React from 'react';
import Image from 'next/image';
// import Head from 'next/head';
// import MESSAGES from "@/constants/message_Constants";
import { useEcommerceData } from "@/app/Hooks/CaseStudyPageHooks/ImproveEcommerse";

const ImproveEcommerce = () => {
// Fetching data using the custom hook

const { ecommerceData, isLoading } = useEcommerceData();

// 
  return (
    <>
      

      <div className="improve-ecommerce">

        <div className="banner">
          

            <h1 className="heading-txt fw-bold text-white"
                dangerouslySetInnerHTML={{
                  __html: ecommerceData?.ecommerce?.pageFields?.heroBanner || `<div class="loader"></div>`,
                }}
              />
            
        </div>

        <div className="mt-50 mb-50 container">
          <img src="/images/case_about_1.png" alt="" className="img-fluid m-auto mt-30" />
        </div>

        <div className="container intro-sec text-center mb-50">
          <h2 className="heading-txt fw-bold yllo-txt mb-30">Introduction</h2>
          <p className="web grey-txt mb-50">
            {ecommerceData?.ecommerce?.pageFields?.introduction || <Loader />}
          </p>
        </div>

        <div className="container custom_border mb-30">
          <h2 className="heading-txt fw-bold mb-30 white-txt text-center">Project <span className="yllo-txt">Overview</span></h2>
          <h4>1. Background</h4>
          <p>
            {ecommerceData?.ecommerce?.pageFields?.projectOverview?.background || <Loader />}
          </p>
          <h4>2. Objective</h4>
          
                      <Image 
                        className="project-overview_image desk"
                        src={
                          ecommerceData?.ecommerce?.pageFields?.projectOverview?.objectivedesk?.node?.sourceUrl || DefaultImg
                          // DefaultImg
                        }
                        alt="Project Overview"
                        width={2000}
                        height={800}
                      />
                      <Image 
                        className="project-overview_image mob"
                        src={
                          ecommerceData?.ecommerce?.pageFields?.projectOverview?.objectivemob?.node?.sourceUrl || DefaultImg
                        }
                        alt="Project Overview"
                        width={2000}
                        height={800}
                      />
        </div>

        <div className="container methodology-sec">
          <h3 className="heading-txt white-txt fw-bold text-center">Methodology</h3>
          {/* <img src="/images/standard_ img.png" alt="" className="img-fluid mt-30 mb-30" /> */}
          <Image 
            className="img-fluid mt-30 mb-30"
            src={
              ecommerceData?.ecommerce?.pageFields?.methodology?.bannerImage?.node?.sourceUrl || DefaultImg
            }
            alt="Project Overview"
            width={2000}
            height={800}
          />
          <div className="row below-img mb-50">
            <div className="col-md-6"
            dangerouslySetInnerHTML={{
              __html: ecommerceData?.ecommerce?.pageFields?.methodology?.smallSec1 || `<div class="loader"></div>`,
            }}
            />
              
            <div className="col-md-6"
            dangerouslySetInnerHTML={{
              __html: ecommerceData?.ecommerce?.pageFields?.methodology?.smallSec2 || `<div class="loader"></div>`,
            }}
            />
          </div>
        </div>

        <div className="container animationSec">
          <div className="col-md-12">
            <h3 className="heading-txt white-txt fw-bold mb-30">Model <span className="yllo-txt">Development</span></h3>
          </div>
          <div className="col-md-12"
            dangerouslySetInnerHTML={{
              __html: ecommerceData?.ecommerce?.pageFields?.methodology?.modelDevelopment || `<div class="loader"></div>`,
            }}
            />

        </div>

        <div className="container mt-50 animationSec">
          <h3 className="heading-txt white-txt fw-bold mb-30">Evaluation and <span className="yllo-txt">Optimization</span></h3>
          <p>
            {ecommerceData?.ecommerce?.pageFields?.evaluationAndOptimization || <Loader />}
          </p>
        </div>

        <div className="container results-sec mt-50">
          <h3 className="heading-txt yllo-txt fw-bold">Results</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="card-sec"
                dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.results?.card1 || `<div class="loader"></div>`,
              }}
              />
             
            </div>
            <div className="col-md-4">
            <div className="card-sec"
                dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.results?.card2 || `<div class="loader"></div>`,
              }}
              />
            </div>
            <div className="col-md-4">
            <div className="card-sec"
                dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.results?.card3 || `<div class="loader"></div>`,
              }}
              />
            </div>
          </div>

          <div className="row mt-30">
            <div className="col-md-6">
            <div className="card-sec"
                dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.results?.card4 || `<div class="loader"></div>`,
              }}
              />
            </div>
            <div className="col-md-6">
            <div className="card-sec"
                dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.results?.card5 || `<div class="loader"></div>`,
              }}
              />
            </div>
          </div>
        </div>

        <div className="container mt-50 mb-50 animationSec">
          <h3 className="heading-txt white-txt fw-bold mb-30">Conclusion</h3>
          <p dangerouslySetInnerHTML={{
                __html: ecommerceData?.ecommerce?.pageFields?.conclusion || `<div class="loader"></div>`,
              }}
              />
        </div>

      </div>
    </> 
  );
};

export default ImproveEcommerce;
