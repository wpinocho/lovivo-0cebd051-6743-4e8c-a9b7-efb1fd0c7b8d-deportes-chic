import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Award, Target, Users, Zap, Heart, TrendingUp } from 'lucide-react'

/**
 * EDITABLE UI COMPONENT - AboutUI
 */

export default function AboutUI() {
  return (
    <EcommerceTemplate pageTitle="Sobre Nosotros">
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 -mt-6">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            NUESTRA HISTORIA
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Desde 2020, revolucionando el mundo del deporte con las mejores zapatillas
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">
                <span className="text-gradient">Nuestra Misión</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                En SportKicks, creemos que cada atleta merece el mejor equipamiento para alcanzar sus metas. 
                Nos dedicamos a ofrecer zapatillas deportivas de la más alta calidad, combinando tecnología 
                de punta con diseños innovadores.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestra pasión es ayudarte a superar tus límites, ya seas un atleta profesional o alguien 
                que está comenzando su viaje fitness. Cada paso cuenta, y queremos estar contigo en cada uno de ellos.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop" 
                  alt="Nuestra misión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-sport-blue to-sport-pink rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="text-gradient">Nuestros Valores</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Los principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-blue to-sport-blue-light rounded-full mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovación</h3>
                <p className="text-gray-600">
                  Siempre buscando las últimas tecnologías para mejorar tu rendimiento
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-orange to-sport-orange-light rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Calidad</h3>
                <p className="text-gray-600">
                  Solo trabajamos con las mejores marcas y materiales premium
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-pink to-sport-pink-light rounded-full mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Pasión</h3>
                <p className="text-gray-600">
                  Amamos el deporte y queremos compartir esa pasión contigo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-sport-blue via-sport-pink to-sport-orange">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-black mb-2">50K+</div>
              <div className="text-xl font-semibold opacity-90">Clientes Felices</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-xl font-semibold opacity-90">Productos</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">4.9★</div>
              <div className="text-xl font-semibold opacity-90">Calificación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              <span className="text-gradient">Nuestro Equipo</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Apasionados por el deporte y comprometidos con tu éxito
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover-lift overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-sport-blue to-sport-blue-light"></div>
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-1">Carlos Rodríguez</h3>
                <p className="text-sport-blue font-semibold mb-2">CEO & Fundador</p>
                <p className="text-gray-600 text-sm">
                  Ex-atleta profesional con 15 años de experiencia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-sport-orange to-sport-orange-light"></div>
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-1">María González</h3>
                <p className="text-sport-orange font-semibold mb-2">Directora de Producto</p>
                <p className="text-gray-600 text-sm">
                  Especialista en tecnología deportiva y biomecánica
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover-lift overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-sport-pink to-sport-pink-light"></div>
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="text-xl font-bold mb-1">Juan Martínez</h3>
                <p className="text-sport-pink font-semibold mb-2">Jefe de Experiencia</p>
                <p className="text-gray-600 text-sm">
                  Dedicado a crear la mejor experiencia para nuestros clientes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">
            <span className="text-gradient">¿Listo para Elevar tu Juego?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Únete a miles de atletas que ya confían en SportKicks para alcanzar sus metas deportivas
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-sport-blue to-sport-pink text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Explorar Productos
          </button>
        </div>
      </section>
    </EcommerceTemplate>
  )
}