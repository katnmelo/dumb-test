export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-stone-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-stone-300">We'd love to hear from you</p>
        </div>
      </div>
      
      <main className="max-w-3xl mx-auto p-8 space-y-8">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
          <h2 className="text-2xl font-semibold text-stone-800 mb-4">Get In Touch</h2>
          <p className="text-stone-600 leading-relaxed">
            Reach out to us for any questions or feedback. We're here to help and would love to hear from you.
          </p>
        </div>
      </main>
    </div>
  );
}
