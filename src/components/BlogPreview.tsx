import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { useInView } from '../hooks';

function PreviewCard({ slug, title, excerpt, date, readTime, category, image }: {
  slug: string; title: string; excerpt: string; date: string; readTime: string; category: string; image: string;
}) {
  const { ref, isVisible } = useInView();
  const formatted = new Date(date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });

  return (
    <article ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <Link to={`/blog/${slug}`} className="group block">
        <div className="overflow-hidden mb-4">
          <img src={image} alt={title} loading="lazy" className="w-full aspect-[3/2] object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">{category}</span>
          <span className="text-[10px] text-stone-300">•</span>
          <span className="text-[10px] text-stone-400">{formatted}</span>
          <span className="text-[10px] text-stone-300">•</span>
          <span className="text-[10px] text-stone-400">{readTime}</span>
        </div>
        <h3 className="text-lg font-light mb-2 group-hover:italic transition-all" style={{ fontFamily: "'Cormorant', serif" }}>
          {title}
        </h3>
        <p className="text-sm text-stone-400 font-light line-clamp-2">{excerpt}</p>
      </Link>
    </article>
  );
}

export function BlogPreview() {
  const { ref, isVisible } = useInView();
  const latest = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-32 px-8 md:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-300 block mb-6">Блог</span>
          <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant', serif" }}>
            Журнал Osnova
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latest.map(post => (
            <PreviewCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/blog" className="btn-luxury">Все статьи</Link>
        </div>
      </div>
    </section>
  );
}
