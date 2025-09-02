import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { products, Category } from '@/lib/data';

interface CategoryCardProps {
  category: Category;
}

// Map categories to a representative product image
const getCategoryImage = (categoryId: string) => {
  const categoryProductMap: { [key: string]: { image: string; alt: string } } = {
    'phones': { image: products.find(p => p.category === 'phones')?.image || 'https://images.unsplash.com/photo-1486946255434-a0292ed5e977?w=400&h=300&fit=crop&crop=center', alt: 'Smartphone' },
    'home-appliances': { image: products.find(p => p.category === 'home-appliances')?.image || 'https://images.unsplash.com/photo-1571175443453-1a6b0ec1ab1d?w=400&h=300&fit=crop&crop=center', alt: 'Refrigerator' },
    'accessories': { image: products.find(p => p.category === 'accessories')?.image || 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center', alt: 'Phone Case' },
    'games-and-consoles': { image: products.find(p => p.category === 'games-and-consoles')?.image || 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center', alt: 'PS5 Console' },
    'laptops': { image: products.find(p => p.category === 'laptops')?.image || 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1?w=400&h=300&fit=crop&crop=center', alt: 'Laptop' },
    'speakers-and-audios': { image: products.find(p => p.category === 'speakers-and-audios')?.image || 'https://images.unsplash.com/photo-1589254065878-42c9a3d25a05?w=400&h=300&fit=crop&crop=center', alt: 'Speaker' },
  };
  return categoryProductMap[categoryId] || { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center', alt: 'Generic Product' };
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const { image, alt } = getCategoryImage(category.id);
  const productCount = products.filter(p => p.category === category.id).length;

  return (
    <Link href={`/${category.id}`} className="block group">
      <Card className="hover:shadow-2xl transition-all duration-300 w-full max-w-[240px] mx-auto border border-gray-200 shadow-sm hover:scale-105 bg-white group-hover:border-black">
        <CardHeader className="p-6 pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
          </div>
          <CardTitle className="text-lg font-bold text-center text-black group-hover:text-gray-700 transition-colors">
            {category.displayName}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="relative mb-4">
            <Image 
              src={image} 
              alt={alt} 
              width={200} 
              height={140} 
              className="w-full h-32 object-cover rounded-lg group-hover:brightness-110 transition-all duration-300" 
            />
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
              {productCount} items
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}