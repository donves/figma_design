import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Wine, Filter } from "lucide-react";

type WineType = "all" | "red" | "white" | "rosé" | "sparkling";

interface Wine {
  id: number;
  name: string;
  winery: string;
  region: string;
  type: WineType;
  vintage: string;
  grapeVariety: string;
  tastingNotes: string[];
  image: string;
  alcohol: string;
  description: string;
}

export function WineCollection() {
  const [activeFilter, setActiveFilter] = useState<WineType>("all");

  const wines: Wine[] = [
    {
      id: 1,
      name: "Kallmet Reserve",
      winery: "Cobo Winery",
      region: "Berat",
      type: "red",
      vintage: "2019",
      grapeVariety: "Kallmet",
      tastingNotes: ["Dark cherry", "Tobacco", "Cedar"],
      image: "https://images.unsplash.com/photo-1586124288020-1d7436afd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NTUwOTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "14.5%",
      description: "A full-bodied red wine with complex flavors and excellent aging potential."
    },
    {
      id: 2,
      name: "Shesh i Bardhe Estate",
      winery: "Kantina Arbëri",
      region: "Tirana",
      type: "white",
      vintage: "2021",
      grapeVariety: "Shesh i Bardhe",
      tastingNotes: ["Citrus zest", "Mineral", "White flowers"],
      image: "https://images.unsplash.com/photo-1681584423060-387306c1be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGUlMjBlbGVnYW50fGVufDF8fHx8MTc1NTA5NTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "12.5%",
      description: "Crisp and refreshing white wine with vibrant acidity and elegant finish."
    },
    {
      id: 3,
      name: "Vranac Selection",
      winery: "Uka Farm",
      region: "Shkodër",
      type: "red",
      vintage: "2020",
      grapeVariety: "Vranac",
      tastingNotes: ["Blackberry", "Spice", "Leather"],
      image: "https://images.unsplash.com/photo-1586124288020-1d7436afd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NTUwOTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "13.8%",
      description: "Rich and powerful red wine showcasing the best of Albanian mountain terroir."
    },
    {
      id: 4,
      name: "Rosé de Kallmet",
      winery: "Stone Castle",
      region: "Berat", 
      type: "rosé",
      vintage: "2022",
      grapeVariety: "Kallmet",
      tastingNotes: ["Strawberry", "Rose petals", "Crisp finish"],
      image: "https://images.unsplash.com/photo-1681584423060-387306c1be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGUlMjBlbGVnYW50fGVufDF8fHx8MTc1NTA5NTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "12.0%",
      description: "Elegant rosé with delicate fruit flavors and perfect summer appeal."
    },
    {
      id: 5,
      name: "Shesh Sparkling",
      winery: "Gjergj Kastrioti",
      region: "Durrës",
      type: "sparkling",
      vintage: "2021",
      grapeVariety: "Shesh i Zi",
      tastingNotes: ["Green apple", "Brioche", "Fine bubbles"],
      image: "https://images.unsplash.com/photo-1681584423060-387306c1be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGUlMjBlbGVnYW50fGVufDF8fHx8MTc1NTA5NTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "11.5%",
      description: "Traditional method sparkling wine with fine bubbles and complex character."
    },
    {
      id: 6,
      name: "Mavrud Heritage",
      winery: "Birra Korça",
      region: "Korçë",
      type: "red",
      vintage: "2018",
      grapeVariety: "Mavrud",
      tastingNotes: ["Dark plum", "Vanilla", "Tannins"],
      image: "https://images.unsplash.com/photo-1586124288020-1d7436afd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWQlMjB3aW5lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NTUwOTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alcohol: "14.0%",
      description: "Robust red wine from high-altitude vineyards with exceptional depth."
    }
  ];

  const filters: { type: WineType; label: string }[] = [
    { type: "all", label: "All Wines" },
    { type: "red", label: "Red" },
    { type: "white", label: "White" },
    { type: "rosé", label: "Rosé" },
    { type: "sparkling", label: "Sparkling" }
  ];

  const filteredWines = activeFilter === "all" 
    ? wines 
    : wines.filter(wine => wine.type === activeFilter);

  return (
    <section id="wines" className="py-24 bg-soft-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-white px-4 py-2 rounded-full">
            Our Collection
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-serif font-semibold text-slate-gray-dark leading-tight">
            Premium Albanian 
            <span className="text-wine-red"> Wines</span>
          </h2>
          <p className="mt-6 text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of exceptional wines from Albania's 
            finest kantinas, each bottle representing the unique terroir and tradition 
            of its region.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.type}
              variant={activeFilter === filter.type ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.type)}
              className={`
                px-6 py-2 rounded-full transition-all duration-200
                ${activeFilter === filter.type 
                  ? "bg-wine-red text-white hover:bg-wine-red-light" 
                  : "border-wine-red text-wine-red hover:bg-wine-red hover:text-white"
                }
              `}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Wine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWines.map((wine) => (
            <div key={wine.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Wine Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`
                      px-3 py-1 text-xs font-medium capitalize
                      ${wine.type === 'red' ? 'bg-wine-red text-white' : 
                        wine.type === 'white' ? 'bg-yellow-100 text-yellow-800' :
                        wine.type === 'rosé' ? 'bg-pink-100 text-pink-800' :
                        'bg-blue-100 text-blue-800'}
                    `}
                  >
                    {wine.type}
                  </Badge>
                </div>
              </div>

              {/* Wine Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-slate-gray-dark">
                    {wine.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-slate-gray font-medium">
                      {wine.winery}
                    </p>
                    <span className="text-sm text-wine-red font-medium">
                      {wine.vintage}
                    </span>
                  </div>
                  <p className="text-sm text-slate-gray mt-1">
                    {wine.region} • {wine.grapeVariety} • {wine.alcohol}
                  </p>
                </div>

                <p className="text-slate-gray text-sm leading-relaxed">
                  {wine.description}
                </p>

                {/* Tasting Notes */}
                <div>
                  <div className="text-sm font-medium text-slate-gray-dark mb-2">
                    Tasting Notes:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {wine.tastingNotes.map((note, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-soft-beige text-slate-gray text-xs rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-wine-red text-wine-red hover:bg-wine-red hover:text-white transition-all duration-200"
                >
                  <Wine className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-wine-red hover:bg-wine-red-light text-white px-8 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View Complete Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
}