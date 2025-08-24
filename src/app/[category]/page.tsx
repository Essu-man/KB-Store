import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const filteredProducts = products.filter((p) => p.category === params.category);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 capitalize">{params.category.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}