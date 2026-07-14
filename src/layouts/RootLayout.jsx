import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import bgImg from '../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 selection:bg-primary-100 selection:text-primary-800">
      <ScrollToTop />
      <Navbar />
      <main
        className="flex-grow"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
