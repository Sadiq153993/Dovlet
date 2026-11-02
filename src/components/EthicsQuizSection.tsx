import React, { useState } from 'react';

export interface QuizQuestion {
  id: number;
  scenario: string;
  category: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
    legalArticle: string;
  }[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Hədiyyə Alma Qadağası',
    scenario: 'Bayram ərəfəsində müraciətinə baxdığınız vətəndaş sizə minnətdarlıq əlaməti olaraq dəyəri təxminən 80 AZN olan xatirə saatı və şirniyyat dəsti təqdim edir. Dövlət qulluqçusu kimi qanuni addımınız necə olmalıdır?',
    options: [
      {
        text: 'Dəyəri cüzi olduğu və minnətdarlıq məqsədi daşıdığı üçün təşəkkürlə qəbul etmək.',
        isCorrect: false,
        explanation: 'Qanunvericiliyə görə, xidməti vəzifələrin icrası ilə bağlı vətəndaşlardan hər hansı hədiyyə, bəxşiş və ya ödəniş qəbul edilməsi qadağandır.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 11.1'
      },
      {
        text: 'Nəzakətlə imtina etmək; protokol qaydasında verilən rəsmi hədiyyədirsə və 55 AZN-dən yuxarıdırsa, dövlət orqanının balansına təhvil vermək.',
        isCorrect: true,
        explanation: 'Dövlət qulluqçusu vətəndaşların şəxsi hədiyyələrindən qəti imtina etməlidir. Yalnız rəsmi protokol tədbirlərində verilən və dəyəri 55 manatdan yuxarı olan hədiyyələr dövlət orqanına təhvil verilir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 12 & Korrupsiyaya qarşı mübarizə haqqında Qanun, Maddə 8'
      },
      {
        text: 'Hədiyyəni qəbul edib iş yoldaşları ilə bölüşmək.',
        isCorrect: false,
        explanation: 'Hədiyyənin kollektivlə bölüşdürülməsi onun qanunsuz xarakterini dəyişmir və intizam məsuliyyəti yaradır.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 21'
      },
      {
        text: 'Vətəndaşı incitməmək üçün götürüb dərhal xeyriyyə fonduna göndərmək.',
        isCorrect: false,
        explanation: 'Qulluqçu ona təklif olunan hədiyyədən elə yerindəcə imtina etməli və zərurət olduqda rəhbərliyə məruzə etməlidir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 11.2'
      }
    ]
  },
  {
    id: 2,
    category: 'Maraqların Toqquşması',
    scenario: 'Siz şöbənizdə dövlət satınalmaları (tender) komissiyasının üzvüsünüz. Məlum olur ki, müsabiqədə iştirak edən şirkətlərdən birinin təsisçisi sizin doğma qardaşınızdır. Qanuna uyğun hərəkətiniz necə olmalıdır?',
    options: [
      {
        text: 'Qərəzsiz davranacağınıza söz verərək qiymətləndirmədə iştiraka davam etmək.',
        isCorrect: false,
        explanation: 'Yaxın qohumun iştirak etdiyi müsabiqədə şəxsi maraq şübhəsi yaranır və qərəzsizlik təmin edilə bilməz.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 13'
      },
      {
        text: 'Dərhal rəhbərliyə maraqların toqquşması barədə yazılı məlumat vermək, özünə etiraz edərək komissiya işindən kənarlaşmaq.',
        isCorrect: true,
        explanation: 'Dövlət qulluqçusu maraqların toqquşması ehtimalı yarandıqda dərhal rəhbərliyə bildirməli və həmin məsələ üzrə qərar qəbul etməkdən çəkilməlidir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 13.2 & Dövlət Satınalmaları haqqında Qanun'
      },
      {
        text: 'Qardaşınızın şirkətinə daha yüksək bal vermək, lakin bunu digər üzvlərdən gizlətmək.',
        isCorrect: false,
        explanation: 'Bu hərəkət birbaşa korrupsiya cinayəti və ağır xidməti cinayətdir.',
        legalArticle: 'AR Cinayət Məcəlləsi, Maddə 308'
      },
      {
        text: 'Səsvermə zamanı sadəcə bitərəf qalmaq və heç kimə heç nə deməmək.',
        isCorrect: false,
        explanation: 'Maraqların toqquşması barədə məlumat verməməyin özü müstəqil intizam pozuntusudur.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 13.3'
      }
    ]
  },
  {
    id: 3,
    category: 'Qanunçuluq və Rəhbər Tapşırığı',
    scenario: 'Dövlət orqanının rəhbəri sizə qanunun birbaşa tələblərinə zidd olan və ya şübhə doğuran şifahi sərəncam verir. Bu halda dövlət qulluqçusunun hüquqi davranışı necə tənzimlənir?',
    options: [
      {
        text: 'Rəhbərin sərəncamı mütləq olduğu üçün heç bir etiraz etmədən icra etmək.',
        isCorrect: false,
        explanation: 'Dövlət qulluqçusu bilərəkdən qanunsuz tapşırığı icra etdikdə rəhbərlə bərabər məsuliyyət daşıyır.',
        legalArticle: 'Dövlət Qulluğu haqqında Qanun, Maddə 20'
      },
      {
        text: 'Tapşırığın qanunsuzluğu barədə rəhbərə yazılı məlumat vermək, yazılı təsdiq tələb etmək; yazılı təsdiq verildikdə isə icra etməyərək yuxarı orqana və ya hüquq-mühafizəyə bildirmək.',
        isCorrect: true,
        explanation: 'Qanun dövlət qulluqçusuna qanunsuz tapşırıqdan imtina etmək hüququ və təminatı verir. Qulluqçu yazılı əsaslandırma tələb etməlidir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 5.2 & Dövlət Qulluğu haqqında Qanun, Maddə 20.3'
      },
      {
        text: 'İmtina etmək və həmin gün işdən azad olunma barədə ərizə vermək.',
        isCorrect: false,
        explanation: 'İşdən çıxmaq hüquqi həll yolu deyil; dövlət qulluqçusu qanunun aliliyini qorumaq üçün rəsmi proseduru icra etməlidir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 5'
      },
      {
        text: 'Sosial şəbəkələrdə anonim hesabdan rəhbərin tapşırığını tənqid edən status yazmaq.',
        isCorrect: false,
        explanation: 'Bu hərəkət həm loyallıq prinsipini, həm də daxili xidməti intizam qaydalarını pozur.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 9'
      }
    ]
  },
  {
    id: 4,
    category: 'Loyallıq və Sosial Media',
    scenario: 'Dövlət orqanının qəbul etdiyi və ictimaiyyət tərəfindən müzakirə olunan qərarı barədə şəxsi “Facebook” səhifənizdə orqanın rəhbərliyini tənqid edən və qərəzli fikirlər əks etdirən yazı dərc etmək istəyirsiniz. Qanunun mövqeyi nədir?',
    options: [
      {
        text: 'Şəxsi səhifə olduğu üçün istənilən fikri sərbəst şəkildə yaymaq olar.',
        isCorrect: false,
        explanation: 'Dövlət qulluqçusunun söz azadlığı qanunla müəyyən edilmiş loyallıq və dövlət nüfuzunun qorunması tələbləri ilə məhdudlaşır.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 9.1'
      },
      {
        text: 'Dövlət qulluqçusu dövlət orqanlarının fəaliyyəti barədə ictimaiyyət qarşısında əsassız tənqidi mülahizələrdən və nüfuza xələl gətirən çıxışlardan çəkinməlidir.',
        isCorrect: true,
        explanation: 'Loyallıq prinsipi dövlət qulluqçusunun KİV-də və sosial şəbəkələrdə dövlət orqanının siyasətinə zidd çıxışlar etməsini qadağan edir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 9.2'
      },
      {
        text: 'Yalnız iş vaxtı bitdikdən sonra tənqid etməyə icazə verilir.',
        isCorrect: false,
        explanation: 'Loyallıq və etik davranış tələbləri qulluqçunun həm iş vaxtı, həm də işdən kənar davranışlarına şamil edilir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 6'
      },
      {
        text: 'Yalnız foto paylaşmaq olar, mətn yazmaq olmaz.',
        isCorrect: false,
        explanation: 'Formasından asılı olmayaraq nüfuza xələl gətirən istənilən ictimai material loyallıq pozuntusudur.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 9'
      }
    ]
  },
  {
    id: 5,
    category: 'Xidməti Məlumatların Məxfiliyi',
    scenario: 'Dövlət qulluğunda vətəndaşların fərdi məlumat bazası ilə işləyirsiniz. Yaxın dostunuz şəxsi məqsədlə tanışının ailə vəziyyəti və qeydiyyat ünvanını yoxlamağınızı xahiş edir. Nə etməlisiniz?',
    options: [
      {
        text: 'Yaxın dost olduğu və məlumatı heç kimə deməyəcəyinə and içdiyi üçün şifahi kömək etmək.',
        isCorrect: false,
        explanation: 'Fərdi məlumatların qanunsuz ötürülməsi qanunla birbaşa qadağandır və cinayət/inzibati məsuliyyət yaradır.',
        legalArticle: '“Fərdi məlumatlar haqqında” AR Qanunu'
      },
      {
        text: 'Məlumatların yalnız xidməti məqsədlər üçün istifadə oluna biləcəyini bildirərək qəti imtina etmək və məxfiliyi qorumaq.',
        isCorrect: true,
        explanation: 'Xidməti fəaliyyət zamanı əldə olunmuş məlumatlar konfidensialdır və şəxsi xahişlər əsasında heç bir üçüncü şəxsə verilə bilməz.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 15'
      },
      {
        text: 'Məlumatı ekrandan şəklini çəkib WhatsApp ilə göndərmək.',
        isCorrect: false,
        explanation: 'İnformasiya təhlükəsizliyinin ağır pozulması və xidməti sirrin yayılması hesab edilir.',
        legalArticle: 'Etik Qaydalar haqqında Qanun, Maddə 15.2'
      },
      {
        text: 'Məlumatı yalnız dostunuzun özünə aid olduqda vermək, başqasına aid olduqda isə rüşvət tələb etmək.',
        isCorrect: false,
        explanation: 'Həm məlumatın qorunması qaydalarının pozulması, həm də rüşvətxorluq cinayətidir.',
        legalArticle: 'AR Cinayət Məcəlləsi, Maddə 311'
      }
    ]
  }
];

export const EthicsQuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
    if (currentQ.options[selectedOption].isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <section id="etik-dilemma-testi" className="civic-section civic-quiz-section" aria-labelledby="quiz-heading">
      <div className="civic-container">
        {/* Section Header */}
        <div className="civic-section-header">
          <div className="civic-index-badge">
            <span className="civic-index-dash" />
            <span>DÖVLƏT ETİKASI / 07</span>
          </div>
          <h2 id="quiz-heading" className="civic-section-title">
            İNTERAKTİV ETİK DİLEMMA TESTİ
          </h2>
          <p className="civic-section-subtitle">
            Dövlət qulluğunda real həyati kazuslar və qanunvericilik əsasında qərar qəbulu simulyasiyası
          </p>
        </div>

        {!isQuizCompleted ? (
          <div className="civic-quiz-box">
            {/* Progress Bar & Meta */}
            <div className="civic-quiz-meta">
              <span className="civic-quiz-category">{currentQ.category}</span>
              <span className="civic-quiz-counter">Sual {currentIdx + 1} / {QUIZ_QUESTIONS.length}</span>
            </div>
            <div className="civic-quiz-bar">
              <div
                className="civic-quiz-bar-fill"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Scenario Question */}
            <h3 className="civic-quiz-scenario">{currentQ.scenario}</h3>

            {/* Options List */}
            <div className="civic-quiz-options" role="radiogroup">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let optClass = 'civic-quiz-opt';
                if (isSelected) optClass += ' selected';
                if (isAnswerSubmitted) {
                  if (opt.isCorrect) optClass += ' correct';
                  else if (isSelected && !opt.isCorrect) optClass += ' wrong';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    disabled={isAnswerSubmitted}
                    className={optClass}
                    onClick={() => handleSelectOption(idx)}
                  >
                    <span className="civic-opt-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="civic-opt-text">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Feedback */}
            {isAnswerSubmitted && selectedOption !== null && (
              <div className={`civic-feedback-box ${currentQ.options[selectedOption].isCorrect ? 'success' : 'alert'}`}>
                <div className="civic-feedback-header">
                  <strong>{currentQ.options[selectedOption].isCorrect ? '✓ Düzgün Qərar!' : '✕ Qeyri-Düzgün Qərar!'}</strong>
                  <span className="civic-feedback-law">{currentQ.options[selectedOption].legalArticle}</span>
                </div>
                <p className="civic-feedback-text">{currentQ.options[selectedOption].explanation}</p>
              </div>
            )}

            {/* Action Bar */}
            <div className="civic-quiz-actions">
              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  className="civic-btn-primary"
                  disabled={selectedOption === null}
                  onClick={handleConfirmAnswer}
                >
                  Cavabı Təsdiq Et
                </button>
              ) : (
                <button
                  type="button"
                  className="civic-btn-primary"
                  onClick={handleNextQuestion}
                >
                  {currentIdx + 1 < QUIZ_QUESTIONS.length ? 'Növbəti Kazus →' : 'Nəticəyə Bax →'}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Completion Certificate / Results Screen */
          <div className="civic-quiz-results">
            <div className="civic-results-card">
              <span className="civic-results-badge">TESTİN NƏTİCƏSİ</span>
              <h3 className="civic-results-title">
                {score >= 4 ? 'Təbriklər! Yüksək Etik Bilik və Qərar Bacarığı' : 'Etik Qanunvericiliyi Yenidən Nəzərdən Keçirmək Tövsiyə Olunur'}
              </h3>
              <div className="civic-results-score">
                <span className="civic-big-score">{score}</span>
                <span className="civic-total-score">/ {QUIZ_QUESTIONS.length} Düzgün</span>
              </div>
              <p className="civic-results-text">
                {score === 5 && 'Siz Azərbaycan Respublikasının dövlət qulluğunda etik davranış qaydaları və antikorrupsiya standartlarını dərindən mənimsəmisiniz.'}
                {score === 4 && 'Nəticəniz çox yaxşıdır! Əsas etik prinsipləri və maraqların toqquşması mexanizmlərini düzgün qiymətləndirirsiniz.'}
                {score < 4 && 'Bəzi mürəkkəb etik situasiyalarda qanunun tələblərini bir daha xatırlamaq faydalı olardı. Bölmələrdəki qanunvericilik izahlarını oxumağı tövsiyə edirik.'}
              </p>

              <div className="civic-results-actions">
                <button
                  type="button"
                  className="civic-btn-primary"
                  onClick={handleRestartQuiz}
                >
                  Testi Yenidən Keç ↺
                </button>
                <a href="#qanunvericilik" className="civic-btn-secondary">
                  Qanunvericiliyə Keçid
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
