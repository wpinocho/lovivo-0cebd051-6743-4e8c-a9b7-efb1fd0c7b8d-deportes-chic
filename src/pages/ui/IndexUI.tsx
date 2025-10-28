import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Zap, TrendingUp, Award, Truck } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative gradient-hero py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              ELEVA TU JUEGO
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Descubre la colección más innovadora de zapatillas deportivas. 
              Diseño, tecnología y rendimiento en cada paso.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => {
                  const productsSection = document.getElementById('products-section');
                  productsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-sport-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
              >
                Explorar Productos
              </button>
              <button 
                onClick={() => {
                  const collectionsSection = document.getElementById('collections-section');
                  collectionsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Ver Colecciones
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-blue to-sport-blue-light rounded-full mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tecnología Avanzada</h3>
              <p className="text-gray-600 text-sm">Innovación en cada detalle</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-orange to-sport-orange-light rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Alto Rendimiento</h3>
              <p className="text-gray-600 text-sm">Supera tus límites</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-pink to-sport-pink-light rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Calidad Premium</h3>
              <p className="text-gray-600 text-sm">Materiales de primera</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sport-blue-dark to-sport-blue rounded-full mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Envío Rápido</h3>
              <p className="text-gray-600 text-sm">Gratis en pedidos +$100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="text-gradient">Nuestras Colecciones</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Encuentra el estilo perfecto para tu deporte favorito
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Productos' 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-gray-600 text-lg">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description || '' 
                  : 'Lo mejor de nuestra tienda'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <button 
                onClick={handleShowAllProducts}
                className="bg-gradient-to-r from-sport-blue to-sport-pink text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105"
              >
                Ver Todos
              </button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <span className="text-4xl">👟</span>
              </div>
              <p className="text-gray-500 text-lg">
                No hay productos disponibles en esta colección.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};