import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TeamPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.team-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const leadership = [
    {
      name: 'Tomáš Kalivoda',
      role: 'CEO & Founding Partner',
      description: 'Statutární ředitel institutu. Hlavní šéf, nese právní odpovědnost.',
      expertise: ['Strategie', 'Řízení', 'Vztahy s klienty'],
      linkedin: '#',
      email: 'tomas@institutefektivity.cz',
      initials: 'TK'
    },
    {
      name: 'Jaroslav Dolanský',
      role: 'CTO & Founding Partner',
      description: 'Šéf přes technologie a inovace. Přináší nejnovější technologická řešení.',
      expertise: ['AI/ML', 'Digitalizace', 'Architektura'],
      linkedin: '#',
      email: 'jaroslav@institutefektivity.cz',
      initials: 'JD'
    },
    {
      name: 'Adam Štěpánek',
      role: 'CSO & Partner',
      description: 'Šéf přes strategii a obchod. Stará se o růst a nové příležitosti.',
      expertise: ['Business development', 'Strategie', 'Sales'],
      linkedin: '#',
      email: 'adam@institutefektivity.cz',
      initials: 'AŠ'
    },
    {
      name: 'Matěj Grodl',
      role: 'Legal Partner',
      description: 'Právní garant, strategický poradce a šéf pro bono aktivit.',
      expertise: ['Právo', 'Compliance', 'Think tank'],
      linkedin: '#',
      email: 'matej@institutefektivity.cz',
      initials: 'MG'
    }
  ];

  const experts = [
    {
      name: 'Petra Nováková',
      role: 'Service Design Lead',
      description: 'Expertka na user-centric design a výzkum uživatelských potřeb.',
      expertise: ['UX Research', 'Service Design', 'Workshopy'],
      initials: 'PN'
    },
    {
      name: 'Martin Svoboda',
      role: 'Data Analyst',
      description: 'Specialista na datovou analytiku a prediktivní modelování.',
      expertise: ['Data Science', 'BI', 'Vizualizace'],
      initials: 'MS'
    },
    {
      name: 'Lucie Kovářová',
      role: 'Project Manager',
      description: 'Zkušená projektová manažerka s praxí ve veřejném sektoru.',
      expertise: ['Agile', 'Řízení projektů', 'Změnový management'],
      initials: 'LK'
    },
    {
      name: 'David Procházka',
      role: 'AI Specialist',
      description: 'Expert na implementaci AI řešení ve veřejné správě.',
      expertise: ['NLP', 'Automatizace', 'Chatboti'],
      initials: 'DP'
    },
    {
      name: 'Anna Malá',
      role: 'Public Procurement Expert',
      description: 'Specialistka na veřejné zakázky a dodavatelský management.',
      expertise: ['VZ', 'Tendry', 'Compliance'],
      initials: 'AM'
    },
    {
      name: 'Ondřej Černý',
      role: 'Full-stack Developer',
      description: 'Vývojář specializující se na digitální služby pro občany.',
      expertise: ['React', 'Node.js', 'Cloud'],
      initials: 'OČ'
    },
    {
      name: 'Kateřina Veselá',
      role: 'Communications Lead',
      description: 'Expertka na komunikaci a vztahy s veřejností.',
      expertise: ['PR', 'Copywriting', 'Social media'],
      initials: 'KV'
    },
    {
      name: 'Jakub Horák',
      role: 'Process Analyst',
      description: 'Analytik zaměřený na optimalizaci procesů veřejné správy.',
      expertise: ['BPM', 'Procesní analýza', 'Lean'],
      initials: 'JH'
    }
  ];

  return (
    <div className="bg-[#0B0C0F] min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-7 lg:px-14">
          <div className="team-hero-content max-w-4xl">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Tým</span>
            <h1 className="ie-headline-1 text-[#F4F6F8] mb-6">
              Lidé za institutem
            </h1>
            <p className="ie-headline-3 text-[#A9B0BC] mb-8">
              Tým expertů s praxí ve státních institucích, samosprávách a technologiích.
            </p>
            <p className="ie-body text-[#A9B0BC] max-w-2xl">
              Máme za sebou desítky projektů—od analýzy po vývoj a změnový management. 
              Spojuje nás vize efektivnější veřejné správy.
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

      {/* Leadership Section */}
      <section ref={teamRef} className="py-24 border-y border-[rgba(0,240,255,0.1)]">
        <div className="px-7 lg:px-14">
          <span className="ie-mono-label text-[#00F0FF] mb-8 block">Vedení</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {leadership.map((person) => (
              <div 
                key={person.name}
                className="team-card group p-8 border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.02)] hover:border-[#00F0FF] hover:bg-[rgba(0,240,255,0.05)] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-20 h-20 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00F0FF] text-xl font-bold">
                    {person.initials}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#F4F6F8] group-hover:text-[#00F0FF] transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-[#00F0FF] text-sm font-medium mb-3">
                      {person.role}
                    </p>
                    <p className="text-[#A9B0BC] text-sm mb-4">
                      {person.description}
                    </p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {person.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs bg-[rgba(0,240,255,0.1)] text-[#00F0FF]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a 
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A9B0BC] hover:text-[#00F0FF] transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={`mailto:${person.email}`}
                        className="text-[#A9B0BC] hover:text-[#00F0FF] transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experts Section */}
          <span className="ie-mono-label text-[#00F0FF] mb-8 block">Expertní tým</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((person) => (
              <div 
                key={person.name}
                className="team-card group p-6 border border-[rgba(0,240,255,0.15)] bg-[rgba(0,240,255,0.02)] hover:border-[#00F0FF] hover:bg-[rgba(0,240,255,0.05)] transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00F0FF] text-lg font-bold mb-4">
                  {person.initials}
                </div>
                
                <h3 className="text-lg font-semibold text-[#F4F6F8] group-hover:text-[#00F0FF] transition-colors mb-1">
                  {person.name}
                </h3>
                <p className="text-[#00F0FF] text-sm mb-3">
                  {person.role}
                </p>
                <p className="text-[#A9B0BC] text-sm mb-4">
                  {person.description}
                </p>
                
                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1">
                  {person.expertise.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-0.5 text-xs bg-[rgba(0,240,255,0.1)] text-[#00F0FF]"
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

      {/* Join Us Section */}
      <section className="py-24">
        <div className="px-7 lg:px-14">
          <div className="max-w-3xl mx-auto text-center">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Kariéra</span>
            <h2 className="ie-headline-3 text-[#F4F6F8] mb-6">
              Chcete se přidat?
            </h2>
            <p className="ie-body text-[#A9B0BC] mb-8">
              Hledáme talentované lidi, kteří chtějí měnit veřejnou správu k lepšímu. 
              Pokud vás naše mise oslovila, napište nám.
            </p>
            <a href="/kontakt" className="ie-btn-primary inline-flex">
              Napsat nám
              <ArrowRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
