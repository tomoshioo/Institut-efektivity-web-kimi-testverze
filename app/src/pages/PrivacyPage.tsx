import { useEffect } from 'react';
import gsap from 'gsap';

const PrivacyPage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.privacy-hero',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.privacy-section',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.privacy-content',
            start: 'top 80%',
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="px-6 lg:px-14">
          <div className="privacy-hero max-w-4xl">
            <span className="ie-mono-label text-[#00F0FF] mb-6 block">Ochrana osobních údajů</span>
            <h1 className="ie-headline-1 text-white mb-6">
              GDPR & Soukromí
              <span className="text-[#00F0FF]">.</span>
            </h1>
            <p className="ie-headline-3 text-white/60 mb-8">
              Vaše data jsou u nás v bezpečí.
            </p>
            <p className="ie-body text-white/50 max-w-2xl">
              Tento dokument popisuje, jak Institut efektivity zpracovává osobní údaje 
              v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
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

      {/* Content */}
      <section className="privacy-content py-24 border-y border-white/5">
        <div className="px-6 lg:px-14">
          <div className="max-w-4xl mx-auto">
            
            {/* Section 1 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                1. Správce osobních údajů
              </h2>
              <div className="text-white/50 space-y-2">
                <p><strong className="text-white/70">Název:</strong> Institut pro efektivní veřejnou správu z.ú.</p>
                <p><strong className="text-white/70">Sídlo:</strong> Lucemburská 2434/17, 130 00 Praha 3 - Vinohrady</p>
                <p><strong className="text-white/70">IČ:</strong> 09983589</p>
                <p><strong className="text-white/70">Kontakt:</strong> info@institutefektivity.cz</p>
                <p><strong className="text-white/70">Telefon:</strong> +420 777 202 132</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                2. Jaké osobní údaje zpracováváme
              </h2>
              <p className="text-white/50 mb-4">
                V závislosti na účelu zpracování můžeme zpracovávat následující kategorie osobních údajů:
              </p>
              <ul className="list-disc list-inside text-white/50 space-y-2 ml-4">
                <li><strong className="text-white/70">Identifikační údaje:</strong> jméno, příjmení</li>
                <li><strong className="text-white/70">Kontaktní údaje:</strong> e-mailová adresa, telefonní číslo</li>
                <li><strong className="text-white/70">Pracovní údaje:</strong> název organizace, pracovní pozice</li>
                <li><strong className="text-white/70">Obsah komunikace:</strong> zprávy zaslané prostřednictvím kontaktního formuláře</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                3. Účely zpracování osobních údajů
              </h2>
              <p className="text-white/50 mb-4">
                Vaše osobní údaje zpracováváme pro následující účely:
              </p>
              <div className="space-y-4">
                <div className="p-4 border border-white/10">
                  <h3 className="text-[#00F0FF] font-medium mb-2">3.1 Komunikace a odpovědi na dotazy</h3>
                  <p className="text-white/50 text-sm">
                    Zpracování je nezbytné pro jednání o Vaší žádosti a poskytnutí odpovědi. 
                    Právním základem je Váš souhlas (čl. 6 odst. 1 písm. a) GDPR).
                  </p>
                </div>
                <div className="p-4 border border-white/10">
                  <h3 className="text-[#00F0FF] font-medium mb-2">3.2 Marketingová komunikace</h3>
                  <p className="text-white/50 text-sm">
                    Zasílání informací o našich službách, publikacích a akcích. 
                    Právním základem je Váš souhlas, který můžete kdykoliv odvolat.
                  </p>
                </div>
                <div className="p-4 border border-white/10">
                  <h3 className="text-[#00F0FF] font-medium mb-2">3.3 Plnění zákonných povinností</h3>
                  <p className="text-white/50 text-sm">
                    Vedení účetnictví, daňová evidence a další povinnosti vyplývající z právních předpisů. 
                    Právním základem je plnění zákonné povinnosti (čl. 6 odst. 1 písm. c) GDPR).
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                4. Doba uchování osobních údajů
              </h2>
              <p className="text-white/50 mb-4">
                Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro účely zpracování:
              </p>
              <ul className="list-disc list-inside text-white/50 space-y-2 ml-4">
                <li>Komunikace: 3 roky od poslední interakce</li>
                <li>Marketing: do odvolání souhlasu</li>
                <li>Účetní doklady: 10 let dle zákona o účetnictví</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Příjemci osobních údajů
              </h2>
              <p className="text-white/50 mb-4">
                Vaše osobní údaje mohou být předány následujícím kategoriím příjemců:
              </p>
              <ul className="list-disc list-inside text-white/50 space-y-2 ml-4">
                <li>Poskytovatelé IT služeb (hosting, e-mailové služby)</li>
                <li>Účetní a daňoví poradci</li>
                <li>Orgány veřejné moci v případech stanovených zákonem</li>
              </ul>
              <p className="text-white/50 mt-4">
                Všichni naši zpracovatelé jsou vázáni smluvními závazky o ochraně osobních údajů.
              </p>
            </div>

            {/* Section 6 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                6. Vaše práva
              </h2>
              <p className="text-white/50 mb-4">
                V souladu s GDPR máte následující práva:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Právo na přístup', desc: 'Můžete požádat o informace o zpracování Vašich údajů' },
                  { title: 'Právo na opravu', desc: 'Můžete požadovat opravu nepřesných údajů' },
                  { title: 'Právo na výmaz', desc: 'Můžete požadovat smazání Vašich údajů ("právo být zapomenut")' },
                  { title: 'Právo na omezení', desc: 'Můžete požadovat omezení zpracování' },
                  { title: 'Právo na přenositelnost', desc: 'Můžete získat své údaje ve strojově čitelném formátu' },
                  { title: 'Právo vznést námitku', desc: 'Můžete vznést námitku proti zpracování' },
                ].map((right) => (
                  <div key={right.title} className="p-4 border border-white/10">
                    <h3 className="text-[#00F0FF] font-medium mb-1">{right.title}</h3>
                    <p className="text-white/50 text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Cookies a sledování
              </h2>
              <p className="text-white/50 mb-4">
                Naše webové stránky používají pouze nezbytné cookies, které jsou nutné pro funkčnost webu. 
                Nepoužíváme analytické ani marketingové cookies bez Vašeho výslovného souhlasu.
              </p>
              <div className="p-4 border border-white/10">
                <h3 className="text-white font-medium mb-2">Nezbytné cookies</h3>
                <ul className="text-white/50 text-sm space-y-1">
                  <li>• Session cookies – pro správnou funkci formulářů</li>
                  <li>• Preference cookies – pro zapamatování Vašich nastavení</li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                8. Bezpečnost osobních údajů
              </h2>
              <p className="text-white/50 mb-4">
                Přijali jsme vhodná technická a organizační opatření k zabezpečení osobních údajů:
              </p>
              <ul className="list-disc list-inside text-white/50 space-y-2 ml-4">
                <li>Šifrovaná komunikace (HTTPS/TLS)</li>
                <li>Pravidelné zálohování dat</li>
                <li>Přístupová práva na principu minimálních oprávnění</li>
                <li>Školení zaměstnanců o ochraně osobních údajů</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="privacy-section mb-12">
              <h2 className="text-xl font-semibold text-white mb-4">
                9. Kontakt pro ochranu osobních údajů
              </h2>
              <p className="text-white/50 mb-4">
                V případě jakýchkoliv dotazů týkajících se zpracování osobních údajů nás můžete kontaktovat:
              </p>
              <div className="p-4 border border-white/10">
                <p className="text-white/70">E-mail: <a href="mailto:info@institutefektivity.cz" className="text-[#00F0FF] hover:underline">info@institutefektivity.cz</a></p>
                <p className="text-white/70">Telefon: <a href="tel:+420777202132" className="text-[#00F0FF] hover:underline">+420 777 202 132</a></p>
                <p className="text-white/50 text-sm mt-2">
                  Adresa: Institut pro efektivní veřejnou správu z.ú., Lupáčova 16, Praha 3
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="privacy-section">
              <h2 className="text-xl font-semibold text-white mb-4">
                10. Dozorový úřad
              </h2>
              <p className="text-white/50 mb-4">
                Pokud se domníváte, že došlo k porušení Vašich práv, máte právo podat stížnost u dozorového úřadu:
              </p>
              <div className="p-4 border border-white/10">
                <p className="text-white/70 font-medium">Úřad pro ochranu osobních údajů</p>
                <p className="text-white/50 text-sm">Pplk. Sochora 27, 170 00 Praha 7</p>
                <p className="text-white/50 text-sm">Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer" className="text-[#00F0FF] hover:underline">www.uoou.cz</a></p>
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
              Toto prohlášení o ochraně osobních údajů je platné od 1. ledna 2026. 
              Vyhrazujeme si právo na jeho aktualizaci.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
