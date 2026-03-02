'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { INTEGRATIONS } from '@/config/integrations';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Books', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close overlay when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#1B2A4A',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : '0 1px 0 rgba(201,168,76,0.15)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/gtlogo/Gloteemlogo.png"
              alt="Gloteem Consulting"
              width={300}
              height={120}
              style={{ objectFit: 'contain', height: '56px', width: 'auto', borderRadius: '6px' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.85)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      letterSpacing: '0.02em',
                      paddingBottom: '2px',
                      borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={INTEGRATIONS.calendly.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#E07B39', color: 'white', padding: '0.55rem 1.4rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                Book a Consultation
              </a>
            </div>
          )}

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#C9A84C', zIndex: 200, position: 'relative' }}
              aria-label="Toggle menu"
            >
              <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      {isMobile && mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '76px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 90,
            backgroundColor: 'rgb(10, 16, 30)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 2rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: '1.45rem',
                    fontWeight: '600',
                    fontFamily: "'Playfair Display', serif",
                    padding: '0.75rem 0',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={INTEGRATIONS.calendly.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                marginTop: '1.5rem',
                backgroundColor: '#E07B39',
                color: 'white',
                padding: '1rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
              }}
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
