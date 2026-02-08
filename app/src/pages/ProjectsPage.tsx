import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { ArrowRight, Database, MessageSquare, Map, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 'rpp',
      title: 'Projekt RPP',
      subtitle: 'Datová pitva státu',
      icon: <Database size={32} />,
      painPoint: 'Státní agendy jsou často "černou skříňkou". Nikdo přesně neví, kolik procesů je zbytných, kde vznikají duplicity a proč úředník tráví hodiny denně rutinou, kterou nikdo nečte.',
      magic: 'Využíváme pokročilou analýzu Registru práv a povinností (RPP). Vytváříme data-driven analýzu, která politikům a ředitelům úřadů poprvé ukáže reálnou mapu efektivity (nebo neefektivity) jejich agend. Je to první krok k radikálnímu zjednodušení veřejné instituce.',
      features: [
        'Analýza RPP dat',
        'Identifikace duplicit',
        'Mapa procesní efektivity',
        'Doporučení pro zjednodušení'
      ],
      color: 'cyan',
      image: '/graphic-rpp.png'
    },
    {
      id: 'arvo',
      title: 'Projekt ARVO',
      subtitle: 'Blueprint pro veřejnou komunikaci',
      icon: <MessageSquare size={32} />,
      painPoint: 'Komunikace úřadů a politiků s občanem zamrzla v minulém století. Je fragmentovaná, nesrozumitelná a pro občana frustrující. Úřad mluví jazykem zákonů, ne jazykem uživatele.',
      magic: 'ARVO mění architekturu veřejné komunikace. Designujeme nový komunikační standard, který je user-centric a data driven. Pomocí moderních nástrojů a změny paradigmatu v komunikaci vracíme do vztahu stát-občan srozumitelnost a důvěru.',
      features: [
        'User-centric design',
        'Data-driven přístup',
        'Nový komunikační standard',
        'Zvýšení důvěry občanů'
      ],
      color: 'cyan',
      image: '/graphic-arvo2.png'
    },
    {
      id: 'visionmap',
      title: 'Projekt VisionMap',
      subtitle: 'Vizualizace open dat',
      icon: <Map size={32} />,
      painPoint: 'Český stát má hory dat, ale jsou zamčená v tabulkách, kterým nikdo nerozumí. Chybí vizuální kontext – kde se co děje, koho a proč lidé kde volí, kde jsou zdroje a kde problémy.',
      magic: 'Živá vizualizace open dat nad mapovými podklady. Převádíme komplexní čísla do srozumitelných mapových vrstev v reálném čase. Pomáháme politickým stratégům a samosprávám činit informovaná rozhodnutí adresně na základě pohledu na mapu.',
      features: [
        'Mapové vizualizace',
        'Open data integrace',
        'Reálný čas',
        'Adresná rozhodnutí'
      ],
      color: 'cyan',
      image: '/graphic-mapgeo.png'
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO
        title="Projekty"
        description="Vlajkové projekty Institutu Efektivity: datová pitva státu, blueprint pro veřejnou komunikaci, vizualizace open dat."
        url="https://www.institutefektivity.cz/projekty"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="projects-hero max-w-4xl">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Vlajkové projekty</span>
            <h1 className="ie-headline-1 text-white mb-6">
              Stavíme budoucnost
              <span className="text-[#00F0FF]"> veřejné správy</span>
            </h1>
            <p className="ie-headline-3 text-white/60 mb-8">
              Konkrétní projekty s měřitelným dopadem.
            </p>
            <p className="ie-body text-white/50 max-w-2xl">
              Naše vlajkové projekty demonstrují, jak může vypadat moderní veřejná správa. 
              Od datové analýzy přes komunikaci až po vizualizaci—každý projekt řeší reálný problém.
            </p>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Projects Grid */}
      <section className="projects-grid py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6 text-[#00F0FF]">
                    {project.icon}
                  </div>
                  <span className="ie-mono-label text-white/40 mb-2 block">{project.subtitle}</span>
                  <h2 className="ie-headline-3 text-white mb-6">
                    {project.title}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-[#00B0BB] mb-2">Pain Point</h4>
                      <p className="text-white/50">{project.painPoint}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#00F0FF] mb-2">The Magic</h4>
                      <p className="text-white/50">{project.magic}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#00F0FF] flex-shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/kontakt" className="ie-link">
                    Mám zájem o spolupráci
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Visual */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div 
                    className="relative w-full aspect-square max-w-md border border-white/10 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Gradient overlay for text readability */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent`} />
                    {/* Color tint overlay */}
                    <div className={`absolute inset-0 ${project.color === 'orange' ? 'bg-[#FF4D00]/10' : 'bg-[#00F0FF]/10'} mix-blend-overlay`} />
                    {/* Project ID badge */}
                    <div className="absolute bottom-6 left-6">
                      <span className={`text-6xl font-bold ${project.color === 'orange' ? 'text-[#FF4D00]/40' : 'text-[#00F0FF]/40'}`}>
                        {project.id.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="ie-headline-3 text-white mb-6">
              Máte podobný projekt?
            </h2>
            <p className="ie-body text-white/50 mb-8">
              Pomůžeme vám navrhnout a realizovat transformační projekty 
              pro vaši instituci.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="ie-btn-primary">
                Domluvit schůzku
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/consulting" className="ie-btn-secondary">
                Naše služby
              </Link>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 77, 0, 0.05) 0%, transparent 60%)'
          }}
        />
      </section>
    </div>
  );
};

export default ProjectsPage;
