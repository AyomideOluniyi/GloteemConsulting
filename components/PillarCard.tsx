import Link from 'next/link';
import { ServicePillar } from '@/content/services';

interface PillarCardProps {
  pillar: ServicePillar;
  minimal?: boolean;
}

const ICONS: Record<string, React.ReactNode> = {
  leadership: (
    <svg width="40" height="40" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  startup: (
    <svg width="40" height="40" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  care: (
    <svg width="40" height="40" fill="none" stroke="#C9A84C" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
};

export default function PillarCard({ pillar, minimal = false }: PillarCardProps) {
  if (minimal) {
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 2px 12px rgba(27,42,74,0.08)',
          border: '1px solid rgba(201,168,76,0.15)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div style={{ marginBottom: '1.25rem' }}>{ICONS[pillar.icon]}</div>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1B2A4A',
            marginBottom: '0.75rem',
            lineHeight: '1.3',
          }}
        >
          {pillar.name}
        </h3>
        <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1rem' }}>
          {pillar.shortDescription}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flexGrow: 1 }}>
          {pillar.servicesIncluded.map((s, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: '#444', fontSize: '0.875rem', lineHeight: '1.5' }}>
              <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0, marginTop: '1px' }}>•</span>
              {s}
            </li>
          ))}
        </ul>
        {pillar.keyOutcomes[0] && (
          <p style={{ color: '#1B2A4A', fontSize: '0.85rem', fontStyle: 'italic', borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '0.75rem', marginBottom: '1rem', lineHeight: '1.55' }}>
            <strong>Outcome:</strong> {pillar.keyOutcomes[0]}
          </p>
        )}
        <Link
          href={`/services#${pillar.id}`}
          style={{ color: '#C9A84C', fontWeight: '600', fontSize: '0.875rem', textDecoration: 'none' }}
        >
          Learn More →
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
        <div style={{ flexShrink: 0, marginTop: '4px' }}>{ICONS[pillar.icon]}</div>
        <div style={{ flex: 1 }}>
          <h3
            id={pillar.id}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '0.5rem' }}
          >
            {pillar.name}
          </h3>
          <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.875rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            For: {pillar.targetAudience}
          </p>

          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: '700', color: '#1B2A4A', marginBottom: '0.75rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Services Included
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pillar.servicesIncluded.map((s, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#333', fontSize: '0.95rem' }}>
                  <span style={{ color: '#C9A84C', fontWeight: '700', marginTop: '1px', flexShrink: 0 }}>▪</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: '700', color: '#1B2A4A', marginBottom: '0.75rem', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Key Outcomes
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pillar.keyOutcomes.map((o, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: '#333', fontSize: '0.95rem' }}>
                  <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0 }}>✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            style={{ display: 'inline-block', backgroundColor: '#E07B39', color: 'white', padding: '0.7rem 1.75rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}
          >
            Enquire About This Service
          </Link>
        </div>
      </div>
    </div>
  );
}
