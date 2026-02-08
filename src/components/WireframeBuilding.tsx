import React from 'react';

interface WireframeBuildingProps {
  variant?: number;
  className?: string;
}

const WireframeBuilding: React.FC<WireframeBuildingProps> = ({ variant = 1, className = '' }) => {
  const renderVariant = () => {
    switch (variant) {
      case 1:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main structure - stacked blocks */}
            <path d="M50 450L50 350L100 320L300 320L350 350L350 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M100 320L100 220L150 190L250 190L300 220L300 320" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M150 190L150 90L180 70L220 70L250 90L250 190" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M180 70L180 30L200 20L220 30L220 70" stroke="currentColor" strokeWidth="1.5"/>
            
            {/* Horizontal connecting lines */}
            <path d="M50 400L350 400" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M100 270L300 270" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M150 140L250 140" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            {/* Vertical detail lines */}
            <path d="M200 20L200 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M125 220L125 350" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M275 220L275 350" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            {/* Perspective lines */}
            <path d="M50 350L100 320" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M350 350L300 320" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M100 220L150 190" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M300 220L250 190" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M150 90L180 70" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            <path d="M250 90L220 70" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            
            {/* Decorative nodes */}
            <circle cx="200" cy="235" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="125" cy="385" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="275" cy="385" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="200" cy="115" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        );
      case 2:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wider base variant */}
            <path d="M20 450L20 380L80 340L320 340L380 380L380 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M80 340L80 240L140 200L260 200L320 240L320 340" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M140 200L140 120L170 100L230 100L260 120L260 200" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M170 100L170 50L200 35L230 50L230 100" stroke="currentColor" strokeWidth="1.5"/>
            
            <path d="M20 415L380 415" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M80 290L320 290" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M140 160L260 160" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M200 35L200 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M110 240L110 340" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M290 240L290 340" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            <circle cx="200" cy="265" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="110" cy="375" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="290" cy="375" r="3" fill="currentColor" opacity="0.8"/>
          </svg>
        );
      case 3:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Taller vertical emphasis */}
            <path d="M70 450L70 360L110 330L290 330L330 360L330 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M110 330L110 200L150 170L250 170L290 200L290 330" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M150 170L150 80L175 60L225 60L250 80L250 170" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M175 60L175 20L200 8L225 20L225 60" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M200 8L200 0" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M70 405L330 405" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M110 265L290 265" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M150 125L250 125" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M200 0L200 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M130 200L130 330" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M270 200L270 330" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            <circle cx="200" cy="217" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="130" cy="367" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="270" cy="367" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="200" cy="92" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        );
      case 4:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Asymmetrical stacked volumes */}
            <path d="M60 450L60 370L100 340L200 340L240 370L240 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M160 340L160 240L200 210L340 210L380 240L380 340" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M120 210L120 110L160 85L240 85L280 110L280 210" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M180 85L180 40L210 25L240 40L240 85" stroke="currentColor" strokeWidth="1.5"/>
            
            <path d="M60 410L240 410" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M160 290L380 290" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M120 160L280 160" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M210 25L210 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M270 240L270 340" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M200 110L200 210" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            <circle cx="270" cy="290" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="150" cy="375" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="200" cy="147" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        );
      case 5:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* For white background - slightly thicker stroke */}
            <path d="M50 450L50 350L100 320L300 320L350 350L350 450" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 320L100 220L150 190L250 190L300 220L300 320" stroke="currentColor" strokeWidth="2"/>
            <path d="M150 190L150 90L180 70L220 70L250 90L250 190" stroke="currentColor" strokeWidth="2"/>
            <path d="M180 70L180 30L200 20L220 30L220 70" stroke="currentColor" strokeWidth="2"/>
            
            <path d="M50 400L350 400" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            <path d="M100 270L300 270" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            <path d="M150 140L250 140" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            
            <path d="M200 20L200 450" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            <path d="M125 220L125 350" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            <path d="M275 220L275 350" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            
            <circle cx="200" cy="235" r="4" fill="currentColor" opacity="0.9"/>
            <circle cx="125" cy="385" r="4" fill="currentColor" opacity="0.9"/>
            <circle cx="275" cy="385" r="4" fill="currentColor" opacity="0.9"/>
            <circle cx="200" cy="115" r="3" fill="currentColor" opacity="0.7"/>
          </svg>
        );
      case 6:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Strong vertical lines */}
            <path d="M80 450L80 360L120 330L180 330L220 360L220 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M180 330L180 220L220 190L320 190L360 220L360 330" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M120 190L120 100L150 80L210 80L240 100L240 190" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M165 80L165 35L195 20L225 35L225 80" stroke="currentColor" strokeWidth="1.5"/>
            
            <path d="M80 405L220 405" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M180 275L360 275" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M120 145L240 145" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M195 20L195 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M270 220L270 330" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M180 100L180 190" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            <circle cx="270" cy="275" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="150" cy="377" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="180" cy="145" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        );
      case 7:
        return (
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Balanced proportions */}
            <path d="M60 450L60 370L110 340L290 340L340 370L340 450" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M110 340L110 230L160 200L240 200L290 230L290 340" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M160 200L160 100L190 80L210 80L240 100L240 200" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M190 80L190 35L200 28L210 35L210 80" stroke="currentColor" strokeWidth="1.5"/>
            
            <path d="M60 410L340 410" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M110 285L290 285" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            <path d="M160 150L240 150" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
            
            <path d="M200 28L200 450" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M135 230L135 340" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M265 230L265 340" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            
            <circle cx="200" cy="262" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="135" cy="375" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="265" cy="375" r="3" fill="currentColor" opacity="0.8"/>
            <circle cx="200" cy="125" r="2" fill="currentColor" opacity="0.6"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`text-[#00F0FF] animate-float ${className}`}>
      {renderVariant()}
    </div>
  );
};

export default WireframeBuilding;
