'use client';

import Link from 'next/link';
import { Product } from '@/types/product';
import { useCartStore } from '@/stores/cartStore';
import { useNotificationStore } from '@/stores/notificationStore';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const addNotification = useNotificationStore((state) => state.addNotification);

  const handleAddToCart = () => {
    addItem(product);
    addNotification(`${product.name} has been added to your cart!`, 'success');
  };

  return (
    <div className="pc group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative flex-shrink-0 h-44 p-2">
        <Link href={`/products/${product.id}`} className="block w-full h-full pc-img">
          <img 
            src={product.imagePath || '/placeholder.jpg'} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
          />
        </Link>
      </div>
      <div className="pc-body flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className=" font-semibold text-lg line-clamp-1 mb-1 group-hover:text-blue-900 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.details}</p>
        </div>
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xl font-bold pc-now">₹{product.price.toFixed(2)}</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
              Stock: {product.quantity}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="pc-btn w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-medium text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
