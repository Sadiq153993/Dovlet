import React from 'react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="istinadlar" className="civic-footer" aria-labelledby="footer-heading">
      <div className="civic-container">
        {/* Footer Top Header */}
        <div className="civic-footer-header">
          <div className="civic-index-badge light">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 08</span>
          </div>
          <h2 id="footer-heading" className="civic-footer-title">
            RƏSMİ İSTİNADLAR VƏ HÜQUQİ RESURSLAR
          </h2>
          <p className="civic-footer-subtitle">
            Azərbaycan Respublikasında dövlət qulluğu, etik nəzarət və antikorrupsiya siyasətini tənzimləyən rəsmi dövlət orqanları və informasiya sistemləri
          </p>
        </div>

        {/* 4 Official Institutions Cards Grid */}
        <div className="civic-references-grid">
          <a
            href="https://dim.gov.az"
            target="_blank"
            rel="noopener noreferrer"
            className="civic-ref-card"
          >
            <span className="civic-ref-code">01 / DİM</span>
            <h3 className="civic-ref-name">Dövlət İmtahan Mərkəzi</h3>
            <p className="civic-ref-desc">
              Dövlət qulluğuna qəbul, qulluqçuların etik davranış üzrə təlimləri və dövlət orqanlarının etik hesabatlarının illik təhlili.
            </p>
            <span className="civic-ref-link">dim.gov.az ↗</span>
          </a>

          <a
            href="https://antikorrupsiya.gov.az"
            target="_blank"
            rel="noopener noreferrer"
            className="civic-ref-card"
          >
            <span className="civic-ref-code">02 / KOMİSSİYA</span>
            <h3 className="civic-ref-name">Korrupsiyaya qarşı Mübarizə üzrə Komissiya</h3>
            <p className="civic-ref-desc">
              Dövlət orqanlarında etik davranış və antikorrupsiya standartlarının tətbiqinə ümumi nəzarət və hesabatların monitorinqi.
            </p>
            <span className="civic-ref-link">antikorrupsiya.gov.az ↗</span>
          </a>

          <a
            href="https://e-qanun.az"
            target="_blank"
            rel="noopener noreferrer"
            className="civic-ref-card"
          >
            <span className="civic-ref-code">03 / E-QANUN</span>
            <h3 className="civic-ref-name">Hüquqi Aktların Vahid Elektron Bazası</h3>
            <p className="civic-ref-desc">
              Ədliyyə Nazirliyinin rəsmi portalı: “Dövlət qulluqçularının etik davranış qaydaları haqqında” Qanunun və bütün qanunların tam mətni.
            </p>
            <span className="civic-ref-link">e-qanun.az ↗</span>
          </a>

          <a
            href="https://genprosecutor.gov.az"
            target="_blank"
            rel="noopener noreferrer"
            className="civic-ref-card"
          >
            <span className="civic-ref-code">04 / PROKURORLUQ</span>
            <h3 className="civic-ref-name">Baş İdarə — “161” Qaynar Xətt</h3>
            <p className="civic-ref-desc">
              Baş Prokurorluq yanında Korrupsiyaya qarşı Mübarizə Baş İdarəsinin 24/7 rejimdə fəaliyyət göstərən etimad və əlaqə mərkəzi.
            </p>
            <span className="civic-ref-link">genprosecutor.gov.az ↗</span>
          </a>
        </div>

        {/* Editorial Site Navigation Bar */}
        <nav className="civic-footer-nav" aria-label="Sayt bölmələri">
          <ul className="civic-footer-links">
            <li><a href="#heroSection">01 Əsas</a></li>
            <li><a href="#etik-prinsipler">02 Prinsiplər</a></li>
            <li><a href="#etik-nezaret">03 Nəzarət</a></li>
            <li><a href="#vetendas-muracietleri">04 Müraciətlər</a></li>
            <li><a href="#sayt-analizi">05 Sayt Analizi</a></li>
            <li><a href="#qanunvericilik">06 Qanunvericilik</a></li>
            <li><a href="#etik-dilemma-testi">07 Dilemma Testi</a></li>
            <li><a href="#istinadlar">08 İstinadlar</a></li>
          </ul>

          <button
            type="button"
            className="civic-back-to-top"
            onClick={scrollToTop}
            aria-label="Səhifənin əvvəlinə qayıt"
          >
            Yuxarı Qayıt ↑
          </button>
        </nav>

        {/* Legal Disclaimer & Attribution */}
        <div className="civic-footer-bottom">
          <div className="civic-disclaimer-box">
            <strong>MÜSTƏQİL MAARİFLƏNDİRMƏ VƏ TƏHSİL LAYİHƏSİ:</strong>
            <p>
              Bu internet səhifəsi Azərbaycan Respublikasının dövlət idarəçiliyində etik davranış standartlarının və hüquqi maarifləndirmənin təşviqi məqsədilə hazırlanmış müstəqil təhsil resursudur. Layihə rəsmi dövlət orqanı və ya dövlət portalı deyildir. Bütün məlumatlar AR Konstitusiyası və “Dövlət qulluqçularının etik davranış qaydaları haqqında” AR Qanununun rəsmi müddəaları əsasında tərtib edilmişdir.
            </p>
          </div>
          <div className="civic-copyright-bar">
            <span>DÖVLƏT QULLUĞUNDA ETİK DAVRANIŞ © {new Date().getFullYear()}</span>
            <span>MÜSTƏQİL TƏHSİL PORTALI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
