import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // Import Next.js Image component
import DefaultImg from "@/assets/images/default.png"; // Default image path

const LogoSlider = () => {
  const logoImages1 = [
    "/images/lg-1.png", "/images/lg-2.png", "/images/lg-3.png",
    "/images/lg-4.png", "/images/lg-5.png", "/images/lg-6.png",
    "/images/lg-7.png", "/images/lg-8.png", "/images/lg-9.png",
    "/images/lg-10.png", "/images/lg-11.png",
  ];

  const logoImages2 = [
    "/images/lg-12.png", "/images/lg-13.png", "/images/lg-14.png",
    "/images/lg-15.png", "/images/lg-16.png", "/images/lg-17.png",
    "/images/lg-18.png", "/images/lg-19.png", "/images/lg-20.png",
    "/images/lg-21.png", "/images/lg-22.png", "/images/lg-23.png",
  ];

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: false,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 0, settings: { slidesToShow: 3 } },
    ],
  };

  const settingsRight = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: true,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 0, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div>
      {/* First Logo Slider (Left to Right) */}
      <section className="logo-part mt-30">
        {/* <h5 className="fw-bold text-white text-center">Our Partners</h5> */}
        <Slider {...settingsLeft}>
          {logoImages1.map((img, index) => (
            <div className="item" key={index}>
              <Image
                className="img-fluid"
                src={img || DefaultImg}
                alt={`Logo ${index + 1}`}
                width={150} // Set appropriate width
                height={150} // Set appropriate height
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Second Logo Slider (Right to Left) */}
      <section className="logo-part logo-slider-2 mb-30">
        {/* <h5 className="fw-bold text-white text-center">More Partners</h5> */}
        <Slider {...settingsRight}>
          {logoImages2.map((img, index) => (
            <div className="item" key={index}>
              <Image
                className="img-fluid"
                src={img || DefaultImg}
                alt={`Logo ${index + 12}`}
                width={150} // Set appropriate width
                height={150} // Set appropriate height
              />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default LogoSlider;
