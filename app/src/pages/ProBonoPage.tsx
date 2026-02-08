import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { ArrowRight, Download, BookOpen, Lightbulb, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProBonoPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.probono-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.pillar-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pillars-section',
            start: 'top 80%',
          }
        }
      );

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
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <BookOpen size={28} />,
      title: 'Knowledge Hub & Open Source',
      description: 'Naše expertíza je veřejným statkem. Pravidelně publikujeme materiály, které slouží jako "majáky" pro trh i úředníky.',
      items: [
        'Whitepapery a studie',
        'Rešerše řešení a best practices',
        'Data a analýzy'
      ]
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Právní a strategická inkubace',
      description: 'Pomáháme projektům, které digitalizují Česko "zezdola". Pokud máte projekt, který supluje nefunkční státní službu, dáme vám zázemí.',
      items: [
        'Legislativní hacking',
        'Technologická oponentura',
        'Strategické poradenství'
      ]
    },
    {
      icon: <ExternalLink size={28} />,
      title: 'Legislativa ve veřejném zájmu',
      description: 'Aktivně vstupujeme do legislativního procesu tam, kde hrozí, že špatný zákon zabetonuje neefektivitu na další dekádu.',
      items: [
        'Připomínkování legislativy',
        'Advocacy',
        'Ochrana před nesmyslnými regulacemi'
      ]
    }
  ];

  const publications = [
    {
      type: 'Studie',
      title: 'Analýza pražského nemovitostního trhu',
      description: 'Hloubková analýza vývoje cen a dostupnosti bydlení v Praze s doporučeními pro městskou politiku.',
      file: '/studie-prazsky-nemovitostni-trh.pdf'
    },
    {
      type: 'Whitepaper',
      title: 'Architektura poskytování služeb města v digitálním prostředí',
      description: 'Blueprint pro moderní digitální služby města zaměřený na user-centric přístup.',
      file: '/architektura-sluzeb-mesta.pdf'
    },
    {
      type: 'Analýza',
      title: 'Podpora inovačního businessu ze strany města',
      description: 'Analýza nástrojů a přístupů, jak města mohou efektivně podporovat inovační ekosystém.',
      file: '/podpora-inovacniho-businessu.pdf'
    },
    {
      type: 'Policy Paper',
      title: 'Podpora startupů v ČR – Komplexní návrh',
      description: 'Komplexní návrh opatření pro zlepšení podnikatelského prostředí pro startupy v České republice.',
      file: '/podpora-startupu-cr.pdf'
    }
  ];

  const criteria = [
    'Vysoký společenský dopad',
    'Škálovatelnost',
    'Nekomerční povaha',
    'Absence zdrojů'
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO
        title="Pro Bono"
        description="Knowledge Hub, legislativní inkubace a advokacie ve veřejném zájmu. Pro bono projekty Institutu Efektivity."
        url="https://www.institutefektivity.cz/pro-bono"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="probono-hero">
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">Pro Bono</span>
              <h1 className="ie-headline-1 text-white mb-6">
                Know-how jako
                <span className="text-[#00F0FF]"> veřejný zájem</span>
              </h1>
              <p className="ie-headline-3 text-white/60 mb-8">
                Strategická investice do kultivace trhu.
              </p>
              <p className="ie-body text-white/50 max-w-xl">
                V Institutu efektivity věříme, že moderní a efektivní stát je základním kamenem prosperity, 
                ze které těží všichni. Proto nevnímáme naše know-how jako obchodní tajemství, 
                ale jako nástroj pro celospolečenskou změnu.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/graphic-probono.png" 
                  alt="Pro Bono aktivity"
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
            background: 'radial-gradient(ellipse at 70% 30%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Philosophy */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="px-6 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Filozofie</span>
            <h2 className="ie-headline-3 text-white mb-6">
              Proč to děláme?
            </h2>
            <p className="ie-body text-white/50">
              Náš Pro Bono program není o "dělání dobra" pro dobrý pocit. Je to strategická investice 
              do kultivace trhu a veřejného prostoru. Vyčleňujeme část našich kapacit pro projekty, 
              které mají potenciál systémové změny, ale nemají komerční zdroje na špičkové konzultace.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars-section py-24">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00B0BB] mb-4 block">Pilíře</span>
            <h2 className="ie-headline-2 text-white">
              Naše Pro Bono aktivity
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="pillar-card p-8 border border-white/10 bg-white/[0.02]"
              >
                <div className="text-[#00F0FF] mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/50 mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/40">
                      <span className="w-1 h-1 bg-[#00F0FF] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="publications-section py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="ie-mono-label text-[#00F0FF] mb-4 block">Publikace</span>
              <h2 className="ie-headline-3 text-white">
                Ke stažení
              </h2>
            </div>
            <p className="text-white/40 mt-4 lg:mt-0 max-w-md">
              Všechny publikace jsou volně ke stažení. Šiřte je dál—čím více lidí je přečte, tím lépe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub) => (
              <div 
                key={pub.title}
                className="publication-card p-6 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="ie-mono-label text-[#00B0BB]">{pub.type}</span>
                  <a 
                    href={pub.file}
                    download
                    className="flex items-center gap-2 text-[#00F0FF] hover:text-[#00B0BB] transition-colors text-sm"
                  >
                    <Download size={16} />
                    PDF
                  </a>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-white/40 text-sm">
                  {pub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="py-24">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="ie-mono-label text-[#00B0BB] mb-6 block">Koho podporujeme</span>
              <h2 className="ie-headline-3 text-white mb-6">
                Kritéria výběru
              </h2>
              <p className="ie-body text-white/50 mb-8">
                Nejsme nafukovací, proto si projekty do Pro Bono programu pečlivě vybíráme. 
                Hledáme Game Changers.
              </p>
              <ul className="space-y-4">
                {criteria.map((criterion, index) => (
                  <li key={criterion} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-[#00F0FF]">0{index + 1}</span>
                    <span className="text-white/70">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl font-semibold text-white mb-4">
                Jak to funguje?
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#00F0FF] font-medium mb-1">Konzultace</h4>
                  <p className="text-white/40 text-sm">Jednorázové strategické poradenství pro nasměrování projektu.</p>
                </div>
                <div>
                  <h4 className="text-[#00F0FF] font-medium mb-1">Patronát</h4>
                  <p className="text-white/40 text-sm">Dlouhodobá záštita nad projektem s mentorem z našich Partnerů.</p>
                </div>
                <div>
                  <h4 className="text-[#00F0FF] font-medium mb-1">Shadowing</h4>
                  <p className="text-white/40 text-sm">Umožňujeme studentům a mladým talentům nahlédnout pod pokličku.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="ie-headline-3 text-white mb-6">
              Máte projekt, který bychom mohli podpořit?
            </h2>
            <p className="ie-body text-white/50 mb-8">
              Ozvěte se nám. Společně zjistíme, jestli je váš projekt vhodný pro náš Pro Bono program.
            </p>
            <Link to="/kontakt" className="ie-btn-primary inline-flex">
              Napsat nám
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

export default ProBonoPage;
