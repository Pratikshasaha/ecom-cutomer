'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F1928] text-white mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 md:py-20">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1251A3] to-[#3b7de0] rounded-lg flex items-center justify-center text-white">❤️</div>
              <div>
                <div className="font-bold text-white">Precica</div>
                <div className="text-xs text-gray-400 font-semibold">Diagnostics</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Eastern India's most trusted digital healthcare marketplace. Medicines, lab tests, health devices — delivered with care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1251A3] transition text-lg">
                f
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1251A3] transition text-lg">
                📷
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1251A3] transition text-lg">
                𝕏
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1251A3] transition text-lg">
                in
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <div className="space-y-3 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Order Medicines</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Book Lab Tests</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Health Devices</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Doctor Consultation</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Upload Prescription</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Health Packages</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <div className="space-y-3 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Press & Media</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Blog</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Investor Relations</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <div className="space-y-3 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Refund Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Partner with Us</a>
            </div>

            {/* Contact */}
            <h4 className="font-bold text-white mt-6 mb-3">Contact</h4>
            <div className="text-sm text-gray-400 space-y-2">
              <div>📞 +91 9874700540</div>
              <div>✉️ hello@precica.com</div>
              <div>📍 Ecospace, Newtown, Kolkata</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500">© 2026 Precica Diagnostics & Consultancy LLP. All rights reserved.</span>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1 bg-white/10 text-gray-400 rounded-full border border-white/10">NABL</span>
            <span className="text-xs font-bold px-3 py-1 bg-white/10 text-gray-400 rounded-full border border-white/10">ISO 9001</span>
            <span className="text-xs font-bold px-3 py-1 bg-white/10 text-gray-400 rounded-full border border-white/10">CAP Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

