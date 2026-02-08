import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WireframeBuilding from '../components/WireframeBuilding';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const wireframeRef = useRef<HTMLDivElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background gradient fade in
      loadTl.fromTo(bgGradientRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4 }, 
        0
      );

      // Micro label
      loadTl.fromTo(labelRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        0
      );

      // Headline words animation
      const headlineWords = headlineRef.current?.querySelectorAll('.word');
      if (headlineWords) {
        loadTl.fromTo(headlineWords,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.03 },
          0.15
        );
      }

      // Subheadline
      loadTl.fromTo(subheadlineRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        0.45
      );

      // Body
      loadTl.fromTo(bodyRef.current,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3 },
        0.6
      );

      // CTA
      loadTl.fromTo(ctaRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.25 },
        0.8
      );

      // Wireframe
      loadTl.fromTo(wireframeRef.current,
        { x: '18vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 0.9, ease: 'power2.out' },
        0.1
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset all elements to visible when scrolling back to top
            gsap.set([headlineRef.current, subheadlineRef.current, bodyRef.current, ctaRef.current, labelRef.current], {
              opacity: 1, x: 0, y: 0
            });
            gsap.set(wireframeRef.current, { opacity: 1, x: 0, y: 0, scale: 1 });
            gsap.set(bgGradientRef.current, { opacity: 1 });
          }
        }
      });

      // ENTRANCE (0-30%): Hold - elements already visible from load
      // SETTLE (30-70%): Hold - static readable state
      
      // EXIT (70-100%)
      scrollTl.fromTo(headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0.25, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(subheadlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0.2, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(bodyRef.current,
        { x: 0, opacity: 1 },
        { x: '-10vw', opacity: 0.2, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(ctaRef.current,
        { x: 0, opacity: 1 },
        { x: '-8vw', opacity: 0.2, ease: 'power2.in' },
        0.76
      );

      scrollTl.fromTo(labelRef.current,
        { x: 0, opacity: 1 },
        { x: '-6vw', opacity: 0.2, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(wireframeRef.current,
        { x: 0, y: 0, scale: 1, opacity: 1 },
        { x: '10vw', y: '-6vh', scale: 0.98, opacity: 0.35, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(bgGradientRef.current,
        { opacity: 0.06 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#sluzby');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="ie-section-pinned bg-[#0B0C0F] z-10"
    >
      {/* Background gradient */}
      <div 
        ref={bgGradientRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(0, 240, 255, 0.06) 0%, transparent 60%)'
        }}
      />

      {/* Content container */}
      <div className="relative w-full h-full">
        {/* Micro label */}
        <span 
          ref={labelRef}
          className="absolute ie-mono-label text-[#00F0FF] opacity-80"
          style={{ left: '7vw', top: '16vh' }}
        >
          Institut Efektivity
        </span>

        {/* Headline block - left */}
        <div 
          className="absolute"
          style={{ left: '7vw', top: '22vh', width: '46vw' }}
        >
          <h1 ref={headlineRef} className="ie-headline-1 text-[#F4F6F8] mb-4">
            <span className="word inline-block">Modernizujeme</span>{' '}
            <span className="word inline-block">stát.</span>
          </h1>
          <p ref={subheadlineRef} className="ie-headline-3 text-[#00F0FF]">
            Pomocí byznysu a technologií.
          </p>
        </div>

        {/* Body copy - left-lower */}
        <p 
          ref={bodyRef}
          className="absolute ie-body text-[#A9B0BC] max-w-md"
          style={{ left: '7vw', top: '52vh', width: '34vw' }}
        >
          Jsme nezávislý institut, který ve veřejné správě zavádí moderní řízení, 
          digitální služby a otevřená data—rychle, prakticky a bez zbytečné byrokracie.
        </p>

        {/* CTA - left-bottom */}
        <div 
          ref={ctaRef}
          className="absolute flex items-center gap-6"
          style={{ left: '7vw', top: '72vh' }}
        >
          <button onClick={scrollToServices} className="ie-btn-primary">
            Naše služby
            <ArrowRight size={18} className="ml-2" />
          </button>
          <button onClick={scrollToContact} className="ie-link">
            Kontaktujte nás
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Wireframe graphic - right */}
        <div 
          ref={wireframeRef}
          className="absolute"
          style={{ right: '6vw', top: '18vh', width: '40vw', height: '64vh' }}
        >
          <WireframeBuilding variant={1} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
