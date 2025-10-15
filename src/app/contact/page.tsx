import Hero from '../components/Hero';

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />
      
      <main className="max-w-3xl mx-auto p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-stone-800">Get In Touch</h2>
        <p className="text-stone-600">Reach out to us for any questions or feedback.</p>
      </main>
    </>
  );
}




