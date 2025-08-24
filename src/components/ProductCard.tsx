import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Product } from '@/lib/data';
import Image from 'next/image';


export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
      <Image src={product.image} alt={product.name} width={300} height={192} className="w-full h-48 object-cover" />      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <p className="text-gray-600">${product.price}</p>
        <Badge variant="secondary">{product.category.replace('-', ' ')}</Badge>
      </CardContent>
      <CardFooter>
        <Link href={`/products/${product.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


// In ProductCard.tsx
