import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MESSAGES from "@/constants/message_Constants";
import { useTestimonials } from "@/app/Hooks/useTestimonials";

// Custom arrow components to prevent invalid props from going to native DOM elements
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button type="button" className="slick-arrow slick-prev" onClick={onClick}>
      &#10094;
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button type="button" className="slick-arrow slick-next" onClick={onClick}>
      &#10095;
    </button>
  );
};

const TestimonialSlider: React.FC = () => {
  const { testimonials, isLoading } = useTestimonials();

  const formattedTestimonials =
    testimonials?.map((item) => ({
      img: item?.featuredImage?.node?.sourceUrl || "/images/fallback.png",
      name: item?.title || `<div class="loader"></div>`,
      review: item?.content?.replace(/<\/?[^>]+(>|$)/g, "") || `<div class="loader"></div>`,
    })) || [];

  const settingsTestimonials = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <section className="testimonial-slider">
        {isLoading ? (
          <p>Loading testimonials...</p>
        ) : formattedTestimonials.length > 0 ? (
          <Slider {...settingsTestimonials} className="testimonial-slider-wrapper">
            {formattedTestimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <div className="upr-row d-flex align-items-center">
                  <img
                    className="avatar-img"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <p className="usr-name mb-0 text-white">{testimonial.name}</p>
                  <img className="ratings-icn" src="/images/star.png" alt="Rating" />
                </div>
                <p className="new-text">{testimonial.review}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>{MESSAGES.NoTestimonials}</p>
        )}
      </section>
    </div>
  );
};

export default TestimonialSlider;
