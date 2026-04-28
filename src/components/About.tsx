import { useInView } from '../hooks';

export function About() {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-12 gap-16 items-start ${isVisible ? 'visible' : ''} reveal`} ref={ref}>
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-12">
              Мы создаем <br />
              <span className="italic">визуальную тишину.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg leading-relaxed mb-12">
              Osnova — это симбиоз архитектурного подхода и эстетики Pinterest. Мы проектируем пространства в Санкт-Петербурге, в которых каждая деталь имеет значение. Наша цель — создать дом, который будет актуален десятилетиями.
            </p>
            <div className="space-y-8">
              {[
                { num: '01', title: 'Концепция', desc: 'Глубокое исследование и создание уникального мудборда вашего будущего дома в Петербурге. Мы ищем баланс между вашим образом жизни и архитектурной средой города.' },
                { num: '02', title: 'Реализация', desc: 'Технический надзор и работа с лучшими строительными бригадами Санкт-Петербурга. Мы берем на себя все сложности стройки, оставляя вам только радость от результата.' },
              ].map(item => (
                <div key={item.num} className="group border-t border-stone-100 pt-6 cursor-default hover:bg-stone-50 transition-colors px-2 -mx-2 rounded-sm">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2 transition-colors group-hover:text-black">{item.num}. {item.title}</span>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
            <div className="img-wrap rounded-sm aspect-[3/4] mt-24 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Светлый минималистичный интерьер"
                loading="lazy"
              />
            </div>
            <div className="img-wrap rounded-sm aspect-[3/5] shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Детали интерьера"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
