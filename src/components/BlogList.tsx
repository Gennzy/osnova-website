import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useInView } from '../hooks';

function BlogCard({ slug, title, excerpt, date, readTime, category, image }: {
  slug: string; title: string; excerpt: string; date: string; readTime: string; category: string; image: string;
}) {
  const { ref, isVisible } = useInView();
  const formatted = new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <article ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Link to={`/blog/${slug}`} className="group block">
        <div className="overflow-hidden mb-6">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-4 mb-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">{category}</span>
          <span className="text-[10px] text-stone-300">•</span>
          <span className="text-[10px] text-stone-400">{formatted}</span>
          <span className="text-[10px] text-stone-300">•</span>
          <span className="text-[10px] text-stone-400">{readTime}</span>
        </div>
        <h2 className="text-xl font-light mb-3 group-hover:italic transition-all" style={{ fontFamily: "'Cormorant', serif" }}>
          {title}
        </h2>
        <p className="text-sm text-stone-500 font-light leading-relaxed">{excerpt}</p>
        <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.3em] border-b border-stone-200 pb-1 group-hover:border-black transition-colors">
          Читать
        </span>
      </Link>
    </article>
  );
}

export function BlogList() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-40 pb-24">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 block mb-6">Блог LAGODA</span>
          <h1 className="text-5xl md:text-6xl font-light" style={{ fontFamily: "'Cormorant', serif" }}>
            Журнал
          </h1>
          <p className="text-stone-400 font-light mt-6 max-w-lg mx-auto">
            Статьи о дизайне интерьеров, ремонте и архитектуре в Санкт-Петербурге
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {blogPosts.map(post => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="text-center mt-24">
          <Link to="/" className="btn-luxury">На главную</Link>
        </div>
      </div>
    </div>
  );
}
