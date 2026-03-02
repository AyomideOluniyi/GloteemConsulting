import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { INTEGRATIONS } from '@/config/integrations';

export const metadata: Metadata = {
  title: 'Book a Leadership Strategy Consultation | Gloteem Consulting',
  description: 'Book a strategy consultation with Gloteem Consulting to strengthen leadership, organisational systems and service excellence.',
};

const socialLinks = [
  { label: 'LinkedIn', href: INTEGRATIONS.social.linkedin, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
  { label: 'YouTube', href: INTEGRATIONS.social.youtube, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  )},
  { label: 'Instagram', href: INTEGRATIONS.social.instagram, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )},
  { label: 'Facebook', href: INTEGRATIONS.social.facebook, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )},
];

export default function ContactPage() {
  return (
    <main>
      <Hero
        headline="Get in Touch"
        subheadline="Let's discuss how we can help your organisation thrive."
        compact={true}
      />

      <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

            {/* Form */}
            <div>
              <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Send a Message
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1.75rem' }}>
                We'd Love to Hear From You
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Book a Session
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1rem' }}>
                Schedule a Consultation
              </h2>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                Book a free consultation directly with Glory to explore how Gloteem can support your leadership journey.
              </p>

              {/* Calendly card */}
              <div style={{ backgroundColor: '#F7F5F0', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '12px', padding: '2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" style={{ margin: '0 auto 1rem' }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', color: '#1B2A4A', marginBottom: '0.5rem' }}>Book via Calendly</h3>
                <p style={{ color: '#666', fontSize: '0.875rem', marginBottom: '1.25rem' }}>Select a date and time that works for you.</p>
                <a href={INTEGRATIONS.calendly.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-block', backgroundColor: '#1B2A4A', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  Open Booking Calendar
                </a>
              </div>

              {/* Contact details */}
              <div style={{ backgroundColor: '#1B2A4A', borderRadius: '12px', padding: '1.75rem 2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', fontSize: '1.1rem', marginBottom: '1.25rem', color: 'white' }}>
                  Direct Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div>
                    <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>Business Email</p>
                    <a href={`mailto:${INTEGRATIONS.email.contact}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>{INTEGRATIONS.email.contact}</a>
                  </div>
                  <div>
                    <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>Personal Email</p>
                    <a href={`mailto:${INTEGRATIONS.email.personal}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.9rem' }}>{INTEGRATIONS.email.personal}</a>
                  </div>
                </div>

                <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Follow Glory</p>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                      title={link.label}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      {/* FAQ */}
      <section style={{ backgroundColor: '#F7F5F0', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: '#1B2A4A' }}>
              Frequently Asked Questions
            </h2>
          </div>
          {[
            { q: 'What is the typical response time?', a: 'We aim to respond to all enquiries within 2 business days.' },
            { q: 'How much do your services cost?', a: "All service pricing is tailored to your specific needs. During your consultation, we'll discuss your requirements and provide a customised proposal." },
            { q: 'Do you work with organisations outside the UK?', a: 'Yes — we work internationally. Whether in-person or virtual, we adapt to your location and needs.' },
            { q: 'How do I get started?', a: 'Simply fill out the form, or click the booking link to schedule a free consultation directly.' },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '10px', padding: '1.5rem 1.75rem', marginBottom: '1rem', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: '700', color: '#1B2A4A', fontSize: '1.05rem', marginBottom: '0.5rem' }}>{item.q}</h3>
              <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.65', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
