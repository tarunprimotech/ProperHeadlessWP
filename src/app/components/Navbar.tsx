"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Import usePathname
import logo from "@/assets/images/primotechlogofordarktheme-3@2x.png";
import { NAV_LINKS, NAV_LINKS_NH } from "@/constants/lists"; // <-- Import both menus

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // <-- Get current path

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Determine which menu to show
  const navLinks = pathname === "/" ? NAV_LINKS : NAV_LINKS_NH;

  return (
    <nav>
      <div className="mobile-for-menu">
        {/* Logo */}
        <div className="lft-lgo"> 
          <Link href="/">
            <Image src={logo} alt="logo" width={150} height={50} />
          </Link>
        </div>

        <div className="rght-mnu">
          {/* Hamburger Button (only mobile) */}
          {isMobile && (
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <span>☰</span>
            </button>
          )}
        </div>
      </div>

      {/* Menu: show always on desktop, toggle on mobile */}
      {(!isMobile || isMenuOpen) && (
        <ul className="mobile-for-menu-items">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
