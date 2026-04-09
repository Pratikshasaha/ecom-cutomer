'use client';

import { HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2">
              <HeartPulse className="w-6 h-6" />
              Precia Med
            </h3>
            <p className="text-blue-200">
              Premium medical equipment supplier. Quality, reliability, and service you can trust.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <p className="text-blue-200 space-y-1">
              <span>📞 +1 (555) 123-4567</span>
              <span>📧 sales@preciamed.com</span>
              <span>📍 123 Medical St, Health City</span>
            </p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Precia Medical Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

