import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { Shield, Scale, Eye, Lock, Ban, FileCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EthicsPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ethics-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.ethics-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.ethics-content',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      icon: <Shield size={24} />,
      title: 'Naše mise je efektivita',
      content: 'Hlavním měřítkem naší práce je přínos pro veřejnou správu a občana. Každé doporučení, analýza nebo strategie musí směřovat k prokazatelnému zvýšení efektivity, úspoře nákladů nebo zvýšení kvality veřejné služby.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Zero Bullshit & Integrita',
      content: 'Komunikujeme otevřeně, srozumitelně a zakládáme si na faktech. Nezakrýváme neúspěchy a nenabízíme řešení, která jsou pouze "kosmetická". Pokud projekt nedává smysl, řekneme to.'
    },
    {
      icon: <Eye size={24} />,
      title: 'User-Centric přístup',
      content: 'Ve všech našich projektech klademe důraz na konečného uživatele – občana i úředníka. Etika naší práce spočívá v tom, že technologie nesmí komplikovat život, ale sloužit lidem.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Ochrana dat a soukromí',
      content: 'Při práci s daty veřejného sektoru dodržujeme nejvyšší standardy bezpečnosti a etiky. Prosazujeme principy "Privacy by Design" a dbáme na to, aby digitalizace nikdy neohrozila práva občanů.'
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO
        title="Etický kodex"
        description="Zásady a pravidla chování Institutu Efektivity. Transparentnost, nezávislost a odpovědnost ve veřejné správě."
        url="https://www.institutefektivity.cz/eticky-kodex"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="ethics-hero max-w-4xl">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Etický kodex</span>
            <h1 className="ie-headline-1 text-white mb-6">
              Naše zásady
              <span className="text-[#00F0FF]">.</span>
            </h1>
            <p className="ie-headline-3 text-white/60 mb-8">
              Jak pracujeme a co nás řídí.
            </p>
            <p className="ie-body text-white/50 max-w-2xl">
              Etický kodex Institutu efektivity definuje základní principy, kterými se řídíme 
              ve všech našich aktivitách. Je to náš kompas v komplexním světě veřejné správy.
            </p>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(0, 240, 255, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Principles */}
      <section className="ethics-content py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-12 text-center">
              Základní principy
            </h2>

            <div className="space-y-8">
              {principles.map((principle) => (
                <div 
                  key={principle.title}
                  className="ethics-section p-8 border border-white/10 bg-white/[0.02]"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-white/50">
                        {principle.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neutrality Declaration */}
      <section className="ethics-section py-24">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 border border-[#00F0FF]/30 bg-[rgba(0,240,255,0.03)]">
              <div className="flex items-center gap-4 mb-6">
                <FileCheck size={28} className="text-[#00F0FF]" />
                <h2 className="text-2xl font-semibold text-white">
                  Deklarace neutrality a nezávislosti
                </h2>
              </div>
              
              <p className="text-white/60 text-lg mb-8 italic">
                „Jsme nezávislí architekti, nikoliv prodejci softwaru."
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-[#00B0BB] font-medium mb-2">1. Technologická agnosticita</h3>
                  <p className="text-white/50">
                    Institut efektivity neprosazuje konkrétní značky nebo konkrétní dodavatele. 
                    Naším cílem je definovat parametry a standardy, které zajistí nejlepší výsledek. 
                    Výběr konkrétního zhotovitele ponecháváme plně v kompetenci veřejné instituce 
                    skrze transparentní tržní mechanismy.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00B0BB] font-medium mb-2">2. Oddělení poradenství a realizace</h3>
                  <p className="text-white/50">
                    Jako konzultační entita se nepodílíme na přímém vývoji a dodávkách softwarových 
                    řešení, která sami projektujeme. Tím eliminujeme střet zájmů a zajišťujeme, 
                    že naše zadání je vždy objektivní a zaměřené na efektivitu, nikoliv na zisk 
                    z následného vývoje.
                  </p>
                </div>

                <div>
                  <h3 className="text-[#00B0BB] font-medium mb-2">3. Transparentní vztah k inovačnímu sektoru</h3>
                  <p className="text-white/50">
                    Podporujeme vstup startupů do veřejné sféry, ale činíme tak na principu meritokracie. 
                    Doporučujeme postupy, které otevírají trh všem kvalitním inovátorům, nikoliv 
                    konkrétním subjektům.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Corruption */}
      <section className="ethics-section py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Ban size={28} className="text-[#00F0FF]" />
              <h2 className="text-2xl font-semibold text-white">
                Prohlášení o čistotě a boji proti korupci
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 border border-white/10">
                <h3 className="text-white font-medium mb-2">Nulová tolerance</h3>
                <p className="text-white/50">
                  Institut efektivity netoleruje žádnou formu korupce, klientelismu nebo neetického 
                  lobbingu. Naše vztahy s partnery jsou založeny na profesionalitě a transparentnosti.
                </p>
              </div>

              <div className="p-6 border border-white/10">
                <h3 className="text-white font-medium mb-2">Transparentní financování</h3>
                <p className="text-white/50">
                  Jako zapsaný ústav podléháme transparentnímu účetnictví. Veškeré dary a příjmy 
                  z naší hospodářské činnosti využíváme k naplňování naší mise – tedy k modernizaci 
                  a zefektivnění státu a samosprávy.
                </p>
              </div>

              <div className="p-6 border border-white/10">
                <h3 className="text-white font-medium mb-2">Zamezení střetu zájmů</h3>
                <p className="text-white/50">
                  Členové našeho boardu a expertního týmu jsou povinni deklarovat jakýkoliv 
                  potenciální střet zájmů. Naše interní procesy jsou nastaveny tak, aby osobní 
                  zájmy nikdy nepřevážily nad zájmem institutu a veřejné správy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/40 text-sm">
              Tento etický kodex je závazný pro všechny členy a spolupracovníky Institutu efektivity. 
              Aktualizován v roce 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthicsPage;
