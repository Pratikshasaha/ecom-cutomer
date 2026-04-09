'use client';

import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import { HeartPulse, ShoppingCart, Search, Home, Package } from 'lucide-react';

export default function Navbar() {
  const items = useCartStore((state) => state.items);

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-blue-950/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
            <HeartPulse className="w-8 h-8" />
            <span>Precia</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search medical equipment..." 
                className="w-64 pl-10 pr-10 py-2.5 bg-white/10 backdrop-blur-sm border border-blue-800/50 rounded-full focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none transition-all text-sm placeholder-blue-300 text-white"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-1">
              <Link href="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <Link href="/products" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Package className="w-5 h-5" />
              </Link>
            </div>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-xl transition-all group" title="View Cart">
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
