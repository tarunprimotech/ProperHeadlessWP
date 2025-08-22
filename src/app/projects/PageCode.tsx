"use client"; 

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useProjectSlides } from "@/app/Hooks/useProjectSlides"; // ✅ Check your path
// import MESSAGES from "@/constants/message_Constants";
import DefaultImg from "@/assets/images/default.png"; // Default image path
import Loader from "@/constants/loader";

const Projects = () => {
  const { projectSlides, isLoading } = useProjectSlides();

  if (isLoading) {
    return <Loader />;
  }

  if (!projectSlides || projectSlides.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <div className="Projects-cls">
      <div className="banner mb-50">
        <h1 className="heading-txt fw-bold text-white">Projects</h1>
      </div>

      <div className="container all-projects">
        <div className="row">
          {projectSlides.map((slide: any, index: number) => (
            <div className="col-sm-4 mt-3" key={index}>
              <div className="card card_view_project">
                {slide.featuredImage?.node?.sourceUrl && (
                  <Image
                    src={slide.featuredImage.node.sourceUrl || DefaultImg}
                    alt={slide.projectSliderField?.highlight || "Project Image"}
                    width={400}
                    height={300}
                    className="slammie_project img-fluid"
                  />
                )}
                <div className="card-body view_project_title">
                <h5
                  className="card-title"
                  dangerouslySetInnerHTML={{
                    __html: slide.excerpt || `<div class="loader"></div>`,
                  }}
                />

                  {slide.projectSliderField?.projectLink && (
                    <Link
                      href={slide.projectSliderField.projectLink}
                      className="btn text-white mt-3 py-2 px-3 button-connect"
                    >
                      Read more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
