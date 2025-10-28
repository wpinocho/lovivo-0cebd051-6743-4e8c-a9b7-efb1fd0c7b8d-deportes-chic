import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'
import { ArrowRight } from 'lucide-react'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border-0 shadow-lg overflow-hidden hover-lift group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
              👟
            </div>
          )}
          
          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-sport-orange to-sport-orange-light text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                DESTACADO
              </span>
            </div>
          )}
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-black text-2xl mb-2 drop-shadow-lg">
              {collection.name}
            </h3>
            {collection.description && (
              <p className="text-white/90 text-sm line-clamp-2 drop-shadow-md">
                {collection.description}
              </p>
            )}
          </div>
        </div>
        
        <div className="p-5">
          <Button 
            onClick={() => onViewProducts(collection.id)}
            className="w-full bg-gradient-to-r from-sport-blue to-sport-pink hover:from-sport-blue-dark hover:to-sport-pink text-white font-bold rounded-full shadow-md hover:shadow-xl transition-all group"
          >
            Ver Productos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}