import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WireframeBuilding from '../components/WireframeBuilding';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const wireframeRef = useRef<HTMLDivElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(wireframeRef.current,
        { x: '-50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(headlineRef.current,
        { x: '50vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(bodyRef.current,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.1
      );

      scrollTl.fromTo(ctaRef.current,
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.15
      );

      scrollTl.fromTo(labelRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(bgGradientRef.current,
        { opacity: 0 },
        { opacity: 1, ease: 'none' },
        0
      );

      // SETTLE (30-70%): Hold positions

      // EXIT (70-100%)
      scrollTl.fromTo(headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0.25, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(bodyRef.current,
        { y: 0, opacity: 1 },
        { y: '-6vh', opacity: 0.2, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-4vh', opacity: 0.2, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(wireframeRef.current,
        { x: 0, opacity: 1 },
        { x: '-12vw', opacity: 0.35, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(labelRef.current,
        { opacity: 1 },
        { opacity: 0.2, ease: 'power2.in' },
        0.75
      );

      scrollTl.fromTo(bgGradientRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const differentiators = [
    'Měřitelné výsledky',
    'Praktické know-how',
    'Rychlé dodání',
    'Zero bullshit přístup'
  ];

  return (
    <section 
      ref={sectionRef} 
      className="ie-section-pinned bg-[#0B0C0F] z-[70]"
    >
      {/* Background gradient */}
      <div 
        ref={bgGradientRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 240, 255, 0.05) 0%, transparent 60%)'
        }}
      />

      {/* Content container */}
      <div className="relative w-full h-full">
        {/* Micro label - left */}
        <span 
          ref={labelRef}
          className="absolute ie-mono-label text-[#00F0FF] opacity-80"
          style={{ left: '6vw', top: '16vh' }}
        >
          Důvěra
        </span>

        {/* Wireframe graphic - left */}
        <div 
          ref={wireframeRef}
          className="absolute"
          style={{ left: '6vw', top: '18vh', width: '40vw', height: '64vh' }}
        >
          <WireframeBuilding variant={6} />
        </div>

        {/* Headline block - right */}
        <div 
          ref={headlineRef}
          className="absolute"
          style={{ left: '52vw', top: '26vh', width: '42vw' }}
        >
          <h2 className="ie-headline-2 text-[#F4F6F8]">
            Proč my?
          </h2>
        </div>

        {/* Body copy - right-lower */}
        <div 
          ref={bodyRef}
          className="absolute"
          style={{ left: '52vw', top: '46vh', width: '36vw' }}
        >
          <p className="ie-body text-[#A9B0BC] mb-6">
            Nehledáme problémy—hledáme řešení. Naše práce je měřitelná, 
            naše týmy jsou zapojené a naše výstupy jsou připravené k okamžitému použití.
          </p>
          <ul className="space-y-3">
            {differentiators.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#F4F6F8]">
                <CheckCircle2 size={18} className="text-[#00F0FF] flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA - right-bottom */}
        <div 
          ref={ctaRef}
          className="absolute"
          style={{ left: '52vw', top: '76vh' }}
        >
          <a href="#" className="ie-link">
            Přečtěte si reference
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
