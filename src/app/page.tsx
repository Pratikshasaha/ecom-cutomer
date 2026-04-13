'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { ApiResponse, Product } from '@/types/product';
import { HeartPulse, Package } from 'lucide-react';
import { initializePageScripts } from '@/utils/pageScripts';

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
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop" alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(11,22,41,.92) 0%,rgba(12,77,162,.75) 55%,rgba(21,96,192,.25) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div>
                  <span className="slide-eyebrow" style={{ "color": "#91BFFF", "border-color": "rgba(145,191,255,.3)", "background": "rgba(145,191,255,.1)" }}>🏆 #1 MedTech Marketplace in Eastern India</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Precision Glucose <br /><em>Monitoring Devices</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Glucometers, continuous glucose monitors, test strips and lancets — from Roche, Accu-Chek, Abbott, One Touch &amp; more. ICMR-approved. Clinically accurate.</p>
                  <div className="slide-btns">
                    <button className="btn btn-white btn-lg" style={{ "border-radius": "12px" }}>Shop Glucometers</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>View All Devices</button>
                  </div>
                </div>
                <div className="slide-img">
                  <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=85&auto=format&fit=crop" alt="Glucose Monitor" />
                </div>
              </div>
            </div>
          </div>


          <div className="slide">
            <div className="slide-bg">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1600&q=80&auto=format&fit=crop" alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(0,55,35,.92) 0%,rgba(0,130,80,.7) 55%,rgba(0,151,100,.2) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div>
                  <span className="slide-eyebrow" style={{ "color": "#6FEBB5", "border-color": "rgba(111,235,181,.3)", "background": "rgba(111,235,181,.1)" }}>🧤 Certified Medical Gloves</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Surgical &amp; Examination <br /><em>Gloves &amp; PPE</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Latex, nitrile &amp; vinyl gloves for surgical, examination and industrial use. FDA-cleared, EN 455 certified. Bulk packs for clinics &amp; hospitals.</p>
                  <div className="slide-btns">
                    <button className="btn btn-lg" style={{ "background": "#fff", "color": "#006640", "border-radius": "12px" }}>Shop Gloves &amp; PPE</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>Bulk Orders</button>
                  </div>
                </div>
                <div className="slide-img">
                  <img src="https://images.unsplash.com/photo-1583912267550-d974ee3acb10?w=600&q=85&auto=format&fit=crop" alt="Surgical Gloves" />
                </div>
              </div>
            </div>
          </div>


          <div className="slide">
            <div className="slide-bg">
              <img src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1600&q=80&auto=format&fit=crop" alt="" />
              <div className="slide-ov" style={{ "background": "linear-gradient(100deg,rgba(6,30,75,.94) 0%,rgba(0,97,167,.75) 55%,rgba(0,120,180,.2) 100%)" }}></div>
            </div>
            <div className="slide-inner">
              <div className="wrap">
                <div>
                  <span className="slide-eyebrow" style={{ "color": "#7DD3FC", "border-color": "rgba(125,211,252,.3)", "background": "rgba(125,211,252,.1)" }}>📊 Clinical Grade Equipment</span>
                  <h1 className="slide-h1" style={{ "color": "#fff" }}>Advanced Patient <br /><em>Monitoring Systems</em></h1>
                  <p className="slide-p" style={{ "color": "rgba(255,255,255,.8)" }}>Multi-parameter patient monitors, ECG machines, pulse oximeters, BP monitors — hospital-grade from GE, Philips, Mindray &amp; BPL Medical.</p>
                  <div className="slide-btns">
                    <button className="btn btn-white btn-lg" style={{ "border-radius": "12px" }}>Explore Monitors</button>
                    <button className="btn btn-outline btn-lg" style={{ "border-color": "rgba(255,255,255,.4)", "color": "#fff", "border-radius": "12px" }}>Hospital Pricing</button>
                  </div>
                </div>
                <div className="slide-img">
                  <img src="https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?w=600&q=85&auto=format&fit=crop" alt="Patient Monitor" />
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





      <section className="qa">
        <div className="wrap">
          <div className="qa-grid">
            <div className="qa-card qac-1 fade-up">
              <div className="qa-ico qi-1">📋</div>
              <div className="qa-title">Bulk / Institutional Orders</div>
              <div className="qa-desc">Special pricing for hospitals, clinics, diagnostic labs and nursing homes. MOQ 50 units.</div>
              <div className="qa-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
            </div>
            <div className="qa-card qac-2 fade-up" style={{ transitionDelay: '0.09s' }}>
              <div className="qa-ico qi-2">🔬</div>
              <div className="qa-title">Book Lab Test at Home</div>
              <div className="qa-desc">Free home sample collection. NABL-certified labs. Digital reports in 6–24 hours.</div>
              <div className="qa-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
            </div>
            <div className="qa-card qac-3 fade-up" style={{ transitionDelay: '0.18s' }}>
              <div className="qa-ico qi-3">🛠️</div>
              <div className="qa-title">Equipment Service &amp; AMC</div>
              <div className="qa-desc">Annual maintenance contracts for medical equipment. Certified service engineers.</div>
              <div className="qa-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
            </div>
            <div className="qa-card qac-4 fade-up" style={{ transitionDelay: '0.27s' }}>
              <div className="qa-ico qi-4">🏨</div>
              <div className="qa-title">Clinic Setup Packages</div>
              <div className="qa-desc">Complete equipment bundles for new clinics and diagnostic centres. Turnkey solutions.</div>
              <div className="qa-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></div>
            </div>
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











      <section className="lab sec" id="lab">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-label">NABL Certified</p>
              <h2 className="sec-title">Book diagnostic tests at home</h2>
            </div>
            <a href="#" className="see-all">All 300+ tests →</a>
          </div>
          <div className="lab-grid">
            <div className="lc fade-up">
              <div className="lc-top">
                <div className="lc-ico" style={{ background: "#EBF1FC" }}>🔬</div>
                <div className="lc-name">Full Body Checkup</div>
                <div className="lc-desc">80-parameter comprehensive health screening — CBC, lipid panel, liver, kidney, thyroid, HbA1c, vitamin D &amp; more.</div>
                <div className="lc-tags">
                  <span className="chip chip-blue">80 tests</span>
                  <span className="chip chip-green">Free collection</span>
                  <span className="chip chip-teal">24-hr report</span>
                </div>
              </div>
              <div className="lc-div"></div>
              <div className="lc-bot">
                <div className="lc-pricegrp">
                  <span className="lc-price">₹999</span>
                  <span className="lc-mrp">₹2,500</span>
                  <span className="lc-off">60% off</span>
                </div>
                <button className="btn btn-teal btn-sm">Book Now</button>
              </div>
            </div>
            <div className="lc fade-up" style={{ transitionDelay: '.1s' }}>
              <div className="lc-top">
                <div className="lc-ico" style={{ background: "#FCE4EC" }}>🩸</div>
                <div className="lc-name">HbA1c (Glycated Hb)</div>
                <div className="lc-desc">3-month average blood sugar tracking test — gold standard for diabetes management and monitoring.</div>
                <div className="lc-tags">
                  <span className="chip chip-amber">Diabetes</span>
                  <span className="chip chip-green">Free collection</span>
                  <span className="chip chip-teal">6-hr report</span>
                </div>
              </div>
              <div className="lc-div"></div>
              <div className="lc-bot">
                <div className="lc-pricegrp">
                  <span className="lc-price">₹349</span>
                  <span className="lc-mrp">₹850</span>
                  <span className="lc-off">59% off</span>
                </div>
                <button className="btn btn-teal btn-sm">Book Now</button>
              </div>
            </div>
            <div className="lc fade-up" style={{ transitionDelay: '.2s' }}>
              <div className="lc-top">
                <div className="lc-ico" style={{ background: "#E8F5E9" }}>❤️</div>
                <div className="lc-name">Cardiac Risk Profile</div>
                <div className="lc-desc">Complete lipid panel, homocysteine, hsCRP, Lp(a) &amp; ECG — comprehensive heart health assessment.</div>
                <div className="lc-tags">
                  <span className="chip chip-red">Cardiac</span>
                  <span className="chip chip-green">Free collection</span>
                  <span className="chip chip-teal">12-hr report</span>
                </div>
              </div>
              <div className="lc-div"></div>
              <div className="lc-bot">
                <div className="lc-pricegrp">
                  <span className="lc-price">₹1,199</span>
                  <span className="lc-mrp">₹2,800</span>
                  <span className="lc-off">57% off</span>
                </div>
                <button className="btn btn-teal btn-sm">Book Now</button>
              </div>
            </div>
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
              <h2 className="sec-title">Trusted by doctors &amp; clinics</h2>
            </div>
          </div>
          <div className="rev-wrap">
            <div className="rev-track" id="revTrack">
              <div className="rev-card">
                <div className="rev-stars"><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <p className="rev-quote">We've been sourcing nitrile gloves and glucometers for our 3-doctor clinic through Precica for 6 months. Pricing is genuinely competitive and delivery is consistently on time. Highly recommended for institutional orders.</p>
                <div className="rev-person"><div className="rev-av" style={{ background: '#0C4DA2' }}>DR</div><div><div className="rev-name">Dr. Rajiv Bose</div><div className="rev-sub">General Physician · South Kolkata Clinic</div></div></div>
              </div>
              <div className="rev-card">
                <div className="rev-stars"><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <p className="rev-quote">The Accu-Chek glucometer I purchased is 100% genuine with full warranty. My diabetic father uses it daily — accurate readings every time. I've since bought the Omron BP monitor too. Great platform.</p>
                <div className="rev-person"><div className="rev-av" style={{ background: '#1B8A4E' }}>AM</div><div><div className="rev-name">Ananya Mukherjee</div><div className="rev-sub">Verified Buyer · Glucose Monitor + BP</div></div></div>
              </div>
              <div className="rev-card">
                <div className="rev-stars"><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <p className="rev-quote">We placed a bulk order of 1,000 nitrile gloves and surgical instruments for our diagnostic centre. The equipment arrived within 48 hours, perfectly packed. The B. Braun kit quality is superb. Will reorder.</p>
                <div className="rev-person"><div className="rev-av" style={{ background: '#D97706' }}>SG</div><div><div className="rev-name">Sumit Ghosh</div><div className="rev-sub">Diagnostic Centre Owner · Newtown</div></div></div>
              </div>
              <div className="rev-card">
                <div className="rev-stars"><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg><svg className="st" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
                <p className="rev-quote">Ordered the BPL ECG machine for our outpatient dept. The Precica team helped with AMC setup too. Excellent after-sales support. Truly the Apollo 24/7 equivalent for MedTech equipment in Bengal.</p>
                <div className="rev-person"><div className="rev-av" style={{ background: '#0097A7' }}>NK</div><div><div className="rev-name">Dr. Nilanjana Kar</div><div className="rev-sub">Cardiologist · Ruby General Hospital</div></div></div>
              </div>
            </div>
          </div>
          <div className="rev-nav">
            <div className="rev-nb" onClick={() => (window as any).revSlide(-1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6" /></svg></div>
            <div className="rev-nb" onClick={() => (window as any).revSlide(1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6" /></svg></div>
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
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.4.83 3.22.85 1.22-.27 2.4-.98 3.68-.94 1.56.07 2.72.62 3.49 1.78-3.24 1.89-2.79 5.9.35 7.21-.65 1.58-1.45 3.07-2.74 3.98zM12 7.39c-.17-2.59 2.12-4.71 4.68-4.89.33 2.93-2.67 5.18-4.68 4.89z" /></svg>
                  <div><small>Download on the</small><strong>App Store</strong></div>
                </div>
                <div className="app-store">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.34.19.74.2 1.1.04L14.76 12 4.28.2C3.92.04 3.52.05 3.18.24 2.53.6 2.12 1.27 2.12 2v19.76c0 .73.41 1.4 1.06 1.76zm16.06-10.9l-2.6-1.46-3.17 3.17 3.17 3.17 2.63-1.47c.75-.42 1.22-1.22 1.22-2.1 0-.88-.47-1.67-1.25-2.11zM4.84 1.69l11.8 11.8-3.34 3.34-8.46-15.14z" /></svg>
                  <div><small>Get it on</small><strong>Google Play</strong></div>
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
