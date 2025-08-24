import { featuredDeals, Product } from '@/lib/data';
import ProductCard from './ProductCard';

export default function FeaturedDeals() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Featured Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredDeals.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}