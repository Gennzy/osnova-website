import { useState, useEffect } from 'react';

async function sendLead(message: string) {
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (e) {
    console.error('Lead send error', e);
  }
}

export function CalcModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [state, setState] = useState({ type: '', area: '', name: '', contact: '' });
  const [done, setDone] = useState(false);

  const totalSteps = 4;

  const nextStep = () => {
    if (step === 1 && !state.type) return;
    if (step === 2 && !state.area) return;
    if (step < totalSteps) setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (!state.name || !state.contact) return;
    const msg = `\ud83c\udfe0 <b>\u0417\u0430\u044f\u0432\u043a\u0430 (\u0421\u041f\u0431/\u041b\u041e)</b>\n\n<b>\u041e\u0431\u044a\u0435\u043a\u0442:</b> ${state.type}\n<b>\u041f\u043b\u043e\u0449\u0430\u0434\u044c:</b> ${state.area} \u043c\u00b2\n<b>\u041a\u043b\u0438\u0435\u043d\u0442:</b> ${state.name}\n<b>\u0421\u0432\u044f\u0437\u044c:</b> ${state.contact}`;
    await sendLead(msg);
    setDone(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setState({ type: '', area: '', name: '', contact: '' });
      setDone(false);
    }, 300);
  };

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const progressPct = done ? 100 : (step / totalSteps) * 100;

  return (
    <div
      className="fixed inset-0 z-[90] bg-white/98 backdrop-blur-md overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      style={{ animation: 'fadeIn 0.3s ease' }}
    >
      <button onClick={handleClose} className="fixed top-8 right-8 text-stone-400 hover:text-black transition-transform hover:rotate-90 z-[95]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
      </button>

      <div className="max-w-2xl mx-auto px-8 py-20" style={{ animation: 'fadeInUp 0.5s ease 0.1s both' }}>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        {!done ? (
          <>
            {step === 1 && (
              <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                <h2 className="text-2xl font-light mb-8 uppercase tracking-widest text-center" style={{ fontFamily: "'Cormorant', serif" }}>Тип вашего объекта</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Квартира', 'Загородный дом', 'Пентхаус', 'Коммерческое помещение'].map(t => (
                    <div
                      key={t}
                      className={`p-8 border text-center cursor-pointer transition-all ${state.type === t ? 'border-black bg-stone-50' : 'border-stone-100 hover:bg-stone-50'}`}
                      onClick={() => { setState(s => ({ ...s, type: t })); }}
                    >
                      <span className="text-lg font-light">{t}</span>
                    </div>
                  ))}
                </div>
                {state.type && (
                  <button className="btn-luxury w-full mt-8" onClick={nextStep}>Далее</button>
                )}
              </div>
            )}

            {step === 2 && (
              <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                <h2 className="text-2xl font-light mb-8 uppercase tracking-widest text-center" style={{ fontFamily: "'Cormorant', serif" }}>Площадь</h2>
                <input
                  type="number"
                  placeholder="м²"
                  value={state.area}
                  onChange={e => setState(s => ({ ...s, area: e.target.value }))}
                  className="input-luxury text-center text-4xl"
                  style={{ fontFamily: "'Cormorant', serif" }}
                />
                <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-stone-400">
                  <span>Минимум 30 м²</span>
                  <span>Обычно 60-200 м²</span>
                </div>
                <button className="btn-luxury w-full mt-12" onClick={nextStep}>Далее</button>
              </div>
            )}

            {step === 3 && (
              <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                <h2 className="text-2xl font-light mb-8 uppercase tracking-widest text-center" style={{ fontFamily: "'Cormorant', serif" }}>Что вас интересует?</h2>
                <div className="space-y-4">
                  {['Дизайн-проект', 'Ремонт под ключ', 'Комплектация', 'Авторский надзор', 'Всё комплексно'].map(s => (
                    <div
                      key={s}
                      className="p-6 border text-center cursor-pointer transition-all hover:bg-stone-50"
                      onClick={() => { setState(st => ({ ...st, type: `${st.type} / ${s}` })); setStep(4); }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div style={{ animation: 'fadeInUp 0.4s ease' }}>
                <h2 className="text-2xl font-light mb-8 uppercase tracking-widest text-center" style={{ fontFamily: "'Cormorant', serif" }}>Контакты</h2>
                <input type="text" placeholder="Ваше имя" value={state.name} onChange={e => setState(s => ({ ...s, name: e.target.value }))} className="input-luxury mb-6" />
                <input type="text" placeholder="Телефон или Telegram" value={state.contact} onChange={e => setState(s => ({ ...s, contact: e.target.value }))} className="input-luxury mb-8" />
                <button className="btn-luxury w-full" onClick={handleSubmit}>Получить расчет</button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12" style={{ animation: 'fadeInUp 0.5s ease' }}>
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 className="text-2xl font-light mb-4 uppercase tracking-widest" style={{ fontFamily: "'Cormorant', serif" }}>Спасибо!</h2>
            <p className="text-stone-500 mb-8">Менеджер подготовит расчет и свяжется с вами<br />в течение 2 часов.</p>
            <button className="btn-luxury" onClick={handleClose}>Закрыть</button>
          </div>
        )}
      </div>
    </div>
  );
}
