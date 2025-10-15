import Hero from '../../components/Hero';

export default function FowlbreadPage() {
  return (
    <>
      <Hero
        title="Fowlbread"
        subtitle="Fresh baked bread meets premium poultry"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">About This Location</h2>
        <p className="text-stone-600">Experience the perfect combination of artisanal bread and quality poultry dishes.</p>
      </main>
    </>
  );
}




