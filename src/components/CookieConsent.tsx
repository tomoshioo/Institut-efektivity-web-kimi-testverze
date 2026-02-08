import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Initialize Google Analytics here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#050505] border-t border-white/10 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-2">Souhlas s cookies</h3>
          <p className="text-white/50 text-sm max-w-2xl">
            Používáme cookies pro analýzu návštěvnosti a zlepšení našich služeb. 
            Kliknutím na "Souhlasím" povolíte použití Google Analytics. 
            <a href="/ochrana-osobnich-udaju" className="text-[#00F0FF] hover:underline ml-1">
              Více informací
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-6 py-2 border border-white/20 text-white/60 text-sm hover:border-white/40 hover:text-white transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-[#00F0FF] text-[#050505] text-sm font-medium hover:bg-[#00B0BB] hover:text-white transition-colors"
          >
            Souhlasím
          </button>
        </div>
        <button
          onClick={handleDecline}
          className="absolute top-4 right-4 text-white/40 hover:text-white md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
