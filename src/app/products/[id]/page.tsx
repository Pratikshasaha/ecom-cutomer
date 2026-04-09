'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';
import Image from 'next/image';

export default function ProductDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    fetch('https://ecom-rest-topaz.vercel.app/products')
      .then((res) => res.json())
      .then((data: {value: Product[]}) => {
        const found = data.value?.find(p => p.id === id);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(() => {
        setError('Product not found');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 py-12">Loading...</div>;
  if (error || !product) return <div className="container mx-auto px-4 py-12 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/products" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Products</Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Image src={product.image} alt={product.title} width={500} height={500} className="w-full h-96 object-cover rounded-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-3xl font-bold text-green-600 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <button
            onClick={() => addItem(product)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
