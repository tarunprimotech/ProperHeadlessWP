import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DefaultImg from "@/assets/images/default.png";

// Import the fixed ref wrapper instead
import SliderWithRef from "@/app/Hooks/SliderWithRef";

const aiSolutions = [
  {
    title: "Machine Learning",
    img: "/images/icon_tab%20(5).png",
    content: `We are a leading machine learning agency dedicated to empowering enterprises with innovative AI solutions. Our expert team develops and implements machine learning models that drive efficiency, uncover insights, and enhance decision-making processes.`,
    image: "/images/sol.png",
  },
  {
    title: "Deep Learning",
    img: "/images/icon_tab%20(3).png",
    content: `We harness the power of deep learning to deliver advanced AI solutions for enterprises. Our top-notch engineers specialize in developing deep-learning models that can analyze complex data, recognize patterns, and make predictions with unparalleled accuracy. Our commitment to tailoring our solutions to your unique business needs sets us apart. Whether you aim to enhance image and speech recognition, automate sophisticated processes, or gain deeper insights from your data, our deep-learning solutions are designed to meet your specific requirements.`,
    image: "/images/sl-2.png",
  },
  {
    title: "Generative AI",
    img: "/images/icon_tab%20(7).png",
    content: (
        <>
          <p>
            Power your business with our Generative AI services. Leveraging advanced neural networks and machine learning algorithms, we deliver bespoke solutions that drive innovation and operational efficiency. Our AI technology excels in generating high-quality content, optimizing data-driven decision-making, and automating complex processes, ensuring your enterprise stays ahead in a competitive market.
          </p>
          <p>
            Our expertise lies in deploying state-of-the-art AI models, including GPT-4 and BERT, tailored to your industry's specific needs. Whether you're in finance, healthcare, e-commerce, or manufacturing, our scalable AI solutions integrate seamlessly with your existing systems. Benefit from real-time analytics, predictive modeling, and 24/7 dedicated support to maximize your ROI and achieve strategic objectives.
          </p>
        </>
      ),
    image: "/images/sl-3.png",
  },
  {
    title: "Data Platforms Building",
    img: "/images/icon_tab%20(1).png",
    content: (
        <>
          <p>
            We are architects of innovative data platforms designed to transform enterprises into data-driven powerhouses.
          </p>
          <p>
            Our expert team crafts bespoke data ecosystems that seamlessly integrate, store, and analyze data from diverse sources, ensuring your business can effortlessly navigate the complexities of the digital age. By harnessing the latest technology, we turn raw data into valuable insights, propelling informed decision-making and sparking innovation.
          </p>
        </>
      ),
    image: "/images/sl-4.png",
  },
  {
    title: "Innovative Enterprise Solutions",
    img: "/images/brain.png",
    content: (
        <>
          <p>
            We believe in delivering innovative solutions tailored to meet enterprises' unique challenges. In a collaborative partnership with your business, our team of experts works closely to understand your goals and develop customized strategies that drive growth, efficiency, and competitive advantage.
          </p>
          <p>
            Whether it's cutting-edge AI, robust data platforms, or software development, we provide end-to-end solutions that transform your AI vision into reality.
          </p>
        </>
      ),
    image: "/images/sl-5.png",
  },
  // ... other solutions
];

const AiSolutionsSlider = () => {
  const sliderRef = useRef<any>(null);
  const headingRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    sliderRef.current?.slickGoTo(index);
    headingRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    adaptiveHeight: true,
    afterChange: (index: number) => {
      setActiveTab(index);
      headingRefs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center" });
    },
  };

  return (
    <section id="ai-solution-mobile" className="solution">
      <h4 className="ai-solution-title pt-5">
        AI Solutions That Make All the <span className="intelligent">Difference</span>
      </h4>
      <p className="ai-solution-para new-text text-center">
        We specialize in providing a comprehensive suite of bespoke AI-driven solutions.
      </p>

      <div className="slider-headings-wrapper">
        <ul className="slider-headings">
          {aiSolutions.map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                headingRefs.current[index] = el;
              }}
              onClick={() => handleTabClick(index)}
              className={`tab ${activeTab === index ? "active" : ""}`}
            >
              <Image src={item.img || DefaultImg} alt={item.title} width={50} height={50} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <SliderWithRef ref={sliderRef} {...settings}>
        {aiSolutions.map((item, index) => (
          <div key={index} className="slide slider-item">
            <div className="container tab-pane">
              <div className="row tab-row1">
                <div className="col-sm-12 col-md-6">
                  <h5 className="fw-bold text-white">{item.title}</h5>
                  <div className="new-text">{item.content}</div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <Image
                    className="img-fluid"
                    src={item.image || DefaultImg}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </SliderWithRef>
    </section>
  );
};

export default AiSolutionsSlider;
