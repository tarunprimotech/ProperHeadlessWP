"use client"; // Runs on the client side

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

interface HomeProps {
  homepageData: any; // Receive the fetched data as props
}

const HomeClient: React.FC<HomeProps> = ({ homepageData }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 500 } },
          color: { value: "#F08705" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 5, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, out_mode: "out" },
        },
        interactivity: {
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Primotech.AI</title>
        <meta name="description" content="AI-led Digital Transformation" />
      </Head>

      <div className="container justify-content-start banner-row lg:d-flex">
        <div className="col-12 inner_colum-bg">
          <div id="particles-js"></div>
          <div className="inner_left_content"> 
            <p className="envision-a-limitless text-center">
              Envision a limitless world with {homepageData?.sec1?.heading || "No Heading Found"}
            </p>
            <main className="container1">
              <section className="animation">
                <div className="first bg_yellow">AI-Led Digital Transformation</div>
                <div className="second bg_yellow">Generative (Computational) Design</div>
                <div className="third bg_yellow">Personalized Data Insights</div>
                <div className="fourth bg_yellow">Next-Gen Robotics</div>
                <div className="fifth bg_yellow">Intelligent Automation</div>
                <div className="sixth bg_yellow">Deep Learning Models</div>
              </section>
            </main>
            <div className="connect-background-parent-banner">
              <Link href="#contact" className="btn btn-warning lets-connect-banner">
                Let’s Talk
              </Link>
            </div>
            <div className="wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeClient;
