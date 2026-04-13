// Hero slider
let hi = 0, ht: NodeJS.Timeout;
let slides: NodeListOf<Element>;
let dots: NodeListOf<Element>;

const heroGo = (n: number) => {
  if (slides.length === 0) return;
  slides[hi].classList.remove('on');
  if (dots.length > hi) dots[hi].classList.remove('on');
  hi = (n + slides.length) % slides.length;
  slides[hi].classList.add('on');
  if (dots.length > hi) dots[hi].classList.add('on');
};

const heroSlide = (d: number) => {
  clearInterval(ht);
  heroGo(hi + d);
  startHT();
};

const startHT = () => {
  ht = setInterval(() => heroGo(hi + 1), 4800);
};

const initHeroSlider = () => {
  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.hero-dot');
  if (slides.length > 0) {
    startHT();
  }
};

// Cart
let cc = 0;
const CART_STORAGE_KEY = 'precica_cart';

const loadCartCount = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      cc = cart.reduce((total: number, item: any) => total + item.quantity, 0);
      updateCartDisplay();
    }
  } catch (error) {
    console.error('Failed to load cart count:', error);
  }
};

const updateCartDisplay = () => {
  const cartPip = document.getElementById('cartPip');
  const mobDot = document.getElementById('mobDot');
  if (cartPip) cartPip.textContent = cc.toString();
  if (mobDot) mobDot.style.display = cc > 0 ? 'block' : 'none';
};

const syncCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      const newCount = cart.reduce((total: number, item: any) => total + item.quantity, 0);
      if (newCount !== cc) {
        cc = newCount;
        updateCartDisplay();
      }
    }
  } catch (error) {
    console.error('Failed to sync cart count:', error);
  }
};

function addCart(btn: HTMLElement, name: string) {
  cc++;
  updateCartDisplay();
  
  btn.classList.add('done');
  btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Added!';
  showToast('✅ ' + name + ' added to cart');
  
  setTimeout(() => {
    btn.classList.remove('done');
    btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Add to Cart';
  }, 2200);
}

function toggleCart() {
  syncCartFromStorage();
  showToast(cc === 0 ? 'Your cart is empty — start shopping!' : 'Cart: ' + cc + ' item(s) · Checkout coming soon!');
}

// Toast
function showToast(msg: string) {
  const t = document.getElementById('toast');
  if (!t) return;
  
  t.textContent = msg;
  t.classList.add('show');
  
  clearTimeout((t as any)._t);
  (t as any)._t = setTimeout(() => t.classList.remove('show'), 2800);
}

// Product scroll
function scrollProd(d: number) {
  const prodScroll = document.getElementById('prodScroll');
  if (prodScroll) {
    prodScroll.scrollBy({ left: d * 260, behavior: 'smooth' });
  }
}

// Reviews slider
let ri = 0;
function revSlide(d: number) {
  const t = document.getElementById('revTrack');
  if (!t) return;
  
  const cards = t.querySelectorAll('.rev-card');
  const vis = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
  ri = Math.max(0, Math.min(cards.length - vis, ri + d));
  const w = (cards[0] as HTMLElement).offsetWidth + 20;
  (t as HTMLElement).style.transform = `translateX(-${ri * w}px)`;
}

// Fade-up on scroll
const initFadeUpObserver = () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
  
  document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el));
};

// Sticky shadow
const initStickyHeader = () => {
  window.addEventListener('scroll', () => {
    const hdr = document.getElementById('hdr');
    if (hdr) {
      hdr.style.boxShadow = window.scrollY > 8 ? '0 4px 20px rgba(12,77,162,.1)' : 'none';
    }
  });
};

// Listen for storage changes (when cart is updated on another tab or through Zustand)
const initStorageListener = () => {
  window.addEventListener('storage', (event) => {
    if (event.key === CART_STORAGE_KEY) {
      syncCartFromStorage();
    }
  });
  
  // Also check for cart updates periodically (for same-tab changes)
  setInterval(() => {
    syncCartFromStorage();
  }, 500);
};

// Initialize all scripts
export const initializePageScripts = () => {
  loadCartCount();
  initHeroSlider();
  initFadeUpObserver();
  initStickyHeader();
  initStorageListener();
};

 if (typeof window !== 'undefined') {
(window as any).addCart = addCart;
(window as any).toggleCart = toggleCart;
(window as any).showToast = showToast;
(window as any).scrollProd = scrollProd;
(window as any).revSlide = revSlide;
(window as any).heroGo = heroGo;
(window as any).heroSlide = heroSlide;
  }
