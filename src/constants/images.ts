/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Netwhile Futurecare Image Asset Constants
 * 
 * Collection of high-quality Unsplash image URLs categorized by business vertical.
 * Note: Always use 'referrerPolicy="no-referrer"' when using these external URLs
 * to ensure they load correctly in all environments.
 */

const UNSPLASH_BASE = 'https://images.unsplash.com';
const QUALITY_PARAMS = 'auto=format&fit=crop&q=80';

export const ASSET_IMAGES = {
  // Hero & Brand
  HERO: {
    MAIN: `${UNSPLASH_BASE}/photo-1486406146926-c627a92ad1ab?${QUALITY_PARAMS}`, // Modern skyscraper
    SUSTAINABLE: `${UNSPLASH_BASE}/photo-1497435334941-8c899ee9e8e9?${QUALITY_PARAMS}`, // Solar energy field
    FUTURE_TECH: `${UNSPLASH_BASE}/photo-1451187580459-43490279c0fa?${QUALITY_PARAMS}`, // Global network
  },

  // Business Verticals
  VERTICALS: {
    MANPOWER: `${UNSPLASH_BASE}/photo-1521737604893-d14cc237f11d?${QUALITY_PARAMS}&w=1200`, // Professional workforce
    SOLAR: `${UNSPLASH_BASE}/photo-1508514177221-188b1cf16e9d?${QUALITY_PARAMS}&w=1200`, // Solar technology
    LOANS: `${UNSPLASH_BASE}/photo-1554224155-6726b3ff858f?${QUALITY_PARAMS}&w=1200`, // Finance/Banking
    INSURANCE: `${UNSPLASH_BASE}/photo-1450101499163-c8848c66ca85?${QUALITY_PARAMS}&w=1200`, // Insurance/Customer care
    SECURITY: `${UNSPLASH_BASE}/photo-1582139329536-e7284fece509?${QUALITY_PARAMS}&w=1200`, // Professional security
    CCTV: `${UNSPLASH_BASE}/photo-1561474381-7a7ebb152e2c?${QUALITY_PARAMS}&w=1200`, // Verified stable surveillance system
    IOT: `${UNSPLASH_BASE}/photo-1518770660439-4636190af475?${QUALITY_PARAMS}&w=1200`, // IoT/Technology
    SOFTWARE: `${UNSPLASH_BASE}/photo-1461749280684-dccba630e2f6?${QUALITY_PARAMS}&w=1200`, // Software development
    CONSULTING: `${UNSPLASH_BASE}/photo-1552664730-d307ca884978?${QUALITY_PARAMS}&w=1200`, // Business strategy
  },

  // Category Specifics
  PRODUCTS: {
    SOLAR_PANEL: `${UNSPLASH_BASE}/photo-1508514177221-188b1cf16e9d?${QUALITY_PARAMS}&w=800`,
    CCTV_IP_CAMERA: `${UNSPLASH_BASE}/photo-1561474381-7a7ebb152e2c?${QUALITY_PARAMS}&w=800`,
    SMART_SENSOR: `${UNSPLASH_BASE}/photo-1558346490-a72e53ae2d4f?${QUALITY_PARAMS}&w=800`,
    ERP_SOFTWARE: `${UNSPLASH_BASE}/photo-1460925895917-afdab827c52f?${QUALITY_PARAMS}&w=800`,
    BIO_FUEL: `${UNSPLASH_BASE}/photo-1518531933037-91b2f5f229cc?${QUALITY_PARAMS}&w=800`, // Reliable bio energy
    RENEWABLE: `${UNSPLASH_BASE}/photo-1473341304170-971dccb5ac1e?${QUALITY_PARAMS}&w=800`, // Reliable renewable energy
  },

  // Corporate & Team
  CORPORATE: {
    OFFICE_LUCKNOW: `${UNSPLASH_BASE}/photo-1497366216548-37526070297c?${QUALITY_PARAMS}&w=1200`,
    TEAM_MEETING: `${UNSPLASH_BASE}/photo-1519389950473-47ba0277781c?${QUALITY_PARAMS}&w=1200`,
    INTERNSHIP: `${UNSPLASH_BASE}/photo-1523240715639-99a8080f3333?${QUALITY_PARAMS}&w=1200`,
    MISSION: `${UNSPLASH_BASE}/photo-1552664730-d307ca884978?${QUALITY_PARAMS}&w=800`,
    VISION: `${UNSPLASH_BASE}/photo-1451187580459-43490279c0fa?${QUALITY_PARAMS}&w=800`,
    VALUES: `${UNSPLASH_BASE}/photo-1522202176988-66273c2fd55f?${QUALITY_PARAMS}&w=800`,
    TEAM_MEMBERS: [
      `${UNSPLASH_BASE}/photo-1560250097-0b93528c311a?${QUALITY_PARAMS}&w=400`, // Executive 1
      `${UNSPLASH_BASE}/photo-1573496359142-b8d87734a5a2?${QUALITY_PARAMS}&w=400`, // Executive 2
      `${UNSPLASH_BASE}/photo-1519085360753-af0119f7cbe7?${QUALITY_PARAMS}&w=400`, // Executive 3
      `${UNSPLASH_BASE}/photo-1580489944761-15a19d654956?${QUALITY_PARAMS}&w=400`, // Executive 4
    ],
    AVATARS: [
      `${UNSPLASH_BASE}/photo-1472099645785-5658abf4ff4e?${QUALITY_PARAMS}&w=100`, // Avatar 1
      `${UNSPLASH_BASE}/photo-1438761681033-6461ffad8d80?${QUALITY_PARAMS}&w=100`, // Avatar 2
      `${UNSPLASH_BASE}/photo-1507003211169-0a1dd7228f2d?${QUALITY_PARAMS}&w=100`, // Avatar 3
    ]
  }
};
