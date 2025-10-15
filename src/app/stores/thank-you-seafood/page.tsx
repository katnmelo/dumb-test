import Hero from '../../components/Hero';

export default function ThankYouSeafoodPage() {
  return (
    <>
      <Hero
        title="Thank You Seafood"
        subtitle="Fresh catches and ocean-inspired cuisine"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">About This Location</h2>
        <p className="text-stone-600">Delight in the freshest seafood and coastal flavors.</p>
      </main>
    </>
  );
}




