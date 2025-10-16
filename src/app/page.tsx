import StoreCard from "@/components/StoreCard";
import Hero from "@/components/Hero";
import { restaurants, Restaurant } from "@/data/restaurants";

export default function Home() {
  return (
    <>
      {/* Hero - Full bleed */}
      <Hero
        title="Welcome to LOWBROW"
        subtitle="Discover amazing restaurants and delicious food"
        buttonText="Explore Stores"
        buttonHref="/stores"
      />

      {/* Main content container */}
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-8 min-h-screen">
        {/* Restaurant Store Cards */}
        <section className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Restaurants</h2>
            <p className="text-muted-foreground">Choose from our amazing collection of dining experiences</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {restaurants.map((restaurant: Restaurant) => (
              <StoreCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                address={restaurant.address}
                phone={restaurant.phone}
                hours={restaurant.hours}
                menuUrl={restaurant.menuUrl}
                reserveUrl={restaurant.reserveUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}