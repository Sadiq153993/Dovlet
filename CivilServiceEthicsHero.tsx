import React, { useEffect, useRef, useState, useCallback } from 'react';

// Neutral SVG data URI fallbacks embedded directly to guarantee 100% resilience
const FALLBACK_GOVERNMENT_BUILDING = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23ebe8e1"/><stop offset="50%" stop-color="%23dfdbd2"/><stop offset="100%" stop-color="%23cfc9be"/></linearGradient><linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="50%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.9"/><stop offset="100%" stop-color="%23e3ded4" stop-opacity="0.6"/></linearGradient><linearGradient id="curve2" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="%23d4cec3" stop-opacity="0.8"/><stop offset="100%" stop-color="%23f8f7f4" stop-opacity="0.95"/></linearGradient></defs><rect width="1200" height="800" fill="url(%23bg)"/><path d="M -50 750 Q 250 450, 550 520 T 1150 250 L 1250 850 L -50 850 Z" fill="url(%23curve1)"/><path d="M 150 800 Q 450 320, 780 380 T 1250 180 L 1250 850 L 150 850 Z" fill="url(%23curve2)"/><path d="M 280 800 Q 600 240, 950 310 Q 1100 340, 1250 480 L 1250 850 L 280 850 Z" fill="%23ffffff" fill-opacity="0.75"/><text x="600" y="730" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="600" letter-spacing="4" fill="%236e6a62">HEYDƏR ƏLİYEV MƏRKƏZİ — MEMARLIQ TƏSVİRİ (FALLBACK)</text></svg>`;

const FALLBACK_ASAN_SERVICE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500"><defs><linearGradient id="asan-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23e3e0d8"/><stop offset="50%" stop-color="%23d6d1c6"/><stop offset="100%" stop-color="%23c5bfb2"/></linearGradient><linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="%23ffffff" stop-opacity="0.8"/><stop offset="100%" stop-color="%23a8b5b2" stop-opacity="0.4"/></linearGradient></defs><rect width="800" height="500" fill="url(%23asan-bg)"/><rect x="80" y="160" width="640" height="240" rx="8" fill="%23dfded9"/><rect x="110" y="190" width="170" height="210" rx="4" fill="url(%23glass)"/><rect x="315" y="190" width="170" height="210" rx="4" fill="url(%23glass)"/><rect x="520" y="190" width="170" height="210" rx="4" fill="url(%23glass)"/><polygon points="60,160 740,160 710,130 90,130" fill="%232b2d30"/><line x1="80" y1="400" x2="720" y2="400" stroke="%238c887e" stroke-width="4"/><text x="400" y="450" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="600" letter-spacing="3" fill="%2365625a">ASAN XİDMƏT MƏRKƏZİ (FALLBACK)</text></svg>`;

export const CivilServiceEthicsHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);
  const targetX = useRef<number>(0);
  const targetY = useRef<number>(0);
  const currentX = useRef<number>(0);
  const currentY = useRef<number>(0);

  const [mainImgSrc, setMainImgSrc] = useState<string>('/images/government-building.jpg');
  const [smallImgSrc, setSmallImgSrc] = useState<string>('/images/asan-service.jpg');

  const updateParallax = useCallback(() => {
    // Smooth linear interpolation (lerp) towards target values
    currentX.current += (targetX.current - currentX.current) * 0.12;
    currentY.current += (targetY.current - currentY.current) * 0.12;

    if (sectionRef.current) {
      sectionRef.current.style.setProperty('--mouse-x', currentX.current.toFixed(4));
      sectionRef.current.style.setProperty('--mouse-y', currentY.current.toFixed(4));
    }

    const diffX = Math.abs(targetX.current - currentX.current);
    const diffY = Math.abs(targetY.current - currentY.current);

    if (diffX > 0.0005 || diffY > 0.0005) {
      rafId.current = requestAnimationFrame(updateParallax);
    } else {
      currentX.current = targetX.current;
      currentY.current = targetY.current;
      if (sectionRef.current) {
        sectionRef.current.style.setProperty('--mouse-x', currentX.current.toFixed(4));
        sectionRef.current.style.setProperty('--mouse-y', currentY.current.toFixed(4));
      }
      rafId.current = null;
    }
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const rawX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const rawY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    targetX.current = Math.max(-1, Math.min(1, rawX));
    targetY.current = Math.max(-1, Math.min(1, rawY));

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateParallax);
    }
  };

  const handlePointerLeave = () => {
    targetX.current = 0;
    targetY.current = 0;
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(updateParallax);
    }
  };

  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <main
      ref={sectionRef}
      className="civil-ethics-hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        /* Root Hero Canvas */
        .civil-ethics-hero {
          --mouse-x: 0;
          --mouse-y: 0;
          --img-scale: 1.055;
          --small-img-scale: 1.075;
          position: relative;
          isolation: isolate;
          width: 100%;
          height: 100svh;
          min-height: 480px;
          overflow: hidden;
          background-color: #f7f7f5;
          color: #050505;
          border: none;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .civil-ethics-hero *,
        .civil-ethics-hero *::before,
        .civil-ethics-hero *::after {
          box-sizing: border-box;
        }

        /* 1. Main Title */
        .civil-ethics-title {
          position: absolute;
          top: 5.2%;
          left: 3.65%;
          z-index: 5;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(76px, 10.4vw, 166px);
          font-weight: 700;
          line-height: 0.78;
          letter-spacing: -0.087em;
          text-transform: uppercase;
          color: #000000;
          pointer-events: none;
          user-select: none;
        }

        .civil-ethics-title-mask {
          display: block;
          overflow: hidden;
          padding-right: 0.09em;
          padding-bottom: 0.1em;
        }

        .civil-ethics-title-word {
          display: block;
          transform: translateY(115%);
          animation: titleSlideUp 1.05s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .civil-ethics-title-word.line-1 {
          animation-delay: 0s;
        }

        .civil-ethics-title-word.line-2 {
          animation-delay: 100ms;
        }

        @keyframes titleSlideUp {
          from {
            transform: translateY(115%);
          }
          to {
            transform: translateY(0);
          }
        }

        /* 2. Left Text Block */
        .civil-ethics-left-text {
          position: absolute;
          left: 3.7%;
          top: 56.7%;
          z-index: 4;
          width: min(205px, 19.5vw);
        }

        .civil-ethics-left-label {
          font-size: clamp(10px, 0.83vw, 13px);
          font-weight: 400;
          line-height: 1.43;
          letter-spacing: -0.025em;
          margin: 0;
          margin-bottom: clamp(28px, 8.5vh, 68px);
          color: #050505;
          opacity: 0;
          transform: translateY(18px);
          animation: textFadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 720ms forwards;
        }

        .civil-ethics-left-desc {
          font-size: clamp(10px, 0.83vw, 13px);
          font-weight: 400;
          line-height: 1.43;
          letter-spacing: -0.025em;
          margin: 0;
          color: #050505;
          opacity: 0;
          transform: translateY(18px);
          animation: textFadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 830ms forwards;
        }

        .civil-ethics-bold-prefix {
          font-weight: 600;
        }

        @keyframes textFadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 3. Main Center Image */
        .civil-ethics-main-figure {
          position: absolute;
          top: 30.1%;
          left: 26.45%;
          width: 43.25%;
          height: 51.4%;
          min-height: 205px;
          z-index: 2;
          margin: 0;
          overflow: hidden;
          background-color: #e5e3de;
          border-radius: clamp(24px, 3.15vw, 46px);
          clip-path: inset(0 100% 0 0 round clamp(24px, 3.15vw, 46px));
          animation: revealFromLeft 1.25s cubic-bezier(0.77, 0, 0.18, 1) 280ms forwards;
        }

        @keyframes revealFromLeft {
          from {
            clip-path: inset(0 100% 0 0 round clamp(24px, 3.15vw, 46px));
          }
          to {
            clip-path: inset(0 0 0 0 round clamp(24px, 3.15vw, 46px));
          }
        }

        .civil-ethics-main-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 58%;
          transform: translate(calc(var(--mouse-x) * -8px), calc(var(--mouse-y) * -6px)) scale(var(--img-scale));
          transition: transform 1.3s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .civil-ethics-main-figure:hover {
          --img-scale: 1.095;
        }

        .civil-ethics-overlay {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 2;
          background: linear-gradient(
            115deg,
            rgba(255, 255, 255, 0.13),
            transparent 38%,
            rgba(0, 0, 0, 0.04)
          );
          mix-blend-mode: soft-light;
        }

        /* 4. Right Panel */
        .civil-ethics-right-panel {
          position: absolute;
          top: 30.8%;
          left: 72.35%;
          width: 25%;
          max-width: 390px;
          z-index: 3;
          margin: 0;
        }

        /* Small Right Image */
        .civil-ethics-small-figure {
          position: relative;
          width: 100%;
          height: clamp(104px, 23.4vh, 205px);
          overflow: hidden;
          background-color: #ddd9d0;
          margin: 0;
          border-radius: clamp(25px, 3.2vw, 46px);
          clip-path: inset(0 0 0 100% round clamp(25px, 3.2vw, 46px));
          animation: revealFromRight 1.15s cubic-bezier(0.77, 0, 0.18, 1) 440ms forwards;
        }

        @keyframes revealFromRight {
          from {
            clip-path: inset(0 0 0 100% round clamp(25px, 3.2vw, 46px));
          }
          to {
            clip-path: inset(0 0 0 0 round clamp(25px, 3.2vw, 46px));
          }
        }

        .civil-ethics-small-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center 57%;
          transform: translate(calc(var(--mouse-x) * 7px), calc(var(--mouse-y) * 5px)) scale(var(--small-img-scale));
          transition: transform 1.3s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .civil-ethics-small-figure:hover {
          --small-img-scale: 1.13;
        }

        /* Right Heading & Paragraph */
        .civil-ethics-right-content {
          padding-top: clamp(18px, 4.2vh, 35px);
        }

        .civil-ethics-right-heading {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          font-size: clamp(25px, 2.7vw, 45px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.065em;
          color: #000000;
        }

        .civil-ethics-heading-mask {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .civil-ethics-heading-line {
          display: block;
          transform: translateY(115%);
          animation: headingSlideUp 900ms cubic-bezier(0.16, 1, 0.3, 1) 810ms forwards;
        }

        @keyframes headingSlideUp {
          from {
            transform: translateY(115%);
          }
          to {
            transform: translateY(0);
          }
        }

        .civil-ethics-right-para {
          max-width: 355px;
          margin-top: clamp(21px, 5.3vh, 43px);
          margin-bottom: 0;
          font-size: clamp(10px, 0.83vw, 13px);
          font-weight: 400;
          line-height: 1.43;
          letter-spacing: -0.025em;
          color: #050505;
          opacity: 0;
          transform: translateY(14px);
          animation: paraFadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 960ms forwards;
        }

        @keyframes paraFadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* 5. Bottom Right Index */
        .civil-ethics-index {
          position: absolute;
          right: 2.3%;
          bottom: 3%;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(0, 0, 0, 0.43);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(18px);
          animation: indexFadeInUp 700ms cubic-bezier(0.16, 1, 0.3, 1) 1.15s forwards;
          user-select: none;
        }

        .civil-ethics-index-line {
          width: 28px;
          height: 1px;
          background-color: currentColor;
          display: inline-block;
        }

        .civil-ethics-index-text {
          display: inline-block;
          line-height: 1;
        }

        @keyframes indexFadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ==========================================================================
           Responsive Tablet Layout (<= 900px)
           ========================================================================== */
        @media (max-width: 900px) {
          .civil-ethics-hero {
            height: auto;
            min-height: 100svh;
            padding: 28px 24px 52px;
            overflow: visible;
          }

          .civil-ethics-title {
            position: relative;
            top: auto;
            left: auto;
            font-size: clamp(72px, 15vw, 124px);
            line-height: 0.78;
          }

          .civil-ethics-main-figure {
            position: relative;
            top: auto;
            left: auto;
            width: 68%;
            height: 390px;
            min-height: 0;
            margin-top: 22px;
            margin-left: auto;
            margin-right: 0;
          }

          .civil-ethics-left-text {
            position: relative;
            top: auto;
            left: auto;
            width: 31%;
            margin-top: -250px;
            padding-right: 20px;
          }

          .civil-ethics-left-label {
            margin-bottom: 52px;
          }

          .civil-ethics-right-panel {
            position: relative;
            top: auto;
            left: auto;
            width: 56%;
            max-width: none;
            margin-top: 160px;
            margin-left: auto;
            margin-right: 0;
          }

          .civil-ethics-small-figure {
            height: 210px;
          }

          .civil-ethics-index {
            display: none !important;
          }
        }

        /* ==========================================================================
           Responsive Mobile Layout (<= 620px)
           ========================================================================== */
        @media (max-width: 620px) {
          .civil-ethics-hero {
            padding: 22px 16px 44px;
          }

          .civil-ethics-title {
            font-size: clamp(62px, 21vw, 96px);
            letter-spacing: -0.085em;
          }

          .civil-ethics-main-figure {
            width: 100%;
            height: min(70vw, 330px);
            margin-top: 24px;
            border-radius: 27px;
            margin-left: 0;
            clip-path: inset(0 100% 0 0 round 27px);
          }

          @keyframes revealFromLeft {
            from {
              clip-path: inset(0 100% 0 0 round 27px);
            }
            to {
              clip-path: inset(0 0 0 0 round 27px);
            }
          }

          .civil-ethics-left-text {
            width: 100%;
            margin-top: 29px;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr 1.25fr;
            gap: 28px;
          }

          .civil-ethics-left-label {
            margin-bottom: 0;
            font-size: 11px;
            line-height: 1.48;
          }

          .civil-ethics-left-desc {
            font-size: 11px;
            line-height: 1.48;
          }

          .civil-ethics-right-panel {
            width: 100%;
            margin-top: 58px;
            margin-left: 0;
          }

          .civil-ethics-small-figure {
            height: min(51vw, 245px);
            border-radius: 27px;
            clip-path: inset(0 0 0 100% round 27px);
          }

          @keyframes revealFromRight {
            from {
              clip-path: inset(0 0 0 100% round 27px);
            }
            to {
              clip-path: inset(0 0 0 0 round 27px);
            }
          }

          .civil-ethics-right-content {
            padding-top: 25px;
          }

          .civil-ethics-right-heading {
            font-size: clamp(34px, 10vw, 53px);
          }

          .civil-ethics-right-para {
            max-width: 88%;
            margin-top: 25px;
            font-size: 11px;
            line-height: 1.48;
          }
        }

        /* ==========================================================================
           Reduced Motion Support
           ========================================================================== */
        @media (prefers-reduced-motion: reduce) {
          .civil-ethics-title-word,
          .civil-ethics-left-label,
          .civil-ethics-left-desc,
          .civil-ethics-main-figure,
          .civil-ethics-small-figure,
          .civil-ethics-heading-line,
          .civil-ethics-right-para,
          .civil-ethics-index {
            animation-duration: 1ms !important;
            animation-delay: 0ms !important;
          }

          .civil-ethics-main-img,
          .civil-ethics-small-img {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Semantic H1 Main Title */}
      <h1 className="civil-ethics-title" aria-label="Dövlət Etikası">
        <span className="civil-ethics-title-mask">
          <span className="civil-ethics-title-word line-1">DÖVLƏT</span>
        </span>
        <span className="civil-ethics-title-mask">
          <span className="civil-ethics-title-word line-2">ETİKASI</span>
        </span>
      </h1>

      {/* Main Architectural Image */}
      <figure className="civil-ethics-main-figure">
        <img
          src={mainImgSrc}
          alt="Dövlət qulluqçularının peşəkar və etik əməkdaşlığı"
          className="civil-ethics-main-img"
          onError={() => setMainImgSrc(FALLBACK_GOVERNMENT_BUILDING)}
        />
        <div className="civil-ethics-overlay" aria-hidden="true" />
      </figure>

      {/* Left Text Block */}
      <div className="civil-ethics-left-text">
        <p className="civil-ethics-left-label">
          Dövlət qulluğunda etik davranış prinsipləri
        </p>
        <p className="civil-ethics-left-desc">
          <span className="civil-ethics-bold-prefix">Etik davranış:</span> Dürüstlük, qərəzsizlik və məsuliyyət dövlət qulluğunda ictimai etimadın əsasını təşkil edir.
        </p>
      </div>

      {/* Right Editorial Panel */}
      <aside className="civil-ethics-right-panel">
        {/* Small Public Service Image */}
        <figure className="civil-ethics-small-figure">
          <img
            src={smallImgSrc}
            alt="Dövlət orqanlarında şəffaflıq və qarşılıqlı etimad"
            className="civil-ethics-small-img"
            onError={() => setSmallImgSrc(FALLBACK_ASAN_SERVICE)}
          />
          <div className="civil-ethics-overlay" aria-hidden="true" />
        </figure>

        {/* Right Content */}
        <div className="civil-ethics-right-content">
          <h2 className="civil-ethics-right-heading" aria-label="Şəffaflıq və İctimai Etimad">
            <span className="civil-ethics-heading-mask">
              <span className="civil-ethics-heading-line">Şəffaflıq və</span>
            </span>
            <span className="civil-ethics-heading-mask">
              <span className="civil-ethics-heading-line">İctimai Etimad</span>
            </span>
          </h2>
          <p className="civil-ethics-right-para">
            Etik davranış qaydaları dövlət qulluqçularının vətəndaşlarla münasibətlərində qanunçuluğun, obyektivliyin və peşəkarlığın qorunmasına xidmət edir.
          </p>
        </div>
      </aside>

      {/* Bottom Right Index */}
      <div className="civil-ethics-index" aria-hidden="true">
        <span className="civil-ethics-index-line" />
        <span className="civil-ethics-index-text">DÖVLƏT ETİKASI / 01</span>
      </div>
    </main>
  );
};

export default CivilServiceEthicsHero;
