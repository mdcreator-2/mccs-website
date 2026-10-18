import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CommitteePage from './pages/CommitteePage';
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
          <Route
            path="/about"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="font-serif text-4xl text-primary">About — Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/rulebook"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="font-serif text-4xl text-primary">Rulebook — Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/team"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="font-serif text-4xl text-primary">Team — Coming Soon</h1>
              </div>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
