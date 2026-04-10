'use client';

import { useCartStore } from '@/stores/cartStore';
import CartItemComponent from '@/components/CartItem';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, Package } from 'lucide-react';

export default function CartPage() {
  const { items, getTotal, clearCart } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>

        <div className="flex items-center mb-12">
          <ShoppingCart className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold">Shopping Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <Package className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <p className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</p>
            <p className="text-gray-600 mb-8 text-lg">Start shopping and add some products to your cart!</p>
            <Link href="/products" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 font-bold text-lg">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-6">
                  {items.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-28">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-8 pb-8 border-b">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Items</span>
                    <span className="font-semibold">{items.length}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8 text-xl">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-green-600 text-2xl">${getTotal().toFixed(2)}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition font-bold text-lg mb-3 inline-block"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-medium"
                >
                  Clear Cart
                </button>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    ✓ Secure checkout with encrypted payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
