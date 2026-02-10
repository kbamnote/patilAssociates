import { UtensilsCrossed, Hotel, Building2 } from 'lucide-react';

/**
 * Centralized Business Configuration
 * Contains all metadata for Patil Associates' three business verticals
 */

export const BUSINESSES = {
  bars: {
    id: 'bars',
    name: 'Patil Bars',
    shortName: 'Bars',
    url: 'https://patilbars.in',
    tagline: 'Premium Dining & Beverage Experiences',
    
    // Short description for cards and navigation (2-3 lines)
    shortDescription: 'Patil Bars offers premium dining and beverage experiences, blending contemporary ambiance with culinary craftsmanship to create memorable moments for discerning guests.',
    
    // Long description for ventures page
    longDescription: 'Our restaurant and bar vertical is dedicated to creating premium dining experiences that celebrate culinary artistry and exceptional hospitality. We combine modern, sophisticated ambiance with exquisite cuisine crafted by expert chefs who source the finest ingredients.',
    
    // Branding
    icon: UtensilsCrossed,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600',
    borderColor: 'border-orange-500',
    gradientFrom: 'from-orange-50',
    gradientTo: 'to-white',
    
    // CTA text
    ctaText: 'Explore Bars',
    
    // SEO
    keywords: 'premium bar, fine dining, restaurants, culinary experience, craft cocktails',
  },
  
  hotels: {
    id: 'hotels',
    name: 'Patil Hotels',
    shortName: 'Hotels',
    url: 'https://hotels.patilassociates.in',
    tagline: 'Thoughtfully Designed Hospitality',
    
    shortDescription: 'Patil Hotels delivers thoughtfully designed stays across key Indian cities, combining comfort, service excellence, and modern amenities for business and leisure travellers.',
    
    longDescription: 'Patil Associates takes pride in offering world-class hospitality services that set new standards for luxury and comfort. Our hotels are meticulously designed to provide the perfect blend of modern amenities, aesthetic charm, and functional excellence for both business and leisure travelers.',
    
    icon: Hotel,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    borderColor: 'border-blue-600',
    gradientFrom: 'from-blue-50',
    gradientTo: 'to-white',
    
    ctaText: 'Explore Hotels',
    
    keywords: 'luxury hotels, hospitality, business hotels, accommodation, premium stays',
  },
  
  properties: {
    id: 'properties',
    name: 'Patil Properties',
    shortName: 'Properties',
    url: 'https://properties.patilassociates.in',
    tagline: 'Building Long-Term Value',
    
    shortDescription: 'Patil Properties develops residential and commercial spaces built on the pillars of quality construction, strategic locations, and long-term value creation for homeowners and investors.',
    
    longDescription: 'In the real estate sector, Patil Associates stands for trust, quality construction, and long-term value creation. We develop residential and commercial projects that offer modern living spaces, strategic business locations, and sustainable infrastructure designed for the future.',
    
    icon: Building2,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-600',
    hoverColor: 'hover:bg-emerald-700',
    borderColor: 'border-emerald-600',
    gradientFrom: 'from-emerald-50',
    gradientTo: 'to-white',
    
    ctaText: 'Explore Properties',
    
    keywords: 'real estate, properties, residential, commercial, investment, construction',
  },
};

/**
 * Get all businesses as an array
 */
export const getAllBusinesses = () => Object.values(BUSINESSES);

/**
 * Get business by ID
 */
export const getBusinessById = (id) => BUSINESSES[id];

/**
 * External link props for SEO and security
 */
export const externalLinkProps = {
  rel: 'noopener noreferrer',
  target: '_self', // Open in same tab as per requirements
};

/**
 * Footer disclaimer text
 */
export const FOOTER_DISCLAIMER = 'Patil Bars, Patil Hotels, and Patil Properties operate as independent businesses under Patil Associates.';
