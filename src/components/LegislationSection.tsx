import React, { useState } from 'react';

export interface LawItem {
  id: string;
  name: string;
  number: string;
  adoptedDate: string;
  scope: string;
  keyArticles: {
    number: string;
    title: string;
    content: string;
  }[];
  eQanunRef: string;
}

const LAWS_DATA: LawItem[] = [
  {
    id: 'etik-qaydalar',
    name: '“Dövlət qulluqçularının etik davranış qaydaları haqqında” AR Qanunu',
    number: '№ 352-IIIQ',
    adoptedDate: '31 may 2007-ci il',
    scope: 'Bütün dövlət orqanlarında dövlət qulluqçularının əməl etməli olduğu hüquqi və əxlaqi prinsipləri, nəzarət mexanizmini və etik müvəkkillərin hüquqi statusunu tənzimləyən ana qanundur.',
    keyArticles: [
      {
        number: 'Maddə 3',
        title: 'Qanunun tətbiq dairəsi',
        content: 'Bu Qanun Azərbaycan Respublikasının bütün dövlət orqanlarında inzibati və yardımçı vəzifələri tutan dövlət qulluqçularına şamil edilir.'
      },
      {
        number: 'Maddə 11',
        title: 'Maddi və qeyri-maddi nemətlərin əldə edilməsinin yolverilməzliyi',
        content: 'Dövlət qulluqçusu qulluq səlahiyyətlərinin icrası müqabilində heç bir şəxsdən hədiyyə, pul, borc və ya digər xidmətlər tələb edə və ya qəbul edə bilməz.'
      },
      {
        number: 'Maddə 20',
        title: 'Etik davranış qaydalarına əməl olunmasına nəzarət',
        content: 'Dövlət orqanının rəhbəri və etik müvəkkil qulluqçuların davranışlarına nəzarət edir, xidməti araşdırmalar aparır və qanunsuzluqların qarşısını alır.'
      },
      {
        number: 'Maddə 21',
        title: 'Etik davranış qaydalarının pozulmasına görə məsuliyyət',
        content: 'Etik davranış qaydalarını pozan dövlət qulluqçusu intizam məsuliyyətinə cəlb edilir (töhmət, maaşın tutulması, vəzifənin aşağı salınması və ya dövlət qulluğundan azad edilmə).'
      }
    ],
    eQanunRef: 'https://e-qanun.az/framework/13591'
  },
  {
    id: 'dovlet-qullugu',
    name: '“Dövlət qulluğu haqqında” AR Qanunu',
    number: '№ 92-IIQ',
    adoptedDate: '21 iyul 2000-ci il',
    scope: 'Dövlətin vəzifələrini, dövlət qulluqçularının hüquqi statusunu, qulluğa qəbul və xidmət şərtlərini, intizam tənbehlərinin tətbiqi qaydalarını müəyyən edir.',
    keyArticles: [
      {
        number: 'Maddə 20',
        title: 'Dövlət qulluqçusunun əsas vəzifələri',
        content: 'Dövlət orqanının rəhbəri tərəfindən verilən qanuni əmrləri icra etmək, vətəndaşların hüquqlarını qorumaq və dövlət sirrini saxlamaq əsas vəzifədir.'
      },
      {
        number: 'Maddə 25',
        title: 'İntizam məsuliyyəti və tənbehlər',
        content: 'Xidməti vəzifələrin və etik qaydaların pozulmasına görə: töhmət, şiddətli töhmət, ixtisas dərəcəsinin aşağı salınması və dövlət qulluğundan xaric edilmə tətbiq olunur.'
      }
    ],
    eQanunRef: 'https://e-qanun.az/framework/4488'
  },
  {
    id: 'korrupsiya',
    name: '“Korrupsiyaya qarşı mübarizə haqqında” AR Qanunu',
    number: '№ 580-IIQ',
    adoptedDate: '13 yanvar 2004-ci il',
    scope: 'Dövlət orqanlarında şəffaflığın təmin edilməsi, korrupsiya hüquqpozmalarının aşkar edilməsi, qarşısının alınması və qanunsuz üstünlüklərin ləğvi qaydalarını tənzimləyir.',
    keyArticles: [
      {
        number: 'Maddə 7',
        title: 'Yaxın qohumların birgə işləməsinə yol verilməməsi',
        content: 'Bir-birinə birbaşa tabe olan və ya nəzarəti həyata keçirən vəzifələrdə yaxın qohumların (valideyn, ər-arvad, övlad, qardaş-bacı) birgə xidmət etməsi qadağandır.'
      },
      {
        number: 'Maddə 8',
        title: 'Hədiyyə qəbul etmə ilə əlaqədar məhdudiyyətlər',
        content: 'Xidməti vəzifələrinin icrası zamanı dövlət qulluqçusuna bir il ərzində ümumi məbləği 55 manatdan artıq olan hədiyyələrin təqdim olunması yolverilməzdir.'
      }
    ],
    eQanunRef: 'https://e-qanun.az/framework/5091'
  },
  {
    id: 'vetendas-muracieti',
    name: '“Vətəndaşların müraciətləri haqqında” AR Qanunu',
    number: '№ 1308-IVQ',
    adoptedDate: '30 sentyabr 2015-ci il',
    scope: 'Vətəndaşların dövlət orqanlarına şikayət, ərizə və təklif vermək konstitusion hüququnun təmin edilməsi və baxılma proseslərinin vaxt çərçivəsini tənzimləyir.',
    keyArticles: [
      {
        number: 'Maddə 7',
        title: 'Müraciətlərə baxılmasına dair ümumi tələblər',
        content: 'Bütün müraciətlərə diqqətlə və qərəzsiz yanaşılmalı, süründürməçiliyə yol verilməməli və qanuni əsas olmadan müraciətin təminindən imtina edilməməlidir.'
      },
      {
        number: 'Maddə 10',
        title: 'Müraciətlərə baxılma müddətləri',
        content: 'Müraciətlərə ən geci 15 iş günü ərzində, əlavə öyrənilmə və yoxlama tələb olunduqda isə 30 iş gününədək müddətdə baxılır.'
      }
    ],
    eQanunRef: 'https://e-qanun.az/framework/31201'
  }
];

export const LegislationSection: React.FC = () => {
  const [selectedLawId, setSelectedLawId] = useState<string>('etik-qaydalar');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeLaw = LAWS_DATA.find(l => l.id === selectedLawId) || LAWS_DATA[0];

  const filteredArticles = activeLaw.keyArticles.filter(art => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return art.number.toLowerCase().includes(q) ||
           art.title.toLowerCase().includes(q) ||
           art.content.toLowerCase().includes(q);
  });

  return (
    <section id="qanunvericilik" className="civic-section civic-legislation-section" aria-labelledby="legislation-heading">
      <div className="civic-container">
        {/* Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 06</span>
          </div>
          <h2 id="legislation-heading" className="civic-section-title">
            QANUNVERİCİLİK BAZASI
          </h2>
          <p className="civic-section-subtitle">
            Azərbaycan Respublikasının dövlət idarəçiliyində etik davranış və antikorrupsiya standartlarını formalaşdıran qanunvericilik aktları
          </p>
        </div>

        {/* Laws Selector Strip */}
        <div className="civic-law-selectors" role="tablist">
          {LAWS_DATA.map((law) => (
            <button
              key={law.id}
              type="button"
              role="tab"
              aria-selected={selectedLawId === law.id}
              className={`civic-law-select-btn ${selectedLawId === law.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedLawId(law.id);
                setSearchQuery('');
              }}
            >
              <span className="civic-law-btn-num">{law.number}</span>
              <span className="civic-law-btn-name">{law.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Law Detailed Card */}
        <div className="civic-law-detail-card">
          <div className="civic-law-card-header">
            <div>
              <span className="civic-law-meta">{activeLaw.number} • Qəbul tarixi: {activeLaw.adoptedDate}</span>
              <h3 className="civic-law-card-title">{activeLaw.name}</h3>
              <p className="civic-law-scope">{activeLaw.scope}</p>
            </div>
            <a
              href={activeLaw.eQanunRef}
              target="_blank"
              rel="noopener noreferrer"
              className="civic-eqanun-link"
            >
              e-qanun.az-da tam mətn ↗
            </a>
          </div>

          {/* Quick Filter Box */}
          <div className="civic-law-search-box">
            <input
              type="text"
              placeholder="Maddə və ya açar söz üzrə axtarış (məsələn: hədiyyə, intizam, nəzarət)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="civic-law-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="civic-search-clear"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>

          {/* Articles Accordion / List */}
          <div className="civic-articles-list">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => (
                <div key={i} className="civic-article-item">
                  <div className="civic-article-header">
                    <span className="civic-article-num">{article.number}</span>
                    <h4 className="civic-article-title">{article.title}</h4>
                  </div>
                  <p className="civic-article-content">{article.content}</p>
                </div>
              ))
            ) : (
              <div className="civic-no-results">
                Axtarışınıza uyğun maddə tapılmadı. Zəhmət olmasa başqa açar söz sınayın.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
