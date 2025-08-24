export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const categories = [
  'phones', 'home-appliances', 'accessories', 'games-and-consoles', 'laptops', 'speakers-and-audios'
];

export const products: Product[] = [
  // Phones
  { id: '1', name: 'iPhone 14', price: 999, image: 'https://images.unsplash.com/photo-1486946255434-a0292ed5e977', category: 'phones', description: 'Latest smartphone with A15 chip.' },
  { id: '2', name: 'Samsung Galaxy S23', price: 899, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c', category: 'phones', description: 'High-end Android device.' },
  // Home Appliances
  { id: '3', name: 'Refrigerator', price: 1200, image: 'https://images.unsplash.com/photo-1571175443453-1a6b0ec1ab1d', category: 'home-appliances', description: 'Energy-efficient fridge.' },
  // Accessories
  { id: '4', name: 'Phone Case', price: 20, image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05', category: 'accessories', description: 'Protective case.' },
  // Games and Consoles
  { id: '5', name: 'PS5 Console', price: 499, image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06', category: 'games-and-consoles', description: 'Next-gen gaming.' },
  // Laptops
  { id: '6', name: 'MacBook Pro', price: 1999, image: 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1', category: 'laptops', description: 'Powerful laptop for pros.' },
  // Speakers and Audios
  { id: '7', name: 'JBL Speaker', price: 150, image: 'https://images.unsplash.com/photo-1589254065878-42c9a3d25a05', category: 'speakers-and-audios', description: 'Portable Bluetooth speaker.' },
];

export const featuredDeals = products.slice(0, 4); // Example deals