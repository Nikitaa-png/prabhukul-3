import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import OurStory from '../pages/OurStory';
import Shop from '../pages/Shop';
import IngredientsQuality from '../pages/IngredientsQuality';
import BestSellersPage from '../pages/BestSellers';
import WhyChooseUs from '../pages/WhyChooseUs';
import Recipes from '../pages/Recipes';
import Product from '../pages/Product';
import Contact from '../pages/Contact';
import BulkEnquiry from '../pages/BulkEnquiry';
import Blog from '../pages/Blog';
import FAQ from '../pages/FAQ';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Privacy/Terms';
import NotFound from '../pages/NotFound';

import AdminLayout from '../layouts/AdminLayout';
import AdminLogin from '../pages/Admin/Login';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminHomepage from '../pages/Admin/Homepage';
import AdminProducts from '../pages/Admin/Products';
import AdminCategories from '../pages/Admin/Categories';
import AdminBanners from '../pages/Admin/Banners';
import AdminBlogs from '../pages/Admin/Blogs';
import AdminTestimonials from '../pages/Admin/Testimonials';
import AdminFAQs from '../pages/Admin/FAQs';
import AdminMedia from '../pages/Admin/Media';
import AdminContact from '../pages/Admin/Contact';
import AdminFooter from '../pages/Admin/Footer';
import AdminSettings from '../pages/Admin/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about-us',
        element: <About />,
      },
      {
        path: 'our-story',
        element: <OurStory />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'ingredients-quality',
        element: <IngredientsQuality />,
      },
      {
        path: 'best-sellers',
        element: <BestSellersPage />,
      },
      {
        path: 'why-choose-us',
        element: <WhyChooseUs />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'bulk-enquiry',
        element: <BulkEnquiry />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'faq',
        element: <FAQ />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <AdminDashboard />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'homepage',
        element: <AdminHomepage />,
      },
      {
        path: 'products',
        element: <AdminProducts />,
      },
      {
        path: 'categories',
        element: <AdminCategories />,
      },
      {
        path: 'banners',
        element: <AdminBanners />,
      },
      {
        path: 'blogs',
        element: <AdminBlogs />,
      },
      {
        path: 'testimonials',
        element: <AdminTestimonials />,
      },
      {
        path: 'faqs',
        element: <AdminFAQs />,
      },
      {
        path: 'media',
        element: <AdminMedia />,
      },
      {
        path: 'contact',
        element: <AdminContact />,
      },
      {
        path: 'footer',
        element: <AdminFooter />,
      },
      {
        path: 'settings',
        element: <AdminSettings />,
      },
    ],
  },
]);
