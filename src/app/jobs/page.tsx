import Hero from '../components/Hero';

export default function JobsPage() {
  return (
    <>
      <Hero
        title="Join Our Team"
        subtitle="Be part of the LOWBROW family"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">Career Opportunities</h2>
        <p className="text-stone-600">Discover exciting career opportunities with our growing restaurant family.</p>
      </main>
    </>
  );
}
