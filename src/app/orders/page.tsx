'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, ArrowLeft, Loader } from 'lucide-react';

interface Order {
  id: number;
  productId: number;
  quantity: number;
  userName: string;
  mobile: string;
  address: string;
  email: string;
  date: string;
  vendorName: string;
  paymentType: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('https://ecom-rest-topaz.vercel.app/orders');
      if (!response.ok) throw new Error('Failed to fetch orders');
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : data.value || []);
    } catch (err) {
      setError('Failed to load orders');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center h-96">
          <Loader className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shopping
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Package className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold">My Orders</h1>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 text-red-800">
              {error}
            </div>
          )}

          {orders.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-2xl text-gray-600 mb-8">No orders yet</p>
              <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    {/* Left Column */}
                    <div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Order ID</p>
                        <p className="text-2xl font-bold text-blue-600">#{order.id}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Quantity</p>
                          <p className="text-lg font-semibold">{order.quantity}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Status</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">Ordered Date</p>
                        <p className="text-lg font-semibold">
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Vendor</p>
                        <p className="text-lg font-semibold">{order.vendorName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="bg-gray-50 rounded-lg p-4 mt-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Delivery Details</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 mb-1">Customer Name</p>
                        <p className="font-medium">{order.userName}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Phone</p>
                        <p className="font-medium">{order.mobile}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Email</p>
                        <p className="font-medium">{order.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Payment Method</p>
                        <p className="font-medium capitalize">{order.paymentType.replace('-', ' ')}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-gray-600 mb-1">Delivery Address</p>
                        <p className="font-medium">{order.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
