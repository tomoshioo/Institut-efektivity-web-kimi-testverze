import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { ArrowRight, Rocket, Users, Lightbulb, Target, CheckCircle2, Send, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GovTechPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    projectDescription: '',
    problem: '',
    solution: '',
    targetMarket: '',
    funding: '',
    whyGovTech: '',
    stage: '',
    focus: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.govtech-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.benefit-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.benefits-section',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.form-section',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.registration-form',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      icon: <Rocket size={28} />,
      title: 'Rychlý onboarding',
      description: 'Zkrácené procesy pro začlenění do veřejného sektoru. Pomůžeme vám navigovat byrokracii.'
    },
    {
      icon: <Users size={28} />,
      title: 'Mentoring od expertů',
      description: 'Přístup k našim partnerům a síti kontaktů včetně ředitelů úřadů a politiků.'
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Pilotní projekty',
      description: 'Možnost testovat vaše řešení v reálném prostředí s podporou státních institucí.'
    },
    {
      icon: <Target size={28} />,
      title: 'Strategické poradenství',
      description: 'Individuální konzultace pro optimalizaci produktu pro veřejný sektor.'
    }
  ];

  const criteria = [
    'Technologické řešení pro veřejný sektor',
    'Funkční produkt nebo MVP',
    'Tým s minimálně 2 členy',
    'Ambice růstu a škálování',
    'Otevřenost spolupráci s úřady'
  ];

  const stages = [
    { value: '', label: 'Vyberte stádium' },
    { value: 'idea', label: 'Máme nápad / koncept' },
    { value: 'research', label: 'Probíhá výzkum a vývoj' },
    { value: 'mvp', label: 'MVP je ve vývoji' },
    { value: 'mvp-ready', label: 'MVP je hotové, testujeme' },
    { value: 'early', label: 'Máme první zákazníky' },
    { value: 'growth', label: 'Rosteme a škálujeme' },
    { value: 'established', label: 'Jsme etablovaní na trhu' }
  ];

  const focuses = [
    { value: '', label: 'Vyberte zaměření' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
    { value: 'automation', label: 'Automatizace procesů' },
    { value: 'digital-services', label: 'Digitální služby pro občany' },
    { value: 'data-analytics', label: 'Data & Analytika' },
    { value: 'visualization', label: 'Vizualizace dat a mapy' },
    { value: 'security', label: 'Kyberbezpečnost' },
    { value: 'communication', label: 'Komunikační platformy' },
    { value: 'egov', label: 'E-Government řešení' },
    { value: 'smart-city', label: 'Smart City' },
    { value: 'other', label: 'Jiné / Kombinace' }
  ];

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO
        title="GovTech Accelerator"
        description="Akcelerátor pro GovTech startupy. Podpora inovací ve veřejném sektoru a propojení s úřady."
        url="https://www.institutefektivity.cz/govtech-accelerator"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="govtech-hero">
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">GovTech Accelerator</span>
              <h1 className="ie-headline-1 text-white mb-6">
                Propojujeme
                <span className="text-[#00F0FF]"> startupy</span> s veřejnou správou
              </h1>
              <p className="ie-headline-3 text-white/60 mb-8">
                Program pro technologické firmy, které chtějí proniknout do veřejného sektoru.
              </p>
              <p className="ie-body text-white/50 max-w-xl mb-8">
                GovTech Accelerator je naše iniciativa pro podporu inovativních technologií 
                ve veřejné správě. Pomáháme startupům překonat bariéry a úřadům najít 
                moderní řešení jejich výzev.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#registrace" className="ie-btn-primary inline-flex">
                  Přihlásit se
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <Link to="/kontakt" className="ie-btn-secondary">
                  Kontaktujte nás
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/graphic-govtech.png" 
                  alt="GovTech Accelerator"
                  className="w-full max-w-xl h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div 
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(255, 77, 0, 0.06) 0%, transparent 50%)'
          }}
        />
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="px-6 lg:px-14">
          <div className="text-center mb-16">
            <span className="ie-mono-label text-[#00F0FF] mb-4 block">Co nabízíme</span>
            <h2 className="ie-headline-2 text-white">
              Benefity pro účastníky
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="benefit-card p-6 border border-white/10 bg-white/[0.02] hover:border-[#00F0FF]/30 transition-all duration-300 group"
              >
                <div className="text-[#00F0FF] mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-24">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">Koho hledáme</span>
              <h2 className="ie-headline-3 text-white mb-6">
                Kritéria pro účastníky
              </h2>
              <p className="ie-body text-white/50 mb-8">
                Hledáme technologické firmy, které mají potenciál transformovat 
                veřejnou správu. Vaše řešení by mělo být inovativní, škálovatelné 
                a připravené na spolupráci s úřady.
              </p>
              <ul className="space-y-4">
                {criteria.map((criterion) => (
                  <li key={criterion} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-[#00F0FF] flex-shrink-0" />
                    <span className="text-white/70">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-white/10 bg-white/[0.02]">
              <h3 className="text-xl font-semibold text-white mb-6">
                Jak to funguje?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[#00B0BB]">01</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Přihláška</h4>
                    <p className="text-white/40 text-sm">Vyplňte registrační formulář níže.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[#00B0BB]">02</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Hodnocení</h4>
                    <p className="text-white/40 text-sm">Posoudíme váš projekt do 14 dnů.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[#00B0BB]">03</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Onboarding</h4>
                    <p className="text-white/40 text-sm">Začlenění do programu a přidělení mentora.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-[#00B0BB]">04</span>
                  <div>
                    <h4 className="text-white font-medium mb-1">Růst</h4>
                    <p className="text-white/40 text-sm">Spolupráce na pilotních projektech.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registrace" className="registration-form py-24 border-t border-white/5">
        <div className="px-6 lg:px-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="ie-mono-label text-[#00F0FF] mb-4 block">Registrace</span>
              <h2 className="ie-headline-3 text-white mb-4">
                Přihlaste se do programu
              </h2>
              <p className="text-white/50">
                Vyplňte formulář níže a my se vám ozveme do 14 dnů.
              </p>
            </div>

            {isSubmitted ? (
              <div className="border border-[#00F0FF] bg-[rgba(0,240,255,0.05)] p-12 text-center">
                <div className="w-20 h-20 bg-[rgba(0,240,255,0.2)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-[#00F0FF]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Přihláška odeslána
                </h3>
                <p className="text-white/50">
                  Děkujeme za váš zájem. Posoudíme vaši přihlášku a ozveme se vám do 14 dnů.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 border border-white/10 p-8 lg:p-12 bg-white/[0.02]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Název společnosti *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="ie-input"
                      placeholder="Název vaší firmy"
                    />
                  </div>
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Jméno kontaktní osoby *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="ie-input"
                      placeholder="Jan Novák"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="ie-input"
                      placeholder="jan@firma.cz"
                    />
                  </div>
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="ie-input"
                      placeholder="+420 777 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label className="ie-mono-label text-white/40 block mb-3">
                    Webové stránky
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="ie-input"
                    placeholder="https://www.vasafirma.cz"
                  />
                </div>

                {/* Project Description Section */}
                <div className="border-t border-white/10 pt-8">
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <Lightbulb size={20} className="text-[#00F0FF]" />
                    Popis projektu
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Stručný popis vašeho projektu (max. 500 znaků) *
                      </label>
                      <textarea
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows={3}
                        maxLength={500}
                        className="ie-input resize-none"
                        placeholder="Co děláte? Jaká je vaše technologie?..."
                      />
                    </div>

                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Jaký problém řešíte? *
                      </label>
                      <textarea
                        name="problem"
                        value={formData.problem}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="ie-input resize-none"
                        placeholder="Popište problém, který váš projekt řeší..."
                      />
                    </div>

                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Jaké je vaše řešení? *
                      </label>
                      <textarea
                        name="solution"
                        value={formData.solution}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="ie-input resize-none"
                        placeholder="Popište vaše řešení a jeho unikátnost..."
                      />
                    </div>

                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Cílový trh a zákazníci *
                      </label>
                      <textarea
                        name="targetMarket"
                        value={formData.targetMarket}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="ie-input resize-none"
                        placeholder="Kdo jsou vaši zákazníci? Jak velký je trh?..."
                      />
                    </div>

                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Financování
                      </label>
                      <textarea
                        name="funding"
                        value={formData.funding}
                        onChange={handleChange}
                        rows={2}
                        className="ie-input resize-none"
                        placeholder="Získali jste nějaké investice? Jaké?..."
                      />
                    </div>

                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Proč chcete být součástí GovTech akcelerátoru? *
                      </label>
                      <textarea
                        name="whyGovTech"
                        value={formData.whyGovTech}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="ie-input resize-none"
                        placeholder="Co očekáváte od akcelerátoru?..."
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Stádium projektu *
                    </label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleChange}
                      required
                      className="ie-input"
                    >
                      {stages.map((stage) => (
                        <option key={stage.value} value={stage.value}>
                          {stage.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Zaměření *
                    </label>
                    <select
                      name="focus"
                      value={formData.focus}
                      onChange={handleChange}
                      required
                      className="ie-input"
                    >
                      {focuses.map((focus) => (
                        <option key={focus.value} value={focus.value}>
                          {focus.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    required
                    className="mt-1 w-4 h-4 border border-white/20 bg-transparent rounded-none"
                  />
                  <label className="text-white/40 text-sm">
                    Souhlasím se <Link to="/ochrana-osobnich-udaju" className="text-[#00F0FF] hover:underline">zpracováním osobních údajů</Link> *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ie-btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#050505]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Odesílání...
                    </span>
                  ) : (
                    <>
                      Odeslat přihlášku
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovTechPage;
