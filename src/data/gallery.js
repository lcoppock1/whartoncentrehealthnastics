// ───────────────────────────────────────────────────────────────────────────
// GALLERY PHOTOS
//
// Only photos with `approved: true` appear on the website.
// Set a photo to approved ONLY after the parents of every child who can be
// recognized in it have given permission (a signed media consent form).
//
// After changing `approved`, run:   npm run photos
// That makes small, fast web copies in public/gallery/ (originals stay in media/).
//
// To add a new photo: put the original in media/<folder>/, add an entry below
// with a unique `id`, then run `npm run photos`.
// Videos (.MOV) are not supported yet — convert to .mp4 first.
// ───────────────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'gymnastics', label: 'Gymnastics & Fitness' },
  { id: 'civics', label: 'GD-Cadets & Civics' },
  { id: 'learning', label: 'Homework & Learning' },
  { id: 'trips', label: 'Trips & Events' },
];

export const PHOTOS = [
  // Gymnastics & fitness
  { id: 'mats-stretching', file: 'media/gymnastics/mats-stretching.jpg', category: 'gymnastics', alt: 'Cadets sitting cross-legged on gymnastics mats during a stretching and breathing session', approved: false },
  { id: 'mats-stretching-2', file: 'media/gymnastics/mats-stretching-2.png', category: 'gymnastics', alt: 'Cadets stretching on red and blue mats in the activity room', approved: false },
  { id: 'mats-on-screen', file: 'media/gymnastics/IMG_0848.JPG', category: 'gymnastics', alt: 'A mat session shown on a presentation screen', approved: false },
  { id: 'loading-mats-1', file: 'media/gymnastics/IMG_1002.JPG', category: 'gymnastics', alt: 'Gymnastics mats strapped to the roof of an SUV for an outdoor session', approved: false },
  { id: 'loading-mats-2', file: 'media/gymnastics/IMG_1003.JPG', category: 'gymnastics', alt: 'Loading gymnastics mats onto a car roof', approved: false },
  { id: 'loading-mats-3', file: 'media/gymnastics/IMG_1004.JPG', category: 'gymnastics', alt: 'Stacked blue and red gymnastics mats on an SUV', approved: false },
  { id: 'loading-mats-4', file: 'media/gymnastics/IMG_1005.JPG', category: 'gymnastics', alt: 'Tying down gymnastics mats on a car roof', approved: false },
  { id: 'loading-mats-5', file: 'media/gymnastics/IMG_1006.JPG', category: 'gymnastics', alt: 'Gymnastics mats ready to travel to a community session', approved: false },

  // GD-Cadets & civics
  { id: 'harriet-tubman-1', file: 'media/events/IMG_0940.JPG', category: 'civics', alt: 'Cadets holding a Harriet Tubman history poster in front of a community mural', approved: false },
  { id: 'harriet-tubman-2', file: 'media/events/IMG_0941.JPG', category: 'civics', alt: 'Cadets and mentors presenting their Harriet Tubman project outdoors', approved: false },
  { id: 'poem', file: 'media/events/IMG_0980.JPG', category: 'civics', alt: 'Printed program with a Kente border for a spoken-word piece by Lewis Harris Jr.', approved: false },
  { id: 'poster-making', file: 'media/civics/IMG_1640.JPG', category: 'civics', alt: 'Cadets making posters on the floor for a community project', approved: false },
  { id: 'community-gathering', file: 'media/civics/IMG_0117.JPG', category: 'civics', alt: 'Cadets and families gathered at a community event', approved: false },
  { id: 'community-kitchen', file: 'media/civics/IMG_2058.JPEG', category: 'civics', alt: 'Adults preparing for a community event', approved: false },

  // Homework & learning
  { id: 'homework-table', file: 'media/events/IMG_1925.JPG', category: 'learning', alt: 'Cadets working on homework together at a table', approved: false },
  { id: 'computer-lab', file: 'media/events/IMG_1935.JPG', category: 'learning', alt: 'Cadets using computers and headphones in the tech corner', approved: false },
  { id: 'cupcakes', file: 'media/civics/IMG_2099.JPEG', category: 'learning', alt: 'Cadets decorating cupcakes in the art room', approved: false },

  // Trips & events
  { id: 'farm-trip', file: 'media/civics/IMG_1871.JPG', category: 'trips', alt: 'Cows resting in straw at an agricultural show visited on a field trip', approved: true },
  { id: 'drummers', file: 'media/events/IMG_0951.JPG', category: 'trips', alt: 'Drummers performing under a tent at a neighborhood cultural celebration', approved: false },
  { id: 'basketball-court', file: 'media/events/IMG_0987.JPG', category: 'trips', alt: 'Mentors at an outdoor basketball court event', approved: false },
  { id: 'market-opening', file: 'media/events/IMG_1850.JPG', category: 'trips', alt: 'A crowd outside a new market on a winter community outing', approved: false },
  { id: 'hall-event', file: 'media/events/IMG_2543.JPG', category: 'trips', alt: 'A full hall at a community ceremony', approved: false },
  { id: 'park-group', file: 'media/cadets/IMG_0163.JPG', category: 'trips', alt: 'Cadets posing together in a park in spring', approved: false },
  { id: 'park-day', file: 'media/cadets/IMG_0263.JPG', category: 'trips', alt: 'A cadet enjoying a day at the park', approved: false },
  { id: 'park-steps', file: 'media/cadets/IMG_0279.JPG', category: 'trips', alt: 'Cadets resting on park steps during an outing', approved: false },
  { id: 'certificate', file: 'media/cadets/IMG_0507.JPEG', category: 'trips', alt: 'A graduate proudly holding a certificate of achievement', approved: false },
  { id: 'pool-day', file: 'media/cadets/IMG_0863.JPG', category: 'trips', alt: 'Cadets swimming at a public pool on a summer day', approved: false },
  { id: 'birthday-1', file: 'media/cadets/IMG_2130.JPEG', category: 'trips', alt: 'A smiling cadet wearing a birthday crown', approved: false },
  { id: 'birthday-2', file: 'media/cadets/IMG_2131.JPG', category: 'trips', alt: 'A cadet celebrating a birthday on the way to an outing', approved: false },
];
