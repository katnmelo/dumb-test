import CustomImage from '../../components/Image';
import Hero from '../../components/Hero';

export default function BadBirdMegaPage() {
  return (
    <>
      <Hero
        title="Bad Bird Mega"
        subtitle="Premium fried chicken experience with bold flavors"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-6">
      
      {/* Example images using the placeholder system */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Store Front</h2>
          <CustomImage
            src="/images/stores/bad-bird-mega-front.jpg"
            alt="Bad Bird Mega store front"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Menu Items</h2>
          <CustomImage
            src="/images/stores/bad-bird-mega-food.jpg"
            alt="Bad Bird Mega food items"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Interior</h2>
        <CustomImage
          src="/images/stores/bad-bird-mega-interior.jpg"
          alt="Bad Bird Mega interior"
          width={800}
          height={400}
          className="rounded-lg w-full"
        />
      </div>
      </main>
    </>
  );
}




