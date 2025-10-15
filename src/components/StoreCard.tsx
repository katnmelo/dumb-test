import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface StoreCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  menuUrl: string;
  reserveUrl: string;
  className?: string;
}

export default function StoreCard({
  id,
  name,
  address,
  phone,
  hours,
  menuUrl,
  reserveUrl,
  className = ''
}: StoreCardProps) {
  return (
    <Card className={`w-full max-w-md mx-auto overflow-hidden ${className}`}>
      {/* Hero Image with Name Overlay */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-600">
        <div className="absolute inset-0 bg-[url('/images/placeholders/placeholder.jpg')] bg-center bg-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-4 left-4 right-4">
          <CardTitle className="text-2xl font-bold text-white drop-shadow-lg">
            {name}
          </CardTitle>
        </div>
      </div>
      
      <CardContent className="space-y-4 p-6">
        {/* Address with Map Pin Icon */}
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">{address}</p>
        </div>

        {/* Phone with Phone Icon */}
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <a 
            href={`tel:${phone}`}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {phone}
          </a>
        </div>

        {/* Hours with Clock Icon */}
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">{hours}</p>
        </div>

        {/* Menu Accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="menu">
            <AccordionTrigger className="text-sm font-medium">
              View Menu
            </AccordionTrigger>
            <AccordionContent>
              <div className="w-full h-96 rounded-lg overflow-hidden border">
                <iframe
                  src={menuUrl}
                  className="w-full h-full"
                  title={`${name} Menu`}
                  loading="lazy"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Reserve Now Button */}
        <Button asChild className="w-full mt-6">
          <Link href={reserveUrl} target="_blank" rel="noopener noreferrer">
            Reserve Now
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}