import React, { useState } from 'react';

interface OversightStage {
  step: string;
  title: string;
  description: string;
  legalBasis: string;
  items: string[];
}

const OVERSIGHT_STAGES: OversightStage[] = [
  {
    step: '01',
    title: 'Qabaqlayıcı Tədbirlər və Maarifləndirmə',
    description: 'Dövlət orqanında etik standartların mənimsənilməsi və qanun pozuntularının yaranmadan öncə qarşısının alınması.',
    legalBasis: 'Etik Davranış Qaydaları haqqında Qanun, Maddə 20',
    items: [
      'Dövlət qulluğuna yeni qəbul olunan şəxslərin etik qaydalarla rəsmi tanış edilməsi',
      'Maraqların toqquşması və hədiyyə məhdudiyyətləri üzrə dövri təlimlərin təşkili',
      'Etik davranış qaydalarının orqanın rəsmi internet resursunda açıq dərc olunması'
    ]
  },
  {
    step: '02',
    title: 'Məsləhət Alma və Konfidensial Müraciət',
    description: 'Qulluqçuların çətin etik vəziyyətlərdə qanuni istiqamət alması üçün etik müvəkkilə müraciət mexanizmi.',
    legalBasis: 'Etik Müvəkkil Əsasnaməsi',
    items: [
      'Maraqların toqquşması riski olduqda əvvəlcədən rəy alınması',
      'Xidməti fəaliyyətlə bağlı hədiyyə təklif edildikdə məruzə qaydası',
      'Müraciət edən qulluqçunun konfidensiallığının tam qorunması zəmanəti'
    ]
  },
  {
    step: '03',
    title: 'Xidməti Araşdırma və Nəticələrin Qiymətləndirilməsi',
    description: 'Etik qaydaların pozulması barədə vətəndaş və ya daxili məlumat daxil olduqda aparılan obyektiv hüquqi prosedur.',
    legalBasis: 'Dövlət Qulluğu haqqında Qanun, Maddə 25',
    items: [
      'Dövlət orqanı rəhbərinin əmri ilə komissiyanın yaradılması və ya müvəkkilə tapşırılması',
      'Bütün tərəflərin izahatlarının və maddi sübutların toplanması',
      'Qərəzsizlik təmin edilməklə əsaslandırılmış rəyin hazırlanması'
    ]
  },
  {
    step: '04',
    title: 'İntizam Məsuliyyəti və İllik Hesabatlılıq',
    description: 'Təsdiq olunmuş pozuntular üzrə qanunla müəyyən edilmiş tədbirlər və orqanın etik monitorinq yekunları.',
    legalBasis: 'Etik Davranış Qaydaları haqqında Qanun, Maddə 21',
    items: [
      'Qanunvericiliklə müəyyən edilmiş intizam tənbehlərinin tətbiqi (töhmət, xəbərdarlıq, azad olunma)',
      'Hər il üzrə etik vəziyyət barədə ümumiləşdirilmiş hesabatın hazırlanması',
      'Dövlət İmtahan Mərkəzinə (DİM) illik etik hesabat məlumatlarının təqdimatı'
    ]
  }
];

export const OversightSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="etik-nezaret" className="civic-section civic-oversight-section" aria-labelledby="oversight-heading">
      <div className="civic-container">
        {/* Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 03</span>
          </div>
          <h2 id="oversight-heading" className="civic-section-title">
            ETİK NƏZARƏT VƏ ETİK MÜVƏKKİLLƏR
          </h2>
          <p className="civic-section-subtitle">
            Dövlət orqanında daxili nəzarət mexanizmi, rəhbərin öhdəlikləri və müstəqil etik müvəkkil institutu
          </p>
        </div>

        {/* Dual Pillar Architecture: Head of Body vs Ethics Official */}
        <div className="civic-oversight-pillars">
          <div className="civic-pillar-card leader-card">
            <div className="civic-pillar-badge">Ümumi Rəhbərlik</div>
            <h3 className="civic-pillar-title">Dövlət Orqanının Rəhbəri</h3>
            <p className="civic-pillar-desc">
              Dövlət orqanında etik davranış qaydalarının tətbiqinə, xidməti intizama və etik mühitin təmin edilməsinə birbaşa cavabdehdir.
            </p>
            <ul className="civic-pillar-list">
              <li>Etik davranış qaydalarının pozulması faktları üzrə xidməti yoxlama təyin edir</li>
              <li>Orqanda etik müvəkkili təyin edir və onun müstəqil fəaliyyətinə şərait yaradır</li>
              <li>Təsdiq olunmuş pozuntular üzrə intizam tənbehi tədbirləri tətbiq edir</li>
              <li>Etik qaydaların tətbiqi vəziyyəti barədə illik ictimai hesabatlılığı təmin edir</li>
            </ul>
          </div>

          <div className="civic-pillar-card commissioner-card">
            <div className="civic-pillar-badge commissioner-badge">Məsləhət və Monitorinq</div>
            <h3 className="civic-pillar-title">Etik Müvəkkil İnstitutu</h3>
            <p className="civic-pillar-desc">
              Dövlət qulluqçuları və vətəndaşlar üçün müstəqil, qərəzsiz və konfidensial hüquqi-etik bələdçi funksiyasını daşıyır.
            </p>
            <ul className="civic-pillar-list">
              <li>Qulluqçulara maraqların toqquşması və hədiyyələr üzrə fərdi məsləhətlər verir</li>
              <li>Etik qaydaların pozulması ilə bağlı şikayət və müraciətləri ilkin olaraq araşdırır</li>
              <li>Kollektivdə etik maarifləndirmə tədbirlərini və təlim proqramlarını təşkil edir</li>
              <li>Rəhbərliyə etik risklərin aradan qaldırılması üçün rüblük və illik təkliflər təqdim edir</li>
            </ul>
          </div>
        </div>

        {/* Interactive 4-Stage Oversight Pipeline */}
        <div className="civic-pipeline-container">
          <div className="civic-pipeline-header">
            <h3 className="civic-pipeline-title">Etik Nəzarətin 4 Mərhələli Hüquqi Dövrü</h3>
            <span className="civic-pipeline-note">Mərhələləri seçərək hüquqi tələbləri nəzərdən keçirin</span>
          </div>

          <div className="civic-step-tabs" role="tablist">
            {OVERSIGHT_STAGES.map((stage, idx) => (
              <button
                key={stage.step}
                type="button"
                role="tab"
                aria-selected={activeStep === idx}
                className={`civic-step-tab ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="civic-step-num">{stage.step}</span>
                <span className="civic-step-text">{stage.title}</span>
              </button>
            ))}
          </div>

          <div className="civic-stage-content" role="tabpanel">
            <div className="civic-stage-info">
              <span className="civic-stage-legal">{OVERSIGHT_STAGES[activeStep].legalBasis}</span>
              <h4 className="civic-stage-heading">{OVERSIGHT_STAGES[activeStep].title}</h4>
              <p className="civic-stage-text">{OVERSIGHT_STAGES[activeStep].description}</p>
            </div>
            <div className="civic-stage-actions">
              <h5 className="civic-actions-title">Əsas İcra Tələbləri:</h5>
              <ul className="civic-actions-list">
                {OVERSIGHT_STAGES[activeStep].items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
