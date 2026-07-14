import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist." 
      />
      <div className="py-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto my-12">
        <h1 className="text-4xl font-extrabold text-primary-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for could not be found. It may have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}
