import { useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="img-wrap w-full h-full cursor-default">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            className={`w-full h-full object-cover brightness-[0.6] transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            alt="Премиальный интерьер гостиной"
            loading="eager"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
      <div className="relative z-10 max-w-4xl" style={{ animation: 'fadeInUp 1.2s ease 0.5s both' }}>
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/80 mb-6 block">Санкт-Петербург и Ленобласть</span>
        <h1 className="text-5xl md:text-8xl text-white mb-8 leading-tight font-serif font-light">
          Эстетика <br />
          <span className="italic text-white/90">вне времени.</span>
        </h1>
        <div className="flex justify-center mt-12">
          <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="btn-luxury btn-white">
            Смотреть работы
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white" style={{ animation: 'scrollLine 2s infinite' }} />
        </div>
      </div>
    </section>
  );
}
