'use client';

import { Product } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';

interface CartItemProps {
  item: Product & { quantity: number };
}

export default function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      <img src={item.imagePath || '/placeholder.jpg'} alt={item.name} className="w-20 h-20 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Vendor: {item.vendorName}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200">-</button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200">+</button>
      </div>
      <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800">Remove</button>
    </div>
  );
}

