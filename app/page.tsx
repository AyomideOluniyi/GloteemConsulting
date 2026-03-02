import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import PillarCard from '@/components/PillarCard';
import { servicePillars } from '@/content/services';
import { testimonials } from '@/content/testimonials';
import { bookContent } from '@/content/book';
import { INTEGRATIONS, BRAND } from '@/config/integrations';

export default function Home() {
  const heroButtons = [
    {
      label: 'Book a Strategy Consultation',
      href: INTEGRATIONS.calendly.url,
      variant: 'primary' as const,
      target: '_blank',
    },
    {
      label: 'Explore Our Services',
      href: '#services',
      variant: 'secondary' as const,
    },
  ];

  return (
    <main>
      {/* HERO */}
      <Hero
        headline="Building Confident Leaders and Strengthening Organisations with Purpose"
        subheadline="Gloteem Consulting is a leadership and organisational development consultancy supporting emerging leaders, founders, small and medium enterprises, and healthcare organisations. We combine strategic advisory, operational structure and compassionate leadership development to help you build sustainable systems that deliver service excellence."
        ctaButtons={heroButtons}
      />

      {/* POSITIONING STATEMENT */}
      <section className="section-white section-padding">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Where Strategy Meets Heart
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
            Leadership and organisational growth can feel complex, particularly within regulated or rapidly evolving sectors.
            At Gloteem Consulting, we provide structured leadership development, organisational advisory and healthcare consultancy
            services designed to bring clarity, alignment and measurable improvement.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginTop: '1rem' }}>
            We support organisations transitioning from reactive management to intentional leadership by strengthening systems,
            improving service delivery frameworks and designing scalable operational structures.
          </p>
        </div>
      </section>

      <div className="divider-gold" />

      {/* THREE EXPERTISE PILLARS */}
      <section id="services" className="section-cream section-padding">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              What We Do
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '700', color: '#1B2A4A', margin: 0 }}>
              Our Areas of Expertise
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {servicePillars.map((pillar) => (
              <PillarCard key={pillar.id} pillar={pillar} minimal={true} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* BOOK FEATURE */}
      <section className="section-white section-padding">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            {/* Book visual */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '260px',
                  height: '340px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(27,42,74,0.25), 0 8px 20px rgba(0,0,0,0.15)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/book-cover/the-leadership-bridge.jpeg"
                  alt={bookContent.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

            {/* Book info */}
            <div>
              <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                New Book
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: '700', color: '#1B2A4A', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                {bookContent.title}
              </h2>
              <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '1rem', marginBottom: '1.25rem' }}>
                By {bookContent.author}
              </p>
              <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                {bookContent.description}
              </p>

              <div
                style={{
                  backgroundColor: '#F7F5F0',
                  borderLeft: '4px solid #C9A84C',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '2rem',
                }}
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#1B2A4A', fontStyle: 'italic', margin: 0 }}>
                  "{bookContent.pullQuote}"
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={bookContent.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#E07B39', color: 'white', padding: '0.8rem 1.75rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}
                >
                  Buy on Amazon
                </a>
                <a
                  href="/book"
                  style={{ backgroundColor: 'transparent', color: '#1B2A4A', border: '2px solid #1B2A4A', padding: '0.8rem 1.75rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block' }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* TESTIMONIALS */}
      <section className="section-cream section-padding">
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Client Stories
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '700', color: '#1B2A4A', margin: 0 }}>
              What Our Clients Say
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* CLOSING CTA */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              lineHeight: '1.2',
            }}
          >
            Ready to Strengthen Your Leadership and Organisational Systems?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Book a leadership strategy consultation today and begin building a structured, sustainable future for your organisation.
          </p>
          <a
            href={INTEGRATIONS.calendly.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: '#E07B39',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '1.05rem',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(224,123,57,0.4)',
            }}
          >
            Book a Strategy Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
