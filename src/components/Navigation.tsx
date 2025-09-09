import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre Nosotros" },
    { href: "/services", label: "Servicios" },
    { href: "/contact", label: "Contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <Heart className="h-6 w-6 text-brand-accent" />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Asesor Tinder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  isActive(item.href) ? "text-brand-accent" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="cta" size="sm">
              Comenzar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "block text-sm font-medium transition-colors hover:text-brand-accent",
                  isActive(item.href) ? "text-brand-accent" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="cta" size="sm" className="w-full">
              Comenzar Ahora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;