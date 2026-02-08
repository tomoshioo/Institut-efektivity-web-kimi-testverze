import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Projekty', href: '/projekty' },
    { label: 'Consulting', href: '/consulting' },
    { label: 'Pro bono', href: '/pro-bono' },
    { label: 'GovTech', href: '/govtech-accelerator' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#050505]/95 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-14 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img 
              src="/logo-white.png" 
              alt="Institut Efektivity" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`ie-mono-label transition-colors ${
                  location.pathname === item.href 
                    ? 'text-[#00F0FF]' 
                    : 'text-white/60 hover:text-[#00F0FF]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            to="/kontakt"
            className="hidden lg:inline-flex ie-btn-primary text-xs py-3 px-6"
          >
            Spojme se
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#00F0FF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-2xl font-semibold text-white hover:text-[#00F0FF] transition-colors"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/kontakt"
            className="ie-btn-primary mt-4"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            Spojme se
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
