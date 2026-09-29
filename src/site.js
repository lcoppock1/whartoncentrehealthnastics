// ───────────────────────────────────────────────────────────────────────────
// SITE SETTINGS — the one file to edit for names, contact info and links.
// Anything set to null shows a friendly "coming soon" instead of fake info.
// ───────────────────────────────────────────────────────────────────────────

export const ORG = {
  name: 'Healthnastics Center',
  legalName: 'Healthnastics Center Inc.',
  tagline: 'Strong bodies. Sharp minds. Good citizens.',
  founder: 'Lewis Harris Jr.',
  foundedYear: null, // e.g. 2012 — ask Mr. Harris
  ein: null,         // 501(c)(3) tax ID, e.g. '12-3456789'
};

export const LOCATION = {
  name: 'Clayborn & Lewis Playground',
  street: '1101 N 38th St',
  city: 'Philadelphia, PA 19104',
  neighborhood: 'East Parkside',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Clayborn+%26+Lewis+Playground+1101+N+38th+St+Philadelphia+PA+19104',
};

export const CONTACT = {
  email: null, // e.g. 'info@healthnastics.org'
  phone: null, // e.g. '(215) 555-0123'
};

export const SOCIAL = {
  instagram: null, // full link, e.g. 'https://www.instagram.com/healthnastics'
  facebook: null,
};

// Online giving page (Zeffy, Givebutter, Donorbox, PayPal Giving…). When set,
// every Donate button goes there. When null, donors are sent to the Contact page.
export const DONATE_URL = null;

// Where the Contact / Enroll form sends messages. Easiest: a free Formspree form
// (formspree.io → New form → copy the "https://formspree.io/f/xxxx" link here).
export const FORM_ENDPOINT = null;

// Photo of Mr. Harris. Put the file in `public/` and set e.g. '/lewis-harris.jpg'.
export const FOUNDER_PHOTO = null;

// Main navigation (header + footer).
export const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/support', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];
