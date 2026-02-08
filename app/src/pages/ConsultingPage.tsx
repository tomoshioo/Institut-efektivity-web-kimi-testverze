import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Cpu, Search, ShoppingCart, Scale, FolderKanban, GraduationCap, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ConsultingPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.consulting-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.service-block',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-container',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      number: '01',
      title: 'AI-First strategie a digitální architektura',
      icon: <Cpu size={28} />,
      description: 'Transformace úřadu na digitální ekosystém. Neřešíme digitalizaci "kosmeticky" pouhým skenováním formulářů, ale měníme samotnou DNA instituce.',
      items: [
        { title: 'AI Readiness Audit', desc: 'Zhodnotíme připravenost instituce na adopci AI nástrojů a automatizaci.' },
        { title: 'Technická architektura', desc: 'Navrhujeme otevřené platformy bez vendor-lock s důrazem na modularitu.' },
        { title: 'Servisní design & UX', desc: 'Redesignujeme služby z pohledu občana, nikoliv úředníka.' },
      ]
    },
    {
      number: '02',
      title: 'Hloubkové audity a procesní optimalizace',
      icon: <Search size={28} />,
      description: 'Radikální řez neefektivitou. Vycházíme z tvrdých dat, nikoliv z dojmů nebo zvykového práva.',
      items: [
        { title: 'Procesní a organizační audit', desc: 'Identifikujeme duplicitní agendy a neefektivní toky práce.' },
        { title: 'Personální audit', desc: 'Revize organizační struktury pro digitální éru.' },
        { title: 'IT a security audit', desc: 'Nezávislé posouzení ICT infrastruktury a kyberbezpečnosti.' },
      ]
    },
    {
      number: '03',
      title: 'Moderní nákup a most inovacím',
      icon: <ShoppingCart size={28} />,
      description: 'Jak nakoupit inovace bez rizika. Učíme stát nakupovat chytře a beze strachu.',
      items: [
        { title: 'Vendor management', desc: 'Posouzení efektivity dodavatelů a nastavení tvrdých SLA.' },
        { title: 'Příprava zadávací dokumentace', desc: 'Tvoříme zadání definující "co" a "proč", nikoliv "jak".' },
        { title: 'Tržní konzultace (PTK)', desc: 'Transparentní dialog s trhem před vypsáním zakázky.' },
      ]
    },
    {
      number: '04',
      title: 'Právní inženýrství a legislativa',
      icon: <Scale size={28} />,
      description: 'Právo jako enabler, ne brzda. Rozumíme tomu, že technologie je vždy o krok napřed před zákonem.',
      items: [
        { title: 'Legislativní drafting', desc: 'Připravujeme návrhy předpisů pro zefektivnění agendy.' },
        { title: 'Smluvní audit', desc: 'Hloubková revize majetkoprávních vztahů s cílem najít úspory.' },
        { title: 'Pro bono expertíza', desc: 'Právní podpora projektům s vysokým celospolečenským dopadem.' },
      ]
    },
    {
      number: '05',
      title: 'Projektový management a strategické řízení',
      icon: <FolderKanban size={28} />,
      description: 'Když projekt hoří nebo chybí vize. Pomáháme činit informovaná rozhodnutí pod tlakem.',
      items: [
        { title: 'Záchrana projektů', desc: 'Rychlá revize a reprioritizace běžících projektů ve skluzu.' },
        { title: 'Finanční řízení', desc: 'Analýza rozpočtů a hledání úspor v provozních výdajích.' },
        { title: 'End-to-End management', desc: 'Kompletní vedení projektu od studie po implementaci.' },
      ]
    },
    {
      number: '06',
      title: 'Akademie efektivity & AI Upskilling',
      icon: <GraduationCap size={28} />,
      description: 'Technologie je k ničemu, když ji lidé neumí používat. Učíme úředníky využívat AI jako parťáka.',
      items: [
        { title: 'AI Bootcamps', desc: 'Praktické workshopy používání LLM modelů pro automatizaci rutiny.' },
        { title: 'Digital Leadership', desc: 'Školení pro ředitele a politiky o řízení digitální transformace.' },
        { title: 'Reskilling a adopce', desc: 'Pomáháme zaměstnancům překonat strach ze změny.' },
      ]
    },
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="consulting-hero">
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">Consulting</span>
              <h1 className="ie-headline-1 text-white mb-6">
                Od paragrafu
                <span className="text-[#00F0FF]"> po kód</span>
              </h1>
              <p className="ie-headline-3 text-white/60 mb-8">
                Full-stack inovační partner.
              </p>
              <p className="ie-body text-white/50 max-w-xl">
                Nejsme klasická poradenská firma, která odevzdá stoh papírů a zmizí. 
                Jsme full-stack inovační partner, který přebírá odpovědnost za výsledek. 
                Naše konzultační činnost pokrývá celý životní cyklus změny.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/graphic-consulting2.png" 
                  alt="Consulting služby"
                  className="w-full max-w-lg h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Services */}
      <section className="services-container py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.number}
                className={`service-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${
                  index !== services.length - 1 ? 'pb-20 border-b border-white/5' : ''
                }`}
              >
                {/* Left column - Number & Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl font-bold text-[#00F0FF]/30">{service.number}</span>
                    <div>
                      <div className="text-[#00F0FF] mb-4">{service.icon}</div>
                      <h2 className="text-2xl font-semibold text-white leading-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-white/50 mt-4 ml-16">
                    {service.description}
                  </p>
                </div>

                {/* Right column - Items */}
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.items.map((item) => (
                      <div 
                        key={item.title}
                        className="p-6 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/50 transition-all duration-300"
                      >
                        <h3 className="text-sm font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-32 h-24 mx-auto mb-6 relative">
                <img src="/graphic-why.png" alt="" className="w-full h-full object-contain" />
              </div>
              <span className="ie-mono-label text-[#00F0FF] mb-4 block">Proč my</span>
              <h2 className="ie-headline-3 text-white">
                Co nás odlišuje
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Jediná entita pokrývající celý životní cyklus inovace',
                'Technologická agnosticita – neprosazujeme konkrétní dodavatele',
                'Oddělení poradenství a realizace – žádný střet zájmů',
                'Tým s praxí z ministerstev i technologických firem',
                'Důraz na měřitelné výsledky, ne teoretické koncepty',
                'Rychlé dodání – průměrně 6 týdnů',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-4 p-4 border border-white/10">
                  <CheckCircle2 size={20} className="text-[#00F0FF] flex-shrink-0" />
                  <span className="text-white/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="ie-headline-3 text-white mb-6">
              Připraveni na změnu?
            </h2>
            <p className="ie-body text-white/50 mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Společně najdeme 
              nejlepší řešení pro vaši instituci.
            </p>
            <Link to="/kontakt" className="ie-btn-primary inline-flex">
              Domluvit schůzku
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 60%)'
          }}
        />
      </section>
    </div>
  );
};

export default ConsultingPage;
