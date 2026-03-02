export interface ServicePillar {
  id: string;
  name: string;
  shortDescription: string;
  targetAudience: string;
  servicesIncluded: string[];
  keyOutcomes: string[];
  icon: string;
}

export const servicePillars: ServicePillar[] = [
  {
    id: 'leadership',
    name: 'Leadership & Organisational Development',
    shortDescription:
      'For emerging and mid-level leaders seeking structured leadership development and organisational alignment.',
    targetAudience:
      'Emerging and mid-level leaders seeking structured development',
    servicesIncluded: [
      'Leadership coaching and capability development',
      'Organisational design and team alignment strategy',
      'Change management and transformation support',
    ],
    keyOutcomes: [
      'Stronger leadership confidence, improved team performance and clear organisational direction.',
    ],
    icon: 'leadership',
  },
  {
    id: 'startup',
    name: 'Customer Support & Start-up Structure',
    shortDescription:
      'For founders and growing businesses requiring operational structure and scalable service systems.',
    targetAudience:
      'Founders and growing businesses requiring operational structure',
    servicesIncluded: [
      'Customer service framework design',
      'Operational workflow and process improvement',
      'Business structure and service optimisation advisory',
    ],
    keyOutcomes: [
      'Efficient operational systems that enhance customer experience and support sustainable growth.',
    ],
    icon: 'startup',
  },
  {
    id: 'care',
    name: 'Care & Health Consultancy',
    shortDescription:
      'For care providers and healthcare organisations seeking operational excellence and structured leadership support.',
    targetAudience:
      'Care providers and healthcare organisations',
    servicesIncluded: [
      'Care operations and service quality advisory',
      'Compliance readiness and improvement planning',
      'Healthcare leadership support for care managers',
    ],
    keyOutcomes: [
      'Strengthened service delivery, improved compliance positioning and sustainable healthcare systems.',
    ],
    icon: 'care',
  },
];

export const serviceIntro = `Gloteem Consulting offers three core pillars of expertise, each designed to address unique organisational challenges and opportunities. All service pricing is on request — we tailor our approach to your specific needs.`;
