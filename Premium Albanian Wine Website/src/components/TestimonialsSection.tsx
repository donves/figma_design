import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  rating: number;
  avatar: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The Kallmet wines from Cobo Winery have become one of our most requested selections. The depth of flavor and authentic character perfectly complement our Nordic cuisine.",
      author: "Lars Andersen",
      title: "Head Sommelier",
      company: "Restaurant Noma",
      location: "Copenhagen, Denmark",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Albanian wines offer something truly unique in the Nordic market. The indigenous grape varieties and traditional methods create wines with remarkable character and terroir expression.",
      author: "Astrid Björk",
      title: "Wine Director",
      company: "Systembolaget",
      location: "Stockholm, Sweden",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Working with Kantina Nordic has been exceptional. Their knowledge of both Albanian terroir and Nordic preferences makes them the perfect distribution partner.",
      author: "Mikael Virtanen",
      title: "Beverage Manager", 
      company: "Hotel Kämp",
      location: "Helsinki, Finland",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "The Shesh i Bardhe from Kantina Arbëri pairs beautifully with our seafood dishes. It's become a signature pairing that our guests specifically request.",
      author: "Erik Svendsen",
      title: "Restaurant Owner",
      company: "Fiskeriet Youngstorget",
      location: "Oslo, Norway",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      quote: "The quality and consistency of these Albanian wines has impressed both our staff and customers. They represent exceptional value for premium wine experiences.",
      author: "Sigrid Magnusson",
      title: "Wine Buyer",
      company: "Vínbúð",
      location: "Reykjavik, Iceland",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      quote: "These wines tell a story of Albanian heritage that resonates with our customers. The terroir-driven approach aligns perfectly with Nordic values of authenticity and quality.",
      author: "Johan Lindqvist", 
      title: "Master Sommelier",
      company: "Gothenburg Wine Society",
      location: "Gothenburg, Sweden",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605860828801-70cc4727f11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW5lJTIwZ3JhcGVzJTIwaGFydmVzdHxlbnwxfHx8fDE3NTUwOTU2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wine grapes harvest background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-accent text-sm font-medium tracking-wider uppercase bg-white px-4 py-2 rounded-full shadow-sm">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-serif font-semibold text-slate-gray-dark leading-tight">
            Trusted by Nordic
            <span className="text-wine-red"> Professionals</span>
          </h2>
          <p className="mt-6 text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Hear from leading sommeliers, restaurant owners, and wine professionals 
            across Nordic countries about their experience with Albanian wines.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-wine-red/30 group-hover:text-wine-red/50 transition-colors duration-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-gray-dark leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-soft-beige">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="font-semibold text-slate-gray-dark text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-wine-red text-xs font-medium">
                    {testimonial.title}
                  </div>
                  <div className="text-slate-gray text-xs">
                    {testimonial.company}
                  </div>
                  <div className="text-slate-gray/70 text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-semibold text-wine-red mb-2">500+</div>
              <div className="text-slate-gray text-sm">Nordic Partners</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-wine-red mb-2">98%</div>
              <div className="text-slate-gray text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-wine-red mb-2">50+</div>
              <div className="text-slate-gray text-sm">Michelin Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-wine-red mb-2">5</div>
              <div className="text-slate-gray text-sm">Nordic Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}