export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  description: string;
  brand?: string;
  condition?: 'new' | 'used' | 'refurbished';
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  subcategories: string[];
  description: string;
}

export const categories: Category[] = [
  {
    id: 'phones',
    name: 'phones',
    displayName: 'Phones & Tablets',
    icon: '📱',
    subcategories: ['Smartphones', 'Tablets', 'Phone Accessories', 'Chargers & Cables'],
    description: 'Latest smartphones, tablets, and mobile accessories'
  },
  {
    id: 'home-appliances',
    name: 'home-appliances',
    displayName: 'Home Appliances',
    icon: '🏠',
    subcategories: ['Kitchen Appliances', 'Cleaning', 'Climate Control', 'Laundry'],
    description: 'Essential home appliances for modern living'
  },
  {
    id: 'accessories',
    name: 'accessories',
    displayName: 'Accessories',
    icon: '🎧',
    subcategories: ['Cases & Covers', 'Cables & Chargers', 'Screen Protectors', 'Stylus & Pens'],
    description: 'Essential accessories for your devices'
  },
  {
    id: 'games-and-consoles',
    name: 'games-and-consoles',
    displayName: 'Gaming & Consoles',
    icon: '🎮',
    subcategories: ['Gaming Consoles', 'Video Games', 'Gaming Accessories', 'VR Equipment'],
    description: 'Gaming consoles, games, and accessories'
  },
  {
    id: 'laptops',
    name: 'laptops',
    displayName: 'Laptops & Computers',
    icon: '💻',
    subcategories: ['Laptops', 'Desktops', 'Monitors', 'Computer Accessories'],
    description: 'Laptops, desktops, and computer accessories'
  },
  {
    id: 'speakers-and-audios',
    name: 'speakers-and-audios',
    displayName: 'Speakers & Audio',
    icon: '🔊',
    subcategories: ['Bluetooth Speakers', 'Headphones', 'Sound Systems', 'Audio Accessories'],
    description: 'High-quality audio equipment and accessories'
  }
];

export const products: Product[] = [
  // Phones
  { id: '1', name: 'iPhone 15 Pro', price: 999, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center&auto=format', category: 'phones', subcategory: 'Smartphones', description: 'Latest iPhone with titanium design and A17 Pro chip.', brand: 'Apple', condition: 'new', rating: 4.8 },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', price: 1199, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center&auto=format', category: 'phones', subcategory: 'Smartphones', description: 'Premium Android smartphone with S Pen.', brand: 'Samsung', condition: 'new', rating: 4.7 },
  { id: '3', name: 'iPad Air', price: 599, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&crop=center&auto=format', category: 'phones', subcategory: 'Tablets', description: 'Powerful tablet with M2 chip.', brand: 'Apple', condition: 'new', rating: 4.6 },
  { id: '4', name: 'Samsung Galaxy Tab S9', price: 799, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop&crop=center&auto=format', category: 'phones', subcategory: 'Tablets', description: 'Premium Android tablet with S Pen.', brand: 'Samsung', condition: 'new', rating: 4.5 },
  
  // Home Appliances
  { id: '5', name: 'Smart Refrigerator', price: 1200, image: 'https://images.unsplash.com/photo-1571175443453-1a6b0ec1ab1d?w=400&h=300&fit=crop&crop=center&auto=format', category: 'home-appliances', subcategory: 'Kitchen Appliances', description: 'Energy-efficient smart fridge with Wi-Fi.', brand: 'LG', condition: 'new', rating: 4.4 },
  { id: '6', name: 'Robot Vacuum', price: 299, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center&auto=format', category: 'home-appliances', subcategory: 'Cleaning', description: 'Smart robot vacuum with mapping technology.', brand: 'iRobot', condition: 'new', rating: 4.3 },
  { id: '7', name: 'Air Purifier', price: 199, image: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=400&h=300&fit=crop&crop=center&auto=format', category: 'home-appliances', subcategory: 'Climate Control', description: 'HEPA air purifier for clean indoor air.', brand: 'Dyson', condition: 'new', rating: 4.5 },
  { id: '8', name: 'Smart Washing Machine', price: 899, image: 'https://images.unsplash.com/photo-1581578731548-c6a0c3f2f6c5?w=400&h=300&fit=crop&crop=center&auto=format', category: 'home-appliances', subcategory: 'Laundry', description: 'Energy-efficient smart washing machine.', brand: 'Samsung', condition: 'new', rating: 4.2 },
  
  // Accessories
  { id: '9', name: 'Wireless Charger', price: 29, image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center&auto=format', category: 'accessories', subcategory: 'Cables & Chargers', description: 'Fast wireless charging pad.', brand: 'Anker', condition: 'new', rating: 4.4 },
  { id: '10', name: 'Phone Case', price: 20, image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center&auto=format', category: 'accessories', subcategory: 'Cases & Covers', description: 'Protective phone case with MagSafe.', brand: 'Spigen', condition: 'new', rating: 4.3 },
  { id: '11', name: 'Screen Protector', price: 15, image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center&auto=format', category: 'accessories', subcategory: 'Screen Protectors', description: 'Tempered glass screen protector.', brand: 'ZAGG', condition: 'new', rating: 4.2 },
  { id: '12', name: 'Apple Pencil', price: 129, image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?w=400&h=300&fit=crop&crop=center&auto=format', category: 'accessories', subcategory: 'Stylus & Pens', description: 'Precision stylus for iPad.', brand: 'Apple', condition: 'new', rating: 4.6 },
  
  // Games and Consoles
  { id: '13', name: 'PlayStation 5', price: 499, image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center&auto=format', category: 'games-and-consoles', subcategory: 'Gaming Consoles', description: 'Next-gen gaming console with 4K gaming.', brand: 'Sony', condition: 'new', rating: 4.8 },
  { id: '14', name: 'Xbox Series X', price: 499, image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center&auto=format', category: 'games-and-consoles', subcategory: 'Gaming Consoles', description: 'Powerful gaming console with Game Pass.', brand: 'Microsoft', condition: 'new', rating: 4.7 },
  { id: '15', name: 'Nintendo Switch', price: 299, image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center&auto=format', category: 'games-and-consoles', subcategory: 'Gaming Consoles', description: 'Hybrid gaming console for home and portable play.', brand: 'Nintendo', condition: 'new', rating: 4.6 },
  { id: '16', name: 'Gaming Headset', price: 99, image: 'https://images.unsplash.com/photo-1606144042614-b040ef7f4c06?w=400&h=300&fit=crop&crop=center&auto=format', category: 'games-and-consoles', subcategory: 'Gaming Accessories', description: 'Wireless gaming headset with 7.1 surround sound.', brand: 'SteelSeries', condition: 'new', rating: 4.4 },
  
  // Laptops
  { id: '17', name: 'MacBook Pro 16"', price: 2499, image: 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'laptops', subcategory: 'Laptops', description: 'Powerful laptop with M3 Pro chip for professionals.', brand: 'Apple', condition: 'new', rating: 4.8 },
  { id: '18', name: 'Dell XPS 15', price: 1799, image: 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'laptops', subcategory: 'Laptops', description: 'Premium Windows laptop with stunning display.', brand: 'Dell', condition: 'new', rating: 4.5 },
  { id: '19', name: 'Gaming Laptop', price: 1299, image: 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'laptops', subcategory: 'Laptops', description: 'High-performance gaming laptop with RTX graphics.', brand: 'ASUS', condition: 'new', rating: 4.4 },
  { id: '20', name: '4K Monitor', price: 399, image: 'https://images.unsplash.com/photo-1517336714731-4885b0b1b1b1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'laptops', subcategory: 'Monitors', description: '27-inch 4K monitor with HDR support.', brand: 'LG', condition: 'new', rating: 4.3 },
  
  // Speakers and Audios
  { id: '21', name: 'JBL Charge 5', price: 179, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'speakers-and-audios', subcategory: 'Bluetooth Speakers', description: 'Portable Bluetooth speaker with deep bass.', brand: 'JBL', condition: 'new', rating: 4.5 },
  { id: '22', name: 'Sony WH-1000XM5', price: 399, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'speakers-and-audios', subcategory: 'Headphones', description: 'Premium noise-canceling wireless headphones.', brand: 'Sony', condition: 'new', rating: 4.7 },
  { id: '23', name: 'HomePod Mini', price: 99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'speakers-and-audios', subcategory: 'Sound Systems', description: 'Smart speaker with Siri and spatial audio.', brand: 'Apple', condition: 'new', rating: 4.4 },
  { id: '24', name: 'Soundbar', price: 299, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center&auto=format', category: 'speakers-and-audios', subcategory: 'Sound Systems', description: 'Dolby Atmos soundbar for immersive audio.', brand: 'Samsung', condition: 'new', rating: 4.3 }
];

export const featuredDeals = products.slice(0, 4); // Example deals