import { Activity, Landmark, BookOpen, Bus, HeartPulse } from 'lucide-react';

// Programs shown on the Home and Programs pages.
// `schedule` / `ages` / `cost` set to null show "Contact us for details".
export const PROGRAMS = [
  {
    slug: 'gymnastics',
    name: 'Gymnastics & Fitness',
    icon: Activity,
    color: 'red',
    summary: 'Tumbling, strength, flexibility and body control on the mats — the "health" in Healthnastics.',
    description:
      'Cadets learn safe tumbling and gymnastics fundamentals, build strength and flexibility, and practice the focus and breathing that help on and off the mats. Every session ends with a cool-down and stretch.',
    learn: ['Tumbling and gymnastics basics', 'Strength, balance and flexibility', 'Stretching, breathing and focus', 'Teamwork and discipline'],
    ages: '8–14',
    schedule: null,
    cost: null,
  },
  {
    slug: 'gd-cadets',
    name: 'GD-Cadets Civic Leadership',
    icon: Landmark,
    color: 'green',
    summary: 'Young leaders who know their history, their city and how to make their voice heard.',
    description:
      'GD-Cadets study Black history and American democracy, learn how local government works, and put it into practice through presentations, community projects and service in their own neighborhood.',
    learn: ['How local government works', 'Black history and heritage', 'Public speaking and presenting', 'Community service projects'],
    ages: '8–14',
    schedule: null,
    cost: null,
  },
  {
    slug: 'homework-help',
    name: 'Homework Help & Tech',
    icon: BookOpen,
    color: 'gold',
    summary: 'A calm place to finish homework with adult help, plus time on computers and learning apps.',
    description:
      'After school, cadets get help with homework and reading from caring adults, and build digital skills on our computers. Good grades are part of being a cadet.',
    learn: ['Daily homework support', 'Reading and study habits', 'Computer and tech skills'],
    ages: '8–14',
    schedule: null,
    cost: null,
  },
  {
    slug: 'camp-and-trips',
    name: 'Summer Camp & Trips',
    icon: Bus,
    color: 'red',
    summary: 'Summer days full of movement, culture and field trips across the region.',
    description:
      'Summer camp keeps cadets active and learning, with swimming, cultural celebrations like drumming and dance, and trips that open up the world beyond the neighborhood.',
    learn: ['Swimming and outdoor play', 'Cultural events and celebrations', 'Regional field trips'],
    ages: '8–14',
    schedule: 'Summer',
    cost: null,
  },
  {
    slug: 'community-wellness',
    name: 'Community Wellness',
    icon: HeartPulse,
    color: 'green',
    summary: 'Health education and fitness for teens, adults and families.',
    description:
      'Healthnastics was founded to support physical wellness at every age. Community wellness sessions share practical health education and ways for families to stay active together.',
    learn: ['Health education', 'Family fitness', 'Recreation for teens and adults'],
    ages: 'Teens & adults',
    schedule: null,
    cost: null,
  },
];

export const PROGRAM_COLORS = {
  red: { bg: 'bg-red', text: 'text-red', soft: 'bg-red/10' },
  green: { bg: 'bg-green', text: 'text-green', soft: 'bg-green/10' },
  gold: { bg: 'bg-gold', text: 'text-gold-dark', soft: 'bg-gold/15' },
};
