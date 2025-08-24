'use client';

import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { categories } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">KB Store</Link>
        <Input placeholder="Search products..." className="w-1/3" />
        <NavigationMenu>
          <NavigationMenuList>
            {categories.map((cat) => (
              <NavigationMenuItem key={cat}>
                <Link href={`/${cat}`} legacyBehavior passHref>
                  <NavigationMenuLink className="capitalize px-4">{cat.replace('-', ' ')}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}