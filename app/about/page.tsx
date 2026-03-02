import Image from 'next/image';
import Hero from '@/components/Hero';
import { aboutContent } from '@/content/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Glory | Leadership and Healthcare Consultant | Gloteem Consulting',
  description: 'Meet Glory, a leadership and organisational development consultant specialising in healthcare advisory, operational structure and strategic growth.',
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        backgroundImage="/headshot/family_pic.png"
        headline={aboutContent.name}
        subheadline={aboutContent.subheading}
        compact={true}
      />

      {/* Split intro: photo + intro text */}
      <section className="section-white section-padding">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Headshot */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '320px', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,42,74,0.2)' }}>
                <Image
                  src="/headshot/glory.jpeg"
                  alt="Glory Adebanjo-Taiwo"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                About Glory
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Servant Leader. HR Professional. Author.
              </h2>
              {aboutContent.biography.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: '#444', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Credentials */}
      <section className="section-cream section-padding">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Education & Certifications
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: '700', color: '#1B2A4A', margin: 0 }}>
              Qualifications & Credentials
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {aboutContent.credentials.map((cred, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '10px',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#C9A84C" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z" />
                </svg>
                <p style={{ color: '#333', fontSize: '0.9rem', lineHeight: '1.5', margin: 0, fontWeight: '500' }}>{cred}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="divider-gold" />

      {/* CTA */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Work With Glory
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Book a consultation to explore how Gloteem Consulting can support your leadership journey.
          </p>
          <a
            href="/contact"
            style={{ display: 'inline-block', backgroundColor: '#E07B39', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
