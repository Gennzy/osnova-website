import { useInView } from '../hooks';

export function CTASection({ onOpenCalc }: { onOpenCalc: () => void }) {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-32 px-8 bg-[#1a1a1a] text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      <div ref={ref} className={`relative z-10 max-w-3xl mx-auto ${isVisible ? 'visible' : ''} reveal`}>
        <h2 className="text-3xl md:text-5xl font-serif font-light italic mb-8 leading-tight">
          Готовы обсудить<br />ваш проект в Санкт-Петербурге?
        </h2>
        <p className="text-white/40 text-sm mb-12 max-w-md mx-auto">
          Оставьте заявку — мы перезвоним в течение 2 часов в рабочее время и бесплатно проконсультируем.
        </p>
        <button onClick={onOpenCalc} className="btn-luxury btn-white">
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
