'use client';

import { Input } from '@/components/ui/input';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { categories } from '@/lib/data';
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl md:text-2xl font-bold text-black hover:text-gray-700 transition-colors">
          Brandy&apos;s Shop
        </Link>
        
        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <Input 
              placeholder="Search for products, brands..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              {categories.map((category) => (
                <NavigationMenuItem key={category.id}>
                  <Link href={`/${category.id}`} className="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 hover:text-black">
                    {category.displayName}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-black transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button className="text-gray-700 hover:text-black transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button className="text-gray-700 hover:text-black transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-black transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <Input 
            placeholder="Search for products, brands..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/${category.id}`}
                className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium text-gray-700 hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.displayName}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}