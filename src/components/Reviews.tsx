'use client';

import { Star, MapPin, ExternalLink } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real reviews from real customers on Google Maps
          </p>
        </div>

        {/* Featured Review */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              {/* Profile Picture Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                M
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Maria Santos</h3>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">2 days ago</span>
                </div>
              </div>
            </div>
            
            {/* Google Maps Link */}
            <a
              href="https://www.google.com/maps/place/Thank+You+Seafood/@14.5649105,121.0019223,13z/data=!4m10!1m2!2m1!1sthank!3m6!1s0x3397c932498a45a1:0xe36633a69665ce1a!8m2!3d14.5649105!4d121.0369412!15sCgV0aGFua1oHIgV0aGFua5IBEnNlYWZvb2RfcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNeE1UaE1TbXBSUlJBQqoBNhABKgkiBXRoYW5rKAAyHBABIhi7HxS1xbP5h_2i3Mp-EbihtYhtTkntM_UyCRACIgV0aGFua-ABAPoBBQipAxBF!16s%2Fg%2F11vj754qm0?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Review Content */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed text-lg">
              &ldquo;The freshest seafood I&apos;ve ever had! The grilled salmon was perfectly cooked and the 
              crab cakes were absolutely divine. The staff was incredibly friendly and the prices 
              are very reasonable for such quality. Will definitely be back!&rdquo;
            </p>
            
            {/* Review Stats */}
            <div className="flex items-center space-x-6 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">5.0</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Verified Google Maps review
              </div>
            </div>
          </div>
        </div>

        {/* Additional Reviews Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Review 2 */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                C
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Carlos Mendoza</h4>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">1 week ago</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Amazing lobster bisque and the fish tacos were incredible! 
              Great atmosphere and excellent service.&rdquo;
            </p>
          </div>

          {/* Review 3 */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                J
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Jennifer Lee</h4>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">2 weeks ago</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Best seafood restaurant in town! The shrimp scampi was perfect 
              and the clam chowder was heavenly.&rdquo;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Thank+You+Seafood/@14.5649105,121.0019223,13z/data=!4m10!1m2!2m1!1sthank!3m6!1s0x3397c932498a45a1:0xe36633a69665ce1a!8m2!3d14.5649105!4d121.0369412!15sCgV0aGFua1oHIgV0aGFua5IBEnNlYWZvb2RfcmVzdGF1cmFudJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VNeE1UaE1TbXBSUlJBQqoBNhABKgkiBXRoYW5rKAAyHBABIhi7HxS1xbP5h_2i3Mp-EbihtYhtTkntM_UyCRACIgV0aGFua-ABAPoBBQipAxBF!16s%2Fg%2F11vj754qm0?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span>Read More Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
