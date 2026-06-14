import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { BlogPreview } from './components/BlogPreview';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { CalcModal } from './components/CalcModal';
import { InfoModal } from './components/InfoModal';
import { BlogList } from './components/BlogList';
import { BlogPostPage } from './components/BlogPostPage';

function HomePage({ onOpenCalc }: { onOpenCalc: () => void }) {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTASection onOpenCalc={onOpenCalc} />
    </main>
  );
}

export default function App() {
  const [preloading, setPreloading] = useState(true);
  const [calcOpen, setCalcOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [infoKey, setInfoKey] = useState('');

  const handleOpenInfo = useCallback((key: string) => {
    setInfoKey(key);
    setInfoOpen(true);
  }, []);

  const handlePreloadDone = useCallback(() => {
    setPreloading(false);
  }, []);

  return (
    <>
      {preloading && <Preloader onDone={handlePreloadDone} />}

      <ScrollProgress />
      <Navigation onOpenCalc={() => setCalcOpen(true)} />

      <Routes>
        <Route path="/" element={<HomePage onOpenCalc={() => setCalcOpen(true)} />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      <Footer onOpenInfo={handleOpenInfo} onOpenCalc={() => setCalcOpen(true)} />
      <BackToTop />

      <CalcModal open={calcOpen} onClose={() => setCalcOpen(false)} />
      <InfoModal open={infoOpen} onClose={() => setInfoOpen(false)} contentKey={infoKey} />
    </>
  );
}
