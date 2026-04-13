'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import { HeartPulse, ShoppingCart, Search, Home, Package, ClipboardList, Menu, LogOut, User } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const loadCart = useCartStore((state) => state.loadCart);
  const { user, loadUser, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    loadCart();
    loadUser();
    setMounted(true);
  }, [loadCart, loadUser]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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
                <div className="text-xs text-gray-500 font-semibold">MedTech Marketplace</div>
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

              {mounted && user ? (
                <>

                  <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-gray-200">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#1251A3]">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-[#4A566D] hover:text-[#FF6B35] transition p-2 hover:bg-gray-100 rounded-lg"
                      title="Logout"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : mounted ? (
                <>
                  <Link href="/login" className="hidden sm:flex items-center gap-2 bg-[#EBF2FF] text-[#1251A3] px-4 py-2 rounded-lg hover:bg-[#1251A3] hover:text-white transition font-600 text-sm">
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </Link>
                  <Link href="/signup" className="hidden sm:flex items-center gap-2 bg-[#1251A3] text-white px-4 py-2 rounded-lg hover:bg-[#3b7de0] transition font-600 text-sm">
                    Sign Up
                  </Link>
                </>
              ) : null}
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
                All Equipment
              </Link>
              <Link href="/products" className="px-4 py-3 text-sm font-500 text-[#4A566D] hover:text-[#1251A3] border-b-2 border-transparent hover:border-[#1251A3] transition whitespace-nowrap">
                Products
              </Link>


              <a href="#" className="nav-lnk"> Glucose Monitors</a>
              <a href="#" className="nav-lnk"> Gloves &amp; PPE</a>
              <a href="#" className="nav-lnk"> Cardiac Devices</a>
              <a href="#" className="nav-lnk"> Lab Equipment</a>
              <a href="#" className="nav-lnk">Surgical Tools</a>
              <a href="#" className="nav-lnk"> Patient Monitors</a>

            </div>
            {mounted && user ? (
              <Link href="/orders" className="hidden sm:flex items-center gap-2 bg-[#EBF2FF] text-[#1251A3] px-4 py-2 rounded-lg hover:bg-[#1251A3] hover:text-white transition font-600 text-sm bg-blue-600 text-white">
                My Orders
              </Link>
            ) : null}

          </div>
        </div>
      </nav>
    </header>
  );
}
