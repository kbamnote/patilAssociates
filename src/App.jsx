import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import AboutPage from './components/about/AboutPage';
import VenturesPage from './components/ventures/VenturesPage';
import NewsPage from './components/news/NewsPage';
import ContactPage from './components/contact/ContactPage';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Layout wrapper to include Header/Footer on all pages
const Layout = ({ children }) => {
  const location = useLocation();
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Show Header only on landing page */}
      {location.pathname === '/' && <Header />}
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
