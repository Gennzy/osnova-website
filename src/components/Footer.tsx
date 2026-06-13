export function Footer({ onOpenInfo, onOpenCalc }: { onOpenInfo: (key: string) => void; onOpenCalc: () => void }) {
  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-4">
            <img src="/logo_dark.png" alt="LAGODA" className="w-48 h-auto mb-6" />
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs">
              Бюро интерьерных решений в Санкт-Петербурге, где архитектурная точность встречается с эстетикой повседневности.
            </p>
            <div className="mt-8 flex space-x-6">
              <a href="https://t.me/osnova_co" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-black transition-colors">
                <span className="text-[10px] uppercase tracking-widest">Telegram</span>
              </a>
              <a href="#" className="text-stone-400 hover:text-black transition-colors">
                <span className="text-[10px] uppercase tracking-widest">Instagram</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:offset-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8">Бюро</h4>
            <nav>
              <a onClick={() => onOpenInfo('about')} className="footer-link">О нас</a>
              <a onClick={() => onOpenInfo('projects')} className="footer-link">Проекты</a>
              <a onClick={() => onOpenInfo('faq_full')} className="footer-link">FAQ</a>
              <a onClick={() => onOpenInfo('careers')} className="footer-link">Карьера</a>
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8">Услуги</h4>
            <nav>
              <a onClick={() => onOpenInfo('design')} className="footer-link">Проектирование</a>
              <a onClick={() => onOpenInfo('repair')} className="footer-link">Ремонт</a>
              <a onClick={() => onOpenInfo('styling')} className="footer-link">Комплектация</a>
              <a onClick={() => onOpenInfo('supervision')} className="footer-link">Надзор</a>
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8">Связаться</h4>
            <div className="space-y-4">
              <p className="text-sm font-light">Санкт-Петербург</p>
              <a href="tel:+79944403030" className="text-lg font-light block hover:italic transition-all underline decoration-stone-100 underline-offset-8">
                +7 994 440 30 30
              </a>
              <button onClick={onOpenCalc} className="btn-luxury mt-4 text-[10px] px-6 py-3">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-50 pt-8 opacity-40 text-[9px] uppercase tracking-[0.3em]">
          <p>&copy; 2026 LAGODA Design Bureau. Только Санкт-Петербург и ЛО.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a onClick={() => onOpenInfo('privacy')} className="cursor-pointer hover:opacity-60 transition-opacity">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
