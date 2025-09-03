import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import FeaturedDeals from '@/components/FeaturedDeals';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Smartphone, Laptop, Gamepad2, Volume2, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 sm:py-16 lg:py-24 mb-8 sm:mb-12 lg:mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Welcome to <br />
                <span className="text-white">Brandy&apos;s Shop</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-300 max-w-2xl">
                Premium electronics and gadgets for the modern lifestyle. 
                Discover quality products with exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                  Shop Now
                </Button>
                <Button size="lg" variant="secondary" className="border border-white text-white hover:bg-white hover:text-black bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                  View Categories
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                    <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-white mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-300">Latest Phones</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                    <Laptop className="h-6 w-6 sm:h-8 sm:w-8 text-white mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-300">Premium Laptops</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                    <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-white mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-300">Gaming Gear</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 sm:p-4 text-center">
                    <Volume2 className="h-6 w-6 sm:h-8 sm:w-8 text-white mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-300">Audio Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of electronics and gadgets across carefully curated categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-black text-white">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Featured Products
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Premium Selection
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked products that represent the best in quality and innovation
            </p>
          </div>
          <FeaturedDeals />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-center">
            <div className="space-y-2 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">1000+</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Premium Products</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">50K+</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Satisfied Customers</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Expert Support</div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">99%</div>
              <div className="text-gray-300 text-sm sm:text-base lg:text-lg">Quality Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Experience Premium Shopping
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join our community of discerning customers who value quality, innovation, and exceptional service.
          </p>
          <Link href="/phones">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

