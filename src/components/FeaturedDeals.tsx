import { featuredDeals, Product } from '@/lib/data';
import ProductCard from './ProductCard';
import { Badge } from '@/components/ui/badge';
import { Zap } from 'lucide-react';

export default function FeaturedDeals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {featuredDeals.map((product: Product) => (
        <div key={product.id} className="relative">
          <Badge className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 bg-black text-white px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            Featured
          </Badge>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}