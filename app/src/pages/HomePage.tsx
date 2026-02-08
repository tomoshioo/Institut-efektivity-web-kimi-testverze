import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, ArrowUpRight, Cpu, Layers, Users, BarChart3, FileText, GraduationCap, 
  Lightbulb, Target, Zap, Download, ChevronRight, Sparkles, TrendingUp, Shield,
  Linkedin
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  // Schema.org WebSite structured data
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Institut pro efektivní veřejnou správu',
    url: 'https://www.institutefektivity.cz',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.institutefektivity.cz/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title span',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.3 }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.8 }
      );

      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1 }
      );

      gsap.fromTo('.hero-visual',
        { scale: 0.8, opacity: 0, rotateY: -30 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );

      // Floating animation for hero visual
      gsap.to('.hero-visual', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // CTA cards animation
      gsap.fromTo('.cta-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cta-grid',
            start: 'top 85%',
          }
        }
      );

      // Services animation
      gsap.fromTo('.service-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number',
        { textContent: 0 },
        {
          textContent: (_i: number, target: HTMLElement) => target.dataset.value,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );

      // Publications animation
      gsap.fromTo('.publication-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.publications-section',
            start: 'top 85%',
          }
        }
      );

      // Social section animation
      gsap.fromTo('.social-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.social-section',
            start: 'top 85%',
          }
        }
      );

      // Parallax effect for background elements
      gsap.to('.parallax-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const ctaSections = [
    {
      title: 'Vlajkové projekty',
      description: 'Datová pitva státu, blueprint pro veřejnou komunikaci a vizualizace open dat.',
      link: '/projekty',
      icon: <Target size={28} />,
      color: 'cyan',
      image: '/graphic-rpp.png'
    },
    {
      title: 'Consulting',
      description: 'AI-first strategie, procesní audity, moderní nákup a právní inženýrství.',
      link: '/consulting',
      icon: <Zap size={28} />,
      color: 'cyan',
      image: '/graphic-consulting2.png'
    },
    {
      title: 'Pro Bono',
      description: 'Knowledge Hub, legislativní inkubace a advokacie ve veřejném zájmu.',
      link: '/pro-bono',
      icon: <Lightbulb size={28} />,
      color: 'cyan',
      image: '/graphic-probono.png'
    },
    {
      title: 'O nás',
      description: 'Poznejte náš tým expertů s praxí z ministerstev, radnic i technologických firem.',
      link: '/o-nas',
      icon: <Users size={28} />,
      color: 'cyan',
      image: '/graphic-arvo2.png'
    }
  ];

  const services = [
    { icon: <Layers size={20} />, title: 'AI-First strategie' },
    { icon: <Cpu size={20} />, title: 'Procesní audity' },
    { icon: <BarChart3 size={20} />, title: 'Moderní nákup' },
    { icon: <FileText size={20} />, title: 'Právní inženýrství' },
    { icon: <Users size={20} />, title: 'Projektový management' },
    { icon: <GraduationCap size={20} />, title: 'AI Upskilling' },
  ];

  const publications = [
    {
      type: 'Studie',
      title: 'Analýza pražského nemovitostního trhu',
      file: '/studie-prazsky-nemovitostni-trh.pdf'
    },
    {
      type: 'Whitepaper',
      title: 'Architektura poskytování služeb města',
      file: '/architektura-sluzeb-mesta.pdf'
    },
    {
      type: 'Analýza',
      title: 'Podpora inovačního businessu ze strany města',
      file: '/podpora-inovacniho-businessu.pdf'
    },
    {
      type: 'Policy Paper',
      title: 'Podpora startupů v ČR – Komplexní návrh',
      file: '/podpora-startupu-cr.pdf'
    }
  ];

  return (
    <div className="bg-[#050505] overflow-hidden">
      <SEO
        title="Institut Efektivity | Transformace veřejné správy"
        description="Expertní hub, který transformuje českou veřejnou správu v moderní, AI-native ekosystém. Full-stack partner: think-tank, consulting, agency."
        url="https://www.institutefektivity.cz/"
      />
      {/* Schema.org markup */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      
      {/* Animated Background */}
      <div className="parallax-bg fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center relative pt-24">
        <div className="w-full px-6 lg:px-14 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles size={20} className="text-[#00F0FF]" />
                <span className="ie-mono-label text-[#00F0FF]">Institut Efektivity</span>
              </div>
              
              <h1 className="hero-title ie-headline-1 text-white mb-6 overflow-hidden">
                <span className="inline-block">Transformujeme</span><br />
                <span className="inline-block text-[#00F0FF]">veřejnou správu</span>
              </h1>
              
              <p className="hero-subtitle ie-headline-3 text-white/60 mb-8">
                v moderní, AI-native ekosystém.
              </p>
              
              <p className="hero-subtitle ie-body text-white/50 max-w-lg mb-10">
                Spojujeme dravost startupu s hlubokou znalostí procesů státu. 
                Skrze digitalizaci a AI-first přístup doručujeme služby, 
                které jsou skutečně user-centric.
              </p>
              
              <div className="hero-cta flex flex-wrap items-center gap-4">
                <Link to="/consulting" className="ie-btn-primary group">
                  Naše služby
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/kontakt" className="ie-btn-secondary">
                  Spojme se
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hero-visual relative flex justify-center items-center perspective-1000">
              <div className="relative">
                {/* Glow rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] border border-[#00F0FF]/20 rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[350px] h-[350px] border border-[#00B0BB]/10 rounded-full animate-pulse delay-500" />
                </div>
                
                {/* Logo */}
                <img 
                  src="/logo-neon.png" 
                  alt="Institut Efektivity"
                  className="w-full max-w-md h-auto relative z-10"
                />
                
                {/* Floating particles */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF] rounded-full animate-ping" />
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-[#00B0BB] rounded-full animate-ping delay-700" />
                <div className="absolute top-1/2 -left-5 w-2 h-2 bg-[#00F0FF]/50 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Grid Section */}
      <section className="cta-grid py-24 border-y border-white/5 relative">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Co děláme</span>
            <h2 className="ie-headline-2 text-white">
              Kompletní full-stack partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ctaSections.map((section) => (
              <Link 
                key={section.title}
                to={section.link}
                className="cta-card group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#00F0FF]/10 to-transparent" />
                
                <div className="relative p-8 lg:p-10 border border-white/10 bg-white/[0.02] group-hover:border-[#00F0FF]/50 transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="absolute top-4 right-4 w-32 h-32 opacity-30 group-hover:opacity-50 transition-opacity">
                    <img src={section.image} alt="" className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="mb-6 text-[#00F0FF] group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                    {section.title}
                  </h3>
                  
                  <p className="text-white/50 mb-6">
                    {section.description}
                  </p>
                  
                  <div className="flex items-center text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-medium">Zjistit více</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="ie-mono-label text-[#00F0FF] mb-4 block">Služby</span>
              <h2 className="ie-headline-3 text-white">
                Od paragrafu po kód
              </h2>
            </div>
            <Link to="/consulting" className="ie-link mt-4 lg:mt-0 group">
              Všechny služby
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-item p-6 border border-white/10 bg-white/[0.02] text-center hover:border-[#00F0FF] hover:bg-[rgba(0,240,255,0.03)] transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#00F0FF] mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="publications-section py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="ie-mono-label text-[#00F0FF] mb-4 block">Ke stažení</span>
              <h2 className="ie-headline-3 text-white">
                Naše publikace
              </h2>
            </div>
            <Link to="/pro-bono" className="ie-link mt-4 lg:mt-0 group">
              Všechny publikace
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publications.map((pub) => (
              <a 
                key={pub.title}
                href={pub.file}
                download
                className="publication-card group p-6 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/50 hover:bg-[rgba(0,240,255,0.03)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="ie-mono-label text-[#00B0BB]">{pub.type}</span>
                  <Download size={18} className="text-white/30 group-hover:text-[#00F0FF] transition-colors" />
                </div>
                <h3 className="text-white font-medium group-hover:text-[#00F0FF] transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                <div className="mt-4 flex items-center text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                  <span>Stáhnout PDF</span>
                  <ArrowRight size={14} className="ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-24">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center p-6 border border-white/5 bg-white/[0.02]">
              <TrendingUp size={32} className="text-[#00F0FF] mx-auto mb-4" />
              <span className="stat-number text-5xl lg:text-6xl font-bold text-[#00F0FF] block mb-2" data-value="12">0</span>
              <span className="ie-mono-label text-white/40">Expertů v týmu</span>
            </div>
            <div className="stat-item text-center p-6 border border-white/5 bg-white/[0.02]">
              <Zap size={32} className="text-[#00B0BB] mx-auto mb-4" />
              <span className="stat-number text-5xl lg:text-6xl font-bold text-[#00B0BB] block mb-2" data-value="6">0</span>
              <span className="ie-mono-label text-white/40">Týdnů průměrná dodávka</span>
            </div>
            <div className="stat-item text-center p-6 border border-white/5 bg-white/[0.02]">
              <Shield size={32} className="text-[#00F0FF] mx-auto mb-4" />
              <span className="text-5xl lg:text-6xl font-bold text-[#00F0FF] block mb-2">100%</span>
              <span className="ie-mono-label text-white/40">Zero bullshit</span>
            </div>
            <div className="stat-item text-center p-6 border border-white/5 bg-white/[0.02]">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img src="/graphic-year.png" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="ie-mono-label text-white/40">Rok založení</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-12">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Sledujte nás</span>
            <h2 className="ie-headline-3 text-white mb-4">
              Buďte v obraze
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Sledujte náš LinkedIn a Twitter pro nejnovější novinky z modernizace veřejného sektoru, 
              legislativy a našich projektů.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a 
              href="https://www.linkedin.com/company/institut-efektivity/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card p-8 border border-white/10 bg-white/[0.02] hover:border-[#0077B5] hover:bg-[#0077B5]/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <Linkedin size={32} className="text-[#0077B5]" />
                <span className="text-xl font-semibold text-white">LinkedIn</span>
              </div>
              <p className="text-white/50 mb-4">
                Profesionální novinky, analýzy a pozvánky na akce.
              </p>
              <div className="flex items-center text-[#0077B5] group-hover:gap-2 gap-1 transition-all">
                <span className="text-sm font-medium">Sledovat</span>
                <ArrowRight size={16} />
              </div>
            </a>

            <a 
              href="https://x.com/IPEVSCZ/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card p-8 border border-white/10 bg-white/[0.02] hover:border-white hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xl font-semibold text-white">X / Twitter</span>
              </div>
              <p className="text-white/50 mb-4">
                Rychlé aktuality, komentáře a diskuse o veřejné správě.
              </p>
              <div className="flex items-center text-white group-hover:gap-2 gap-1 transition-all">
                <span className="text-sm font-medium">Sledovat</span>
                <ArrowRight size={16} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto relative">
                <img src="/graphic-arvo2.png" alt="" className="w-full h-full object-contain opacity-70" />
              </div>
            </div>
            <blockquote className="ie-headline-2 text-white mb-8 leading-tight">
              „Efektivita v našem podání znamená radikální zjednodušení procesů,<br />
              <span className="text-[#00F0FF]">které vede k vyšší kvalitě služeb při prokazatelném snížení nákladů."</span>
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-[#00F0FF]" />
              <span className="ie-mono-label text-white/40">Naše motto</span>
              <div className="w-12 h-px bg-[#00F0FF]" />
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F0FF]/5 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
