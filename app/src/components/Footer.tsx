import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, FileText, Download, Send, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      {/* Newsletter Section */}
      <div className="px-6 lg:px-14 py-12 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Odebírejte náš newsletter
          </h3>
          <p className="text-white/50 mb-6">
            Získejte nejnovější insights o digitalizaci veřejné správy a AI-first přístupu.
          </p>
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#00F0FF]">
              <CheckCircle2 size={20} />
              <span>Děkujeme za přihlášení!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Váš e-mail"
                required
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-[#00F0FF] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#00F0FF] text-[#050505] font-medium flex items-center justify-center gap-2 hover:bg-[#00B0BB] hover:text-white transition-colors"
              >
                Přihlásit
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="px-6 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo-white.png" 
                alt="Institut Efektivity" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="ie-body text-white/60 mb-6">
              Expertní hub, který transformuje českou veřejnou správu v moderní, AI-native ekosystém.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/institut-efektivity/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/IPEVSCZ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="mailto:info@institutefektivity.cz"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="ie-mono-label text-[#00F0FF] mb-6">Navigace</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/o-nas" className="text-white/60 hover:text-[#00F0FF] transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link to="/projekty" className="text-white/60 hover:text-[#00F0FF] transition-colors">
                  Vlajkové projekty
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-white/60 hover:text-[#00F0FF] transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/pro-bono" className="text-white/60 hover:text-[#00F0FF] transition-colors">
                  Pro bono
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-white/60 hover:text-[#00F0FF] transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="ie-mono-label text-[#00F0FF] mb-6">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00F0FF] flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Lupáčova 16<br />
                  Praha 3
                </span>
              </li>
              <li>
                <a 
                  href="mailto:info@institutefektivity.cz"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00F0FF] transition-colors text-sm"
                >
                  <Mail size={18} className="text-[#00F0FF]" />
                  info@institutefektivity.cz
                </a>
              </li>
              <li>
                <a 
                  href="tel:+420777202132"
                  className="flex items-center gap-3 text-white/60 hover:text-[#00F0FF] transition-colors text-sm"
                >
                  <Phone size={18} className="text-[#00F0FF]" />
                  +420 777 202 132
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <FileText size={18} className="text-[#00F0FF]" />
                IČ: 09983589
              </li>
            </ul>
          </div>

          {/* Documents */}
          <div>
            <h4 className="ie-mono-label text-[#00F0FF] mb-6">Dokumenty</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/eticky-kodex" className="flex items-center gap-2 text-white/60 hover:text-[#00F0FF] transition-colors text-sm">
                  <FileText size={16} />
                  Etický kodex
                </Link>
              </li>
              <li>
                <Link to="/ochrana-osobnich-udaju" className="flex items-center gap-2 text-white/60 hover:text-[#00F0FF] transition-colors text-sm">
                  <FileText size={16} />
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <a 
                  href="/zakladaci-listina.pdf"
                  download
                  className="flex items-center gap-2 text-white/60 hover:text-[#00F0FF] transition-colors text-sm"
                >
                  <Download size={16} />
                  Zakládací listina
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 lg:px-14 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            Designed with AI First principles. © 2026 Institut pro efektivní veřejnou správu z.ú. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/eticky-kodex" className="text-xs text-white/40 hover:text-[#00F0FF] transition-colors">
              Etický kodex
            </Link>
            <Link to="/ochrana-osobnich-udaju" className="text-xs text-white/40 hover:text-[#00F0FF] transition-colors">
              Ochrana osobních údajů
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
