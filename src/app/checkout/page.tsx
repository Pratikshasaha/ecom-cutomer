'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import CartItemComponent from '@/components/CartItem';
import { Package, Truck, CreditCard, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    userName: '',
    mobile: '',
    address: '',
    email: '',
    paymentType: 'credit-card',
  });

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-2xl mb-8">Your cart is empty</p>
          <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Go to Products
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 border-2 border-green-600 rounded-2xl p-12 text-center">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-green-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-xl text-green-800 mb-8">Thank you for your order.</p>
            <div className="bg-white rounded-lg p-6 mb-8">
              <p className="text-gray-700 mb-2">Order ID:</p>
              <p className="text-3xl font-bold text-blue-600">#{orderId}</p>
            </div>
            <p className="text-gray-700 mb-8">
              Your order has been received and is being processed. You'll receive a confirmation email shortly.
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.userName || !formData.mobile || !formData.address || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // Create an order for each item in the cart
      for (const item of items) {
        const orderData = {
          productId: item.id,
          quantity: item.quantity,
          userName: formData.userName,
          mobile: formData.mobile,
          address: formData.address,
          email: formData.email,
          paymentType: formData.paymentType,
          vendorName: item.vendorName || 'Unknown',
          status: 'pending'
        };

        const response = await fetch('https://ecom-rest-topaz.vercel.app/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });

        if (!response.ok) {
          throw new Error(`Failed to create order for product ${item.id}`);
        }

        const data = await response.json();
        if (data.id) {
          setOrderId(data.id);
        }
      }

      clearCart();
      setOrderPlaced(true);
    } catch (error) {
      console.error('Order error:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-8">Checkout</h1>

              <form onSubmit={handlePlaceOrder} className="space-y-6">
                {/* Personal Information */}
                <div className="border-b pb-8">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Package className="w-6 h-6 mr-3 text-blue-600" />
                    Delivery Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Address & Email */}
                <div className="border-b pb-8">
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <Truck className="w-6 h-6 mr-3 text-blue-600" />
                    Address Information
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street, City, State 12345"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h2 className="text-xl font-bold mb-6 flex items-center">
                    <CreditCard className="w-6 h-6 mr-3 text-blue-600" />
                    Payment Method
                  </h2>
                  <select
                    name="paymentType"
                    value={formData.paymentType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="cash-on-delivery">Cash on Delivery</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-bold text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Placing Order...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between border-t pt-3 text-xl">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-green-600">${getTotal().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  ✓ Secure checkout with encrypted payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
