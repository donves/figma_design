import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Calendar, Award, Grape } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Winery {
  id: number;
  name: string;
  region: string;
  founded: string;
  specialty: string;
  description: string;
  image: string;
  coordinates: { x: number; y: number }; // Percentage coordinates for the map
  awards: string[];
  organicCertified: boolean;
}

export function WineriesSection() {
  const wineries: Winery[] = [
    {
      id: 1,
      name: "Cobo Winery",
      region: "Berat",
      founded: "1998",
      specialty: "Kallmet & Traditional Varieties",
      description: "Family-owned winery renowned for exceptional Kallmet wines and sustainable viticulture practices in the historic Berat region.",
      image: "https://images.unsplash.com/photo-1701596744958-b494dcffe375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwY2VsbGFyJTIwYmFycmVsc3xlbnwxfHx8fDE3NTUwOTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      coordinates: { x: 45, y: 60 },
      awards: ["Gold Medal 2022", "Organic Certification"],
      organicCertified: true
    },
    {
      id: 2,
      name: "Kantina Arbëri",
      region: "Tirana",
      founded: "2005",
      specialty: "Shesh i Bardhe & Modern Techniques",
      description: "Innovative winery combining traditional Albanian grape varieties with modern winemaking technology near the capital.",
      image: "https://images.unsplash.com/photo-1701596744958-b494dcffe375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwY2VsbGFyJTIwYmFycmVsc3xlbnwxfHx8fDE3NTUwOTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      coordinates: { x: 50, y: 45 },
      awards: ["Best White Wine 2023", "Innovation Award"],
      organicCertified: false
    },
    {
      id: 3,
      name: "Uka Farm",
      region: "Shkodër",
      founded: "1985",
      specialty: "Vranac & Mountain Terroir",
      description: "Historic winery in northern Albania, specializing in robust red wines from high-altitude vineyards with exceptional terroir.",
      image: "https://images.unsplash.com/photo-1701596744958-b494dcffe375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwY2VsbGFyJTIwYmFycmVsc3xlbnwxfHx8fDE3NTUwOTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      coordinates: { x: 48, y: 25 },
      awards: ["Heritage Winery 2021", "Terroir Excellence"],
      organicCertified: true
    },
    {
      id: 4,
      name: "Stone Castle Winery",
      region: "Berat",
      founded: "2010",
      specialty: "Rosé & Premium Blends",
      description: "Boutique winery producing elegant rosé wines and premium blends in the UNESCO World Heritage region of Berat.",
      image: "https://images.unsplash.com/photo-1701596744958-b494dcffe375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwY2VsbGFyJTIwYmFycmVsc3xlbnwxfHx8fDE3NTUwOTU2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      coordinates: { x: 43, y: 58 },
      awards: ["Best Rosé 2022", "Tourism Award"],
      organicCertified: false
    }
  ];

  return (
    <section id="wineries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-soft-beige px-4 py-2 rounded-full">
            Our Partners
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-serif font-semibold text-slate-gray-dark leading-tight">
            Albanian 
            <span className="text-wine-red"> Kantinas</span>
          </h2>
          <p className="mt-6 text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Meet our carefully selected partner wineries across Albania, each representing 
            the finest traditions and terroir of their respective regions.
          </p>
        </div>

        {/* Map and Wineries Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Albania Map */}
          <div className="relative">
            <div className="bg-soft-beige rounded-2xl p-8 aspect-square">
              {/* Simplified Albania Map SVG */}
              <div className="relative w-full h-full">
                <svg viewBox="0 0 100 120" className="w-full h-full">
                  {/* Albania outline (simplified) */}
                  <path 
                    d="M30 20 L70 15 L75 25 L80 35 L75 50 L70 65 L65 80 L60 95 L50 105 L40 100 L35 85 L30 70 L25 55 L20 40 L25 25 Z" 
                    fill="#F5F3F0" 
                    stroke="#7A1313" 
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Region labels */}
                  <text x="50" y="30" textAnchor="middle" className="text-xs font-medium fill-slate-gray">Shkodër</text>
                  <text x="55" y="50" textAnchor="middle" className="text-xs font-medium fill-slate-gray">Tirana</text>
                  <text x="50" y="70" textAnchor="middle" className="text-xs font-medium fill-slate-gray">Berat</text>
                  
                  {/* Winery markers */}
                  {wineries.map((winery) => (
                    <g key={winery.id}>
                      <circle
                        cx={winery.coordinates.x}
                        cy={winery.coordinates.y}
                        r="3"
                        fill="#7A1313"
                        className="cursor-pointer hover:r-4 transition-all duration-200"
                      />
                      <circle
                        cx={winery.coordinates.x}
                        cy={winery.coordinates.y}
                        r="8"
                        fill="rgba(122, 19, 19, 0.2)"
                        className="animate-pulse"
                      />
                    </g>
                  ))}
                  
                  {/* Coastline detail */}
                  <path 
                    d="M30 20 L35 25 L40 35 L45 50 L50 65 L55 80 L60 95"
                    fill="none" 
                    stroke="#4F9ECA" 
                    strokeWidth="3"
                    opacity="0.6"
                  />
                </svg>
                
                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-md">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-3 h-3 bg-wine-red rounded-full"></div>
                    <span className="text-slate-gray">Partner Wineries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wineries List */}
          <div className="space-y-6">
            {wineries.map((winery) => (
              <div key={winery.id} className="bg-soft-beige/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex gap-4">
                  {/* Winery Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden">
                      <ImageWithFallback
                        src={winery.image}
                        alt={winery.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Winery Info */}
                  <div className="flex-grow space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-serif font-semibold text-slate-gray-dark">
                          {winery.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-slate-gray mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {winery.region}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Est. {winery.founded}
                          </div>
                        </div>
                      </div>
                      
                      {winery.organicCertified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                          <Grape className="w-3 h-3 mr-1" />
                          Organic
                        </Badge>
                      )}
                    </div>

                    <p className="text-slate-gray text-sm leading-relaxed">
                      {winery.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-wine-red font-medium">
                        Specialty: {winery.specialty}
                      </div>
                      
                      {winery.awards.length > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gold-accent">
                          <Award className="w-3 h-3" />
                          {winery.awards.length} Award{winery.awards.length > 1 ? 's' : ''}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-soft-beige rounded-2xl">
          <h3 className="text-2xl font-serif font-semibold text-slate-gray-dark mb-4">
            Interested in Partnering?
          </h3>
          <p className="text-slate-gray mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional Albanian wineries to join our Nordic distribution network. 
            Contact us to learn about our partnership opportunities.
          </p>
          <Button 
            className="bg-wine-red hover:bg-wine-red-light text-white px-8 py-3 rounded-md transition-all duration-200"
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}