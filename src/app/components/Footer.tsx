"use client";

import Image from "next/image";
import Link from "next/link";
// import FormSection from "./FormSection";
import { usePathname } from "next/navigation";
import FormSection from "@/app/components/FormSection";


const HomeFooter = () => {

  const pathname = usePathname();

  const hideFormSection = pathname === "/Privacy-policy" || pathname === "/Terms-conditions";

  return (
    <div>
      {/* Conditionally render FormSection */}
      {!hideFormSection && <FormSection />}

      <footer className="pt-5">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-sm-4 col-md-4">
              <h6 className="mb-0 text-white ftr-heading">
                ABOUT <span>US</span>
              </h6>
              <p className="text-white">
                PRIMOTECH AI is a global leader in new tech services, driving digital transformation with AI/ML, DevOps, Data Analysis & more. Partner to thrive with us.  
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-sm-4 col-md-4 link-colm">
              <h6 className="mb-0 text-white ftr-heading">
                QUICK <span>LINKS</span>
              </h6>
              <ul className="footr-menus ps-0">
                <li>
                  <Link href="/#vision" className="text-white text-decoration-none">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="/#ai-solution" className="text-white text-decoration-none">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white text-decoration-none">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-white text-decoration-none">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-sm-4 col-md-4">
              <div className="follow-us d-flex justify-content-center">
                <div>
                  <h6 className="mb-0 text-white ftr-heading">OUR COMMITMENT TO <span className="yllo-txt"> QUALITY</span></h6>
                  <ul className="logos">
                    <li>
                      <Image src="/images/clutch.png" alt="Quality" width={100} height={100} />
                    </li>
                    <li>
                      <Image src="/images/g2.png" alt="Quality" width={100} height={100} />
                    </li>
                    <li>
                      <Image src="/images/iso.png" alt="Quality" width={100} height={100} />
                    </li>
                    <li>
                      <Image src="/images/soc.png" alt="Quality" width={100} height={100} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="row mt-5">
            <div className="col-sm-4 col-md-4">
              <h5 className="text-white mb-3 Our-loc">OUR LOCATIONS</h5>
              <h6 className="mb-0 text-white ftr-heading">
                <span>INDIA</span>
              </h6>
              <ul className="icon-menu ps-0">
                <li className="mb-3">
                  <Link href="tel:1725037466" className="text-white text-decoration-none">
                    <i className="fa-solid fa-phone-volume"></i>
                    +91 172 503 7466
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="mailto:rmg@primotech.com" className="text-white text-decoration-none">
                    <i className="fa-solid fa-envelope"></i>
                    rmg@primotech.com
                  </Link>
                </li>
                <li className="mb-3 text-white d-flex-center">
                  <i className="fa-solid fa-location-dot"></i>
                  C - 205, 7th Floor Industrial Area, Phase 8-B Mohali, Punjab 160055
                </li>
              </ul>
            </div>

            <div className="col-sm-4 col-md-4">
              <h6 className="mb-0 text-white mb-3 usa-head ftr-heading">
                <span>USA</span>
              </h6>
              <ul className="icon-menu ps-0">
                <li className="mb-3">
                  <Link href="tel:6193784788" className="text-white text-decoration-none">
                    <i className="fa-solid fa-phone-volume"></i>
                    (619) 378-4788
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="mailto:contact@primotech.com" className="text-white text-decoration-none">
                    <i className="fa-solid fa-envelope"></i>
                    contact@primotech.com
                  </Link>
                </li>
                <li className="mb-3 text-white d-flex align-items-center">
                  <i className="fa-solid fa-location-dot"></i>
                  12506 Colorado Ave Bakersfield, CA 93312
                </li>
              </ul>
            </div>

            {/* Follow US */}
            <div className="col-sm-4 col-md-4 mt-3">
              <h6 className="mb-0 text-white ftr-heading follow-head">FOLLOW <span>US</span></h6>
              <ul className="icon-list">
                    <li>
                      <Link href="https://www.instagram.com/primotech1/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="fb-link" href="https://www.facebook.com/Primotech1">
                        <i className="fa-brands fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin-link" href="https://www.linkedin.com/company/primotech-llc/mycompany/">
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </li>

                    <li>
                      <Link className="linkedein-link" href="https://x.com/Primotech1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                          <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                          </svg>
                      </Link>
                    </li>

                    <li>
                      <Link className="linkedein-link" href="https://www.pinterest.com/primotech/">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                          <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 16.418 16.418 20 12 20 C 11.264382 20 10.555494 19.892969 9.8789062 19.707031 C 10.09172 19.278284 10.282622 18.826454 10.386719 18.425781 C 10.501719 17.985781 10.972656 16.191406 10.972656 16.191406 C 11.278656 16.775406 12.173 17.271484 13.125 17.271484 C 15.958 17.271484 18 14.665734 18 11.427734 C 18 8.3227344 15.467031 6 12.207031 6 C 8.1520313 6 6 8.7215469 6 11.685547 C 6 13.063547 6.73325 14.779172 7.90625 15.326172 C 8.08425 15.409172 8.1797031 15.373172 8.2207031 15.201172 C 8.2527031 15.070172 8.4114219 14.431766 8.4824219 14.134766 C 8.5054219 14.040766 8.4949687 13.958234 8.4179688 13.865234 C 8.0299688 13.394234 7.71875 12.529656 7.71875 11.722656 C 7.71875 9.6496562 9.2879375 7.6445312 11.960938 7.6445312 C 14.268937 7.6445313 15.884766 9.2177969 15.884766 11.466797 C 15.884766 14.007797 14.601641 15.767578 12.931641 15.767578 C 12.009641 15.767578 11.317063 15.006312 11.539062 14.070312 C 11.804063 12.953313 12.318359 11.747406 12.318359 10.941406 C 12.318359 10.220406 11.932859 9.6191406 11.130859 9.6191406 C 10.187859 9.6191406 9.4296875 10.593391 9.4296875 11.900391 C 9.4296875 12.732391 9.7109375 13.294922 9.7109375 13.294922 C 9.7109375 13.294922 8.780375 17.231844 8.609375 17.964844 C 8.5246263 18.326587 8.4963381 18.755144 8.4941406 19.183594 C 5.8357722 17.883113 4 15.15864 4 12 C 4 7.582 7.582 4 12 4 z"></path>
                        </svg>
                      </Link>
                    </li>

                  </ul>
            </div>
          </div>

          {/* Flags Section */} 
          <div className="footer_flgs">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num}>
                <Image className="img-fluid" src={`/images/flg-${num}.png`} alt={`Flag ${num}`} width={150} height={50} layout="intrinsic" />
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="botm-fotr-part">
            <p className="copyright-bottom">
              Copyright © 2025 Primotech, LLC. All Rights Reserved.
            </p>
            <p className="bottom-quick_links">
              <Link href="/Privacy-policy" className="privacy-policy-bottm">
                Privacy Policy
              </Link>
              <Link href="/Terms-conditions" className="terms-conditions-bottom">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeFooter;
