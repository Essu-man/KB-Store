import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import FeaturedDeals from '@/components/FeaturedDeals';

export default function Home() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to KB Store</h1>
        <p className="text-lg">Shop electronics inspired by top marketplaces.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((cat) => (
            <CategoryCard key={cat} category={cat} />
          ))}
        </div>
      </section>
      <FeaturedDeals />
    </div>
  );
}

