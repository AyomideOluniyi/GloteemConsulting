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

  return (
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
      {isMobile ? (
        /* ── Mobile: two-row layout ── */
        <div style={{ padding: '0 1.25rem' }}>
          {/* Row 1: Logo + Book button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Image
                src="/gtlogo/Gloteemlogo.png"
                alt="Gloteem Consulting"
                width={200}
                height={80}
                style={{ objectFit: 'contain', height: '42px', width: 'auto', borderRadius: '4px' }}
                priority
              />
            </Link>
            <a
              href={INTEGRATIONS.calendly.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#E07B39',
                color: 'white',
                padding: '0.45rem 1.1rem',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '0.78rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book
            </a>
          </div>

          {/* Row 2: Nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(201,168,76,0.2)',
              paddingTop: '10px',
              paddingBottom: '12px',
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    fontSize: '0.78rem',
                    fontWeight: isActive ? '700' : '500',
                    letterSpacing: '0.01em',
                    paddingBottom: '2px',
                    borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        /* ── Desktop: single row ── */
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
        </div>
      )}
    </nav>
  );
}
