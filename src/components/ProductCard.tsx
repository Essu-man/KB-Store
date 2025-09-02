import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Product } from '@/lib/data';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const getConditionColor = (condition?: string) => {
    switch (condition) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'used': return 'bg-yellow-100 text-yellow-800';
      case 'refurbished': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  return (
    <Card className="hover:shadow-2xl transition-all duration-300 group border border-gray-200 shadow-sm hover:scale-105 bg-white group-hover:border-black">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image 
            src={product.image} 
            alt={product.name} 
            width={300} 
            height={200} 
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          {product.condition && (
            <Badge 
              className={`absolute top-3 left-3 ${getConditionColor(product.condition)} border-0`}
            >
              {product.condition}
            </Badge>
          )}
          {product.rating && (
            <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
              {renderStars(product.rating)} {product.rating}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-3">
          {product.brand && (
            <Badge variant="outline" className="text-xs border-gray-300 text-gray-700">
              {product.brand}
            </Badge>
          )}
          
          <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-gray-700 transition-colors text-black">
            {product.name}
          </CardTitle>
          
          {product.subcategory && (
            <p className="text-sm text-gray-500 font-medium">{product.subcategory}</p>
          )}
          
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-black">
              {formatPrice(product.price)}
            </span>
            {product.rating && (
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <span>{renderStars(product.rating)}</span>
                <span className="font-medium">({product.rating})</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link href={`/products/${product.id}`} className="w-full">
          <Button className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-3">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
