import SEO from '../../components/common/SEO';

export default function FAQ() {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about orders, shipping, refunds, and ingredients at Prabhukul." 
      />
      <div className="py-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">FAQs</h1>
        <p className="text-gray-500 mb-6">
          Find answers to common questions about orders, shipping, and product care.
        </p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Placeholder Page
        </span>
      </div>
    </>
  );
}
