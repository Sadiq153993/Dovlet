import React, { useState } from 'react';

interface AuditCriterion {
  id: string;
  category: string;
  title: string;
  weight: number;
  description: string;
  recommendation: string;
}

const CRITERIA: AuditCriterion[] = [
  {
    id: 'code-published',
    category: 'Normativ Baza',
    title: 'Etik kodeks və hüquqi bazanın xüsusi bölmədə dərci',
    weight: 20,
    description: 'Dövlət orqanının saytında “Etik Davranış Qaydaları” haqqında Qanun və daxili etik kodeks vətəndaşlar üçün asanlıqla tapılan bölmədə yerləşdirilməlidir.',
    recommendation: 'Əsas menyuda “Struktur” və ya “Fəaliyyət” bölməsi altında “Etik Davranış və İntizam” alt-bölməsi açılmalıdır.'
  },
  {
    id: 'commissioner-contacts',
    category: 'Məsuliyyətli Şəxs',
    title: 'Etik müvəkkilin adı, vəzifəsi və birbaşa əlaqə kanalları',
    weight: 25,
    description: 'Təyin olunmuş etik müvəkkilin adı, soyadı, qəbul günləri, birbaşa xidməti e-poçtu və daxili telefon nömrəsi açıq göstərilməlidir.',
    recommendation: 'Vətəndaş və əməkdaşların rəhbərliyin müdaxiləsi olmadan birbaşa müvəkkillə əlaqə yaratması üçün xüsusi əlaqə formu təmin edilməlidir.'
  },
  {
    id: 'hotline-access',
    category: 'Əlçatanlıq',
    title: '“Qaynar Xətt” və elektron müraciət sisteminin inteqrasiyası',
    weight: 20,
    description: 'Etik pozuntular, süründürməçilik və qərəzlilik halları barədə 24/7 qeydiyyat aparan çağrı mərkəzi və ya elektron müraciət modulu.',
    recommendation: 'Ana səhifədə bir kliklə keçid təmin edən etimad telefonu və elektron forma yerləşdirilməlidir.'
  },
  {
    id: 'annual-report',
    category: 'Şəffaflıq',
    title: 'İllik etik vəziyyət və intizam statistikalarının açıqlığı',
    weight: 20,
    description: 'İl ərzində daxil olmuş etik şikayətlərin sayı, aparılmış xidməti araşdırmalar və tətbiq olunmuş tədbirlər üzrə ümumiləşdirilmiş hesabat.',
    recommendation: 'Hər ilin yanvar ayında ötən ilin etik monitorinq hesabatı ictimaiyyətə açıqlanmalıdır.'
  },
  {
    id: 'conflict-form',
    category: 'Profilaktika',
    title: 'Maraqların toqquşması və hədiyyə reyestri məlumatları',
    weight: 15,
    description: 'Dövlət qulluqçularının qanunla nəzərdə tutulmuş hədiyyə reyestri və maraqların toqquşmasının tənzimlənməsi siyasəti barədə məlumatlandırma.',
    recommendation: 'Qanuni 55 manat həddi və protokol hədiyyələrinin təhvil verilmə qaydaları ictimai məlumat üçün dərc olunmalıdır.'
  }
];

export const WebsiteAnalysisSection: React.FC = () => {
  const [checkedCriteria, setCheckedCriteria] = useState<Record<string, boolean>>({
    'code-published': true,
    'hotline-access': true,
    'commissioner-contacts': false,
    'annual-report': false,
    'conflict-form': false
  });

  const toggleCriterion = (id: string) => {
    setCheckedCriteria(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentScore = CRITERIA.reduce((sum, item) => {
    return sum + (checkedCriteria[item.id] ? item.weight : 0);
  }, 0);

  const getScoreRating = (score: number) => {
    if (score >= 85) return { grade: 'Yüksək Standart', color: '#10b981', note: 'Sayt dövlət qulluğunda rəqəmsal etika və şəffaflıq tələblərinə tam cavab verir.' };
    if (score >= 50) return { grade: 'Orta Şəffaflıq', color: '#f59e0b', note: 'Əsas elementlər mövcuddur, lakin etik müvəkkil və hesabatlılıq sahəsində təkmilləşdirmə zəruridir.' };
    return { grade: 'Kritik Çatışmazlıq', color: '#ef4444', note: 'Saytda etik infrastruktur və vətəndaş əlaqə kanalları yetərli dərəcədə əks olunmayıb.' };
  };

  const rating = getScoreRating(currentScore);

  return (
    <section id="sayt-analizi" className="civic-section civic-analysis-section" aria-labelledby="analysis-heading">
      <div className="civic-container">
        {/* Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 05</span>
          </div>
          <h2 id="analysis-heading" className="civic-section-title">
            DÖVLƏT ORQANLARININ SAYT ANALİZİ
          </h2>
          <p className="civic-section-subtitle">
            Rəsmi internet resurslarında etik infrastrukturun, etik müvəkkil məlumatlarının və şəffaflıq meyarlarının qiymətləndirilməsi
          </p>
        </div>

        {/* Audit Simulator Split */}
        <div className="civic-audit-layout">
          {/* Left: Criteria Checkers */}
          <div className="civic-audit-checklist">
            <h3 className="civic-audit-list-title">Etik Şəffaflıq üzrə 5 Qiymətləndirmə Meyarı</h3>
            <p className="civic-audit-list-sub">
              Dövlət orqanının rəsmi saytında mövcud olan elementləri işarələyərək Rəqəmsal Şəffaflıq İndeksini hesablayın:
            </p>

            <div className="civic-checklist-items">
              {CRITERIA.map((criterion) => {
                const isChecked = !!checkedCriteria[criterion.id];
                return (
                  <div
                    key={criterion.id}
                    className={`civic-audit-item ${isChecked ? 'selected' : ''}`}
                    onClick={() => toggleCriterion(criterion.id)}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={isChecked}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleCriterion(criterion.id);
                      }
                    }}
                  >
                    <div className="civic-item-check-box">
                      <span className="civic-check-mark">{isChecked ? '✓' : ''}</span>
                    </div>
                    <div className="civic-item-details">
                      <div className="civic-item-meta">
                        <span className="civic-item-category">{criterion.category}</span>
                        <span className="civic-item-weight">+{criterion.weight}% Çəki</span>
                      </div>
                      <h4 className="civic-item-title">{criterion.title}</h4>
                      <p className="civic-item-desc">{criterion.description}</p>
                      {!isChecked && (
                        <div className="civic-item-rec">
                          <strong>Tövsiyə:</strong> {criterion.recommendation}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Live Transparency Score Card */}
          <div className="civic-audit-scoreboard">
            <div className="civic-score-card">
              <span className="civic-score-tag">RƏQƏMSAL ETİKA İNDEKSİ</span>
              <div className="civic-score-circle">
                <span className="civic-score-number">{currentScore}%</span>
                <span className="civic-score-max">/ 100%</span>
              </div>

              <div className="civic-score-status" style={{ borderLeftColor: rating.color }}>
                <strong style={{ color: rating.color }}>{rating.grade}</strong>
                <p>{rating.note}</p>
              </div>

              <div className="civic-score-breakdown">
                <h4 className="civic-breakdown-title">Audit Meyarlarının İcrası:</h4>
                <div className="civic-progress-bar-bg">
                  <div
                    className="civic-progress-bar-fill"
                    style={{ width: `${currentScore}%`, backgroundColor: rating.color }}
                  />
                </div>
                <div className="civic-breakdown-stats">
                  <span>Aktiv göstəricilər:</span>
                  <strong>{Object.values(checkedCriteria).filter(Boolean).length} / {CRITERIA.length}</strong>
                </div>
              </div>

              <div className="civic-score-advice">
                <p>
                  * Bu qiymətləndirmə modeli Azərbaycan Respublikasının “Dövlət qulluqçularının etik davranış qaydaları haqqında” Qanununun 20-ci və 21-ci maddələri əsasında hazırlanmışdır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
