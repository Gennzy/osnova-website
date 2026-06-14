import { useState } from 'react';
import { useScrolled } from '../hooks';

export function BackToTop() {
  const scrolled = useScrolled(600);
  const [hover, setHover] = useState(false);

  if (!scrolled) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center transition-all duration-300 hover:bg-stone-700 active:scale-90"
      style={{ animation: 'fadeInUp 0.3s ease' }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`transition-transform duration-300 ${hover ? '-translate-y-1' : ''}`}
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
