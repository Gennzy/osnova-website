export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'dizajn-kvartiry-v-starom-fonde-spb',
    title: 'Дизайн квартиры в старом фонде Петербурга: 7 правил',
    excerpt: 'Высокие потолки, лепнина, узкие коридоры — как превратить особенности старого фонда в преимущества вашего интерьера.',
    date: '2026-04-15',
    readTime: '8 мин',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="text-lg text-stone-600 font-light leading-relaxed mb-8">
        Петербургский старый фонд — это не просто жильё, это архитектурное наследие. Каждая квартира в доходном доме XIX–XX века несёт в себе уникальную историю, которую важно сохранить и интегрировать в современный интерьер.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">1. Сохраняйте высоту потолков</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Потолки 3–4 метра — главное богатство старого фонда. Не опускайте их подвесными конструкциями без необходимости. Используйте накладные светильники, трековые системы или скрытую подсветку по периметру. Если лепнина сохранилась — реставрируйте её, это добавит интерьеру аутентичности.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">2. Работайте с узкими коридорами</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Длинные коридоры — визитная карточка петербургских квартир. Превратите их в галерею: используйте зеркала для визуального расширения, встроенные системы хранения и акцентное освещение. Светлые стены и тёмный пол создадут глубину.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">3. Учитывайте толщину стен</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Кирпичные стены толщиной 60–80 см — это и преимущество (тепло, звукоизоляция), и ограничение (сложность штробления). Планируйте инженерные коммуникации заранее. Глубокие подоконники можно превратить в зоны отдыха или рабочие места.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">4. Не бойтесь смешивать эпохи</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Минималистичная мебель на фоне исторической лепнины создаёт эффектный контраст. Современная кухня в сочетании с оригинальными дверями и паркетом «ёлочкой» — классический петербургский приём.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">5. Решите вопрос с окнами</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Большие окна старого фонда пропускают много света, но часто требуют замены. Выбирайте профили, повторяющие оригинальную расстекловку. В квартирах на первых этажах продумайте приватность: рулонные шторы день-ночь или матовая плёнка на нижнюю часть.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">6. Продумайте хранение</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        В старом фонде часто нет кладовых и гардеробных. Используйте ниши, антресоли и пространство над дверями. Встроенные шкафы от пола до потолка в коридоре решат проблему хранения, не загромождая жилые комнаты.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">7. Доверьте проект профессионалам</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Работа со старым фондом требует понимания конструктива здания, согласований с КГИОП и опыта реставрации. Ошибки здесь обходятся дорого. Бюро Osnova специализируется на объектах Санкт-Петербурга и знает все нюансы работы с историческими зданиями.
      </p>
    `,
  },
  {
    slug: 'skolko-stoit-remont-v-spb-2026',
    title: 'Сколько стоит ремонт квартиры в Петербурге в 2026 году',
    excerpt: 'Разбираем реальные цены на ремонт в СПб: от эконома до премиума. Что влияет на стоимость и где можно сэкономить.',
    date: '2026-04-02',
    readTime: '10 мин',
    category: 'Цены',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="text-lg text-stone-600 font-light leading-relaxed mb-8">
        Стоимость ремонта в Санкт-Петербурге зависит от множества факторов: тип дома, состояние квартиры, уровень отделки и выбранные материалы. Разберём актуальные цены на 2026 год.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Сегменты ремонта</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="border border-stone-100 p-6">
          <h3 class="text-xs uppercase tracking-widest mb-3">Комфорт</h3>
          <p class="text-3xl font-serif italic mb-2" style="font-family:'Cormorant',serif">от 25 000 ₽/м²</p>
          <p class="text-sm text-stone-500">Качественные материалы среднего сегмента, стандартные решения по планировке</p>
        </div>
        <div class="border border-stone-100 p-6">
          <h3 class="text-xs uppercase tracking-widest mb-3">Бизнес</h3>
          <p class="text-3xl font-serif italic mb-2" style="font-family:'Cormorant',serif">от 45 000 ₽/м²</p>
          <p class="text-sm text-stone-500">Индивидуальный дизайн-проект, премиальные материалы, сложные решения</p>
        </div>
        <div class="border border-stone-100 p-6">
          <h3 class="text-xs uppercase tracking-widest mb-3">Премиум</h3>
          <p class="text-3xl font-serif italic mb-2" style="font-family:'Cormorant',serif">от 80 000 ₽/м²</p>
          <p class="text-sm text-stone-500">Эксклюзивные материалы, авторский надзор, мебель на заказ</p>
        </div>
      </div>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Что влияет на стоимость</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-4">
        <strong>Тип дома.</strong> Ремонт в старом фонде обходится на 15–30% дороже из-за необходимости выравнивания стен, замены коммуникаций и работы с историческими элементами.
      </p>
      <p class="text-stone-600 font-light leading-relaxed mb-4">
        <strong>Инженерия.</strong> Замена электрики, сантехники и вентиляции может составить до 20% бюджета. В старом фонде — ещё больше.
      </p>
      <p class="text-stone-600 font-light leading-relaxed mb-4">
        <strong>Материалы.</strong> Разница между массивом дуба и ламинатом — в 5–10 раз. Мы подбираем оптимальные решения под каждый бюджет.
      </p>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        <strong>Сложность планировки.</strong> Перепланировка с согласованием добавляет 200–500 тыс. ₽ и 2–3 месяца к срокам.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Как мы работаем с бюджетом</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        В бюро Osnova мы фиксируем стоимость на этапе договора. Вы получаете детальную смету с разбивкой по этапам и материалам. Никаких скрытых платежей — только прозрачная работа с вашим бюджетом.
      </p>
    `,
  },
  {
    slug: 'trendy-interiera-2026',
    title: 'Тренды дизайна интерьера 2026: что актуально в Петербурге',
    excerpt: 'Тихая роскошь, натуральные материалы и петербургский минимализм — разбираем главные тенденции года.',
    date: '2026-03-18',
    readTime: '6 мин',
    category: 'Тренды',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="text-lg text-stone-600 font-light leading-relaxed mb-8">
        2026 год продолжает тренд на «тихую роскошь» — quiet luxury в интерьере. Для Петербурга это особенно актуально: город сам по себе задаёт эстетику сдержанной элегантности.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Натуральные материалы</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Камень, дерево, лён, шерсть — всё, что имеет тактильную текстуру и живёт со временем. Мрамор Bianco Carrara на кухонной столешнице, дубовый паркет с брашированием, льняные шторы — эти решения не устареют через 5 лет.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Петербургская палитра</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Оттенки, вдохновлённые городом: серо-голубой Невы, тёплый песочник фасадов, графит гранита набережных. Приглушённые тона создают ощущение покоя и связи с городской средой. Акценты — через текстуры, а не через яркие цвета.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Скрытые технологии</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        «Умный дом» уходит от гаджетов к невидимости: скрытые колонки, автоматические шторы, датчики присутствия для света. Технологии должны служить комфорту, не привлекая к себе внимания.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Кухня как центр дома</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Открытые планировки с кухней-гостиной остаются актуальными. Кухонный остров становится центральным элементом — местом для готовки, общения и работы. Фасады без ручек, встроенная техника, каменные столешницы.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">Освещение как архитектура</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Многоуровневое освещение с диммерами — обязательный стандарт. Свет создаёт настроение и зонирует пространство. Декоративные светильники — как скульптуры: Flos, Artemide, Vibia.
      </p>
    `,
  },
  {
    slug: 'kak-vybrat-dizajnera-intererov-spb',
    title: 'Как выбрать дизайнера интерьеров в Петербурге: чек-лист',
    excerpt: 'На что обратить внимание при выборе дизайн-бюро, какие вопросы задать и как оценить портфолио.',
    date: '2026-03-05',
    readTime: '7 мин',
    category: 'Советы',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    content: `
      <p class="text-lg text-stone-600 font-light leading-relaxed mb-8">
        Выбор дизайнера — это выбор партнёра на 6–12 месяцев проекта. Ошибка на этом этапе стоит времени, денег и нервов. Вот на что обращать внимание.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">1. Портфолио — реальные объекты, не рендеры</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Просите фото реализованных проектов, а не 3D-визуализации. Рендер может выглядеть идеально, но в жизни всё иначе. Хороший дизайнер покажет и визуализации, и фото «после».
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">2. Локальный опыт</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Дизайнер, работающий в Петербурге, знает местных поставщиков, бригады, особенности согласований и специфику домов. Это экономит время и деньги.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">3. Прозрачность ценообразования</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Бюро должно предоставить детальную смету до начала работ. Если вам называют цену «примерно» — это повод насторожиться. Фиксированная стоимость проекта и поэтапная оплата — стандарт рынка.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">4. Договор и гарантии</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Работа без договора — главный риск. Договор должен фиксировать сроки, стоимость, объём работ и ответственность сторон. Авторский надзор — отдельный пункт, который защищает качество реализации.
      </p>

      <h2 class="text-2xl font-serif italic mb-6" style="font-family:'Cormorant',serif">5. Коммуникация</h2>
      <p class="text-stone-600 font-light leading-relaxed mb-8">
        Дизайнер должен слышать вас, а не навязывать своё видение. Хороший специалист задаёт вопросы о вашем образе жизни, привычках и предпочтениях. Результат — интерьер, в котором удобно именно вам.
      </p>

      <div class="bg-stone-50 p-8 mt-12">
        <p class="text-sm text-stone-500 mb-4">В бюро Osnova мы проводим бесплатную консультацию перед началом проекта. Вы получите предварительную оценку бюджета, сроков и увидите примеры наших работ в Петербурге.</p>
        <p class="text-xs uppercase tracking-widest text-stone-400">Запишитесь через форму на сайте или позвоните: +7 918 004 52 66</p>
      </div>
    `,
  },
];
