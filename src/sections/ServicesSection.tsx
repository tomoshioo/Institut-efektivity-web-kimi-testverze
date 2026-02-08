import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Cpu, Layers, Users, BarChart3, FileText, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 55%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="ie-card group hover:bg-[#0B0C0F]/80 transition-all duration-300"
    >
      <div className="text-[#00F0FF] mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#F4F6F8] mb-3 group-hover:text-[#00F0FF] transition-colors">
        {title}
      </h3>
      <p className="ie-body text-[#A9B0BC] mb-4">
        {description}
      </p>
      <a href="#" className="ie-link text-sm">
        Zjistit více
        <ArrowRight size={14} />
      </a>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'top 55%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Banner animation
      gsap.fromTo(bannerRef.current,
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bannerRef.current,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Layers size={32} />,
      title: 'Digitální transformace',
      description: 'Celková proměna služeb: procesy, data, kanály, změnový management.'
    },
    {
      icon: <Cpu size={32} />,
      title: 'AI & automatizace',
      description: 'Inteligentní agenti, klasifikace a predikce—s důrazem na bezpečnost a transparentnost.'
    },
    {
      icon: <Users size={32} />,
      title: 'Service design',
      description: 'Návrh služeb podle reálných potřeb občanů a úředníků.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Datová analytika',
      description: 'Měření výkonu, reporting a prediktivní modely pro rozhodování.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Veřejné zakázky',
      description: 'Efektivní zadávání: požadavky, hodnocení, rizika, kontrola.'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Školení & změnový management',
      description: 'Vzdělávání týmů a vedení, rollout nových procesů.'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="ie-section-flowing bg-[#0B0C0F] py-20 z-50"
      id="sluzby"
    >
      {/* Scan line effect */}
      <div className="absolute left-0 right-0 h-px bg-[#00F0FF] opacity-[0.08] animate-scan" />

      {/* Heading block */}
      <div 
        ref={headingRef}
        className="px-7 lg:px-14 mb-16"
      >
        <h2 className="ie-headline-2 text-[#F4F6F8] mb-4">
          Naše služby
        </h2>
        <p className="ie-body text-[#A9B0BC] max-w-xl">
          Od strategie po provoz—rychle, prakticky a měřitelně.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="px-7 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Highlight banner */}
      <div 
        ref={bannerRef}
        className="mx-7 lg:mx-14 border border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.03)] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-8">
          <span className="text-5xl lg:text-6xl font-bold text-[#00F0FF]">6</span>
          <div>
            <p className="text-lg text-[#F4F6F8] font-medium">týdnů</p>
            <p className="ie-body text-[#A9B0BC]">průměrná doba dodání analýzy</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-5xl lg:text-6xl font-bold text-[#00F0FF]">50+</span>
          <div>
            <p className="text-lg text-[#F4F6F8] font-medium">projektů</p>
            <p className="ie-body text-[#A9B0BC]">realizovaných pro veřejný sektor</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-5xl lg:text-6xl font-bold text-[#00F0FF]">12</span>
          <div>
            <p className="text-lg text-[#F4F6F8] font-medium">expertů</p>
            <p className="ie-body text-[#A9B0BC]">v našem týmu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
