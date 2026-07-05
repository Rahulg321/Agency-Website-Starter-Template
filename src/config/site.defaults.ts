import type { SiteConfig } from '~/config/site.types'

export const defaultSiteConfig: SiteConfig = {
  businessName: 'Summit Plumbing Co.',
  industry: 'plumber',
  tagline: 'Licensed, insured, and available 24/7 for emergency repairs.',
  phone: '(555) 123-4567',
  email: 'hello@summitplumbing.example',
  address: '123 Main Street, Denver, CO 80202',
  hours: 'Mon–Fri 7am–6pm · Sat 8am–2pm · 24/7 emergency line',
  designPreset: 'trustworthy-blue',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  primaryCta: { label: 'Get a free quote', href: '/contact' },
  secondaryCta: { label: 'Call now', href: 'tel:+15551234567' },
  seo: {
    title: 'Summit Plumbing Co. | Denver Emergency Plumber',
    description:
      'Licensed Denver plumbers for leaks, drains, water heaters, and 24/7 emergency service. Free estimates. Same-day appointments.',
    keywords: 'plumber Denver, emergency plumber, drain cleaning, water heater repair',
  },
  services: [
    {
      slug: 'emergency-plumbing',
      title: 'Emergency plumbing',
      description: 'Burst pipes, major leaks, and backups handled fast — day or night.',
      icon: 'wrench',
    },
    {
      slug: 'drain-cleaning',
      title: 'Drain cleaning',
      description: 'Clear slow or clogged drains with professional equipment.',
      icon: 'droplets',
    },
    {
      slug: 'water-heater',
      title: 'Water heater service',
      description: 'Repair, replacement, and maintenance for tank and tankless units.',
      icon: 'flame',
    },
    {
      slug: 'leak-detection',
      title: 'Leak detection',
      description: 'Find hidden leaks before they cause costly water damage.',
      icon: 'search',
    },
  ],
  reviews: [
    {
      quote: 'They arrived within an hour and fixed our burst pipe before more damage happened.',
      author: 'Maria L.',
      rating: 5,
    },
    {
      quote: 'Fair pricing, clean work, and they explained everything clearly.',
      author: 'James T.',
      rating: 5,
    },
    {
      quote: 'Our go-to plumber for the office building. Always professional.',
      author: 'Denver Property Group',
      rating: 5,
    },
  ],
  trustBadges: [
    { label: 'Licensed & insured', value: 'CO #PL-48291' },
    { label: 'Years in business', value: '15+' },
    { label: 'Average rating', value: '4.9 ★' },
    { label: 'Response time', value: '< 60 min' },
  ],
  stats: [
    { label: 'Jobs completed', value: '8,400+' },
    { label: 'Emergency calls', value: '24/7' },
    { label: 'Satisfaction rate', value: '98%' },
    { label: 'Service areas', value: '12 cities' },
  ],
  team: [
    {
      name: 'Alex Rivera',
      role: 'Master plumber',
      bio: '20 years of residential and commercial plumbing across the Denver metro.',
    },
    {
      name: 'Jordan Kim',
      role: 'Service manager',
      bio: 'Coordinates dispatch and ensures every job meets our quality standard.',
    },
  ],
  faqs: [
    {
      question: 'Do you offer emergency service?',
      answer: 'Yes. We answer emergency calls 24/7 and aim to arrive within 60 minutes.',
    },
    {
      question: 'Are estimates free?',
      answer: 'Yes. We provide free estimates for most standard plumbing jobs.',
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We serve Denver and surrounding communities listed on our service area page.',
    },
  ],
  serviceAreas: [
    'Denver',
    'Aurora',
    'Lakewood',
    'Arvada',
    'Westminster',
    'Thornton',
  ],
}
