import { featuredDeals, Product } from '@/lib/data';
import ProductCard from './ProductCard';
import { Badge } from '@/components/ui/badge';

export default function FeaturedDeals() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredDeals.map((product: Product) => (
        <div key={product.id} className="relative">
          <Badge className="absolute -top-3 -right-3 z-10 bg-black text-white px-4 py-2 text-sm font-semibold shadow-lg">
            ⚡ Featured
          </Badge>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}