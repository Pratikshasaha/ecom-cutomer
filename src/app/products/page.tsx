'use client';

import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { ApiResponse, Product } from '@/types/product';
import { Stethoscope } from 'lucide-react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://ecom-rest-topaz.vercel.app/products')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading products...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center space-x-3 mb-12">
            <Stethoscope className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
      {products.length === 0 ? (
        <div className="text-center py-12">No products available. API is empty.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
