import { useEffect } from 'react';
import { ORG, DONATE_URL } from './site';

// Sets the browser-tab title for a page.
export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${ORG.name}` : `${ORG.name} | Youth & Community Fitness in Philadelphia`;
  }, [title]);
}

// Where "Donate" buttons go: the online giving page if set up, otherwise the contact form.
export const DONATE_LINK = DONATE_URL || '/contact?topic=donate';
