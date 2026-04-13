'use client';

import { Product } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleRemove = () => {
    removeItem(item.id);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      handleRemove();
    }
  };

  return (
    <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 transition">
      <div className="flex-shrink-0">
        <img 
          src={item.imagePath || '/placeholder.jpg'} 
          alt={item.name} 
          className="w-24 h-24 object-cover rounded-lg" 
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.details}</p>
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Price</p>
            <p className="font-semibold text-green-600">₹{item.price.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Subtotal</p>
            <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Vendor</p>
            <p className="text-sm font-medium text-gray-700">{item.vendorName}</p>
          </div>
        </div>
      </div>
      
      <div className="flex-shrink-0 flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-lg bg-white">
          <button 
            onClick={handleDecrease}
            className="p-2 hover:bg-gray-100 transition text-gray-600"
            title="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 font-bold text-gray-900 min-w-12 text-center">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 hover:bg-gray-100 transition text-gray-600"
            title="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <button 
          onClick={handleRemove}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          title="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

