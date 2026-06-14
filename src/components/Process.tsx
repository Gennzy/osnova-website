import { useInView } from '../hooks';

interface StepData {
  num: string;
  title: string;
  desc: string;
  duration: string;
}

function ProcessStep({ step, index }: { step: StepData; index: number }) {
  const { ref, isVisible } = useInView();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-16 last:mb-0 ${isVisible ? 'visible' : ''} reveal`}
    >
      <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#1a1a1a] rounded-full -translate-x-1/2 mt-2 z-10" />
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
        <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">{step.num}</span>
        <h3 className="text-2xl font-serif font-light mb-3">{step.title}</h3>
        <p className="text-stone-500 text-sm leading-relaxed mb-2">{step.desc}</p>
        <span className="text-[10px] uppercase tracking-widest text-stone-300">{step.duration}</span>
      </div>
    </div>
  );
}

export function Process() {
  const { ref, isVisible } = useInView();

  const steps: StepData[] = [
    { num: '01', title: 'Встреча', desc: 'Знакомство, обсуждение ваших пожеланий, образа жизни и бюджета. Бесплатная консультация в нашем офисе на Большой Морской.', duration: '1 неделя' },
    { num: '02', title: 'Концепция', desc: 'Создание мудборда, эскизных планировок и 3D-визуализаций. Вы увидите свой будущий интерьер ещё до начала работ.', duration: '2-4 недели' },
    { num: '03', title: 'Документация', desc: 'Разработка полного комплекта чертежей: электрика, сантехника, потолки, полы, развертки стен. Всё до миллиметра.', duration: '3-5 недель' },
    { num: '04', title: 'Реализация', desc: 'Строительные работы под нашим контролем. Еженедельные отчеты с фото, регулярные выезды архитектора.', duration: '4-8 месяцев' },
    { num: '05', title: 'Стилизация', desc: 'Расстановка мебели, декорирование, финальные штрихи. Ваш дом готов — остается только жить в нём.', duration: '1-2 недели' },
  ];

  return (
    <section id="process" className="py-32 px-8 md:px-24 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className={`text-center mb-20 ${isVisible ? 'visible' : ''} reveal`}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest">Процесс</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 md:-translate-x-px" />
          {steps.map((step, i) => (
            <ProcessStep key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
