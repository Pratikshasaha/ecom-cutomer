import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
  loadUser: () => void;
}

const AUTH_API = 'https://ecom-rest-topaz.vercel.app';
const USER_STORAGE_KEY = 'precica_user';
const TOKEN_STORAGE_KEY = 'precica_token';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${AUTH_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', { status: response.status, data });

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Invalid email or password');
      }

      // Handle different response formats
      const userData = data.user || data.data || data;

      // Store user and token
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token || '');

      set({ user: userData, token: data.token || '', isLoading: false });
    } catch (error: any) {
      console.error('Login error details:', error);
      const errorMsg = error.message || 'Login failed';
      set({ error: errorMsg, isLoading: false });
      throw error;
    }
  },

  signup: async (name: string, email: string, password: string, phone: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`${AUTH_API}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, phone }),
      });

      const data = await response.json();
      console.log('Signup response:', { status: response.status, data });

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Signup failed');
      }

      // Handle different response formats
      const userData = data.user || data.data || data;
      
      // Store user and token
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token || '');

      set({ user: userData, token: data.token || '', isLoading: false });
    } catch (error: any) {
      console.error('Signup error details:', error);
      const errorMsg = error.message || 'Signup failed';
      set({ error: errorMsg, isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    set({ user: null, token: null, error: null });
  },

  loadUser: () => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      const savedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
      
      if (savedUser && savedToken) {
        set({ user: JSON.parse(savedUser), token: savedToken });
      }
    } catch (error) {
      console.error('Failed to load user:', error);
    }
  },
}));
