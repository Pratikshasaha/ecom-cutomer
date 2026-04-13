'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { ApiResponse, Product } from '@/types/product';
import { HeartPulse, Package } from 'lucide-react';
import { initializePageScripts } from '@/utils/pageScripts';
import appleStore from '@/image/appleStore.png';
import playStore from '@/image/playStorebtn.png';



import SliderImage1 from '@/image/sliderimage1.jpg';
import SliderImage3 from '@/image/sliderimage2.jpg';
import SliderImage2 from '@/image/sliderimage3.jpg';



export default function Home() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ecom-rest-topaz.vercel.app/products')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setFeatured(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Initialize page scripts
    initializePageScripts();
  }, []);

  return (
    <main className="min-h-screen">



      <section className="hero">
        <div className="hero-slider" id="heroSlider">


          <div className="slide on">
            <div className="slide-bg">
              <img src={SliderImage1.src} alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(11,22,41,.92) 0%,rgba(12,77,162,.75) 55%,rgba(21,96,192,.25) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div className='sliderinnerbox'>
                  <span className="slide-eyebrow" style={{ "color": "#91BFFF", "border-color": "rgba(145,191,255,.3)", "background": "rgba(145,191,255,.1)" }}>🏆 #1 MedTech Marketplace in Eastern India</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Precision Glucose <br /><em>Monitoring Devices</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Glucometers, continuous glucose monitors, test strips and lancets — from Roche, Accu-Chek, Abbott, One Touch &amp; more. ICMR-approved. Clinically accurate.</p>
                  <div className="slide-btns">
                    <button className="btn btn-white btn-lg" style={{ "border-radius": "12px" }}>Shop Glucometers</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>View All Devices</button>
                  </div>
                </div>
               
              </div>
            </div>
          </div>


          <div className="slide">
            <div className="slide-bg">
              <img src={SliderImage2.src} alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(0,55,35,.92) 0%,rgba(0,130,80,.7) 55%,rgba(0,151,100,.2) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div className='sliderinnerbox'>
                  <span className="slide-eyebrow" style={{ "color": "#6FEBB5", "border-color": "rgba(111,235,181,.3)", "background": "rgba(111,235,181,.1)" }}>🧤 Certified Medical Gloves</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Surgical &amp; Examination <br /><em>Gloves &amp; PPE</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Latex, nitrile &amp; vinyl gloves for surgical, examination and industrial use. FDA-cleared, EN 455 certified. Bulk packs for clinics &amp; hospitals.</p>
                  <div className="slide-btns">
                    <button className="btn btn-lg" style={{ "background": "#fff", "color": "#006640", "border-radius": "12px" }}>Shop Gloves &amp; PPE</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>Bulk Orders</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


          <div className="slide">
            <div className="slide-bg">
              <img src={SliderImage3.src} alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(6,30,75,.94) 0%,rgba(0,97,167,.75) 55%,rgba(0,120,180,.2) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div  className='sliderinnerbox'>
                  <span className="slide-eyebrow" style={{ "color": "#7DD3FC", "border-color": "rgba(125,211,252,.3)", "background": "rgba(125,211,252,.1)" }}>📊 Clinical Grade Equipment</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Advanced Patient <br /><em>Monitoring Systems</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Multi-parameter patient monitors, ECG machines, pulse oximeters, BP monitors — hospital-grade from GE, Philips, Mindray &amp; BPL Medical.</p>
                  <div className="slide-btns">
                    <button className="btn btn-white btn-lg" style={{ "border-radius": "12px" }}>Explore Monitors</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>Hospital Pricing</button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <button className="hero-arr prev" onClick={() => (window as any).heroSlide(-1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="hero-arr next" onClick={() => (window as any).heroSlide(1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          <div className="hero-dots" id="heroDots">
            <div className="hero-dot on" onClick={() => (window as any).heroGo(0)}></div>
            <div className="hero-dot" onClick={() => (window as any).heroGo(1)}></div>
            <div className="hero-dot" onClick={() => (window as any).heroGo(2)}></div>
          </div>
        </div>

        <div className="trust">
          <div className="wrap">
            <div className="trust-item"><div className="trust-ico ti-b">🏆</div><div><b>ISO 13485 Certified</b><span>Medical device quality</span></div></div>
            <div className="trust-item"><div className="trust-ico ti-g">✅</div><div><b>CDSCO Approved</b><span>All products licensed</span></div></div>
            <div className="trust-item"><div className="trust-ico ti-b">🚚</div><div><b>48-Hour Delivery</b><span>Pan-India shipping</span></div></div>
            <div className="trust-item"><div className="trust-ico ti-t">🔬</div><div><b>Clinical-Grade Only</b><span>No low-quality imports</span></div></div>
            <div className="trust-item"><div className="trust-ico ti-a">🏥</div><div><b>Hospital Bulk Pricing</b><span>Special rates for clinics</span></div></div>
          </div>
        </div>
      </section>









      <section className="cats sec" id="categories">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-label">Browse Equipment</p>
              <h2 className="sec-title">Shop by device category</h2>
            </div>
            <a href="#" className="see-all">All Categories →</a>
          </div>
          <div className="cat-row">
            <div className="cat-card fade-up" style={{ transitionDelay: '.04s' }}>
              <div className="cat-ico" style={{ background: '#FFF3E0' }}>🩸</div>
              <div className="cat-lbl">Glucose Monitors</div>
              <div className="cat-cnt">48 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.08s' }}>
              <div className="cat-ico" style={{ background: '#E3F2FD' }}>❤️</div>
              <div className="cat-lbl">Cardiac Devices</div>
              <div className="cat-cnt">62 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.12s' }}>
              <div className="cat-ico" style={{ background: '#E8F5E9' }}>🧤</div>
              <div className="cat-lbl">Gloves &amp; PPE</div>
              <div className="cat-cnt">35 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.16s' }}>
              <div className="cat-ico" style={{ background: '#EDE7F6' }}>📊</div>
              <div className="cat-lbl">Patient Monitors</div>
              <div className="cat-cnt">29 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="cat-ico" style={{ background: '#E0F7FA' }}>🔬</div>
              <div className="cat-lbl">Lab Equipment</div>
              <div className="cat-cnt">54 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.24s' }}>
              <div className="cat-ico" style={{ background: '#FCE4EC' }}>🏥</div>
              <div className="cat-lbl">Surgical Tools</div>
              <div className="cat-cnt">77 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.28s' }}>
              <div className="cat-ico" style={{ background: '#F1F8E9' }}>💉</div>
              <div className="cat-lbl">Infusion &amp; IV</div>
              <div className="cat-cnt">41 products</div>
            </div>
            <div className="cat-card fade-up" style={{ transitionDelay: '.32s' }}>
              <div className="cat-ico" style={{ background: '#FFF8E1' }}>🩺</div>
              <div className="cat-lbl">Diagnostic Kits</div>
              <div className="cat-cnt">33 products</div>
            </div>
          </div>
        </div>
      </section>



      {/* Featured Products - API call on site load */}
      <section className="products sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-label">Best Sellers</p>
              <h2 className="sec-title">Top-rated MedTech equipment</h2>
            </div>
            <a href="#" className="see-all">View all 380+ products →</a>
          </div>
          {loading ? (
            <div className="text-center py-12">Loading featured products...</div>
          ) : featured.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-8">No products available yet.</p>
              <Link href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
                View All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featured.slice(0, 8).map((product) => ( // First 8
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>








      <section className="brands">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-label">Official Distributors</p>
              <h2 className="sec-title">Authorised brands we carry</h2>
            </div>
          </div>
          <div className="brand-scroll">
            <div className="bc"><span className="bc-ico">🩸</span><div><div className="bc-name">Accu-Chek / Roche</div><div className="bc-cat">Glucose Monitors</div></div></div>
            <div className="bc"><span className="bc-ico">❤️</span><div><div className="bc-name">Omron Healthcare</div><div className="bc-cat">BP &amp; Cardiac</div></div></div>
            <div className="bc"><span className="bc-ico">🧤</span><div><div className="bc-name">Ansell</div><div className="bc-cat">Gloves &amp; PPE</div></div></div>
            <div className="bc"><span className="bc-ico">📊</span><div><div className="bc-name">Mindray Medical</div><div className="bc-cat">Patient Monitors</div></div></div>
            <div className="bc"><span className="bc-ico">🩺</span><div><div className="bc-name">3M Littmann</div><div className="bc-cat">Stethoscopes</div></div></div>
            <div className="bc"><span className="bc-ico">⚕️</span><div><div className="bc-name">B. Braun</div><div className="bc-cat">Surgical &amp; IV</div></div></div>
            <div className="bc"><span className="bc-ico">🏥</span><div><div className="bc-name">GE Healthcare</div><div className="bc-cat">Imaging &amp; Monitors</div></div></div>
            <div className="bc"><span className="bc-ico">🔬</span><div><div className="bc-name">Siemens Healthineers</div><div className="bc-cat">Lab Diagnostics</div></div></div>
            <div className="bc"><span className="bc-ico">💊</span><div><div className="bc-name">Abbott Diagnostics</div><div className="bc-cat">Point-of-Care</div></div></div>
            <div className="bc"><span className="bc-ico">💡</span><div><div className="bc-name">BPL Medical</div><div className="bc-cat">ECG &amp; ICU</div></div></div>
          </div>
        </div>
      </section>







      <section className="offers sec">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-label">Limited Time</p>
              <h2 className="sec-title">Equipment deals &amp; offers</h2>
            </div>
          </div>
          <div className="off-grid">
            <div className="off-card" style={{ background: "linear-gradient(135deg,#0C4DA2,#2A75E4)", color: "#fff" }}>
              <div>
                <div className="off-num">15%</div>
                <div className="off-title">Off on All Equipment</div>
                <div className="off-sub">On first order via app<br />Min. order ₹2,000</div>
                <span className="off-code">MEDTECH15</span>
              </div>
              <div className="off-blob" style={{ width: "140px", height: "140px", right: "-30px", bottom: "-30px" }}></div>
              <div className="off-blob" style={{ width: "70px", height: "70px", right: "40px", bottom: "40px" }}></div>
            </div>
            <div className="off-card" style={{ background: "linear-gradient(135deg,#0B6943,#00C47D)", color: "#fff" }}>
              <div>
                <div className="off-num">₹500</div>
                <div className="off-title">Off on Glucometer Kits</div>
                <div className="off-sub">Includes strips &amp; lancets<br />All major brands</div>
                <span className="off-code">GLUCOSE500</span>
              </div>
              <div className="off-blob" style={{ width: "140px", height: "140px", right: "-30px", bottom: "-30px" }}></div>
              <div className="off-blob" style={{ width: "70px", height: "70px", right: "40px", bottom: "40px" }}></div>
            </div>
            <div className="off-card" style={{ background: "linear-gradient(135deg,#7B2D00,#E8601C)", color: "#fff" }}>
              <div>
                <div className="off-num">20%</div>
                <div className="off-title">Bulk Glove Orders</div>
                <div className="off-sub">Min. 500 pairs · All sizes<br />Nitrile, latex &amp; vinyl</div>
                <span className="off-code">BULKGLOVE</span>
              </div>
              <div className="off-blob" style={{ width: "140px", height: "140px", right: "-30px", bottom: "-30px" }}></div>
              <div className="off-blob" style={{ width: "70px", height: "70px", right: "40px", bottom: "40px" }}></div>
            </div>
          </div>
        </div>
      </section>







      <section className="why">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <p className="sec-label">Why Precica</p>
            <h2 className="sec-title" style={{ color: "#fff", maxWidth: "560px", margin: "0 auto" }}>The most trusted MedTech platform in Eastern India</h2>
          </div>
          <div className="why-grid">
            <div className="wc fade-up">
              <div className="wc-stat">500+</div>
              <div className="wc-ico">🏆</div>
              <div className="wc-title">Products in Stock</div>
              <div className="wc-desc">Glucometers, gloves, monitors, surgical tools — all CDSCO-licensed and quality-verified.</div>
            </div>
            <div className="wc fade-up" style={{ transitionDelay: ".1s" }}>
              <div className="wc-stat">48 hrs</div>
              <div className="wc-ico">🚚</div>
              <div className="wc-title">Pan-India Delivery</div>
              <div className="wc-desc">Same-day in Kolkata. 48-hour delivery across all major Indian cities. Cold-chain available.</div>
            </div>
            <div className="wc fade-up" style={{ transitionDelay: ".2s" }}>
              <div className="wc-stat">100%</div>
              <div className="wc-ico">✅</div>
              <div className="wc-title">Genuine &amp; Licensed</div>
              <div className="wc-desc">Every product is sourced directly from OEM manufacturers or authorised Indian distributors.</div>
            </div>
            <div className="wc fade-up" style={{ transitionDelay: ".3s" }}>
              <div className="wc-stat">24/7</div>
              <div className="wc-ico">🛠️</div>
              <div className="wc-title">AMC &amp; After-sales</div>
              <div className="wc-desc">Annual maintenance contracts, calibration, spare parts and on-site service support.</div>
            </div>
          </div>
        </div>
      </section>




<section className="reviews sec">
  <div className="wrap">
    <div className="sec-head">
      <div>
        <p className="sec-label">Customer Stories</p>
        <h2 className="sec-title">Trusted by healthcare professionals across India</h2>
      </div>
    </div>

    <div className="rev-wrap">
      <div className="rev-track" id="revTrack">

 
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            Precica has become our go-to platform for sourcing essential medical supplies. Pricing is competitive and deliveries are always reliable. It has simplified procurement for our clinic significantly.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#0C4DA2' }}>DR</div>
            <div>
              <div className="rev-name">Dr. Rajiv Bose</div>
              <div className="rev-sub">General Physician · South Kolkata</div>
            </div>
          </div>
        </div>

 
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            I purchased a glucometer for my father and the quality was excellent with accurate readings. Ordering was smooth and delivery was quick. Very trustworthy platform.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#1B8A4E' }}>AM</div>
            <div>
              <div className="rev-name">Ananya Mukherjee</div>
              <div className="rev-sub">Verified Buyer</div>
            </div>
          </div>
        </div>

  
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            We placed a bulk order for gloves and surgical instruments. Everything arrived on time and in perfect condition. Highly dependable for bulk medical procurement.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#D97706' }}>SG</div>
            <div>
              <div className="rev-name">Sumit Ghosh</div>
              <div className="rev-sub">Diagnostic Centre Owner · Newtown</div>
            </div>
          </div>
        </div>

      
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            We ordered an ECG machine and the support from the Precica team was outstanding. Installation and after-sales service were handled very professionally.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#0097A7' }}>NK</div>
            <div>
              <div className="rev-name">Dr. Nilanjana Kar</div>
              <div className="rev-sub">Cardiologist · Kolkata</div>
            </div>
          </div>
        </div>

        
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            What I like most is the consistency. Whether small orders or bulk purchases, the experience has been seamless every time. This is exactly what healthcare providers need.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#7C3AED' }}>RS</div>
            <div>
              <div className="rev-name">Rohit Sharma</div>
              <div className="rev-sub">Clinic Manager · Salt Lake</div>
            </div>
          </div>
        </div>

        
        <div className="rev-card">
          <div className="rev-stars">★★★★★</div>
          <p className="rev-quote">
            Genuine products, fair pricing, and fast delivery. We've reduced procurement headaches completely after switching to Precica. Highly recommended for clinics and hospitals.
          </p>
          <div className="rev-person">
            <div className="rev-av" style={{ background: '#DC2626' }}>PM</div>
            <div>
              <div className="rev-name">Priya Mehta</div>
              <div className="rev-sub">Hospital Procurement Lead</div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="rev-nav">
      <div className="rev-nb" onClick={() => (window as any).revSlide(-1)}>‹</div>
      <div className="rev-nb" onClick={() => (window as any).revSlide(1)}>›</div>
    </div>

  </div>
</section>



      <section className="app-sec">
        <div className="wrap">
          <div className="app-box">
            <div className="app-text">
              <p className="app-lbl">Download the App</p>
              <h2 className="app-h">Order MedTech equipment from your phone — anytime</h2>
              <p className="app-p">Track orders, manage bulk purchases, book lab tests, get real-time stock alerts and access exclusive app-only pricing. Available on Android &amp; iOS.</p>
              <div className="app-btns">
                <div className="app-store">
                 <img src={appleStore.src} className="app-store-img" alt="App Store" />
                </div>
                <div className="app-store">
              <img src={playStore.src} className="app-store-img"  alt="Play Store" />
                </div>
              </div>
            </div>
            <div className="app-phones">
              <div className="phone-mock">
                <div className="phone-screen">
                  <div className="phone-row">🩸 🧤 ❤️</div>
                  <div className="phone-line" style={{ width: '80%' }}></div>
                  <div className="phone-line" style={{ width: '60%' }}></div>
                </div>
                <div className="phone-tag">Precica App</div>
              </div>
              <div className="phone-mock">
                <div className="phone-screen">
                  <div style={{ fontSize: '10px', opacity: '.7', marginBottom: '4px' }}>Order Tracking</div>
                  <div className="phone-line" style={{ width: '90%' }}></div>
                  <div className="phone-line" style={{ width: '70%' }}></div>
                </div>
                <div className="phone-tag">Live Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
