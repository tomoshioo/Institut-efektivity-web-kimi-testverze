import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ConsultingPage from './pages/ConsultingPage';
import ProBonoPage from './pages/ProBonoPage';
import ContactPage from './pages/ContactPage';
import EthicsPage from './pages/EthicsPage';
import PrivacyPage from './pages/PrivacyPage';
import GovTechPage from './pages/GovTechPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';

function App() {
  // Schema.org structured data for the organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Institut pro efektivní veřejnou správu',
    alternateName: 'Institut Efektivity',
    url: 'https://www.institutefektivity.cz',
    logo: 'https://www.institutefektivity.cz/logo-brand.png',
    description: 'Expertní hub transformující českou veřejnou správu v moderní, AI-native ekosystém.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lucemburská 2434/17',
      addressLocality: 'Praha 3',
      postalCode: '130 00',
      addressCountry: 'CZ'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+420-777-202-132',
      contactType: 'customer service',
      email: 'info@institutefektivity.cz'
    },
    sameAs: [
      'https://www.linkedin.com/company/institut-efektivity/',
      'https://x.com/IPEVSCZ/'
    ]
  };

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen bg-[#050505]">
          {/* Schema.org markup */}
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(organizationSchema)}
            </script>
          </Helmet>
          
          {/* Noise overlay */}
          <div className="noise-overlay" />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main content */}
          <main className="relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/o-nas" element={<AboutPage />} />
              <Route path="/projekty" element={<ProjectsPage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/pro-bono" element={<ProBonoPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/eticky-kodex" element={<EthicsPage />} />
              <Route path="/ochrana-osobnich-udaju" element={<PrivacyPage />} />
              <Route path="/govtech-accelerator" element={<GovTechPage />} />
              <Route path="/sluzby" element={<ServicesPage />} />
              <Route path="/tym" element={<TeamPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
          
          {/* Cookie Consent */}
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
