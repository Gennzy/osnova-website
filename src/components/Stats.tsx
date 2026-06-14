import { useInView } from '../hooks';
import { AnimatedCounter } from './AnimatedCounter';

export function Stats() {
  const { ref, isVisible } = useInView();

  const stats = [
    { value: 87, suffix: '+', label: 'Проектов реализовано' },
    { value: 8, suffix: '', label: 'Лет на рынке СПб' },
    { value: 15, suffix: '', label: 'Специалистов в команде' },
    { value: 100, suffix: '%', label: 'Клиентов рекомендуют' },
  ];

  return (
    <section className="py-24 px-8 bg-[#1a1a1a] text-white">
      <div ref={ref} className={`max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 ${isVisible ? 'visible' : ''} reveal`}>
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-5xl md:text-6xl font-light mb-3">
              <AnimatedCounter end={s.value} suffix={s.suffix} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
