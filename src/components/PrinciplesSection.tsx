import React, { useState } from 'react';

export interface Principle {
  id: string;
  number: string;
  article: string;
  title: string;
  category: 'vetendash' | 'xidmet' | 'durustluk';
  categoryLabel: string;
  summary: string;
  lawExcerpt: string;
  practicalRule: string;
}

export const PRINCIPLES_DATA: Principle[] = [
  {
    id: 'qanunculuq',
    number: '01',
    article: 'Maddə 5',
    title: 'Qanunçuluq',
    category: 'xidmet',
    categoryLabel: 'Xidməti Fəaliyyət',
    summary: 'Dövlət qulluqçusu öz vəzifə səlahiyyətlərini həyata keçirərkən Azərbaycan Respublikasının Konstitusiyasına, qanunlarına və tərəfdar çıxdığı beynəlxalq müqavilələrə dönmədən əməl etməlidir.',
    lawExcerpt: 'Dövlət qulluqçusu qanunun aliliyini rəhbər tutmalı, qanunsuz tapşırıqları icra etməkdən imtina etməli və dərhal yuxarı rəhbərə məlumat verməlidir.',
    practicalRule: 'Rəhbərin qanuna zidd şifahi sərəncamı daxil olduqda, dövlət qulluqçusu yazılı təsdiq tələb etməli və hüquqa zidd əmələ şərik olmamalıdır.'
  },
  {
    id: 'ictimai-etimad',
    number: '02',
    article: 'Maddə 6',
    title: 'İctimai etimad',
    category: 'vetendash',
    categoryLabel: 'Vətəndaş Münasibətləri',
    summary: 'Dövlət orqanının nüfuzunu möhkəmləndirməyə, vətəndaşların dövlətə və dövlət qulluğuna olan inamını qorumağa və artırmağa xidmət edir.',
    lawExcerpt: 'Dövlət qulluqçusu həm xidməti fəaliyyətində, həm də xidmətdən kənar davranışında dövlət qulluqçusu adını uca tutmalı, cəmiyyətin etimadını sarsıdan hərəkətlərdən çəkinməlidir.',
    practicalRule: 'Şəxsi həyatda və ictimai məkanlarda dövlət orqanının nüfuzuna xələl gətirə biləcək nalayiq hərəkətlərə yol verilməməlidir.'
  },
  {
    id: 'vicdanli-davranis',
    number: '03',
    article: 'Maddə 8',
    title: 'Vicdanlı davranış',
    category: 'xidmet',
    categoryLabel: 'Xidməti Fəaliyyət',
    summary: 'Dövlət qulluqçusu şəxsi və ya korporativ maraqlardan asılı olmayaraq, ictimai maraqlar naminə vəzifələrini keyfiyyətlə və vicdanla yerinə yetirməlidir.',
    lawExcerpt: 'Şəxsiyyətin, cəmiyyətin və dövlətin maraqları naminə öz xidməti vəzifələrini səmərəli, operativ və yüksək peşəkarlıq səviyyəsində icra etmək bir borcdur.',
    practicalRule: 'Vətəndaş müraciətlərini süründürməçiliyə salmamaq, bürokratik əngəllər yaratmamaq və xidməti vaxtı səmərəli bölüşdürmək.'
  },
  {
    id: 'loyalliq',
    number: '04',
    article: 'Maddə 9',
    title: 'Loyallıq',
    category: 'xidmet',
    categoryLabel: 'Xidməti Fəaliyyət',
    summary: 'Dövlət qulluqçusu dövlət orqanlarının fəaliyyəti barədə ictimai çıxışlarda, kütləvi informasiya vasitələrində və sosial şəbəkələrdə əsassız tənqidi mülahizələrdən çəkinməlidir.',
    lawExcerpt: 'Xidməti vəzifələrin icrası ilə əlaqədar dövlət orqanlarının, onların rəhbərlərinin fəaliyyətinə dair ictimaiyyət qarşısında qanunsuz tənqid yolverilməzdir.',
    practicalRule: 'Sosial media platformalarında xidmət etdiyi orqanın siyasətinə zidd olan və ya dövlət sirri təşkil edən bəyanatlar yaymamaq.'
  },
  {
    id: 'qerezsizlik',
    number: '05',
    article: 'Maddə 10',
    title: 'Qərəzsizlik',
    category: 'vetendash',
    categoryLabel: 'Vətəndaş Münasibətləri',
    summary: 'Vəzifə səlahiyyətlərini icra edərkən irqindən, etnik mənsubiyyətindən, dinindən, dilindən, cinsindən və sosial mənşəyindən asılı olmayaraq hər kəsə bərabər yanaşmaq.',
    lawExcerpt: 'Siyasi partiyaların, qeyri-hökumət təşkilatlarının təsirindən azad olmaq və heç bir şəxsə qanunsuz üstünlük və ya güzəşt verməmək.',
    practicalRule: 'Xidməti qərarlar qəbul edilərkən şəxsi rəğbət və ya qərəz deyil, yalnız obyektiv sübutlar və qanun maddələri əsas götürülməlidir.'
  },
  {
    id: 'korrupsiyanin-qarsisi',
    number: '06',
    article: 'Maddə 11',
    title: 'Korrupsiyanın qarşısının alınması',
    category: 'durustluk',
    categoryLabel: 'Dürüstlük və Şəffaflıq',
    summary: 'Qanunsuz maddi və qeyri-maddi nemətlər, imtiyazlar və güzəştlər tələb etmək, qəbul etmək və ya bu cür təkliflərə razılıq vermək qəti qadağandır.',
    lawExcerpt: 'Xidməti vəzifələrini yerinə yetirməsi müqabilində vətəndaşlardan hər hansı təşəkkür payı, pul və ya xidmət qəbul edilməsi intizam və cinayət məsuliyyəti yaradır.',
    practicalRule: 'Dövlət qulluqçusu ona təklif olunan qanunsuz ödəniş və ya hədiyyədən imtina etməli və bu barədə dərhal rəhbərliyə yazılı məruzə etməlidir.'
  },
  {
    id: 'hediyye-qadagasi',
    number: '07',
    article: 'Maddə 12',
    title: 'Hədiyyə alma ilə bağlı məhdudiyyətlər',
    category: 'durustluk',
    categoryLabel: 'Dürüstlük və Şəffaflıq',
    summary: 'Protokol tədbirlərində təqdim edilən hədiyyələrin dəyəri 55 manatdan yuxarı olduqda dövlət orqanının balansına təhvil verilməlidir.',
    lawExcerpt: 'Qulluq vəzifələrinin qərəzsiz icrasına təsir edə biləcək və ya bu cür təəssürat yaradan heç bir hədiyyə şəxsi mülkiyyətə qəbul edilə bilməz.',
    practicalRule: 'Beynəlxalq və rəsmi protokol qaydasında verilən suvenirlər aktlaşdırılır və müvafiq dövlət orqanının mülkiyyətinə keçirilir.'
  },
  {
    id: 'maraqlarin-toqqusmasi',
    number: '08',
    article: 'Maddə 13',
    title: 'Maraqların toqquşmasının qarşısının alınması',
    category: 'durustluk',
    categoryLabel: 'Dürüstlük və Şəffaflıq',
    summary: 'Xidməti vəzifələr ilə şəxsi maraqların kəsişdiyi hallarda maraqların toqquşmasına yol verilməməli və dərhal rəhbərliyə məlumat verilməlidir.',
    lawExcerpt: 'Dövlət qulluqçusu qohumlarının və ya yaxın münasibətdə olduğu şəxslərin xeyrinə vəzifə səlahiyyətlərindən istifadə edə bilməz.',
    practicalRule: 'Tender komissiyasında və ya nəzarət tədbirində yaxın qohumun iştirakı aşkarlandıqda qulluqçu özünə etiraz etməli və prosesdən çəkilməlidir.'
  },
  {
    id: 'emlakdan-istifade',
    number: '09',
    article: 'Maddə 14',
    title: 'Dövlət əmlakından istifadə',
    category: 'xidmet',
    categoryLabel: 'Xidməti Fəaliyyət',
    summary: 'Dövlət mülkiyyətində olan avadanlıq, nəqliyyat və digər maddi resurslardan yalnız xidməti məqsədlər üçün qənaətlə istifadə edilməlidir.',
    lawExcerpt: 'Dövlət əmlakının şəxsi maraqlar, ailə üzvlərinin ehtiyacları və ya qeyri-xidməti məqsədlər üçün istifadəsi qadağandır.',
    practicalRule: 'Xidməti avtomobillərin, kompüter texnikasının və dəftərxana ləvazimatlarının qulluqdan kənar məqsədlər üçün istifadə edilməməsi.'
  },
  {
    id: 'melumatlardan-istifade',
    number: '10',
    article: 'Maddə 15',
    title: 'Məlumatların qorunması və istifadəsi',
    category: 'vetendash',
    categoryLabel: 'Vətəndaş Münasibətləri',
    summary: 'Xidmət zamanı əldə edilmiş konfidensial məlumatların, vətəndaşların fərdi məlumatlarının və dövlət sirrinin yayılması qadağandır.',
    lawExcerpt: 'Dövlət qulluqçusu xidməti məlumatları şəxsi maraqları üçün istifadə edə bilməz və qulluqdan azad olduqdan sonra da məxfiliyi qorumalıdır.',
    practicalRule: 'Vətəndaşların qeydiyyat, səhhət və əmlak məlumatlarını üçüncü tərəflərlə paylaşmamaq və informasiya təhlükəsizliyinə ciddi riayət etmək.'
  }
];

export const PrinciplesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'vetendash' | 'xidmet' | 'durustluk'>('all');
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);

  const filtered = activeCategory === 'all'
    ? PRINCIPLES_DATA
    : PRINCIPLES_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="etik-prinsipler" className="civic-section civic-principles-section" aria-labelledby="principles-heading">
      <div className="civic-container">
        {/* Editorial Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 02</span>
          </div>
          <h2 id="principles-heading" className="civic-section-title">
            DAVRANIŞ PRİNSİPLƏRİ
          </h2>
          <p className="civic-section-subtitle">
            Azərbaycan Respublikasının “Dövlət qulluqçularının etik davranış qaydaları haqqında” Qanunu ilə müəyyən edilmiş əsas tənzimləyici prinsiplər
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="civic-filter-bar" role="tablist" aria-label="Prinsip kateqoriyaları">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            className={`civic-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Bütün Prinsiplər ({PRINCIPLES_DATA.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'vetendash'}
            className={`civic-filter-btn ${activeCategory === 'vetendash' ? 'active' : ''}`}
            onClick={() => setActiveCategory('vetendash')}
          >
            Vətəndaş Münasibətləri
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'xidmet'}
            className={`civic-filter-btn ${activeCategory === 'xidmet' ? 'active' : ''}`}
            onClick={() => setActiveCategory('xidmet')}
          >
            Xidməti Fəaliyyət
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'durustluk'}
            className={`civic-filter-btn ${activeCategory === 'durustluk' ? 'active' : ''}`}
            onClick={() => setActiveCategory('durustluk')}
          >
            Dürüstlük və Şəffaflıq
          </button>
        </div>

        {/* Principles 3D Grid */}
        <div className="civic-principles-grid">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="civic-principle-card"
              tabIndex={0}
              role="button"
              onClick={() => setSelectedPrinciple(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPrinciple(item);
                }
              }}
              aria-haspopup="dialog"
            >
              <div className="civic-card-top">
                <span className="civic-card-num">{item.number}</span>
                <span className="civic-card-article">{item.article}</span>
              </div>
              <h3 className="civic-card-title">{item.title}</h3>
              <p className="civic-card-summary">{item.summary}</p>
              <div className="civic-card-footer">
                <span className="civic-category-tag">{item.categoryLabel}</span>
                <span className="civic-card-arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      {selectedPrinciple && (
        <div
          className="civic-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedPrinciple(null)}
        >
          <div
            className="civic-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="civic-modal-header">
              <div>
                <span className="civic-modal-sub">{selectedPrinciple.article} • {selectedPrinciple.categoryLabel}</span>
                <h3 id="modal-title" className="civic-modal-title">{selectedPrinciple.title}</h3>
              </div>
              <button
                type="button"
                className="civic-modal-close"
                onClick={() => setSelectedPrinciple(null)}
                aria-label="Bağla"
              >
                ✕
              </button>
            </div>

            <div className="civic-modal-body">
              <div className="civic-modal-block">
                <h4 className="civic-block-title">Qanunun Tələbi</h4>
                <p className="civic-block-text">{selectedPrinciple.lawExcerpt}</p>
              </div>

              <div className="civic-modal-block highlight">
                <h4 className="civic-block-title">Praktik Dövlət Qulluğu Qaydası</h4>
                <p className="civic-block-text">{selectedPrinciple.practicalRule}</p>
              </div>
            </div>

            <div className="civic-modal-footer">
              <span className="civic-modal-note">Mənbə: AR Qanunu № 352-IIIQ</span>
              <button
                type="button"
                className="civic-btn-primary"
                onClick={() => setSelectedPrinciple(null)}
              >
                Anladım
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
