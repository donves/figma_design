import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Wines", href: "#wines" },
    { name: "Wineries", href: "#wineries" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Wine Import Regulations", href: "#" },
    { name: "Age Verification", href: "#" }
  ];

  const distributorCountries = [
    "Denmark", "Sweden", "Norway", "Finland", "Iceland"
  ];

  return (
    <footer className="bg-slate-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Wine className="w-8 h-8 text-wine-red" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-accent rounded-full opacity-80"></div>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-semibold">Kantina</span>
                  <span className="text-xs tracking-widest text-gray-300 uppercase">Nordic Distribution</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Bridging Albanian wine heritage with Nordic sophistication. 
                Premium wine distribution across Scandinavia and Iceland.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-wine-red transition-colors duration-200"
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-wine-red transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-wine-red flex-shrink-0 mt-0.5" />
                  <div className="text-gray-300 text-sm">
                    <div>Nørrebrogade 45, 2nd Floor</div>
                    <div>2200 Copenhagen N, Denmark</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-wine-red flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    +45 33 12 45 67
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-wine-red flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    info@kantina-nordic.com
                  </div>
                </div>
              </div>

              {/* Distribution Coverage */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold mb-3 text-gray-200">Distribution Coverage</h4>
                <div className="flex flex-wrap gap-2">
                  {distributorCountries.map((country, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Distributor Portal */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">For Partners</h3>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-wine-red hover:bg-wine-red-light text-white transition-colors duration-200"
                >
                  Distributor Login
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  Request Catalogue
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  Become a Partner
                </Button>
              </div>

              <div className="pt-4 border-t border-gray-600">
                <div className="text-xs text-gray-400 mb-2">Newsletter</div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  Get updates on new wines, events, and exclusive offers.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wine-red"
                  />
                  <Button size="sm" className="bg-wine-red hover:bg-wine-red-light">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-600" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Kantina Nordic Distribution. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-wine-red transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Age Verification Notice */}
          <div className="mt-6 pt-6 border-t border-gray-600">
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              This website contains information about alcoholic beverages. You must be 18 years or older to visit this site. 
              Please enjoy responsibly. Alcohol content and availability may vary by region.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}