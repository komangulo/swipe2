import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <Heart className="h-6 w-6 text-brand-accent" />
              <span>TinderPro</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Tu asesor personal en Tinder para maximizar matches y conexiones exitosas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-brand-accent transition-colors">Inicio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-accent transition-colors">Servicios</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-accent transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Gestión de Fotos</li>
              <li className="text-gray-300">Optimización del Perfil</li>
              <li className="text-gray-300">Asesoría Personalizada</li>
              <li className="text-gray-300">Coach de Conversaciones</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@tinderpro.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 TinderPro. Todos los derechos reservados. Asesoría profesional para tu éxito en Tinder.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;