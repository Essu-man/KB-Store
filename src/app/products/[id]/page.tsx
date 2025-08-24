import { products } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-2xl text-green-600">${product.price}</p>
        <p className="my-4">{product.description}</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">Add to Cart</button>
      </div>
    </div>
  );
}