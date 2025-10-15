import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  buttonText,
  buttonHref,
  imageSrc = '/images/placeholders/placeholder.jpg',
  className = ''
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden w-full ${className}`}>
      {/* Background Image */}
      <div 
        className="aspect-[16/9] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${imageSrc}')`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center space-y-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 drop-shadow-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {buttonText && buttonHref && (
            <Button asChild size="lg" className="mt-6">
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
