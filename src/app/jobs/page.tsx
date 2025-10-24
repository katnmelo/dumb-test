export default function JobsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-stone-300">Be part of the LOWBROW family</p>
        </div>
      </div>
      
      <main className="max-w-3xl mx-auto p-8 space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Career Opportunities</h2>
          <p className="text-stone-600 leading-relaxed">
            Discover exciting career opportunities with our growing restaurant family. 
            We&apos;re always looking for passionate people to join our team.
          </p>
        </div>
      </main>
    </div>
  );
}
