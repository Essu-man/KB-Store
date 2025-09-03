import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Filter, ArrowUpDown } from 'lucide-react';
import { getIcon, IconName } from '@/lib/icons';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = categories.find(c => c.id === categoryId);
  const filteredProducts = products.filter((p) => p.category === categoryId);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="text-gray-600">The category you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  const IconComponent = getIcon(category.icon as IconName);

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-black text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex-shrink-0">
              <IconComponent className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
                {category.displayName}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl">{category.description}</p>
            </div>
          </div>
          
          {/* Subcategories */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {category.subcategories.map((subcategory) => (
              <Badge key={subcategory} className="px-3 py-1 sm:px-4 sm:py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors text-xs sm:text-sm">
                {subcategory}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
              {filteredProducts.length} premium products available
            </p>
            <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
              <Button variant="secondary" size="sm" className="flex-1 sm:flex-none border border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm">
                <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Sort by Price
              </Button>
              <Button variant="secondary" size="sm" className="flex-1 sm:flex-none border border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="mb-4 sm:mb-6">
              <IconComponent className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">
              No products found
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-md mx-auto">
              We&apos;re working on adding more premium products to this category.
            </p>
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
                Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 text-center">Explore Other Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {categories
              .filter(c => c.id !== categoryId)
              .slice(0, 6)
              .map((relatedCategory) => {
                const RelatedIconComponent = getIcon(relatedCategory.icon as IconName);
                return (
                  <Link key={relatedCategory.id} href={`/${relatedCategory.id}`}>
                    <div className="text-center p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-black transition-all cursor-pointer bg-white">
                      <div className="mb-2 sm:mb-3">
                        <RelatedIconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-gray-700 mx-auto" />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-black">
                        {relatedCategory.displayName}
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}