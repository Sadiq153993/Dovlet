import React, { useState } from 'react';

export const ComplaintsSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'muddet' | 'qaydalar' | 'teminatlar'>('muddet');

  return (
    <section id="vetendas-muracietleri" className="civic-section civic-complaints-section" aria-labelledby="complaints-heading">
      <div className="civic-container">
        {/* Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 04</span>
          </div>
          <h2 id="complaints-heading" className="civic-section-title">
            VƏTƏNDAŞ MÜRACİƏTLƏRİ VƏ ŞİKAYƏTLƏRİ
          </h2>
          <p className="civic-section-subtitle">
            Dövlət qulluqçularının etik davranış qaydalarının pozulması barədə vətəndaşların şikayət hüququ, baxılma qaydaları və dövlət zəmanətləri
          </p>
        </div>

        {/* 3 Interactive Nav Tabs */}
        <div className="civic-tab-group" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={selectedTopic === 'muddet'}
            className={`civic-tab-btn ${selectedTopic === 'muddet' ? 'active' : ''}`}
            onClick={() => setSelectedTopic('muddet')}
          >
            Baxılma Müddətləri
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedTopic === 'qaydalar'}
            className={`civic-tab-btn ${selectedTopic === 'qaydalar' ? 'active' : ''}`}
            onClick={() => setSelectedTopic('qaydalar')}
          >
            Şikayətin Tərtibi Qaydası
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={selectedTopic === 'teminatlar'}
            className={`civic-tab-btn ${selectedTopic === 'teminatlar' ? 'active' : ''}`}
            onClick={() => setSelectedTopic('teminatlar')}
          >
            Hüquqi Zəmanətlər və Təqib Qadağası
          </button>
        </div>

        {/* Tab 1: Timelines */}
        {selectedTopic === 'muddet' && (
          <div className="civic-complaints-content">
            <div className="civic-timeline-grid">
              <div className="civic-timeline-card standard">
                <div className="civic-timeline-badge">15 İş Günü</div>
                <h3 className="civic-timeline-title">Standart Baxılma Müddəti</h3>
                <p className="civic-timeline-desc">
                  Əlavə araşdırma və ya yoxlama tələb olunmayan bütün etik davranış şikayətlərinə ən geci 15 iş günü ərzində baxılmalı və vətəndaşa əsaslandırılmış yazılı və ya elektron cavab təqdim edilməlidir.
                </p>
                <div className="civic-timeline-footer">
                  <span>Hüquqi baza: “Vətəndaşların müraciətləri haqqında” Qanun, Maddə 10.1</span>
                </div>
              </div>

              <div className="civic-timeline-card extended">
                <div className="civic-timeline-badge extended-badge">30 İş Gününədək</div>
                <h3 className="civic-timeline-title">Əlavə Araşdırma Tələb Olunduqda</h3>
                <p className="civic-timeline-desc">
                  Müraciətdə göstərilən faktlar xidməti yoxlama, şahidlərin dindirilməsi və ya digər orqanlardan sənəd tələbi tələb etdikdə, müddət 30 iş gününədək uzadıla bilər. Bu barədə vətəndaşa əvvəlcədən rəsmi bildiriş verilir.
                </p>
                <div className="civic-timeline-footer">
                  <span>Hüquqi baza: “Vətəndaşların müraciətləri haqqında” Qanun, Maddə 10.2</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Composition Rules */}
        {selectedTopic === 'qaydalar' && (
          <div className="civic-complaints-content">
            <div className="civic-rules-grid">
              <div className="civic-rule-box must-have">
                <h3 className="civic-rule-title">Müraciətdə Zəruri Olan Məlumatlar</h3>
                <ul className="civic-checklist">
                  <li><strong>Vətəndaşın rekvizitləri:</strong> Adı, soyadı, atasının adı, poçt ünvanı və ya elektron poçt ünvanı, əlaqə telefonu.</li>
                  <li><strong>Aidiyyət:</strong> Şikayət edilən dövlət qulluqçusunun vəzifəsi, adı və ya fəaliyyət göstərdiyi dövlət orqanının tam adı.</li>
                  <li><strong>Faktiki hallar:</strong> Etik pozuntunun mahiyyəti, baş verdiyi tarix, saat, ünvan və şərait.</li>
                  <li><strong>Sübut materialları:</strong> Varsa səs yazısı, foto/video sübut, sənəd surətləri və ya şahidlərin məlumatları.</li>
                </ul>
              </div>

              <div className="civic-rule-box invalid">
                <h3 className="civic-rule-title">Baxılmasından İmtina Edilən Hallar</h3>
                <ul className="civic-checklist caution">
                  <li><strong>Anonim müraciətlər:</strong> Müəllifin kimliyini müəyyən etmək mümkün olmadıqda (korrupsiya cinayətləri üzrə konkret dəlil olan hallar istisna olmaqla).</li>
                  <li><strong>Təhqir və böhtan:</strong> Ədəbsiz, nalayiq sözlərdən və ya dövlət qulluqçusunun şəxsiyyətini alçaldan ifadələrdən istifadə edildikdə.</li>
                  <li><strong>Təkrar müraciətlər:</strong> Eyni məsələ üzrə əvvəllər əsaslandırılmış cavab verildikdə və yeni dəlillər təqdim edilmədikdə.</li>
                  <li><strong>Məhkəmə icraatında olan işlər:</strong> Məhkəmənin səlahiyyətinə aid olan mübahisələr.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Guarantees */}
        {selectedTopic === 'teminatlar' && (
          <div className="civic-complaints-content">
            <div className="civic-guarantees-banner">
              <h3 className="civic-guarantee-heading">Vətəndaşın Təqib Olunmaması Zəmanəti</h3>
              <p className="civic-guarantee-text">
                Azərbaycan Respublikasının qanunvericiliyinə əsasən, dövlət orqanının və ya onun vəzifəli şəxsinin qanunsuz hərəkətlərindən, etik davranış qaydalarını pozmasından şikayət etdiyinə görə vətəndaşın təqib edilməsi qəti qadağandır və cinayət məsuliyyətinə səbəb olur.
              </p>
              <div className="civic-guarantee-points">
                <div className="civic-point">
                  <span className="civic-point-icon">⚖</span>
                  <h4>Hüquqi Bərabərlik</h4>
                  <p>Müraciət edən vətəndaşın statusundan asılı olmayaraq şikayətə obyektiv və qərəzsiz baxılır.</p>
                </div>
                <div className="civic-point">
                  <span className="civic-point-icon">🔒</span>
                  <h4>Məxfilik</h4>
                  <p>Şikayətin araşdırılması zamanı vətəndaşın şəxsi həyatına və ailə sirrinə aid məlumatlar qorunur.</p>
                </div>
                <div className="civic-point">
                  <span className="civic-point-icon">📋</span>
                  <h4>Nəticə Barədə Rəsmi Məlumat</h4>
                  <p>Aparılmış xidməti araşdırmanın yekunu və tətbiq edilmiş intizam tənbehi barədə vətəndaşa yazılı bildiriş verilir.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
