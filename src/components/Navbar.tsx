'use client';

import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { categories } from '@/lib/data';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
          Brandy&apos;s Shop
        </Link>
        
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Input 
              placeholder="Search for products, brands..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              {categories.map((category) => (
                <NavigationMenuItem key={category.id}>
                  <Link href={`/${category.id}`} legacyBehavior passHref>
                    <NavigationMenuLink className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 hover:text-black">
                      {category.displayName}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors">
              <span className="text-lg">👤</span>
            </button>
            <button className="text-gray-700 hover:text-black transition-colors">
              <span className="text-lg">🛒</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}