import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function Hero({ 
  title, 
  subtitle, 
  buttonText, 
  buttonHref, 
  className = "" 
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden rounded-2xl border border-foreground/10 ${className}`}>
      <div className="aspect-[16/9] bg-[url('/images/placeholders/placeholder.jpg')] bg-center bg-cover opacity-20" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
          {subtitle && (
            <p className="text-lg sm:text-xl opacity-80 max-w-2xl">{subtitle}</p>
          )}
          {buttonText && buttonHref && (
            <Button asChild>
              <Link href={buttonHref}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
