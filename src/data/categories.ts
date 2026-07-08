import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'skip-the-line',
    title: 'Skip-the-Line Tickets',
    metaTitle: 'Skip-the-Line Tickets in Cancun 2026',
    metaDescription: 'Browse the best skip-the-line tickets in Cancun. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best skip-the-line tickets in Cancun, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated skip-the-line tickets in Cancun, booked direct through GetYourGuide.',
    icon: '🎟️',
    tourSlugs: ['from-cancun-xplor-park-entry-full-day'],
    faqs: [
      { question: 'How do I book skip-the-line tickets in Cancun?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'guided-tours',
    title: 'Guided Tours',
    metaTitle: 'Guided Tours in Cancun 2026',
    metaDescription: 'Browse the best guided tours in Cancun. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best guided tours in Cancun, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated guided tours in Cancun, booked direct through GetYourGuide.',
    icon: '🧑‍🏫',
    tourSlugs: ['cancun-chichen-itza-cenote-and-valladolid-tour-with-lunch', 'cancun-jungle-atv-tour-ziplining-and-cenote-swim', 'cancun-and-riviera-maya-atv-zipline-and-cenote-combo-tour', 'chichen-itza-guided-tour-with-valladolid-and-cenote-chichika', 'whale-shark-swimming-ocean-safari-all-included-tour', 'isla-mujeres-catamaran-tour-with-open-bar-snorkeling-and-lun', 'from-canc-n-rio-lagartos-and-las-coloradas-boat-tour-w-lunch', 'cancun-hop-on-hop-off-sightseeing-bus-tour', 'canc-n-cooking-class-and-optional-local-market-tour'],
    faqs: [
      { question: 'How do I book guided tours in Cancun?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'day-trips',
    title: 'Day Trips & Excursions',
    metaTitle: 'Day Trips & Excursions in Cancun 2026',
    metaDescription: 'Browse the best day trips & excursions in Cancun. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best day trips & excursions in Cancun, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated day trips & excursions in Cancun, booked direct through GetYourGuide.',
    icon: '🚌',
    tourSlugs: ['from-cancun-tulum-ruins-cenote-mariposa-and-playa-del-carmen', 'from-canc-n-xcaret-park-full-combo', 'cancun-airport-one-way-or-roundtrip-private-transfer', 'from-cancun-chichen-itza-cenote-and-valladolid-day-trip'],
    faqs: [
      { question: 'How do I book day trips & excursions in Cancun?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'food-drink',
    title: 'Food, Wine & Nightlife',
    metaTitle: 'Food, Wine & Nightlife in Cancun 2026',
    metaDescription: 'Browse the best food, wine & nightlife in Cancun. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best food, wine & nightlife in Cancun, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated food, wine & nightlife in Cancun, booked direct through GetYourGuide.',
    icon: '🍷',
    tourSlugs: ['isla-mujeres-all-inclusive-catamaran-with-open-bar-snorkel-a', 'isla-mujeres-catamaran-with-open-bar-snorkeling-and-lunch', 'cancun-hip-hop-sessions-party-boat-cruise'],
    faqs: [
      { question: 'How do I book food, wine & nightlife in Cancun?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'top-attractions',
    title: 'Top Attractions',
    metaTitle: 'Top Attractions in Cancun 2026',
    metaDescription: 'Browse the best top attractions in Cancun. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best top attractions in Cancun, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated top attractions in Cancun, booked direct through GetYourGuide.',
    icon: '⭐',
    tourSlugs: ['canc-n-swim-with-whale-sharks', 'cancun-coco-bongo-nightclub-experience', 'exclusive-cancun-private-yacht-sail-the-caribbean', '3-in-1-speedboat-cancun-isla-contoy-and-isla-mujeres', 'puerto-morelos-national-reef-park-snorkeling-and-beach-lunch', 'canc-n-coco-bongo-beach-party-experience', 'cancun-jetski-and-snorkel-adventure', 'cancun-tulum-and-coba-with-cenote-cave-exploration-and-lunch'],
    faqs: [
      { question: 'How do I book top attractions in Cancun?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
