import { ModalOverlay } from './ModalOverlay';

function getInfoData(key: string) {
  const map: Record<string, { title: string; content: string }> = {
    about: {
      title: 'О Бюро LAGODA (СПб)',
      content: `
        <div>
          <h2 class="text-4xl font-serif italic mb-8 text-center" style="font-family:'Cormorant',serif">Философия архитектурной тишины в Петербурге</h2>
          <p class="text-lg font-light text-stone-600 leading-relaxed mb-12">
            Бюро LAGODA было основано в 2018 году. Мы специализируемся исключительно на объектах Санкт-Петербурга, работая со старым фондом, новыми премиальными ЖК и загородными домами Ленобласти.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="border-l border-stone-200 pl-6">
              <h4 class="text-xs uppercase tracking-widest mb-4">Локация</h4>
              <p class="text-sm text-stone-500">Мы работаем только по СПб и ЛО, чтобы гарантировать личное присутствие архитектора на объекте.</p>
            </div>
            <div class="border-l border-stone-200 pl-6">
              <h4 class="text-xs uppercase tracking-widest mb-4">Команда</h4>
              <p class="text-sm text-stone-500">15 экспертов в петербургской архитектуре и современных минималистичных решениях.</p>
            </div>
          </div>
        </div>
      `,
    },
    projects: {
      title: 'Проекты в Санкт-Петербурге',
      content: `
        <div>
          <h2 class="text-4xl font-serif mb-8 text-center uppercase tracking-widest" style="font-family:'Cormorant',serif">Архив работ</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800" class="w-full aspect-video object-cover mb-4" alt="Apartment on Krestovsky" loading="lazy" />
              <h4 class="text-lg italic" style="font-family:'Cormorant',serif">Apartment on Krestovsky</h4>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800" class="w-full aspect-video object-cover mb-4" alt="Sestroretsk Modern Villa" loading="lazy" />
              <h4 class="text-lg italic" style="font-family:'Cormorant',serif">Sestroretsk Modern Villa</h4>
            </div>
          </div>
        </div>
      `,
    },
    careers: {
      title: 'Карьера в СПб',
      content: `
        <div>
          <h2 class="text-4xl font-serif italic mb-8 text-center" style="font-family:'Cormorant',serif">Ищем единомышленников в Петербурге</h2>
          <p class="text-center text-stone-500 mb-12">Мы расширяем команду нашего петербургского офиса.</p>
        </div>
      `,
    },
    design: {
      title: 'Проектирование',
      content: `<div><h2 class="text-4xl font-serif mb-8" style="font-family:'Cormorant',serif">Дизайн-проект в СПб</h2><p class="text-lg text-stone-600 mb-8">Создаем детальную инструкцию по реализации вашего интерьера с учетом специфики петербургских планировок.</p><div class="p-8 bg-stone-50 font-serif italic text-2xl" style="font-family:'Cormorant',serif">от 7 500 ₽ / м²</div></div>`,
    },
    repair: {
      title: 'Ремонт',
      content: `<div><h2 class="text-4xl font-serif mb-8" style="font-family:'Cormorant',serif">Реализация (СПб)</h2><p class="text-stone-600">Собственные петербургские бригады и строгий контроль. от 25 000 ₽ / м²</p></div>`,
    },
    styling: {
      title: 'Комплектация',
      content: `<div><h2 class="text-4xl font-serif mb-8" style="font-family:'Cormorant',serif">Стиль и Декор</h2><p class="text-stone-600">Подбор мебели в шоурумах Петербурга и работа с фабриками.</p></div>`,
    },
    supervision: {
      title: 'Надзор',
      content: `<div><h2 class="text-4xl font-serif mb-8" style="font-family:'Cormorant',serif">Авторский надзор</h2><p class="text-stone-600">Еженедельные выезды архитектора на объект в СПб и ЛО.</p></div>`,
    },
    faq_full: {
      title: 'Вопросы',
      content: `<div class="max-w-2xl mx-auto space-y-8"><div><h4 class="font-medium mb-2">Вы работаете в Москве?</h4><p class="text-sm text-stone-500">Нет, на данный момент мы работаем исключительно в Санкт-Петербурге и ЛО.</p></div><div><h4 class="font-medium mb-2">Сколько длится стройка в Петербурге?</h4><p class="text-sm text-stone-500">Для квартиры 100м² — около 6-8 месяцев.</p></div></div>`,
    },
    privacy: {
      title: 'Политика конфиденциальности',
      content: `
        <div class="max-w-3xl mx-auto text-left py-8">
          <h2 class="text-3xl font-serif mb-8 italic" style="font-family:'Cormorant',serif">Пользовательское соглашение и политика данных</h2>
          <div class="space-y-12 text-stone-600 font-light leading-relaxed">
            <section>
              <h4 class="text-[10px] uppercase tracking-widest text-black mb-4">1. Персональные данные</h4>
              <p class="text-sm mb-4">Оставляя заявку на Сайте, Пользователь дает согласие на обработку своих персональных данных (имя, телефон, адрес электронной почты) в целях предоставления консультаций и оформления услуг бюро LAGODA.</p>
              <p class="text-sm">Администрация обязуется не передавать данные Пользователя третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>
            </section>
            <section>
              <h4 class="text-[10px] uppercase tracking-widest text-black mb-4">2. Интеллектуальная собственность</h4>
              <p class="text-sm">Весь контент (тексты, изображения, дизайн, фотографии проектов), размещенный на Сайте, является объектом интеллектуальной собственности бюро LAGODA.</p>
            </section>
            <section>
              <h4 class="text-[10px] uppercase tracking-widest text-black mb-4">3. Отказ от ответственности</h4>
              <p class="text-sm">Информация на Сайте носит ознакомительный характер и не является публичной офертой в понимании ст. 437 ГК РФ.</p>
            </section>
            <div class="pt-8 border-t border-stone-100 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
              <div>
                <h4 class="text-[10px] uppercase tracking-widest text-black mb-2">Контакты</h4>
                <p class="text-[11px] leading-relaxed">Email: info@osnova.build.ru<br/>Тел: +7 (994) 440-30-30</p>
              </div>
            </div>
          </div>
        </div>
      `,
    },
  };
  return map[key] || null;
}

export function InfoModal({ open, onClose, contentKey }: { open: boolean; onClose: () => void; contentKey: string }) {
  const data = getInfoData(contentKey);
  if (!data) return null;

  return (
    <ModalOverlay open={open} onClose={onClose}>
      <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 block mb-12 text-center">{data.title}</span>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
      <div className="mt-24 text-center">
        <button onClick={onClose} className="btn-luxury">Закрыть</button>
      </div>
    </ModalOverlay>
  );
}
