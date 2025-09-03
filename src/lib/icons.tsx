import { 
  Smartphone, 
  Home, 
  Headphones, 
  Gamepad2, 
  Laptop, 
  Volume2,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ArrowLeft,
  Filter,
  ArrowUpDown,
  Zap,
  Star
} from 'lucide-react';

export const iconMap = {
  Smartphone,
  Home,
  Headphones,
  Gamepad2,
  Laptop,
  Volume2,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ArrowLeft,
  Filter,
  ArrowUpDown,
  Zap,
  Star
} as const;

export type IconName = keyof typeof iconMap;

export const getIcon = (name: IconName) => {
  return iconMap[name];
};
