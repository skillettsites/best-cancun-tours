import { FAQ } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
}

export const attractions: Attraction[] = [
  {
    slug: 'cenotes',
    name: 'Cenotes',
    title: 'Cenotes Tickets and Tours',
    metaTitle: 'Cenotes Tickets and Tours 2026',
    metaDescription: 'Book Cenotes tickets and tours in Cancun. 7 top-rated options from £29, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Cenotes tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['cancun-chichen-itza-cenote-and-valladolid-tour-with-lunch', 'chichen-itza-guided-tour-with-valladolid-and-cenote-chichika', 'from-cancun-chichen-itza-cenote-and-valladolid-day-trip', 'from-cancun-tulum-ruins-cenote-mariposa-and-playa-del-carmen', 'cancun-tulum-and-coba-with-cenote-cave-exploration-and-lunch', 'cancun-jungle-atv-tour-ziplining-and-cenote-swim', 'cancun-and-riviera-maya-atv-zipline-and-cenote-combo-tour'],
    faqs: [
      { question: 'How much are Cenotes tickets?', answer: 'Cenotes tickets and tours in Cancun start from around £29. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Cenotes tour?', answer: 'The top-rated option is Chichen Itza, Cenote & Valladolid Tour with Lunch, rated 4.6 stars by 7,923 travellers, from £43.' },
      { question: 'Can I skip the line at Cenotes?', answer: 'Yes, many Cenotes options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'isla-mujeres',
    name: 'Isla Mujeres',
    title: 'Isla Mujeres Tickets and Tours',
    metaTitle: 'Isla Mujeres Tickets and Tours 2026',
    metaDescription: 'Book Isla Mujeres tickets and tours in Cancun. 4 top-rated options from £38, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Isla Mujeres tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['isla-mujeres-all-inclusive-catamaran-with-open-bar-snorkel-a', '3-in-1-speedboat-cancun-isla-contoy-and-isla-mujeres', 'isla-mujeres-catamaran-tour-with-open-bar-snorkeling-and-lun', 'isla-mujeres-catamaran-with-open-bar-snorkeling-and-lunch'],
    faqs: [
      { question: 'How much are Isla Mujeres tickets?', answer: 'Isla Mujeres tickets and tours in Cancun start from around £38. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Isla Mujeres tour?', answer: 'The top-rated option is All-Inclusive Catamaran with Open Bar, Snorkel, rated 5 stars by 2 travellers, from £38.' },
      { question: 'Can I skip the line at Isla Mujeres?', answer: 'Yes, many Isla Mujeres options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'chichen-itza',
    name: 'Chichen Itza',
    title: 'Chichen Itza Tickets and Tours',
    metaTitle: 'Chichen Itza Tickets and Tours 2026',
    metaDescription: 'Book Chichen Itza tickets and tours in Cancun. 3 top-rated options from £43, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Chichen Itza tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['cancun-chichen-itza-cenote-and-valladolid-tour-with-lunch', 'chichen-itza-guided-tour-with-valladolid-and-cenote-chichika', 'from-cancun-chichen-itza-cenote-and-valladolid-day-trip'],
    faqs: [
      { question: 'How much are Chichen Itza tickets?', answer: 'Chichen Itza tickets and tours in Cancun start from around £43. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Chichen Itza tour?', answer: 'The top-rated option is Chichen Itza, Cenote & Valladolid Tour with Lunch, rated 4.6 stars by 7,923 travellers, from £43.' },
      { question: 'Can I skip the line at Chichen Itza?', answer: 'Yes, many Chichen Itza options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'tulum',
    name: 'Tulum',
    title: 'Tulum Tickets and Tours',
    metaTitle: 'Tulum Tickets and Tours 2026',
    metaDescription: 'Book Tulum tickets and tours in Cancun. 2 top-rated options from £31, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Tulum tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['from-cancun-tulum-ruins-cenote-mariposa-and-playa-del-carmen', 'cancun-tulum-and-coba-with-cenote-cave-exploration-and-lunch'],
    faqs: [
      { question: 'How much are Tulum tickets?', answer: 'Tulum tickets and tours in Cancun start from around £31. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Tulum tour?', answer: 'The top-rated option is From Cancun, rated 4.6 stars by 405 travellers, from £31.' },
      { question: 'Can I skip the line at Tulum?', answer: 'Yes, many Tulum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'xplor',
    name: 'Xplor',
    title: 'Xplor Tickets and Tours',
    metaTitle: 'Xplor Tickets and Tours 2026',
    metaDescription: 'Book Xplor tickets and tours in Cancun. 2 top-rated options from £52, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Xplor tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['from-cancun-xplor-park-entry-full-day', 'cancun-tulum-and-coba-with-cenote-cave-exploration-and-lunch'],
    faqs: [
      { question: 'How much are Xplor tickets?', answer: 'Xplor tickets and tours in Cancun start from around £52. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Xplor tour?', answer: 'The top-rated option is From Cancun, rated 4.8 stars by 97 travellers, from £139.' },
      { question: 'Can I skip the line at Xplor?', answer: 'Yes, many Xplor options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'xcaret',
    name: 'Xcaret',
    title: 'Xcaret Tickets and Tours',
    metaTitle: 'Xcaret Tickets and Tours 2026',
    metaDescription: 'Book Xcaret tickets and tours in Cancun. 1 top-rated options from £139, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Xcaret tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['from-canc-n-xcaret-park-full-combo'],
    faqs: [
      { question: 'How much are Xcaret tickets?', answer: 'Xcaret tickets and tours in Cancun start from around £139. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Xcaret tour?', answer: 'The top-rated option is From Cancún, rated 4.3 stars by 91 travellers, from £139.' },
      { question: 'Can I skip the line at Xcaret?', answer: 'Yes, many Xcaret options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'coba',
    name: 'Coba',
    title: 'Coba Tickets and Tours',
    metaTitle: 'Coba Tickets and Tours 2026',
    metaDescription: 'Book Coba tickets and tours in Cancun. 1 top-rated options from £52, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Coba tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['cancun-tulum-and-coba-with-cenote-cave-exploration-and-lunch'],
    faqs: [
      { question: 'How much are Coba tickets?', answer: 'Coba tickets and tours in Cancun start from around £52. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Coba tour?', answer: 'The top-rated option is Tulum & Coba with Cenote, Cave Exploration and Lunch, rated 4.4 stars by 278 travellers, from £52.' },
      { question: 'Can I skip the line at Coba?', answer: 'Yes, many Coba options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'playa-del-carmen',
    name: 'Playa del Carmen',
    title: 'Playa del Carmen Tickets and Tours',
    metaTitle: 'Playa del Carmen Tickets and Tours 2026',
    metaDescription: 'Book Playa del Carmen tickets and tours in Cancun. 1 top-rated options from £31, with skip-the-line where available, instant confirmation and free cancella',
    intro: 'Compare the best Playa del Carmen tickets and guided tours in Cancun, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['from-cancun-tulum-ruins-cenote-mariposa-and-playa-del-carmen'],
    faqs: [
      { question: 'How much are Playa del Carmen tickets?', answer: 'Playa del Carmen tickets and tours in Cancun start from around £31. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Playa del Carmen tour?', answer: 'The top-rated option is From Cancun, rated 4.6 stars by 405 travellers, from £31.' },
      { question: 'Can I skip the line at Playa del Carmen?', answer: 'Yes, many Playa del Carmen options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
