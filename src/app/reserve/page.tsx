import Hero from '../components/Hero';

export default function ReservePage() {
  return (
    <>
      <Hero
        title="Make a Reservation"
        subtitle="Book your table at any of our locations"
        buttonText="View Locations"
        buttonHref="/stores"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">Reservation System</h2>
        <p className="text-stone-600">Make a reservation at any of our stores for the perfect dining experience.</p>
      </main>
    </>
  );
}




