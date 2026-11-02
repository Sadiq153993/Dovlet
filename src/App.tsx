import React from 'react';
import { CivilServiceEthicsHero } from '../CivilServiceEthicsHero';
import { PrinciplesSection } from './components/PrinciplesSection';
import { OversightSection } from './components/OversightSection';
import { ComplaintsSection } from './components/ComplaintsSection';
import { WebsiteAnalysisSection } from './components/WebsiteAnalysisSection';
import { LegislationSection } from './components/LegislationSection';
import { EthicsQuizSection } from './components/EthicsQuizSection';
import { FooterSection } from './components/FooterSection';
import './styles/editorial-civic.css';

export const App: React.FC = () => {
  return (
    <div className="civic-app-wrapper">
      {/* 01: UNTOUCHED KEXSIO EDITORIAL HERO SECTION */}
      <CivilServiceEthicsHero />

      {/* 02: ETİK DAVRANIŞ PRİNSİPLƏRİ */}
      <PrinciplesSection />

      {/* 03: ETİK NƏZARƏT VƏ ETİK MÜVƏKKİLLƏR */}
      <OversightSection />

      {/* 04: VƏTƏNDAŞ MÜRACİƏTLƏRİ VƏ ŞİKAYƏTLƏRİ */}
      <ComplaintsSection />

      {/* 05: DÖVLƏT ORQANLARININ SAYT ANALİZİ VƏ AUDİTİ */}
      <WebsiteAnalysisSection />

      {/* 06: QANUNVERİCİLİK BAZASI */}
      <LegislationSection />

      {/* 07: İNTERAKTİV ETİK DİLEMMA VƏ KAZUS TESTİ */}
      <EthicsQuizSection />

      {/* 08: RƏSMİ İSTİNADLAR VƏ FOOTER */}
      <FooterSection />
    </div>
  );
};

export default App;
