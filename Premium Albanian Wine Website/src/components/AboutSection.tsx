import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Grape, Globe, Heart } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Authentic Heritage",
      description: "Wines crafted using traditional Albanian methods passed down through generations"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Rigorous selection process ensuring only the finest wines reach Nordic markets"
    },
    {
      icon: Globe,
      title: "Nordic Partnership",
      description: "Dedicated distribution network across Denmark, Sweden, Norway, Finland, and Iceland"
    },
    {
      icon: Grape,
      title: "Terroir Excellence",
      description: "Unique Albanian grape varieties and exceptional Mediterranean growing conditions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-soft-beige px-4 py-2 rounded-full">
            Our Story
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-serif font-semibold text-slate-gray-dark leading-tight">
            Bridging Cultures Through 
            <span className="text-wine-red"> Exceptional Wine</span>
          </h2>
          <p className="mt-6 text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            We connect the rich winemaking traditions of Albania with the sophisticated 
            palates of Nordic countries, bringing together centuries of craftsmanship 
            with modern distribution excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1673828384429-30f0872003fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTUwOTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Albanian vineyard landscape with mountains"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div>
                    <div className="text-2xl font-serif font-semibold">2000+</div>
                    <div className="text-sm opacity-90">Years of Winemaking Heritage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold">85%</div>
                    <div className="text-sm opacity-90">Organic Cultivation</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gold-accent/30 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-slate-gray-dark">
                From Ancient Vineyards to Modern Tables
              </h3>
              
              <div className="space-y-4 text-slate-gray">
                <p>
                  Albania's winemaking heritage spans millennia, with indigenous grape varieties 
                  that have thrived in the Mediterranean climate for centuries. Our carefully 
                  selected partner kantinas represent the finest of this tradition.
                </p>
                
                <p>
                  Each wine in our collection tells a story of Albanian terroir – from the 
                  mountainous regions of the north to the coastal vineyards of the south. 
                  We work exclusively with family-owned wineries committed to sustainable 
                  practices and authentic winemaking methods.
                </p>
                
                <p>
                  Our Nordic distribution network ensures these exceptional wines reach 
                  discerning consumers and premium establishments across Scandinavia, 
                  maintaining perfect storage and handling conditions throughout the journey.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-soft-beige rounded-lg">
                  <div className="text-xl font-serif font-semibold text-wine-red">100%</div>
                  <div className="text-sm text-slate-gray">Family Wineries</div>
                </div>
                <div className="text-center p-4 bg-soft-beige rounded-lg">
                  <div className="text-xl font-serif font-semibold text-wine-red">500+</div>
                  <div className="text-sm text-slate-gray">Nordic Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-beige rounded-full">
                  <IconComponent className="w-8 h-8 text-wine-red" />
                </div>
                <h4 className="text-lg font-semibold text-slate-gray-dark">
                  {feature.title}
                </h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}