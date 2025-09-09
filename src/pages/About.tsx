import Layout from "@/components/Layout";
import { Users, Award, Target, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clientes Satisfechos" },
    { icon: TrendingUp, value: "85%", label: "Aumento de Matches" },
    { icon: Award, value: "3 años", label: "Experiencia Profesional" },
    { icon: Target, value: "92%", label: "Éxito en Citas" },
  ];

  return (
    <Layout>
      {/* SEO optimized meta tags will be handled by head management */}
      <div className="bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Quiénes Somos: <span className="bg-gradient-primary bg-clip-text text-transparent">Expertos en Éxito Digital</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
                Somos especialistas en asesoramiento Tinder con años de experiencia ayudando a personas como tú a conseguir más matches, mejores conversaciones y citas exitosas.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-brand-lg transition-all hover:scale-105">
                  <stat.icon className="h-8 w-8 text-brand-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-brand-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    En TinderPro creemos que todo el mundo merece encontrar conexiones auténticas. Nuestro enfoque se basa en la gestión profesional de perfiles, el asesoramiento personalizado y estrategias probadas que realmente funcionan.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Como expertos en optimización de perfiles Tinder, sabemos exactamente qué fotos destacan, cómo escribir biografías que capturen la atención, y qué estrategias de conversación generan más matches y citas exitosas.
                  </p>
                </div>
                
                <div className="bg-gradient-primary p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Por qué confiar en nosotros?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>Consultores certificados en marketing digital y psicología social</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Target className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>Metodología probada con más de 500 clientes exitosos</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <TrendingUp className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>Resultados medibles y garantía de mejora</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Users className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>Atención personalizada y seguimiento continuo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Nuestro Enfoque Profesional</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 hover:shadow-brand-lg transition-all">
                  <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">Experiencia Comprobada</h3>
                  <p className="text-muted-foreground text-sm">
                    Años de experiencia analizando qué funciona en Tinder y aplicando técnicas de marketing digital al dating online.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-brand-lg transition-all">
                  <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">Resultados Personalizados</h3>
                  <p className="text-muted-foreground text-sm">
                    Cada cliente es único. Adaptamos nuestras estrategias de asesoría Tinder a tu personalidad y objetivos específicos.
                  </p>
                </Card>

                <Card className="p-6 hover:shadow-brand-lg transition-all">
                  <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">Mejora Continua</h3>
                  <p className="text-muted-foreground text-sm">
                    Monitoreamos tus resultados y ajustamos la estrategia para maximizar tus matches y conexiones exitosas.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;