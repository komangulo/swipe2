import Layout from "@/components/Layout";
import { ArrowRight, Camera, Edit3, MessageSquare, TrendingUp, Users, Award, Star, CheckCircle, BarChart3, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: Camera,
      title: "Gestión de Fotos",
      description: "Selección y edición profesional de fotos para un perfil irresistible en Tinder."
    },
    {
      icon: Edit3,
      title: "Optimización del Perfil",
      description: "Creación y optimización de tu biografía para destacar y atraer a más personas."
    },
    {
      icon: MessageSquare,
      title: "Asesoría Personalizada",
      description: "Consejos personalizados para mejorar tus conversaciones y estrategias de conexión."
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Satisfechos" },
    { number: "85%", label: "Aumento de Matches" },
    { number: "92%", label: "Éxito en Citas" }
  ];

  const detailedStats = [
    { 
      icon: TrendingUp,
      number: "3.5x", 
      label: "Incremento promedio de matches",
      description: "En las primeras 2 semanas"
    },
    { 
      icon: Users,
      number: "24h", 
      label: "Tiempo para primeros resultados",
      description: "Optimización inmediata del perfil"
    },
    { 
      icon: Heart,
      number: "78%", 
      label: "Consiguen al menos 1 cita",
      description: "En el primer mes de servicio"
    },
    { 
      icon: BarChart3,
      number: "95%", 
      label: "Satisfacción del cliente",
      description: "Recomendarían nuestro servicio"
    }
  ];

  const results = [
    {
      metric: "Matches por semana",
      before: "2-3",
      after: "15-25",
      improvement: "+650%"
    },
    {
      metric: "Tiempo de respuesta",
      before: "3-5 días",
      after: "2-6 horas",
      improvement: "+80%"
    },
    {
      metric: "Calidad de conversaciones",
      before: "20% duran +3 mensajes",
      after: "75% duran +10 mensajes",
      improvement: "+275%"
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      age: "28 años",
      beforeMatches: "3 matches/mes",
      afterMatches: "45 matches/mes",
      improvement: "1400%",
      quote: "En 2 semanas pasé de 3 matches por mes a más de 40. Mi perfil ahora refleja realmente quién soy y las conversaciones fluyen naturalmente.",
      result: "5 citas en el primer mes, actualmente en relación estable"
    },
    {
      name: "Miguel R.",
      age: "32 años", 
      beforeMatches: "1 match/semana",
      afterMatches: "12 matches/semana",
      improvement: "1100%",
      quote: "Pensaba que el problema era yo, pero era mi perfil. Ahora entiendo qué buscan realmente y cómo presentarme de forma auténtica.",
      result: "8 citas en 6 semanas, encontró pareja estable"
    },
    {
      name: "Alejandro P.",
      age: "25 años",
      beforeMatches: "0 matches/mes",
      afterMatches: "28 matches/mes", 
      improvement: "∞",
      quote: "Llevaba 6 meses sin matches. En solo 3 días con el nuevo perfil conseguí 15 matches y ya tengo mi primera cita programada.",
      result: "De 0 a 28 matches mensuales en 1 semana"
    }
  ];

  const benefits = [
    "Análisis completo de tu perfil actual",
    "Estrategias probadas que realmente funcionan", 
    "Aumento garantizado de matches y conexiones",
    "Soporte personalizado durante todo el proceso",
    "Resultados visibles en 48-72 horas",
    "Coach especializado en psicología de citas online"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              🔥 Asesor #1 en España
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
Asesor Tinder Profesional: <span className="text-brand-accent">Maximiza tus Matches</span> y Citas Reales
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
              Servicio de asesoramiento y gestión profesional para tu perfil de Tinder. Aumenta tus matches, mejora tus conversaciones y consigue más citas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="animate-pulse-glow">
                  Empieza Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Consulta Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
  Resultados Comprobados de Nuestro <span className="bg-gradient-primary bg-clip-text text-transparent">Asesor Tinder</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Datos reales de nuestros clientes que demuestran la efectividad de nuestro método.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {detailedStats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-brand-lg transition-all">
                  <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-brand-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>

            {/* Results Comparison */}
            <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Antes y Después con Nuestro Asesoramiento en Tinder</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <Card key={index} className="p-6">
                    <h4 className="font-semibold mb-4 text-center">{result.metric} con Asesor Tinder</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Antes:</span>
                        <span className="text-red-500 font-medium">{result.before}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Después:</span>
                        <span className="text-green-500 font-medium">{result.after}</span>
                      </div>
                      <div className="text-center pt-2">
                        <Badge variant="secondary" className="bg-brand-accent text-white">
                          {result.improvement}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Servicios de <span className="bg-gradient-primary bg-clip-text text-transparent">Asesor Tinder Profesional</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nuestros expertos en gestión de perfiles Tinder te ayudan a destacar, conseguir más matches y tener conversaciones exitosas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-brand-xl transition-all hover:scale-105 group">
                  <div className="bg-gradient-accent p-4 rounded-full w-fit mx-auto mb-6 group-hover:animate-pulse-glow">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  ¿Por qué Elegir un <span className="text-brand-accent">Asesor Tinder Profesional</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Somos expertos en optimización de perfiles Tinder con años de experiencia ayudando a personas como tú a conseguir resultados reales.
                </p>

                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-brand-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/services">
                    <Button variant="professional" size="lg">
                      Ver Nuestros Planes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Card className="p-8 bg-gradient-primary text-white">
                <div className="text-center">
                  <Award className="h-12 w-12 text-brand-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Resultados Garantizados por Nuestro Equipo de Expertos</h3>
                  <p className="mb-6 opacity-90">
                    El 92% de nuestros clientes consiguen al menos 3x más matches en las primeras 2 semanas.
                  </p>
                  
                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <div className="text-3xl font-bold text-brand-accent mb-1">85%</div>
                    <div className="text-sm opacity-80">Promedio de aumento en matches</div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-brand-accent" />
                    ))}
                  </div>
                  <p className="text-sm opacity-80">Valoración promedio de nuestros clientes</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Casos de Éxito con Nuestro <span className="bg-gradient-primary bg-clip-text text-transparent">Asesor Tinder</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Historias reales de transformación con resultados medibles y verificables.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-brand-xl transition-all">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-brand-primary mb-2">
                      {testimonial.improvement}
                    </div>
                    <div className="text-sm text-muted-foreground">de incremento</div>
                  </div>
                  
                  <div className="bg-gradient-accent/10 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Antes:</div>
                        <div className="font-medium text-red-500">{testimonial.beforeMatches}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Después:</div>
                        <div className="font-medium text-green-500">{testimonial.afterMatches}</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground mb-2">{testimonial.age}</div>
                    <div className="text-sm text-brand-accent font-medium">
                      ✅ {testimonial.result}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-brand-accent">Transformar tu Éxito</span> en Tinder?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a más de 500 personas que ya han mejorado sus matches y conseguido citas exitosas con nuestro asesoramiento profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="animate-pulse-glow">
                  Solicitar Asesoría Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Resultados en 48h</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>100% Confidencial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
