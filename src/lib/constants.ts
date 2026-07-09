export const SITE_NAME = 'Best Cancun Tours';
export const SITE_CITY = 'Cancun';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://best-cancun-tours.com';
export const SITE_DESCRIPTION = 'Discover the best tours, attractions, and experiences in Cancun. Book Chichén Itzá day trips, cenote tours, Tulum ruins, and Isla Mujeres catamarans with instant confirmation and free cancellation.';
export const GYG_PARTNER_ID = 'LPT26IL';
export const GYG_CAMPAIGN = 'best_cancun_tours';
export const GYG_LOCATION_ID = '150';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-91RYXQXM0Y';
export const CONTENT_DATE = '2026-07-08';
// Direct link to this city's full tour catalogue on GetYourGuide (partner-attributed).
// Used by the "browse all tours" CTAs to send traffic straight to GYG.
export const GYG_CITY_URL = `https://www.getyourguide.com/${SITE_CITY.toLowerCase().replace(/\s+/g, '-')}-l${GYG_LOCATION_ID}/?partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;

