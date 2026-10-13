(function () {
  var CALENDLY_URL = 'https://calendly.com/sana-nhar-cemconnect/30min';
  var CURRENT = document.body.getAttribute('data-page');
  var PAGES = [
    { id: 'home', href: 'index.html', label: 'Home' },
    { id: 'services', href: 'services.html', label: 'Services' },
    { id: 'approach', href: 'approach.html', label: 'Our Approach' },
    { id: 'about', href: 'about.html', label: 'About' },
    { id: 'contact', href: 'contact.html', label: 'Contact' }
  ];
  var root = document.getElementById('top');

  // Navigation (header, mobile, footer)
  document.querySelectorAll('[data-nav]').forEach(function (nav) {
    var plain = nav.hasAttribute('data-nav-plain');
    PAGES.forEach(function (p) {
      var a = document.createElement('a');
      a.href = p.href;
      a.textContent = p.label;
      if (nav.classList.contains('nav') || plain) a.className = 'mono';
      if (!plain && p.id === CURRENT) a.setAttribute('aria-current', 'page');
      nav.appendChild(a);
    });
  });

  // Mobile menu
  var burger = document.querySelector('.burger'), mnav = document.getElementById('mnav');
  burger.addEventListener('click', function () {
    var open = mnav.hidden;
    mnav.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
  });
  mnav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { mnav.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
  });

  // Language (shared across pages via localStorage)
  function getLang() { try { return localStorage.getItem('cc-lang') || 'en'; } catch (e) { return 'en'; } }
  function setLang(l) {
    try { localStorage.setItem('cc-lang', l); } catch (e) {}
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === l)); });
    window.CCI18N.apply(root, l);
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  setLang(getLang());

  // Booking (Calendly popup, falls back to a new tab)
  function openBooking(e) {
    if (!CALENDLY_URL) return;
    e.preventDefault();
    var open = function () { try { window.Calendly.initPopupWidget({ url: CALENDLY_URL }); } catch (err) { window.open(CALENDLY_URL, '_blank'); } };
    if (window.Calendly) return open();
    if (!document.getElementById('cc-cal-css')) {
      var l = document.createElement('link');
      l.id = 'cc-cal-css'; l.rel = 'stylesheet'; l.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(l);
    }
    var s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.onload = open;
    s.onerror = function () { window.open(CALENDLY_URL, '_blank'); };
    document.head.appendChild(s);
  }
  document.querySelectorAll('[data-book]').forEach(function (a) {
    if (CALENDLY_URL) { a.href = CALENDLY_URL; a.target = '_blank'; a.rel = 'noopener'; }
    a.addEventListener('click', openBooking);
  });

  // Scroll reveal
  var reveals = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (e) { e.setAttribute('data-in', ''); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.setAttribute('data-in', ''); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (e) { io.observe(e); });
  }
})();
