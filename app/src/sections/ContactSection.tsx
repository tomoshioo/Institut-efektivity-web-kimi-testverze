import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Building2, Send, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(formRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'top 55%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Details animation
      gsap.fromTo(detailsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
            end: 'top 55%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      ref={sectionRef} 
      className="ie-section-flowing bg-[#0B0C0F] pt-20 z-[90]"
      id="kontakt"
    >
      <div className="px-7 lg:px-14">
        <h2 className="ie-headline-2 text-[#F4F6F8] mb-16">
          Kontakt
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-20">
          {/* Form column */}
          <div ref={formRef}>
            {isSubmitted ? (
              <div className="border border-[#00F0FF] bg-[rgba(0,240,255,0.05)] p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#00F0FF]/20 flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-[#00F0FF]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#F4F6F8] mb-3">
                  Zpráva odeslána
                </h3>
                <p className="ie-body text-[#A9B0BC]">
                  Děkujeme za váš zájem. Ozveme se vám do 24 hodin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="ie-mono-label text-[#A9B0BC] block mb-2">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="ie-input"
                    placeholder="Jan Novák"
                  />
                </div>

                <div>
                  <label className="ie-mono-label text-[#A9B0BC] block mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="ie-input"
                    placeholder="jan.novak@example.cz"
                  />
                </div>

                <div>
                  <label className="ie-mono-label text-[#A9B0BC] block mb-2">
                    Organizace
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="ie-input"
                    placeholder="Název instituce nebo firmy"
                  />
                </div>

                <div>
                  <label className="ie-mono-label text-[#A9B0BC] block mb-2">
                    Zpráva
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="ie-input resize-none"
                    placeholder="Popište váš projekt nebo dotaz..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ie-btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0B0C0F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Odesílání...
                    </span>
                  ) : (
                    <>
                      Odeslat zprávu
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Details column */}
          <div ref={detailsRef} className="space-y-10">
            <div>
              <h3 className="ie-mono-label text-[#00F0FF] mb-6">
                Kontaktní údaje
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <Mail size={20} className="text-[#00F0FF]" />
                  <a href="mailto:hello@institutefektivity.cz" className="text-[#F4F6F8] hover:text-[#00F0FF] transition-colors">
                    hello@institutefektivity.cz
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-[#00F0FF]" />
                  <a href="tel:+420777888999" className="text-[#F4F6F8] hover:text-[#00F0FF] transition-colors">
                    +420 777 888 999
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <MapPin size={20} className="text-[#00F0FF]" />
                  <span className="text-[#F4F6F8]">
                    Praha, Česká republika
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Building2 size={20} className="text-[#00F0FF]" />
                  <span className="text-[#A9B0BC]">
                    IČ: 12345678
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="ie-mono-label text-[#00F0FF] mb-6">
                Sledujte nás
              </h3>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0B0C0F] transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-[rgba(0,240,255,0.3)] flex items-center justify-center text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0B0C0F] transition-all duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.03)] p-6">
              <h4 className="text-lg font-semibold text-[#F4F6F8] mb-2">
                Rychlá odpověď garantována
              </h4>
              <p className="ie-body text-[#A9B0BC]">
                Na vaši zprávu odpovíme do 24 hodin. Pro urgentní záležitosti nás kontaktujte přímo telefonicky.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer 
        ref={footerRef}
        className="border-t border-[rgba(244,246,248,0.1)] py-8 px-7 lg:px-14"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#A9B0BC]">
            © {new Date().getFullYear()} Institut Efektivity. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[#A9B0BC] hover:text-[#00F0FF] transition-colors">
              Ochrana osobních údajů
            </a>
            <a href="#" className="text-sm text-[#A9B0BC] hover:text-[#00F0FF] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
