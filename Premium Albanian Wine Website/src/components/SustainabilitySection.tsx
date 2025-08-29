import { Leaf, Droplets, Recycle, Sun, Heart, Award } from "lucide-react";

export function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: "Organic Cultivation",
      description: "85% of our partner wineries use certified organic farming methods, preserving soil health and biodiversity.",
      stat: "85%",
      statLabel: "Organic Certified"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced irrigation systems and rainwater collection reduce water usage by up to 40% compared to traditional methods.",
      stat: "40%",
      statLabel: "Water Saved"
    },
    {
      icon: Sun,
      title: "Solar Energy",
      description: "Many of our wineries harness Albania's abundant sunshine for renewable energy in production and storage.",
      stat: "12",
      statLabel: "Solar Installations"
    },
    {
      icon: Recycle,
      title: "Eco Packaging",
      description: "Lightweight bottles, recycled labels, and carbon-neutral shipping to minimize environmental impact.",
      stat: "100%",
      statLabel: "Recyclable Materials"
    },
    {
      icon: Heart,
      title: "Hand Harvesting",
      description: "Traditional hand-picking methods preserve grape quality while supporting local communities and reducing machinery impact.",
      stat: "95%",
      statLabel: "Hand Picked"
    },
    {
      icon: Award,
      title: "Carbon Neutral",
      description: "Committed to carbon-neutral distribution across the Nordic region through optimized logistics and offset programs.",
      stat: "2024",
      statLabel: "Carbon Neutral Goal"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-soft-beige/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-white px-4 py-2 rounded-full">
            Sustainability
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-serif font-semibold text-slate-gray-dark leading-tight">
            Preserving Heritage,
            <span className="text-wine-red"> Protecting Future</span>
          </h2>
          <p className="mt-6 text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Our commitment to sustainable winemaking practices ensures that Albanian 
            wine traditions continue to thrive while respecting the environment and 
            supporting local communities.
          </p>
        </div>

        {/* Sustainability Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-beige rounded-2xl group-hover:bg-wine-red group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-wine-red group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-serif font-semibold text-wine-red">
                        {feature.stat}
                      </div>
                      <div className="text-xs text-slate-gray font-medium">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-gray-dark">
                      {feature.title}
                    </h3>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="mt-6 pt-4 border-t border-soft-beige">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-wine-red to-gold-accent group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-wine-red rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-6 left-12 w-6 h-6 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-4">
              Join Us in Sustainable Wine Distribution
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Partner with us to bring sustainable Albanian wines to Nordic markets while 
              supporting environmentally conscious winemaking practices and local communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold mb-2">500+</div>
                <div className="text-sm opacity-80">Tons CO₂ Offset Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold mb-2">12</div>
                <div className="text-sm opacity-80">Certified Organic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-semibold mb-2">1,000+</div>
                <div className="text-sm opacity-80">Local Jobs Supported</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-wine-red px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
                Learn More About Our Practices
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-wine-red transition-all duration-200">
                Download Sustainability Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}