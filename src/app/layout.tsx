import './globals.css'; // Import global styles
import Header from './components/Header';
import Footer from './components/Footer';
// import Favicon from '@/assets/images/fav-icon.png';
// import SeoProvider from '@/app/Hooks/SeoProvider';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>

      {/* <link rel="icon" href="../../images/fav-icon.png" /> */}
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Bootstrap 3 CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="font-sans">

      {/* <SeoProvider /> ✅ Now safe to use */}

        <Header />
          <main className="mx-auto">{children}</main>
        <Footer />
      
      
      {/* jQuery (Must be above Bootstrap JS) */}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

      {/* Bootstrap 3 JS */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
