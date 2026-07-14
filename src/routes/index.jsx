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
]);
