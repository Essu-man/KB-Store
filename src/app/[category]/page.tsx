import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories.find(c => c.id === categoryId);
  const filteredProducts = products.filter((p) => p.category === categoryId);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="text-6xl">{category.icon}</div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {category.displayName}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">{category.description}</p>
            </div>
          </div>
          
          {/* Subcategories */}
          <div className="flex flex-wrap gap-3 mb-8">
            {category.subcategories.map((subcategory) => (
              <Badge key={subcategory} className="px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors">
                {subcategory}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-gray-300 text-lg">
              {filteredProducts.length} premium products available
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                Sort by Price
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">{category.icon}</div>
            <h3 className="text-3xl font-bold text-black mb-4">
              No products found
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We're working on adding more premium products to this category.
            </p>
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Explore Other Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories
              .filter(c => c.id !== categoryId)
              .slice(0, 6)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/${relatedCategory.id}`}>
                  <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-black transition-all cursor-pointer bg-white">
                    <div className="text-3xl mb-3">{relatedCategory.icon}</div>
                    <div className="text-sm font-semibold text-black">
                      {relatedCategory.displayName}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}