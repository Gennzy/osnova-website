import { useState } from 'react';
import { useInView } from '../hooks';

interface Project {
  title: string;
  location: string;
  category: string;
  img: string;
}

function PortfolioCard({ project, index, onImageClick }: { project: Project; index: number; onImageClick: (img: string) => void }) {
  const { ref, isVisible } = useInView();

  return (
    <div ref={ref} className={`${isVisible ? 'visible' : ''} reveal group cursor-pointer ${index % 2 === 1 ? 'md:pt-24' : ''}`}>
      <div
        className="img-wrap aspect-[16/10] mb-8 shadow-sm rounded-sm"
        onClick={() => onImageClick(project.img)}
      >
        <img src={project.img} className="w-full h-full object-cover" alt={project.title} loading="lazy" />
      </div>
      <h3 className="text-3xl font-serif font-light mb-1 group-hover:italic transition-all duration-500">{project.title}</h3>
      <span className="text-[10px] uppercase tracking-widest text-stone-400">{project.location}</span>
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'Morskaya Naberezhnaya',
      location: 'Васильевский остров \u2022 120 м\u00b2 \u2022 2025',
      category: 'apartment',
      img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Repino Forest Villa',
      location: 'Репино \u2022 380 м\u00b2 \u2022 2024',
      category: 'house',
      img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Petrogradskaya Classic',
      location: 'Петроградка \u2022 95 м\u00b2 \u2022 2024',
      category: 'apartment',
      img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Sestroretsk Modern Villa',
      location: 'Сестрорецк \u2022 250 м\u00b2 \u2022 2023',
      category: 'house',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Krestovsky Apartment',
      location: 'Крестовский \u2022 180 м\u00b2 \u2022 2023',
      category: 'apartment',
      img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Zelenogorsk Residence',
      location: 'Зеленогорск \u2022 420 м\u00b2 \u2022 2022',
      category: 'house',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
  const categories = [
    { key: 'all', label: 'Все' },
    { key: 'apartment', label: 'Квартиры' },
    { key: 'house', label: 'Дома' },
  ];

  return (
    <section id="portfolio" className="py-32 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 block mb-4">Selected Works in SPB</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest">Портфолио</h2>
          </div>
          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em]">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`pb-2 border-b transition-all ${filter === c.key ? 'border-black text-black' : 'border-transparent text-stone-400 hover:text-black'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {filtered.map((p, i) => (
            <PortfolioCard key={p.title} project={p} index={i} onImageClick={setLightboxImg} />
          ))}
        </div>
      </div>

      {lightboxImg && (
        <div
          className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
          style={{ animation: 'fadeIn 0.3s ease' }}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <img src={lightboxImg} className="max-w-full max-h-[90vh] object-contain" alt="Project" />
        </div>
      )}
    </section>
  );
}
