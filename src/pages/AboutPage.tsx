import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { Linkedin, Mail, ArrowRight, Target, Lightbulb, TrendingUp, Users, Shield, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.partner-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.partners-section',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.expert-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.experts-section',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.value-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const partners = [
    {
      name: 'Tomáš Kalivoda',
      role: 'CEO & Founding Partner',
      core: 'Strategické vedení & Visionary-in-chief',
      description: 'Tomáš stojí u zrodu institutu od jeho založení a je hlavním motorem jeho transformace v agilní konzultační entitu. Díky unikátnímu mixu zkušeností z nitra veřejných institucí a dynamického světa startupů dokáže překládat komplexní politické vize do exekutivních plánů.',
      initials: 'TK',
      linkedin: '#',
      email: 'tomas@institutefektivity.cz'
    },
    {
      name: 'Jaroslav Dolanský',
      role: 'CTO & Founding Partner',
      core: 'Technologie, Inovace & System Architecture',
      description: 'Mozek našich technologických řešení. Má hluboký vhled do struktury státních agend a IT architektury ministerstev, kde dříve působil jako konzultant. V Institutu je garantem technologické proveditelnosti a správného nastavení digitálních procesů.',
      initials: 'JD',
      linkedin: '#',
      email: 'jaroslav@institutefektivity.cz'
    },
    {
      name: 'Adam Štěpánek',
      role: 'CSO & Partner',
      core: 'Strategie, Obchod & Modern Procurement',
      description: 'Adam přináší do veřejného sektoru svěží pohled na to, jak má stát nakupovat inovace. Čerpá ze své praxe samosprávy a zaměřuje se na prosazování progresivních přístupů v procurementu. Jeho vize je jasná: inspirovat se dynamikou startupů a otevřít veřejný sektor kvalitním řešením.',
      initials: 'AŠ',
      linkedin: '#',
      email: 'adam@institutefektivity.cz'
    },
    {
      name: 'Matěj Grodl',
      role: 'Legal Partner',
      core: 'Právo, Strategické poradenství & Pro Bono',
      description: 'Právní garant, který se nebojí inovací. Matěj je advokát se schopností vidět v paragrafech příležitosti pro zjednodušení, nikoliv překážky. Jako šéf našich pro bono aktivit a think-tanku dohlíží na to, aby naše studie a legislativní doporučení měly pevný právní základ.',
      initials: 'MG',
      linkedin: '#',
      email: 'matej@institutefektivity.cz'
    }
  ];

  const experts = [
    { name: 'Petra Nováková', role: 'Service Design Lead', expertise: ['UX Research', 'Service Design'], initials: 'PN' },
    { name: 'Martin Svoboda', role: 'Data Analyst', expertise: ['Data Science', 'BI'], initials: 'MS' },
    { name: 'Lucie Kovářová', role: 'Project Manager', expertise: ['Agile', 'Řízení projektů'], initials: 'LK' },
    { name: 'David Procházka', role: 'AI Specialist', expertise: ['NLP', 'Automatizace'], initials: 'DP' },
    { name: 'Anna Malá', role: 'Public Procurement Expert', expertise: ['VZ', 'Tendry'], initials: 'AM' },
    { name: 'Ondřej Černý', role: 'Full-stack Developer', expertise: ['React', 'Cloud'], initials: 'OČ' },
    { name: 'Kateřina Veselá', role: 'Communications Lead', expertise: ['PR', 'Copywriting'], initials: 'KV' },
    { name: 'Jakub Horák', role: 'Process Analyst', expertise: ['BPM', 'Lean'], initials: 'JH' },
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: 'Zero bullshit & maximální efektivita',
      description: 'Neuznáváme vatu. Každé naše doporučení musí vést k měřitelnému výsledku.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Data-driven rozhodování',
      description: 'Neřídíme se dojmy, ale důkazy. Data jsou pro nás jediným objektivním měřítkem.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Builders mindset',
      description: 'Přemýšlíme jako stavitelé. Naše výstupy jsou praktické návody, ne teoretické slohy.'
    },
    {
      icon: <Users size={24} />,
      title: 'User-centric policy',
      description: 'Efektivita, která ignoruje uživatele, je drahá chyba. Každý proces začíná u člověka.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Technologická odvaha',
      description: 'Nebojíme se opouštět zastaralé modely. Tlačíme na adopci AI a moderních technologií.'
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO
        title="O nás"
        description="Poznejte tým Institutu Efektivity: experti s praxí z ministerstev, radnic i technologických firem. Transformujeme veřejnou správu."
        url="https://www.institutefektivity.cz/o-nas"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-hero">
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">O nás</span>
              <h1 className="ie-headline-1 text-white mb-6">
                Měníme paradigma
                <span className="text-[#00F0FF]"> veřejné správy</span>
              </h1>
              <p className="ie-headline-3 text-white/60 mb-8">
                Jsme full-stack entita. Think-tank, consulting, agency.
              </p>
              <p className="ie-body text-white/50 max-w-lg mb-8">
                Institut pro efektivní veřejnou správu vznikl v roce 2021 s jedinou misí: vnést do státní správy 
                efektivitu. Dnes, v éře roku 2026, přicházíme v nové sestavě a s novým DNA. 
                Svět se změnil a my s ním.
              </p>
              <div className="flex items-center gap-4">
                <Sparkles size={20} className="text-[#00F0FF]" />
                <span className="text-white/40 text-sm">Založeno 2021</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/graphic-vision.png" 
                  alt="O Institutu Efektivity"
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

      {/* DNA Section */}
      <section className="values-section py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Naše DNA</span>
            <h2 className="ie-headline-2 text-white">
              Hodnoty, které nás definují
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div 
                key={value.title}
                className="value-card p-8 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/30 transition-all duration-300 group"
              >
                <div className="text-[#00F0FF] mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="ie-mono-label text-[#00B0BB] mb-6 block">Náš příběh</span>
              <h2 className="ie-headline-3 text-white mb-6">
                Od myšlenky k realitě
              </h2>
              <div className="space-y-6 text-white/50">
                <p>
                  Institut pro efektivní veřejnou správu vznikl v roce 2021 z přesvědčení, že veřejná správa 
                  v České republice může fungovat lépe. Viděli jsme příliš projektů, 
                  které se zasekly v byrokracii, příliš systémů, které nefungovaly 
                  pro lidi, a příliš příležitostí, které zůstaly nevyužité.
                </p>
                <p>
                  Rozhodli jsme se to změnit. Sestavili jsme tým expertů s praxí 
                  ve státních institucích, samosprávách i technologických firmách. 
                  Lidi, kteří rozumějí veřejné správě zevnitř i zvenčí.
                </p>
                <p>
                  Dnes pomáháme úřadům digitalizovat služby, zavádět AI a přemýšlet 
                  o občanech jako o zákaznících. A to vše s důrazem na praktičnost, 
                  rychlost a měřitelné výsledky.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src="/graphic-user.png" 
                alt="Náš příběh"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Partneři & Board</span>
            <h2 className="ie-headline-2 text-white">
              Vedení institutu
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="partner-card p-8 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#00F0FF]/20 to-[#00B0BB]/20 border border-[#00F0FF]/30 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                    <img src="/silhouette-person.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-[#00B0BB] text-sm font-medium mb-2">
                      {partner.role}
                    </p>
                    <p className="text-[#00F0FF] text-xs mb-4">
                      {partner.core}
                    </p>
                    <p className="text-white/50 text-sm mb-4">
                      {partner.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={partner.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-[#00F0FF] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={`mailto:${partner.email}`}
                        className="text-white/40 hover:text-[#00F0FF] transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="experts-section py-24">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Expertní tým</span>
            <h2 className="ie-headline-3 text-white">
              Specialisté ve svém oboru
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert) => (
              <div 
                key={expert.name}
                className="expert-card p-6 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform overflow-hidden">
                  <img src="/silhouette-person.png" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00F0FF] transition-colors">
                  {expert.name}
                </h3>
                <p className="text-[#00B0BB] text-sm mb-3">
                  {expert.role}
                </p>
                <div className="flex flex-wrap gap-1">
                  {expert.expertise.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-0.5 text-xs bg-white/5 text-white/50"
                    >
                      {skill}
                    </span>
                  ))}
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
              Chcete se přidat?
            </h2>
            <p className="ie-body text-white/50 mb-8">
              Hledáme talentované lidi, kteří chtějí měnit veřejnou správu k lepšímu. 
              Pokud vás naše mise oslovila, napište nám.
            </p>
            <Link to="/kontakt" className="ie-btn-primary group">
              Napsat nám
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default AboutPage;
