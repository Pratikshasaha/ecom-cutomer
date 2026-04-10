'use client';

import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import { HeartPulse, ShoppingCart, Search, Home, Package, ClipboardList, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1251A3] to-[#1a6fd4] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm gap-2">
            <span>🎉 Get flat 20% off on your first order — Use code <strong>PRECICA20</strong></span>
            <div className="hidden md:flex gap-3">
              <span className="bg-white/15 text-white text-xs px-2 py-1 rounded-full font-600">NABL Certified</span>
              <span className="bg-white/15 text-white text-xs px-2 py-1 rounded-full font-600">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1251A3] to-[#3b7de0] rounded-lg flex items-center justify-center text-white text-lg">
                ❤️
              </div>
              <div>
                <div className="font-bold text-[#1251A3]">Precica</div>
                <div className="text-xs text-gray-500 font-semibold">Diagnostics</div>
              </div>
            </Link>

            {/* Search - Hidden on Mobile */}
            <div className="hidden lg:flex items-center flex-1 mx-8 bg-gray-100 border border-gray-200 rounded-lg max-w-2xl overflow-hidden hover:border-[#1251A3] focus-within:border-[#1251A3] transition-all">
              <input 
                type="text" 
                placeholder="Search medicines, tests, health products..." 
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-sm"
              />
              <button className="bg-[#1251A3] text-white px-6 py-3 flex items-center gap-2 hover:bg-[#1a6fd4] transition">
                <Search className="w-4 h-4" />
                <span className="text-sm font-600">Search</span>
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Link href="/cart" className="relative p-2 text-[#4A566D] hover:bg-gray-100 rounded-lg transition group">
                <ShoppingCart className="w-6 h-6 group-hover:text-[#1251A3]" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF6B35] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Link>
              <button className="hidden sm:flex items-center gap-2 bg-[#EBF2FF] text-[#1251A3] px-4 py-2 rounded-lg hover:bg-[#1251A3] hover:text-white transition font-600 text-sm">
                <div className="w-4 h-4">👤</div>
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto flex-1">
              <Link href="/" className="px-4 py-3 text-sm font-500 text-[#4A566D] hover:text-[#1251A3] border-b-2 border-transparent hover:border-[#1251A3] transition whitespace-nowrap">
                🏥 Medicines
              </Link>
              <Link href="/products" className="px-4 py-3 text-sm font-500 text-[#4A566D] hover:text-[#1251A3] border-b-2 border-transparent hover:border-[#1251A3] transition whitespace-nowrap">
                🛒 Products
              </Link>
              <Link href="/orders" className="px-4 py-3 text-sm font-500 text-[#4A566D] hover:text-[#1251A3] border-b-2 border-transparent hover:border-[#1251A3] transition whitespace-nowrap">
                📋 Orders
              </Link>
              <a href="#" className="px-4 py-3 text-sm font-500 text-[#4A566D] hover:text-[#1251A3] border-b-2 border-transparent hover:border-[#1251A3] transition whitespace-nowrap">
                🏷️ Offers
              </a>
            </div>
            <button className="hidden md:flex items-center gap-2 ml-auto bg-gradient-to-r from-[#00A86B] to-[#00c47d] text-white px-4 py-2 rounded-lg hover:shadow-lg transition font-600 text-sm">
              <span>☁️</span>
              Upload Prescription
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
