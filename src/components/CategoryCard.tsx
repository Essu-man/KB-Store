import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';

interface CategoryCardProps {
  category: string;
}

// Map categories to a representative product image
const getCategoryImage = (category: string) => {
  const categoryProductMap: { [key: string]: { image: string; alt: string } } = {
    'phones': { image: products.find(p => p.category === 'phones')?.image || 'https://images.unsplash.com/photo-1486946255434-a0292ed5e977', alt: 'Smartphone' },
    'home-appliances': { image: products.find(p => p.category === 'home-appliances')?.image || 'https://images.unsplash.com/photo-1571175443453-1a6b0ec1ab1d', alt: 'Refrigerator' },
    'accessories': { image: products.find(p => p.category === 'accessories')?.image || 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05', alt: 'Phone Case' },
    'games-and-consoles': { image: products.find(p => p.category === 'games-and-consoles')?.image || 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06', alt: 'PS5 Console' },
    'laptops': { image: products.find(p => p.category === 'laptops')?.image || 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1', alt: 'Laptop' },
    'speakers-and-audios': { image: products.find(p => p.category === 'speakers-and-audios')?.image || 'https://images.unsplash.com/photo-1589254065878-42c9a3d25a05', alt: 'Speaker' },
  };
  return categoryProductMap[category] || { image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', alt: 'Generic Product' };
};

export default function CategoryCard({ category }: CategoryCardProps) {
  const { image, alt } = getCategoryImage(category);

  return (
    <Link href={`/${category}`} className="block">
      <Card className="hover:shadow-lg transition-shadow w-full max-w-[160px] mx-auto">
        <CardHeader className="p-2">
          <CardTitle className="text-sm capitalize text-center">{category.replace('-', ' ')}</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <Image src={image} alt={alt} width={140} height={96} className="w-full h-24 object-cover rounded-md" />
        </CardContent>
      </Card>
    </Link>
  );
}