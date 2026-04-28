import { useState, useEffect } from 'react';

export function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onDone, 600);
          return 100;
        }
        return p + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onDone]);

  if (fadeOut) {
    return (
      <div className="fixed inset-0 z-[200] bg-[#1a1a1a] flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none">
        <span className="font-serif text-4xl text-white tracking-tighter">OSNOVA</span>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-[#1a1a1a] flex flex-col items-center justify-center">
      <span className="font-serif text-4xl text-white tracking-tighter mb-8" style={{ animation: 'fadeIn 0.8s ease forwards' }}>
        OSNOVA
      </span>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] mt-4">{progress}%</span>
    </div>
  );
}
