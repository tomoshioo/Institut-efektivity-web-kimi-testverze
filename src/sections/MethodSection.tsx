import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WireframeBuilding from '../components/WireframeBuilding';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MethodSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
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

  return (
    <section 
      ref={sectionRef} 
      className="ie-section-pinned bg-[#0B0C0F] z-40"
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
          Metodika
        </span>

        {/* Wireframe graphic - left */}
        <div 
          ref={wireframeRef}
          className="absolute"
          style={{ left: '6vw', top: '18vh', width: '40vw', height: '64vh' }}
        >
          <WireframeBuilding variant={4} />
        </div>

        {/* Headline block - right */}
        <div 
          ref={headlineRef}
          className="absolute"
          style={{ left: '52vw', top: '26vh', width: '42vw' }}
        >
          <h2 className="ie-headline-2 text-[#F4F6F8]">
            User-centric přístup.
          </h2>
        </div>

        {/* Body copy - right-lower */}
        <p 
          ref={bodyRef}
          className="absolute ie-body text-[#A9B0BC] max-w-md"
          style={{ left: '52vw', top: '52vh', width: '36vw' }}
        >
          Nezačínáme od systému, ale od člověka. Ověřujeme hypotézy, testujeme řešení 
          s uživateli a měříme dopad—aby změna skutečně fungovala.
        </p>

        {/* CTA - right-bottom */}
        <div 
          ref={ctaRef}
          className="absolute"
          style={{ left: '52vw', top: '72vh' }}
        >
          <a href="#" className="ie-link">
            Jak pracujeme
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
