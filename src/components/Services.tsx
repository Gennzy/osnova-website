import { useInView } from '../hooks';

interface ServiceData {
  title: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
}

function ServiceCard({ service }: { service: ServiceData }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`group bg-white p-10 md:p-12 hover:bg-[#1a1a1a] transition-all duration-500 cursor-default ${isVisible ? 'visible' : ''} reveal`}
    >
      <div className="flex items-start justify-between mb-8">
        {service.icon}
        <span className="font-serif text-xl italic group-hover:text-white/80 transition-colors">{service.price}</span>
      </div>
      <h3 className="text-2xl font-serif font-light mb-4 group-hover:text-white transition-colors">{service.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed group-hover:text-white/60 transition-colors">{service.desc}</p>
    </div>
  );
}

export function Services() {
  const { ref, isVisible } = useInView();

  const services: ServiceData[] = [
    {
      title: 'Проектирование',
      price: 'от 7 500 ₽ / м²',
      desc: 'Создаем детальную инструкцию по реализации вашего интерьера с учетом специфики петербургских планировок — от концепции до рабочей документации.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      ),
    },
    {
      title: 'Ремонт под ключ',
      price: 'от 25 000 ₽ / м²',
      desc: 'Собственные петербургские бригады, строгий контроль сроков и бюджета. Берем на себя всё — от демонтажа до чистовой отделки.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
          <path d="M2 20h20M5 20V8l7-5 7 5v12M9 20v-6h6v6" />
        </svg>
      ),
    },
    {
      title: 'Комплектация',
      price: 'от 3 000 ₽ / м²',
      desc: 'Подбор мебели, сантехники и отделочных материалов. Работа с шоурумами Петербурга и прямыми поставками с фабрик.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Авторский надзор',
      price: 'от 4 000 ₽ / выезд',
      desc: 'Еженедельные выезды архитектора на объект в СПб и ЛО. Контроль качества на каждом этапе строительства.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-32 px-8 md:px-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`mb-20 ${isVisible ? 'visible' : ''} reveal`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest">Услуги</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
