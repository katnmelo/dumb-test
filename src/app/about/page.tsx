export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About LOWBROW</h1>
          <p className="text-xl text-stone-300">Discover our story and passion for great food - Updated</p>
        </div>
      </div>
      
      <main className="max-w-3xl mx-auto p-8 space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Our Story</h2>
          <p className="text-stone-600 leading-relaxed">
            Learn more about our journey in creating exceptional dining experiences. 
            We&apos;re passionate about bringing you the best flavors and memorable moments.
          </p>
        </div>
      </main>
    </div>
  );
}