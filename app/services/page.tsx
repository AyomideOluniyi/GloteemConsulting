import Hero from '@/components/Hero';
import PillarCard from '@/components/PillarCard';
import { servicePillars, serviceIntro } from '@/content/services';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Leadership Development, Healthcare Consultancy and Business Structure Advisory',
  description: 'Explore leadership coaching, start-up structure advisory and healthcare consultancy services designed to strengthen systems and improve organisational performance.',
};

export default function ServicesPage() {
  return (
    <main>
      <Hero
        headline="Our Services"
        subheadline="Tailored consulting across three core pillars of expertise — priced on request to suit your organisation."
        compact={true}
      />

      {/* Intro */}
      <section className="section-white section-padding">
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.8' }}>{serviceIntro}</p>
        </div>
      </section>

      {/* Pillar Sections */}
      {servicePillars.map((pillar, idx) => (
        <div key={pillar.id}>
          <div className="divider-gold" />
          <section
            style={{ backgroundColor: idx % 2 === 0 ? '#F7F5F0' : 'white', padding: '5rem 2rem' }}
          >
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <PillarCard pillar={pillar} minimal={false} />
            </div>
          </section>
        </div>
      ))}

      <div className="divider-gold" />

      {/* CTA */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Not Sure Where to Start?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
            Book a free consultation and we'll recommend the right service pillar for your organisation.
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-block', backgroundColor: '#E07B39', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
