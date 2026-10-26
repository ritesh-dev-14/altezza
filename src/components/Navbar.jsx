import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar({ isHome = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 40);
  const [isVisible, setIsVisible] = useState(true);
  const previousScrollY = useRef(window.scrollY);
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Kitchens', path: '/kitchens' },
    { name: 'Wardrobes', path: '/wardrobes' },
    { name: 'Design', path: '/design' },
    { name: 'Materials', path: '/materials' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY.current;

      if (currentScrollY <= 40) {
        setIsVisible(true);
      } else if (scrollDelta > 6) {
        setIsVisible((visible) => (visible ? false : visible));
      } else if (scrollDelta < -6) {
        setIsVisible((visible) => (visible ? visible : true));
      }

      if (isHome) setIsScrolled(currentScrollY > 40);
      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', updateNavbar, { passive: true });
    return () => window.removeEventListener('scroll', updateNavbar);
  }, [isHome]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-[72px] w-full px-5 transition-[transform,background-color,box-shadow] duration-300 ease-out sm:h-20 sm:px-12 ${
        isVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      } ${
        isHome && !isScrolled && !mobileMenuOpen
          ? 'border-b border-white/10 bg-black/20 backdrop-blur-md'
          : 'bg-espresso shadow-[0_8px_30px_rgba(0,0,0,0.16)]'
      }`}
    >
      <div className="relative z-20 mx-auto flex h-full max-w-[1440px] items-center justify-between">
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Home page"
          className="relative flex shrink-0 items-center transition-opacity hover:opacity-80"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-1 inset-y-2 rounded-full bg-white/25 blur-md"
          />
          <img
            src={logo}
            alt="Altezza Brand Logo"
            className="relative h-10 w-auto object-contain drop-shadow-[0_1px_2px_rgba(255,255,255,0.35)] sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative py-2 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-champagne xl:text-[11px] xl:tracking-[0.19em] ${
                  isActive ? 'text-champagne' : 'text-ivory/90'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-champagne transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/consultation"
            className="inline-flex min-h-11 items-center whitespace-nowrap border border-ivory/40 px-5 text-[10px] font-medium uppercase tracking-[0.15em] text-ivory transition-colors duration-300 hover:border-champagne hover:bg-champagne hover:text-espresso"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex min-h-11 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne lg:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
        >
          <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                mobileMenuOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`absolute inset-x-0 top-full z-10 flex h-[calc(100dvh-72px)] flex-col justify-between border-t border-white/10 bg-espresso px-7 pb-8 pt-5 transition-[opacity,visibility,transform] duration-300 ease-out sm:h-[calc(100dvh-80px)] sm:px-12 lg:hidden ${
          mobileMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-3 opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`flex min-h-[58px] items-center justify-between border-b border-white/10 text-sm uppercase tracking-[0.17em] transition-colors ${
                  isActive ? 'text-champagne' : 'text-ivory/90 hover:text-champagne'
                }`}
              >
                {item.name}
                <span aria-hidden="true" className="text-champagne/70">↗</span>
              </Link>
            );
          })}
        </nav>

        <div className="pt-8">
          <Link
            to="/consultation"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
            className="flex min-h-14 w-full items-center justify-between bg-ivory px-5 text-[10px] font-medium uppercase tracking-[0.17em] text-espresso transition-colors hover:bg-champagne"
          >
            <span>Book a Consultation</span>
            <span aria-hidden="true" className="text-base">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
