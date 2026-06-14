import { useState, useEffect } from 'react';
import { useInView } from '../hooks';

export function Testimonials() {
  const { ref, isVisible } = useInView();
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      text: 'LAGODA превратили нашу квартиру на Васильевском в то, о чём мы мечтали. Каждая деталь продумана, ни одного компромисса. Уже рекомендуем друзьям.',
      author: 'Алексей и Мария',
      detail: 'Квартира 120 м\u00b2, Васильевский остров',
    },
    {
      text: 'Работали с бюро над загородным домом в Репино. Полное сопровождение — от первого эскиза до расстановки ваз. Ни разу не пришлось нервничать.',
      author: 'Дмитрий',
      detail: 'Дом 380 м\u00b2, Репино',
    },
    {
      text: 'Профессионализм на каждом этапе. Особенно впечатлила визуализация — мы увидели результат до начала стройки и он совпал на 100%.',
      author: 'Екатерина',
      detail: 'Квартира 95 м\u00b2, Петроградская сторона',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 px-8 bg-white text-center">
      <div ref={ref} className={`max-w-4xl mx-auto ${isVisible ? 'visible' : ''} reveal`}>
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest mb-20">Отзывы</h2>

        <div className="relative min-h-[250px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-8 text-stone-200">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
              </svg>
              <p className="text-xl md:text-2xl font-serif font-light italic leading-relaxed mb-8 max-w-2xl mx-auto">&laquo;{t.text}&raquo;</p>
              <p className="text-sm font-medium uppercase tracking-widest">{t.author}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-2">{t.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-[#1a1a1a] w-6' : 'bg-stone-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
