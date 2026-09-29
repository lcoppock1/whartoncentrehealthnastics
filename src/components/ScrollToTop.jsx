import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On page change, jump to the top, or to the section named after "#" (e.g. /programs#gymnastics).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
