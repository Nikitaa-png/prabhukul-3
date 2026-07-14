import { useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';

export default function Product() {
  const { id } = useParams();

  return (
    <>
      <SEO 
        title="Product Details" 
        description="View details of handcrafted premium items at Prabhukul." 
      />
      <div className="py-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Details</h1>
        <p className="text-gray-500 mb-6">
          Viewing detailed view for product ID: <span className="font-semibold text-primary-600">{id || 'N/A'}</span>
        </p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Placeholder Page
        </span>
      </div>
    </>
  );
}
