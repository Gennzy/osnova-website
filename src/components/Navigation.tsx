import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '../hooks';

export function Navigation({ onOpenCalc }: { onOpenCalc: () => void }) {
  const scrolled = useScrolled(100);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const navTextColor = scrolled ? 'text-[#1a1a1a]' : 'text-white';
  const btnBorder = scrolled ? 'border-black/10' : 'border-white/20';

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.05)] py-4 px-8 md:px-16' : 'bg-transparent py-8 px-8 md:px-16'}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={`font-serif text-3xl tracking-tighter transition-opacity group-hover:opacity-70 ${navTextColor}`}>LAGODA</span>
          </div>

          <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-medium">
            <div className={`nav-link ${navTextColor}`} onClick={() => scrollTo('about')}>Бюро</div>
            <div className={`nav-link ${navTextColor}`} onClick={() => scrollTo('services')}>Услуги</div>
            <div className={`nav-link ${navTextColor}`} onClick={() => scrollTo('portfolio')}>Проекты</div>
            <div className={`nav-link ${navTextColor}`} onClick={() => scrollTo('process')}>Процесс</div>
            <div className={`nav-link ${navTextColor}`} onClick={() => scrollTo('faq')}>FAQ</div>
            <Link to="/blog" className={`nav-link ${navTextColor}`}>Блог</Link>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onOpenCalc}
              className={`hidden md:block text-[10px] border ${btnBorder} px-6 py-2 tracking-widest hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all duration-300 uppercase active:scale-95 ${navTextColor}`}
            >
              Расчет проекта
            </button>
            <button
              className={`md:hidden ${navTextColor} transition-colors`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center" style={{ animation: 'fadeIn 0.3s ease' }}>
          <button className="absolute top-8 right-8 text-stone-400 hover:text-black" onClick={() => setMobileOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <div className="flex flex-col items-center space-y-8">
            {[
              { label: 'Бюро', id: 'about' },
              { label: 'Услуги', id: 'services' },
              { label: 'Проекты', id: 'portfolio' },
              { label: 'Процесс', id: 'process' },
              { label: 'FAQ', id: 'faq' },
            ].map(item => (
              <button
                key={item.id}
                className="font-serif text-4xl tracking-tight hover:italic transition-all"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              className="font-serif text-4xl tracking-tight hover:italic transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Блог
            </Link>
            <button
              onClick={() => { setMobileOpen(false); onOpenCalc(); }}
              className="btn-luxury mt-8"
            >
              Расчет проекта
            </button>
          </div>
        </div>
      )}
    </>
  );
}
