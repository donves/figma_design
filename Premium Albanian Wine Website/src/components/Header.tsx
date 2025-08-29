import { Wine, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Our Wines", href: "#wines" },
    { name: "Wineries", href: "#wineries" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Wine className="w-8 h-8 text-wine-red" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-accent rounded-full opacity-80"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-slate-gray-dark">Kantina</span>
              <span className="text-xs tracking-widest text-slate-gray uppercase">Nordic Distribution</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-gray hover:text-wine-red transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Request Catalogue Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-wine-red hover:bg-wine-red-light text-white px-6 py-2.5 rounded-md transition-colors duration-200"
            >
              Request Catalogue
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-gray hover:text-wine-red transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-gray hover:text-wine-red transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-wine-red hover:bg-wine-red-light text-white mt-4 w-full"
              >
                Request Catalogue
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}