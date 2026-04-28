import { useEffect } from 'react';

export function ModalOverlay({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-white/98 backdrop-blur-md overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ animation: 'fadeIn 0.3s ease' }}
    >
      <button onClick={onClose} className="fixed top-8 right-8 text-stone-400 hover:text-black transition-transform hover:rotate-90 z-[95]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>
      <div className="max-w-4xl mx-auto px-8 py-20" style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        {children}
      </div>
    </div>
  );
}
