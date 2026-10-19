import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/CommitteePage';
import AboutPage from './pages/AboutPage';
import RulebookPage from './pages/RulebookPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/committees/unsc" element={<CommitteePage committee="unsc" />} />
          <Route path="/committees/aippm" element={<CommitteePage committee="aippm" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rulebook" element={<RulebookPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
