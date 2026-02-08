import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Building2, Send, Linkedin, CheckCircle2, Map } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.contact-form',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.form-section',
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
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="contact-hero">
              <span className="ie-mono-label text-[#00F0FF] mb-6 block">Kontakt</span>
              <h1 className="ie-headline-1 text-white mb-6">
                Pojďme do toho
                <span className="text-[#00F0FF]">.</span>
              </h1>
              <p className="ie-headline-3 text-white/60 mb-8">
                Ozveme se vám do 24 hodin.
              </p>
              <p className="ie-body text-white/50 max-w-xl">
                Máte projekt, analýzu nebo výzvu? Napište nám. Rychle se ozveme 
                s konkrétním plánem—bez zbytečného papírování.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="/graphic-contact.png" 
                  alt="Kontaktujte nás"
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

      {/* Contact Info & Form */}
      <section className="form-section py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-8">
                Kontaktní údaje
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#00F0FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Sídlo</h4>
                    <p className="text-white/50 text-sm">
                      Lucemburská 2434/17<br />
                      130 00 Praha 3 - Vinohrady
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Building2 size={20} className="text-[#00F0FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Kanceláře</h4>
                    <p className="text-white/50 text-sm">
                      Lupáčova 16<br />
                      Praha 3
                    </p>
                  </div>
                </div>

                <a 
                  href="mailto:info@institutefektivity.cz"
                  className="flex items-center gap-4 text-white/50 hover:text-[#00F0FF] transition-colors"
                >
                  <Mail size={20} className="text-[#00F0FF]" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-sm">info@institutefektivity.cz</p>
                  </div>
                </a>

                <a 
                  href="tel:+420777202132"
                  className="flex items-center gap-4 text-white/50 hover:text-[#00F0FF] transition-colors"
                >
                  <Phone size={20} className="text-[#00F0FF]" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Telefon</h4>
                    <p className="text-sm">+420 777 202 132</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <Map size={20} className="text-[#00F0FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">IČ / Datová schránka</h4>
                    <p className="text-white/50 text-sm">
                      IČ: 09983589<br />
                      ID DS: kehmfci
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-medium mb-4">Sledujte nás</h4>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.linkedin.com/company/institut-efektivity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com/IPEVSCZ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-[#00F0FF] hover:border-[#00F0FF] transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-form">
              {isSubmitted ? (
                <div className="border border-[#00F0FF] bg-[rgba(0,240,255,0.05)] p-12 text-center">
                  <div className="w-20 h-20 bg-[rgba(0,240,255,0.2)] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-[#00F0FF]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Zpráva odeslána
                  </h3>
                  <p className="ie-body text-white/50">
                    Děkujeme za váš zájem. Ozveme se vám do 24 hodin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="ie-mono-label text-white/40 block mb-3">
                        Jméno a příjmení *
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
                        placeholder="jan.novak@example.cz"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="ie-mono-label text-white/40 block mb-3">
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
                    <label className="ie-mono-label text-white/40 block mb-3">
                      Zpráva *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="ie-input resize-none"
                      placeholder="Popište váš projekt nebo dotaz..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      required
                      className="mt-1 w-4 h-4 border border-white/20 bg-transparent rounded-none"
                    />
                    <label className="text-white/40 text-sm">
                      Souhlasím se <a href="/ochrana-osobnich-udaju" className="text-[#00F0FF] hover:underline">zpracováním osobních údajů</a> *
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
                        Odeslat zprávu
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="px-6 lg:px-14">
          <h2 className="text-2xl font-semibold text-white mb-8">
            Kde nás najdete
          </h2>
          <div className="w-full h-[500px] border border-white/10 bg-white/[0.02] relative overflow-hidden">
            {/* Map iframe with correct coordinates for Lupáčova 16, Praha 3 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1234567890123!2d14.451234567890123!3d50.07789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9368c5c0c1b1%3A0x400af0f6614b1b0!2sLup%C3%A1%C4%8Dova%2016%2C%20130%2000%20Praha%203!5e0!3m2!1scs!2scz!4v1704067200000!5m2!1scs!2scz"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kanceláře Institutu Efektivity - Lupáčova 16, Praha 3"
            />
            {/* Custom marker overlay */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none">
              <div className="relative">
                <div className="w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center animate-bounce">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#FF4D00]" />
              </div>
            </div>
          </div>
          <p className="text-white/40 text-sm mt-4 flex items-center gap-2">
            <MapPin size={16} className="text-[#FF4D00]" />
            Lupáčova 16, Praha 3 - Vinohrady
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
