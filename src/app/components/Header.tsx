'use client';

import Link from 'next/link';
import logo from '@/assets/images/primotechlogofordarktheme-3@2x.png';
import Navbar from './Navbar';
import Image from "next/image";
import { NAV_LINKS, NAV_LINKS_NHdesk } from '@/constants/lists';
import { usePathname } from 'next/navigation';



export default function Header() {

  const pathname = usePathname();
  const isHome = pathname === '/';

  const linksToRender = isHome ? NAV_LINKS : NAV_LINKS_NHdesk;


  return (
    <header className="container">
    <div className="header-cls">
      <div className="logo-sec">
        <Link href="/" className="mr-4">
          <Image src={logo || null} alt="logo" />
        </Link>
      </div>
      <div className="link-sec">
      {linksToRender.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          {link.text}
        </Link>
      ))}
    </div>
      <div className="btn-sec">
        <Link href="/#contact">Let's Connect</Link>
      </div>
    </div>
    <Navbar />
  </header>
  );
}
