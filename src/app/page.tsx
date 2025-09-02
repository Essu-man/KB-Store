import { categories, featuredDeals } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import FeaturedDeals from '@/components/FeaturedDeals';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Welcome to <br />
                <span className="text-white">Brandy's Shop</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
                Premium electronics and gadgets for the modern lifestyle. 
                Discover quality products with exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
                  View Categories
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <div className="text-sm text-gray-300">Latest Phones</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">💻</div>
                    <div className="text-sm text-gray-300">Premium Laptops</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎮</div>
                    <div className="text-sm text-gray-300">Gaming Gear</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🔊</div>
                    <div className="text-sm text-gray-300">Audio Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium selection of electronics and gadgets across carefully curated categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-3 text-sm font-medium bg-black text-white">
              ⚡ Featured Products
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Premium Selection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked products that represent the best in quality and innovation
            </p>
          </div>
          <FeaturedDeals />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-bold text-white">1000+</div>
              <div className="text-gray-300 text-lg">Premium Products</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-white">50K+</div>
              <div className="text-gray-300 text-lg">Satisfied Customers</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-white">24/7</div>
              <div className="text-gray-300 text-lg">Expert Support</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-bold text-white">99%</div>
              <div className="text-gray-300 text-lg">Quality Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Experience Premium Shopping
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our community of discerning customers who value quality, innovation, and exceptional service.
          </p>
          <Link href="/phones">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg font-semibold">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

