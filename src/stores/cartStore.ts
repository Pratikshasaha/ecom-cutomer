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
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (product) => {
    const { items } = get();
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      set({
        items: items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
  updateQuantity: (id, quantity) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }),
  getTotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
  clearCart: () => set({ items: [] }),
}));

