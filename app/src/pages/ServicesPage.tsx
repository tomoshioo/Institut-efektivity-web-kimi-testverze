import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { 
  Cpu, Layers, Users, BarChart3, FileText, GraduationCap,
  ArrowRight, CheckCircle2, Zap, Shield, Clock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.service-detail',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Layers size={32} />,
      title: 'Digitální transformace',
      description: 'Celková proměna služeb: procesy, data, kanály, změnový management. Pomáháme institucím přejít od papírové agendy k moderním digitálním službám.',
      features: [
        'Procesní analýza a optimalizace',
        'Návrh digitálních služeb',
        'Implementace změn',
        'Školení uživatelů'
      ],
      image: '/graphic-vision.png'
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI & automatizace',
      description: 'Inteligentní agenti, klasifikace a predikce—s důrazem na bezpečnost a transparentnost. Využíváme umělou inteligenci pro zefektivnění úředních procesů.',
      features: [
        'AI agenti pro úřední činnosti',
        'Automatická klasifikace dokumentů',
        'Prediktivní analýzy',
        'Chatboti pro občany'
      ],
      image: '/graphic-ai.png'
    },
    {
      icon: <Users size={32} />,
      title: 'Service design',
      description: 'Návrh služeb podle reálných potřeb občanů a úředníků. Nezačínáme od systému, ale od člověka.',
      features: [
        'Výzkum uživatelských potřeb',
        'Design thinking workshopy',
        'Prototypování služeb',
        'Uživatelské testování'
      ],
      image: '/graphic-user.png'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Datová analytika',
      description: 'Měření výkonu, reporting a prediktivní modely pro rozhodování. Data jsou základem efektivní správy.',
      features: [
        'Datová strategie',
        'Business intelligence',
        'Vizualizace dat',
        'Prediktivní modelování'
      ],
      image: '/graphic-trust.png'
    },
    {
      icon: <FileText size={32} />,
      title: 'Veřejné zakázky',
      description: 'Efektivní zadávání: požadavky, hodnocení, rizika, kontrola. Pomáháme získat nejlepší dodavatele za férové ceny.',
      features: [
        'Příprava zadávacích podmínek',
        'Hodnoticí kritéria',
        'Kontrola procesů',
        'Dodavatelský management'
      ],
      image: '/graphic-cta.png'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Školení & změnový management',
      description: 'Vzdělávání týmů a vedení, rollout nových procesů. Úspěch závisí na lidech, kteří změnu provedou.',
      features: [
        'Školení digitalizace',
        'Workshopy pro týmy',
        'Koučing vedení',
        'Změnový management'
      ],
      image: '/graphic-probono.png'
    }
  ];

  return (
    <div className="bg-[#0B0C0F] min-h-screen">
      <SEO
        title="Služby"
        description="Digitální transformace, AI-first strategie, procesní audity a moderní nákup pro veřejnou správu."
        url="https://www.institutefektivity.cz/sluzby"
      />
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-7 lg:px-14">
          <div className="services-hero-content max-w-4xl">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Služby</span>
            <h1 className="ie-headline-1 text-[#F4F6F8] mb-6">
              Od strategie po provoz
            </h1>
            <p className="ie-headline-3 text-[#A9B0BC] mb-8">
              Rychle, prakticky a měřitelně.
            </p>
            <p className="ie-body text-[#A9B0BC] max-w-2xl">
              Nabízíme komplexní služby pro modernizaci veřejné správy. 
              Od počáteční analýzy až po úspěšnou implementaci—jsme váš partner 
              na celé cestě digitální transformace.
            </p>
          </div>
        </div>

        {/* Background gradient */}
        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Benefits Bar */}
      <section className="py-12 border-y border-[rgba(0,240,255,0.1)]">
        <div className="px-7 lg:px-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00F0FF]">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#F4F6F8]">Rychlé dodání</h4>
                <p className="text-sm text-[#A9B0BC]">Průměrně 6 týdnů</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00F0FF]">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#F4F6F8]">Bezpečnost</h4>
                <p className="text-sm text-[#A9B0BC]">Soulad s NIS2</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[#00F0FF]">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-[#F4F6F8]">Podpora 24/7</h4>
                <p className="text-sm text-[#A9B0BC]">Vždy k dispozici</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={servicesRef} className="py-24">
        <div className="px-7 lg:px-14">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`service-detail grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-[#00F0FF] mb-6">
                    {service.icon}
                  </div>
                  <h2 className="ie-headline-3 text-[#F4F6F8] mb-4">
                    {service.title}
                  </h2>
                  <p className="ie-body text-[#A9B0BC] mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#00F0FF] flex-shrink-0" />
                        <span className="text-[#F4F6F8]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="ie-link">
                    Mám zájem
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Image */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full max-w-md h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-[rgba(0,240,255,0.1)]">
        <div className="px-7 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="ie-headline-3 text-[#F4F6F8] mb-6">
              Připraveni začít?
            </h2>
            <p className="ie-body text-[#A9B0BC] mb-8">
              Kontaktujte nás pro nezávaznou konzultaci. Společně najdeme 
              nejlepší řešení pro vaši instituci.
            </p>
            <a href="/kontakt" className="ie-btn-primary inline-flex">
              Domluvit schůzku
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
