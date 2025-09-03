'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { products, Category } from '@/lib/data';
import { getIcon, IconName } from '@/lib/icons';

interface CategoryCardProps {
  category: Category;
}

// Map categories to a representative product image with reliable fallbacks
const getCategoryImage = (categoryId: string) => {
  // First try to get a product image from the category
  const categoryProduct = products.find(p => p.category === categoryId);
  
  // If we have a product with an image, use it
  if (categoryProduct?.image) {
    return { image: categoryProduct.image, alt: categoryProduct.name };
  }
  
  // Fallback to reliable category-specific images
  const categoryImageMap: { [key: string]: { image: string; alt: string } } = {
    'phones': { 
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Smartphone' 
    },
    'home-appliances': { 
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Home Appliance' 
    },
    'accessories': { 
      image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Phone Accessories' 
    },
    'games-and-consoles': { 
      image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Gaming Console' 
    },
    'laptops': { 
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Laptop Computer' 
    },
    'speakers-and-audios': { 
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center&auto=format', 
      alt: 'Audio Speaker' 
    },
  };
  
  return categoryImageMap[categoryId] || { 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center&auto=format', 
    alt: 'Generic Product' 
  };
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const { image, alt } = getCategoryImage(category.id);
  const productCount = products.filter(p => p.category === category.id).length;
  const IconComponent = getIcon(category.icon as IconName);

  return (
    <Link href={`/${category.id}`} className="block group">
      <Card className="hover:shadow-2xl transition-all duration-300 w-full max-w-[240px] mx-auto border border-gray-200 shadow-sm hover:scale-105 bg-white group-hover:border-black">
        <CardHeader className="p-4 sm:p-6 pb-4">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 group-hover:text-black" />
            </div>
          </div>
          <CardTitle className="text-base sm:text-lg font-bold text-center text-black group-hover:text-gray-700 transition-colors">
            {category.displayName}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="relative mb-3 sm:mb-4">
            <Image 
              src={image} 
              alt={alt} 
              width={200} 
              height={140} 
              className="w-full h-24 sm:h-32 object-cover rounded-lg group-hover:brightness-110 transition-all duration-300" 
              onError={(e) => {
                // Fallback to a generic placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center&auto=format';
              }}
            />
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 text-xs font-medium text-white">
              {productCount} items
            </div>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}