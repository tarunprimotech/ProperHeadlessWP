"use client";

import React, { useState, useEffect, useRef } from "react";
import { useHomepageData } from "@/app/Hooks/useHomePageData";
// import { TAB_SECTION } from "src/@/constants/lists";
import { TAB_SECTION } from "@/constants/lists";

const tabs = [1, 2, 3, 4];

const TabSection = () => {
  const { homepageData } = useHomepageData();
  const [activeSection, setActiveSection] = useState("section1");
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({});

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    for (const id in sectionsRef.current) {
      const section = sectionsRef.current[id];
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const assignRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[id] = el;
  };

  return (
    <div className="container">
      {/* Desktop View */}
      <div className="desktop-show tab-section-sidebar mt-50">
        <nav className="fixedmenu">
          <ul id="sidebar">
            {tabs.map((num) => {
              const id = `section${num}`;
              const heading = homepageData?.homepage?.tabSection?.[`tabHeading${num}`] || "";
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active-section" : ""}
                    onClick={() => setActiveSection(id)}
                  >
                    <img src={`/images/cpu-${num}.svg`} alt="" />
                    {heading}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="tab-content-sec">
          {tabs.map((num) => {
            const id = `section${num}`;
            const desc = homepageData?.homepage?.tabSection?.[`tabDescription${num}`] || "";
            return (
              <section
                key={id}
                id={id}
                ref={assignRef(id)}
                className={`content-section ${activeSection === id ? "active" : ""}`}
              >
                <div className="tab-container-icon">
                  <img src={`/images/cpu-${num}.svg`} alt="" />
                </div>
                <div
                  className="tab-content-right"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </section>
            );
          })}
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-show tab-content-sec">
        {TAB_SECTION.map((item, idx) => (
          <section key={idx} className="content-section">
            <div className="tab-container-icon">
              <img src={`/images/cpu-${idx + 1}.svg`} alt="" />
            </div>
            <div className="tab-content-right">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
