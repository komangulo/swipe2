
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@asesortinder.com",
      description: "Respuesta en menos de 24h"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: "+34 900 123 456",
      description: "Lun-Vie 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: "Madrid, España",
      description: "Atención online en toda España"
    },
    {
      icon: Clock,
      title: "Horario",
      details: "9:00 - 18:00",
      description: "Lunes a Viernes"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkgzlzkn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Hemos recibido tu consulta. Te contactaremos pronto.",
        });
        form.reset();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-subtle">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Contáctanos y <span className="bg-gradient-primary bg-clip-text text-transparent">Mejora tu Perfil Hoy Mismo</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
                ¿Listo para conseguir más matches en Tinder? Nuestro equipo de expertos en asesoramiento está aquí para ayudarte a transformar tu experiencia.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-brand-lg transition-all hover:scale-105">
                    <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-brand-primary font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Contact Form */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Solicita tu Consulta Gratuita</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="Tu nombre" 
                          className="mt-1" 
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="tu@email.com" 
                          className="mt-1" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Teléfono (opcional)</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        placeholder="+34 600 000 000" 
                        className="mt-1" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Servicio de interés</Label>
                      <select 
                        id="service" 
                        name="service"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="basico">Plan Básico - €49</option>
                        <option value="premium">Plan Premium - €99</option>
                        <option value="vip">Plan VIP - €199</option>
                        <option value="consulta">Solo consulta gratuita</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Cuéntanos tu situación</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        placeholder="Describe brevemente tu experiencia actual en Tinder y qué te gustaría mejorar..."
                        className="mt-1"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </form>
                </Card>

                {/* Info Section */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">¿Por qué elegirnos como tu asesor Tinder?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Somos especialistas en optimización de perfiles Tinder con experiencia comprobada. Nuestro enfoque personalizado se adapta a tu estilo y objetivos para maximizar tus resultados.
                    </p>
                  </div>

                  <Card className="p-6 bg-gradient-primary text-white">
                    <h3 className="font-semibold mb-3">✨ Consulta Gratuita de 15 minutos</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Antes de empezar, ofrecemos una consulta gratuita donde analizamos tu perfil actual y te damos consejos inmediatos para mejorar tus matches.
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Análisis rápido de tu perfil</li>
                      <li>• Identificación de puntos de mejora</li>
                      <li>• Recomendaciones personalizadas</li>
                      <li>• Sin compromiso</li>
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-3">Proceso de Trabajo</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <strong>Consulta inicial:</strong> Analizamos tu perfil actual y objetivos
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <strong>Estrategia personalizada:</strong> Creamos un plan específico para ti
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <strong>Implementación:</strong> Optimizamos fotos, biografía y estrategias
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-brand-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                        <div>
                          <strong>Seguimiento:</strong> Monitoreamos resultados y ajustamos
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">¿Cuánto tiempo tarda en verse mejoras?</h3>
                  <p className="text-muted-foreground text-sm">
                    La mayoría de nuestros clientes ven un aumento en matches dentro de las primeras 48-72 horas tras la optimización del perfil.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">¿Trabajáis con todo tipo de perfiles?</h3>
                  <p className="text-muted-foreground text-sm">
                    Sí, nuestro asesoramiento se adapta a diferentes edades, estilos y objetivos. Cada estrategia es 100% personalizada.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">¿Ofrecéis garantía de resultados?</h3>
                  <p className="text-muted-foreground text-sm">
                    En nuestro plan VIP incluimos garantía de mejora. Si no ves resultados, trabajamos contigo hasta conseguirlos.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-2">¿Es confidencial el servicio?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutamente. Toda la información y fotos que compartas con nosotros se mantiene en estricta confidencialidad.
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

export default Contact;
