'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product, ApiResponse } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';
import { useNotificationStore } from '@/stores/notificationStore';
import { ShoppingCart, ArrowLeft, MapPin, Tag, Package } from 'lucide-react';

export default function ProductDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const addNotification = useNotificationStore((state) => state.addNotification);

  useEffect(() => {
    fetch('https://ecom-rest-topaz.vercel.app/products')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        const found = Array.isArray(data) ? data.find(p => p.id === id) : null;
        setProduct(found || null);
        setLoading(false);
      })
      .catch(() => {
        setError('Product not found');
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) return;
    setAddingToCart(true);
    try {
      for (let i = 0; i < quantity; i++) {
        addItem(product);
      }
      addNotification(`${product.name} has been added to your cart!`, 'success');
      setQuantity(1);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      addNotification('Failed to add to cart', 'error');
    } finally {
      setAddingToCart(false);
    }
  };

  if (loading) return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">Loading product...</div>
    </div>
  );

  if (error || !product) return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center text-red-600">{error || 'Product not found'}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-12 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-100 rounded-xl overflow-hidden w-full aspect-square flex items-center justify-center">
                <img 
                  src={product.imagePath || '/placeholder.jpg'} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 py-4 border-y-2 border-gray-200">
                  <p className="text-gray-600 text-sm mb-1">Price</p>
                  <p className="text-4xl font-bold text-green-600">₹{product.price.toFixed(2)}</p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">About this product</h3>
                  <p className="text-gray-700 leading-relaxed">{product.details}</p>
                </div>

                {/* Stock Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Package className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">Stock Available</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{product.quantity}</span>
                  </div>
                </div>

                {/* Vendor Info */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Vendor</p>
                    <p className="font-semibold text-gray-900">{product.vendorName}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-1">
                      <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Location</p>
                        <p className="font-semibold text-gray-900 text-sm">{product.vendorLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.quantity, quantity + 1))}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={addingToCart || product.quantity === 0}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg text-lg font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{addingToCart ? 'Adding to Cart...' : 'Add to Cart'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
