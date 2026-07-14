import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
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
        path: 'shop',
        element: <Shop />,
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
