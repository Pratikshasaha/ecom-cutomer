'use client';

import { useCartStore } from '@/stores/cartStore';
import CartItemComponent from '@/components/CartItem';
import Link from 'next/link';

export default function CartPage() {
  const { items, getTotal, clearCart } = useCartStore();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-2xl mb-8">Your cart is empty</p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Go to Products
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
            <div className="border-t pt-8">
              <div className="flex justify-between text-2xl font-bold mb-4">
                <span>Total: ${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/checkout"
                  className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
