"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useHomepageData } from "@/app/Hooks/useHomePageData";
import MESSAGES from "@/constants/message_Constants";
// import Loader from "@/constants/loader";  

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { homepageData } = useHomepageData();

  const iconPaths = [
    "/images/icon_tab (5).png",
    "/images/icon_tab (3).png",
    "/images/icon_tab (7).png",
    "/images/icon_tab (1).png",
    "/images/brain.png",
  ];
  

  const slides = Array.from({ length: 5 }, (_, i) => {
    const slide = homepageData?.homepage?.horizontalScroll?.[`slide${i + 1}`];
    return {
      title: slide?.heading || "Loading...",
      text: slide?.slideContent || "Loading...",
      img: slide?.image?.node?.sourceUrl || "/images/placeholder.png",
      // icon: `/images/icon_tab (${i + 1}).png`,
      icon: iconPaths[i],

    };
  });

  useEffect(() => {
    if (window.innerWidth < 768 || !containerRef.current) return;

    const container = containerRef.current;
    const sections = sectionsRef.current;

    const totalSlides = sections.length;
    const scrollWidth = container.scrollWidth - window.innerWidth;

    const tween = gsap.to(sections, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.2,
        snap: 1 / (totalSlides - 1),
        end: `+=${scrollWidth}`,
        onUpdate: (self) => {
          const index = Math.round(self.progress * (totalSlides - 1));
          setActiveIndex(index);
        },
      },
    });

    navItemsRef.current.forEach((link, index) => {
      link?.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(tween, {
          progress: index / (totalSlides - 1),
          duration: 1,
          ease: "power2.out",
        });
        setActiveIndex(index);
      });
    });

    // Refresh ScrollTrigger after layout is painted
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [homepageData]);

  return (
    <div id="ai-solution" ref={containerRef} className="horizontal-scroll-container" style={{ overflow: "hidden" }}>
      {/* Navigation Tabs */}
      <div className="fixed-heading custom_tab_list">
        <ul className="nav nav-tabs">
          {slides.map((item, i) => (
            <li className={`nav-item ${activeIndex === i ? "active" : ""}`} key={i}>
              <a
                href={`#menu${i}`}
                className="nav-link text-white"
                ref={(el) => {
                  navItemsRef.current[i] = el;
                }}
              >
                <img src={item.icon} className="machine-tab" alt={item.title} />
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Slides Wrapper */}
      <div className="horizontal-wrapper" style={{ display: "flex" }}>
        {slides.map((item, i) => (
          <div
            id={`menu${i}`}
            key={i}
            className="panel tab-pane"
            style={{
              minWidth: "100vw",
              flexShrink: 0,
              padding: "0px 20px", // Adjust padding as needed
              boxSizing: "border-box",
            }}
            ref={(el) => {
              if (el) {
                sectionsRef.current[i] = el;
              }
            }}
          >
            <div className="row tab-row1 text-white">
              <div className="col-md-6">
                <h5 className="fw-bold">{item.title}</h5>
                <div
                  className="new-text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src={item.img} alt={item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
