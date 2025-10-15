import Hero from '../components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About LOWBROW"
        subtitle="Discover our story and passion for great food"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">Our Story</h2>
        <p className="text-stone-600">Learn more about our journey in creating exceptional dining experiences.</p>
      </main>
    </>
  );
}




