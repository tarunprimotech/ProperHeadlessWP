"use client"; // Add this directive to mark the file as a client component

import Image from 'next/image';
import React from "react";
import DefaultImg from "@/assets/images/default.png"; // Default image path
// import { useEffect } from "react";
import { useEffect, useState } from "react";
// Extend the Window interface to include particlesJS
declare global {
  interface Window {
    particlesJS: (tagId: string, options: object) => void;
  }
} 


import Loader from "@/constants/loader";  
import VisionImg from "@/assets/images/vision.png";
// import Head from "next/head";
import Link from "next/link";
// import client from "@/lib/apolloClient";
// import { GET_HOMEPAGE } from "@/lib/GraphQL/HomepageQueries";
import TabSection from "@/app/HomePageSections/TabSection";
// import TabSection from "./HomePageSections/TabSection";
import HorizontalScroll from "@/app/HomePageSections/HorizontalScroll";
import HorizontalScrollMobile from "@/app/HomePageSections/HorizontalScrollMobile";
import LogoSlider from "@/app/HomePageSections/LogoSlider";
import TestimonialSlider from "@/app/HomePageSections/TestimonialSlider";
import ProjectsSlider from "@/app/HomePageSections/ProjectsSlider";
import PartnerSection from "@/app/HomePageSections/PartnerSection";
// import MESSAGES from "@/constants/message_Constants";
import { animation } from "@/functions/Banner";
import { useHomepageData } from "@/app/Hooks/useHomePageData";
import { Form } from 'react-hook-form';
// import FormSection from "@/app/components/FormSection";
// import ScrollToTopOnRefresh from '@/app/Hooks/scrollToTop';

// import { metadata } from '@/app/SEO/metadata';



const Home = () => {

  
  const { homepageData, isLoading } = useHomepageData();
  // const { homepageData } = useHomepageData();

  // if (!homepageData) return <p>Loading...</p>;

  useEffect(() => {
    animation();
  }, []); // Empty dependency array ensures this runs only once

  return (
    
    <>

    <div>
      <div className="container justify-content-start banner-row particle-animation lg:d-flex">
        <div className="col-12 inner_colum-bg">
          <div id="particles-js"></div>
          <div className="inner_left_content">
            <p className="envision-a-limitless text-center">
              {/* Envision a limitless world with */}
                 {/* <Loader /> */}
                {homepageData?.homepage?.sec1?.heading || "Envision a limitless world with"}
            </p>
            <main className="container1">
              {/* <section
                className="animation"
                dangerouslySetInnerHTML={{
                  __html: homepageData?.homepage?.sec1?.animationNames || `<div className="loader"></div>`,
                }}
              /> */}
              {homepageData?.homepage?.sec1?.animationNames ? (
                <div
                  className="animation"
                  dangerouslySetInnerHTML={{
                    __html: homepageData?.homepage?.sec1?.animationNames,
                  }}
                />
              ) : (
                <div className="animation">
                  <div className="first bg_yellow">AI-Led Digital Transformation</div>
                  <div className="second bg_yellow">Generative (Computational) Design</div>
                  <div className="third bg_yellow">Personalized Data Insights</div>
                  <div className="fourth bg_yellow">Next-Gen Robotics</div>
                  <div className="fifth bg_yellow">Intelligent Automation</div>
                  <div className="sixth bg_yellow">Deep Learning Models</div>
                </div>
              )}
            </main>
            <div className="connect-background-parent-banner">
              <Link
                href={homepageData?.homepage?.sec1?.btnLink?.url || "#"}
                className="btn btn-warning lets-connect-banner"
              >
                Let’s Talk
              </Link>
            </div>
            <div className="wrapper"></div>
          </div>
        </div>
      </div>

      <div className="container mt-30 mb-30">
        <div className="discover-power">
          <h1>
            {homepageData?.homepage?.underHeroSection?.headingWhite || `Discover the power of next-gen artificial intelligence with `}
            {/* <br /> */}
            <span className="yllo-txt">
              {homepageData?.homepage?.underHeroSection?.headingyello || `PRIMOTECH AI`}
            </span>
          </h1>
          <p>{homepageData?.homepage?.underHeroSection?.subHeading || `Accelerate and adapt with our innovative AI-led digital infrastructure and transform your business for exponential growth.`}</p>
        </div>
      </div>

      <div id="vision" className="container">
        <div className="row align-items-center transform-sec">
          <div className="col-sm-12 col-md-4 ">
            <Image 
              className="img-fluid"
              src={
                homepageData?.homepage?.leftImageSec?.leftPhoto?.node?.sourceUrl || VisionImg
              }
              alt="Vision"
              width={500}
              height={500}
            />
          </div>
          <div className="col-sm-12 col-md-8">
            <h2 className="text-white heading-txt fnt-700">
              {homepageData?.homepage?.leftImageSec?.headingTextWhite || `Transforming Vision into`}
              <br />
              <span className="yllo-txt">
                {homepageData?.homepage?.leftImageSec?.headingTextYellow ||
                  `Intelligent Realities`}
              </span>
            </h2>
            <p className="grey-txt fnt-16 mb-4">
              {homepageData?.homepage?.leftImageSec?.description || `We envision revolutionizing industries by giving them the transformative power of AI. Our vision is not just about us but about all of us. We aim to create a world with limitless possibilities where you can seamlessly integrate AI into everyday operations. Our commitment is to lead the way in AI development while fostering a future where intelligent systems empower enterprises and people to achieve their maximum potential.`}
            </p>
            <Link
              href={homepageData?.homepage?.leftImageSec?.buttonLink?.url || "#"}
              className="theme-btn btn text-white mt-3"
            >
              {/* <a className="theme-btn btn text-white mt-3"> */}
              Let’s Connect
              {/* </a> */}
            </Link>
          </div>
        </div>
      </div>

      <TabSection />

      <section id="support_main_sec" className="support pb-5 pt-5 px-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-7">
              <h4 className="text-white heading-txt fnt-700">
                {homepageData?.homepage?.rightImageSection?.headingTextWhite ||
                  <Loader />}
                <span className="yllo-txt">
                  {" "}
                  {homepageData?.homepage?.rightImageSection?.headingTextYellow ||
                    <Loader />}
                </span>
              </h4>
              <p className="sep-cont">
                {homepageData?.homepage?.rightImageSection?.subHeading || <Loader />}
              </p>
              

              {homepageData?.homepage?.rightImageSection?.description ? (
                <p
                  className="grey-txt fnt-16"
                  dangerouslySetInnerHTML={{
                    __html: homepageData.homepage.rightImageSection.description,
                  }}
                />
              ) : null}

              <Link
                href={homepageData?.homepage?.rightImageSection?.buttonLink?.url || "#"}
                className="btn theme-btn white-txt"
              >
                {/* <a className="btn theme-btn white-txt"> */}
                Let’s Connect
                {/* </a> */}
              </Link>
            </div>
            <div className="col-sm-12 col-md-5 custom_interact">
              <Image 
                className="img-fluid"
                // src="/images/adapt.png"
                src={
                  homepageData?.homepage?.rightImageSection?.rightImage?.node?.sourceUrl || DefaultImg
                }
                alt="Adapt New"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>


      {/* <div className="container horizontalScrollHead">
        <div className="discover-power">
          <h1>AI Solutions That Make All the <span className="yllo-txt">Difference</span>
          </h1>
          <p>
            We specialize in providing a comprehensive suite of bespoke AI-driven solutions.
          </p>
        </div>
      </div> */}
      <div className="container-fixed desktop-show mobile-ai-solution-desk">
        <HorizontalScroll />
      </div>

      <div className="mobile-show container mt-50 mobile-ai-solution">
        <HorizontalScrollMobile />
      </div>

      <LogoSlider />

      <div className="testimonial-sec mt-30">
        <div className="container">
          <div className="row mt-30">
            <div className="col-sm-12 col-md-12">
              <h4 className="heading-txt fnt-700 text-white">
                What Our <span className="yllo-txt">Clients</span> Say
              </h4>
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </div>

      <div className="background-img-sec">
        <div className="triple_p container">
          <div className='col-md-12'>
            <h3 className='text-white heading-txt fnt-700 text-center'>
              Private, Personalized, and <span className='yllo-txt'>Powerful</span>
            </h3>
            <h4 className='text-white fnt-700 text-center'>
              Build exceptional customer frontlines, high-performing teams, and beloved AI products with our help.
            </h4>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className='gry-sec'>
              <h6>{homepageData?.homepage?.doubleSection?.box1?.heading || <Loader />}</h6>
              <Image 
                className="img-fluid"
                src={
                  homepageData?.homepage?.doubleSection?.box1?.addImage?.node?.sourceUrl || DefaultImg
                }
                alt=""
                width={500}
                height={500}
              />
              <p>
              {homepageData?.homepage?.doubleSection?.box1?.description || <Loader />}
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className='gry-sec'>
              <h6>{homepageData?.homepage?.doubleSection?.box2?.heading || <Loader />}</h6>
              <Image 
                className="img-fluid"
                src={
                  homepageData?.homepage?.doubleSection?.box2?.addImage?.node?.sourceUrl || DefaultImg
                }
                alt=""
                width={500}
                height={500}
              />
              <p>
              {homepageData?.homepage?.doubleSection?.box2?.description || <Loader />}
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div id="project" className="project-sec container mt-30 mb-30">
        <div className="col-md-7">
          <h3 className="text-white heading-txt fnt-700">
            Projects
          </h3>
          <p>
            PRIMOTECH AI has been one of the leading AI & ML Innovation Partner helping businesses of all sizes pivot towards AI-led digital transformation.
          </p>
        </div>
        <div className="col-md-5 btn-sec-right">
          {/* <a className="btn theme-btn white-txt" href="/projects">View all Projects</a> */}
          <Link
                href="/projects"
                className="btn theme-btn white-txt"
              >View all Projects</Link>
        </div>
      </div>

      <ProjectsSlider />

      <PartnerSection />

      {/* <FormSection /> */}

      {/* <h1>{homepageData?.homepage?.partnerSection?.sec1?.heading || <Loader />}</h1> */}

    </div>

    </>
  );
};

export default Home;
