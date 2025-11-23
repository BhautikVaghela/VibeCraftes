import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Businesses from './components/Businesses';
import News from './components/News';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import BusinessesPage from './pages/BusinessesPage';
import ResidentialEventsPage from './pages/ResidentialEventsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NewsDetailPage from './pages/NewsDetailPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';

type Page = 'home' | 'about' | 'businesses' | 'residential-events' | 'news' | 'news-detail' | 'contact' | 'admin-login' | 'admin-dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(null);

  const handleNavigate = (page: Page | string) => {
    setCurrentPage(page as Page);
    if (page !== 'news-detail') {
      setSelectedArticleSlug(null);
    }
    window.scrollTo(0, 0);
  };

  const handleArticleSelect = (slug: string) => {
    setSelectedArticleSlug(slug);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'businesses':
        return <BusinessesPage onNavigate={handleNavigate} />;
      case 'residential-events':
        return <ResidentialEventsPage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onSelectArticle={handleArticleSelect} />;
      case 'news-detail':
        return (
          <NewsDetailPage
            slug={selectedArticleSlug}
            onNavigate={handleNavigate}
            onBack={() => handleNavigate('news')}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'admin-login':
        return <AdminLogin onNavigate={handleNavigate} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <Hero />
            <About onNavigate={handleNavigate} />
            <Stats />
            <Businesses onNavigate={handleNavigate} />
            <News onNavigate={handleNavigate} onSelectArticle={handleArticleSelect} />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderPage()}
        <Footer onNavigate={handleNavigate} />
      </div>
    </AuthProvider>
  );
}

export default App;
