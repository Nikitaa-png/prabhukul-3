import SEO from '../../components/common/SEO';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the team at Prabhukul. We are here to assist you with your queries." 
      />
      <div className="py-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-500 mb-6">
          Have any questions, support requests, or thoughts? We would love to hear from you.
        </p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Placeholder Page
        </span>
      </div>
    </>
  );
}
