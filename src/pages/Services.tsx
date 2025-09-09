import Layout from "@/components/Layout";
import { Camera, Edit3, MessageSquare, Crown, Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Gestión de Fotos",
      description: "Selección y edición profesional de fotos para un perfil irresistible",
      features: [
        "Análisis de tus fotos actuales",
        "Selección de las mejores imágenes",
        "Edición y optimización profesional",
        "Guía para nuevas sesiones de fotos"
      ]
    },
    {
      icon: Edit3,
      title: "Optimización del Perfil",
      description: "Creación y optimización de tu biografía para destacar y atraer",
      features: [
        "Biografía Tinder optimizada",
        "Palabras clave atractivas",
        "Llamadas a la acción efectivas",
        "Configuración de preferencias"
      ]
    },
    {
      icon: MessageSquare,
      title: "Asesoría Personalizada",
      description: "Consejos personalizados para mejorar conversaciones y estrategias",
      features: [
        "Coach de conversaciones Tinder",
        "Estrategias de primer mensaje",
        "Técnicas de engagement",
        "Seguimiento personalizado"
      ]
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "49",
      period: "una vez",
      description: "Perfecto para empezar a mejorar tu perfil",
      features: [
        "Análisis completo del perfil",
        "Optimización de biografía",
        "Selección de 3-5 fotos",
        "Guía de buenas prácticas",
        "1 consulta de seguimiento"
      ],
      popular: false,
      cta: "Empezar Básico"
    },
    {
      name: "Premium",
      price: "99",
      period: "una vez",
      description: "La opción más popular para resultados garantizados",
      features: [
        "Todo lo del plan Básico",
        "Pdf algoritmo y uso correcto de Tinder",
        "Gestión completa de fotos",
        "Edición profesional de imágenes",
        "3 consultas de seguimiento",
        "Soporte prioritario"
      ],
      popular: true,
      cta: "Elegir Premium"
    },
    {
      name: "VIP",
      price: "199",
      period: "una vez",
      description: "Servicio completo con gestión total de tu perfil",
      features: [
        "Pdf algoritmo y uso correcto de Tinder",
        "Todo lo del plan Premium",
        "Sesión de fotos profesional",
        "Estrategias avanzadas",
        "Garantía de resultados",
        "Seguimiento por 3 meses"
      ],
      popular: false,
      cta: "Ir VIP"
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      text: "Gracias a su asesoramiento, mis matches se triplicaron en solo 2 semanas. El coach de Tinder realmente sabe lo que hace.",
      rating: 5
    },
    {
      name: "Ana L.",
      text: "Mi perfil nunca se había visto tan bien. La gestión de fotos fue increíble y ahora tengo citas cada fin de semana.",
      rating: 5
    },
    {
      name: "Miguel R.",
      text: "La asesoría personalizada cambió completamente mi forma de usar Tinder. Ahora sé exactamente qué decir y cuándo.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Nuestros Planes: <span className="bg-gradient-primary bg-clip-text text-transparent">Elige el que Mejor se Adapta a Ti</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
                Servicios profesionales de asesoramiento Tinder diseñados para maximizar tus matches y conseguir citas exitosas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">¿Qué Incluyen Nuestros Servicios?</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 hover:shadow-brand-lg transition-all hover:scale-105">
                    <div className="bg-gradient-accent p-3 rounded-full w-fit mb-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <Check className="h-4 w-4 text-brand-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Planes y Precios</h2>
              <p className="text-center text-muted-foreground mb-12">
                Elige el plan de asesoría Tinder que mejor se adapte a tus necesidades y presupuesto
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`p-8 relative hover:shadow-brand-xl transition-all ${
                      plan.popular ? 'border-brand-accent shadow-brand-lg scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-white">
                        Más Popular
                      </Badge>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center space-x-1 mb-2">
                        <span className="text-4xl font-bold text-brand-primary">€{plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-brand-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? "cta" : "professional"} 
                      className="w-full"
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 hover:shadow-brand-lg transition-all">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-brand-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="font-semibold text-brand-primary">- {testimonial.name}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Crown className="h-12 w-12 text-brand-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Éxito en Tinder?</h2>
              <p className="text-xl mb-8 opacity-90">
                Únete a más de 500 personas que ya han mejorado sus matches y citas con nuestro asesoramiento profesional.
              </p>
              <div className="space-x-4">
                <Button variant="cta" size="xl">
                  Empezar Ahora
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Consulta Gratis
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;