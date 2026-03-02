'use client';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaButtons?: Array<{
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
    target?: string;
  }>;
  backgroundImage?: string;
  compact?: boolean;
}

export default function Hero({
  headline,
  subheadline,
  ctaButtons,
  backgroundImage = '/pilars/pilarsimage.png',
  compact = false,
}: HeroProps) {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: compact ? '48vh' : '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(12, 20, 40, 0.78), rgba(12, 20, 40, 0.78)), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '860px',
          margin: '0 auto',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.12',
            marginBottom: '1.25rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}
        >
          {headline}
        </h1>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.92)',
            lineHeight: '1.65',
            marginBottom: ctaButtons ? '2.5rem' : 0,
            maxWidth: '640px',
            margin: ctaButtons ? '0 auto 2.5rem' : '0 auto',
          }}
        >
          {subheadline}
        </p>

        {ctaButtons && ctaButtons.length > 0 && (
          <div className="hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            {ctaButtons.map((btn, idx) =>
              btn.variant === 'primary' ? (
                <a
                  key={idx}
                  href={btn.href}
                  target={btn.target}
                  rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
                  style={{
                    backgroundColor: '#E07B39',
                    color: 'white',
                    padding: '0.85rem 2.2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    boxShadow: '0 4px 15px rgba(224,123,57,0.4)',
                  }}
                >
                  {btn.label}
                </a>
              ) : (
                <a
                  key={idx}
                  href={btn.href}
                  target={btn.target}
                  rel={btn.target === '_blank' ? 'noopener noreferrer' : undefined}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '0.85rem 2.2rem',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-block',
                    border: '2px solid rgba(255,255,255,0.7)',
                  }}
                >
                  {btn.label}
                </a>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
