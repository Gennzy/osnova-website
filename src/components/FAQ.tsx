import { useState } from 'react';
import { useInView } from '../hooks';

interface FAQItemData {
  q: string;
  a: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQItemData; isOpen: boolean; onToggle: () => void }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`border-b border-stone-100 transition-colors hover:bg-stone-50/50 ${isVisible ? 'visible' : ''} reveal`}
    >
      <button
        className="w-full py-8 flex justify-between items-center text-left gap-4"
        onClick={onToggle}
      >
        <span className="text-lg md:text-xl font-light uppercase tracking-wide">{faq.q}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div className={`faq-content ${isOpen ? 'open' : ''}`}>
        <p className="text-stone-500 font-light leading-relaxed pb-8 pr-8">{faq.a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, isVisible } = useInView();

  const faqs: FAQItemData[] = [
    {
      q: 'Вы работаете в других городах?',
      a: 'На данный момент наше бюро сфокусировано на реализации объектов исключительно в Санкт-Петербурге и Ленинградской области. Это позволяет нам обеспечивать высочайший уровень авторского надзора и контроля качества.',
    },
    {
      q: 'Как рассчитывается стоимость?',
      a: 'Стоимость зависит от выбранного пакета услуг (чертежи, визуализация или проект «под ключ») и площади объекта. Мы работаем по фиксированной ставке за квадратный метр, которая фиксируется в договоре.',
    },
    {
      q: 'Сколько длится ремонт квартиры в Петербурге?',
      a: 'Для квартиры площадью 100 м\u00b2 — около 6-8 месяцев. Для загородных домов сроки зависят от сложности проекта и обычно составляют 8-14 месяцев. Точные сроки фиксируем в договоре.',
    },
    {
      q: 'Можно ли заказать только дизайн-проект без ремонта?',
      a: 'Да, мы предлагаем как полный цикл «под ключ», так и отдельные услуги — только проектирование, только надзор или только комплектация. Стоимость рассчитывается индивидуально.',
    },
    {
      q: 'Работаете ли вы со старым фондом?',
      a: 'Да, это одна из наших специализаций. Петербургский старый фонд требует особого подхода — мы учитываем все нюансы исторических зданий, включая ограничения КГА.',
    },
    {
      q: 'Есть ли гарантия на работы?',
      a: 'Мы даём гарантию 2 года на все строительные работы и 1 год на дизайн-проект. Если в процессе эксплуатации выявятся недочёты — устраним за наш счёт.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-left mb-16 ${isVisible ? 'visible' : ''} reveal`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">Q&A</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-tight">Частые вопросы</h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
