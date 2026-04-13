import { create } from 'zustand';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotal: () => number;
  clearCart: () => void;
  loadCart: () => void;
}

const CART_STORAGE_KEY = 'precica_cart';

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => {
    const { items } = get();
    const existing = items.find((item) => item.id === product.id);
    let newItems;
    if (existing) {
      newItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newItems = [...items, { ...product, quantity: 1 }];
    }
    set({ items: newItems });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
  },
  removeItem: (id) => {
    const newItems = get().items.filter((item) => item.id !== id);
    set({ items: newItems });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
  },
  updateQuantity: (id, quantity) => {
    const newItems = get().items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    set({ items: newItems });
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newItems));
  },
  getTotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  clearCart: () => {
    set({ items: [] });
    localStorage.removeItem(CART_STORAGE_KEY);
  },
  loadCart: () => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        set({ items: JSON.parse(savedCart) });
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
  },
}));

