'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { ApiResponse, Product } from '@/types/product';
import { HeartPulse } from 'lucide-react';

export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ecom-rest-topaz.vercel.app/products')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-8">
            <HeartPulse className="w-16 h-16 text-white mb-4" />
            <h1 className="text-4xl font-bold">Welcome to <span className="text-white drop-shadow-lg">Precia</span></h1>
          </div>
          <p className="text-xl mb-12">Discover amazing products at great prices</p>
          <Link
            href="/products"
            className="bg-white text-blue-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>
      {/* Featured Products - API call on site load */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/cart" className="text-blue-600 hover:underline">View Cart</Link>
          </div>
          {loading ? (
            <div className="text-center py-12">Loading featured products...</div>
          ) : featured.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-8">No products available yet.</p>
              <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                View All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featured.slice(0, 8).map((product) => ( // First 8
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
