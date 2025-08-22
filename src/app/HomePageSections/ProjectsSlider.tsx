"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useProjectSlides } from "@/app/Hooks/useProjectSlides"; // ✅ Update path if needed
import DefaultImg from "@/assets/images/default.png"; // Default image path

const ProjectSlide = () => {
  const { projectSlides, isLoading } = useProjectSlides();

  if (isLoading) return <p>Loading project slides...</p>;

  if (!projectSlides || projectSlides.length === 0) return <p>No project slides available.</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="project-slide-section">
      <Slider {...settings}>
        {projectSlides.map((slide: any, index: number) => (
          <div key={index} className="row slide-item slide-layout-cls p-4">
            <div className="col-md-6">
              {slide.featuredImage?.node?.sourceUrl && (
                <Image
                  src={slide.featuredImage.node.sourceUrl || DefaultImg}
                  alt={slide.title || "Project"}
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover"
                />
              )}
            </div>
            <div className="col-md-6">
              {slide.title && (
                <h6
                  className="slide-content"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              )}
              {slide.content && (
                <p
                  className="slide-content"
                  dangerouslySetInnerHTML={{ __html: slide.content }}
                />
              )}
              {slide.projectSliderField?.projectLink && (
                <div>
                  <a
                    href={slide.projectSliderField.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn theme-btn white-txt"
                  >
                    Read More
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlide;
