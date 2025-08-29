import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="lg:pr-8 space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-soft-beige px-4 py-2 rounded-full">
                  Premium Albanian Wines
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-semibold leading-tight text-slate-gray-dark">
                From Albania's Vineyards to the 
                <span className="text-wine-red"> Nordic Table</span>
              </h1>
              
              <p className="text-lg text-slate-gray leading-relaxed max-w-lg">
                Discover exceptional wines crafted by traditional Albanian kantinas, 
                carefully selected and distributed across Nordic countries for 
                discerning palates and premium establishments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-wine-red hover:bg-wine-red-light text-white px-8 py-3 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Discover Our Selection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-wine-red text-wine-red hover:bg-wine-red hover:text-white px-8 py-3 rounded-md transition-all duration-200"
              >
                View Wineries
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-wine-red">12+</div>
                <div className="text-sm text-slate-gray font-medium">Partner Wineries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-wine-red">150+</div>
                <div className="text-sm text-slate-gray font-medium">Premium Wines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-semibold text-wine-red">5</div>
                <div className="text-sm text-slate-gray font-medium">Nordic Countries</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588250482688-3613210556ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwYm90dGxlJTIwZ2xhc3MlMjBlbGVnYW50fGVufDF8fHx8MTc1NTA5NTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Elegant wine bottle and glass"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine-red/20 via-transparent to-transparent"></div>
              
              {/* Floating Element */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-sm text-slate-gray font-medium">Featured Selection</div>
                <div className="text-lg font-serif font-semibold text-wine-red">Kallmet Reserve 2019</div>
                <div className="text-xs text-slate-gray">Cobo Winery, Berat</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-wine-red/10 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-gray" />
        </div>
      </div>
    </section>
  );
}