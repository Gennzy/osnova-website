import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const formatted = new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const prevPost = blogPosts[currentIndex - 1] || null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-8 pb-16 w-full">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 block mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-5xl text-white font-light leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-6 text-white/50 text-[11px]">
              <span>{formatted}</span>
              <span>•</span>
              <span>{post.readTime} чтения</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-8 py-20">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <div className="border-t border-stone-100 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-300 block mb-2">&larr; Предыдущая</span>
              <span className="text-lg font-light group-hover:italic transition-all" style={{ fontFamily: "'Cormorant', serif" }}>
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}
          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className="group text-right">
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-300 block mb-2">Следующая &rarr;</span>
              <span className="text-lg font-light group-hover:italic transition-all" style={{ fontFamily: "'Cormorant', serif" }}>
                {nextPost.title}
              </span>
            </Link>
          )}
        </div>

        <div className="text-center mt-16">
          <Link to="/blog" className="btn-luxury">Все статьи</Link>
        </div>
      </div>
    </div>
  );
}
