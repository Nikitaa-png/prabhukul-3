import SEO from '../../components/common/SEO';

export default function Blog() {
  return (
    <>
      <SEO 
        title="Journal & Blog" 
        description="Read articles, guides, and stories on natural living and holistic wellness from the Prabhukul Journal." 
      />
      <div className="py-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog & Journal</h1>
        <p className="text-gray-500 mb-6">
          Stories, lifestyle tips, and articles from the Prabhukul community.
        </p>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
          Placeholder Page
        </span>
      </div>
    </>
  );
}
