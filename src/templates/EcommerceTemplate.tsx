import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white/95 backdrop-blur-sm ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sport-blue to-sport-pink rounded-full flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className="font-black text-2xl">
                <span className="text-gradient">SPORT</span>
                <span className="text-gray-900">KICKS</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-sport-blue transition-colors font-semibold"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-sport-blue transition-colors font-semibold"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Profile & Cart */}
          <div className="flex items-center space-x-2">
            <ProfileMenu />
            
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-sport-blue/10"
                aria-label="Ver carrito"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-sport-orange to-sport-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-4xl font-black">
              <span className="text-gradient">{pageTitle}</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sport-blue to-sport-pink rounded-full flex items-center justify-center">
                <span className="text-white font-black text-2xl">S</span>
              </div>
              <span className="font-black text-3xl text-white">
                SPORT<span className="text-sport-orange">KICKS</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Tu tienda de confianza para zapatillas deportivas de alta calidad. 
              Innovación, estilo y rendimiento en cada paso.
            </p>
            <SocialLinks />
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Enlaces</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <p>Email: info@sportkicks.com</p>
              <p>Tel: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2024 SportKicks. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}