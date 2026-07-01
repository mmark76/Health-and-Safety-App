import { Icon } from '../components/DashboardIcon'
import type { DashboardContent, DashboardView, IconName, Language } from '../types/dashboard'
import './HomePage.css'

type HomePageProps = {
  copy: DashboardContent
  language: Language
  onSelectView: (view: DashboardView) => void
}

type HomeCard = {
  view: DashboardView
  icon: IconName
  title: string
  description: string
}

export function HomePage({ copy, language, onSelectView }: HomePageProps) {
  const text = language === 'el'
    ? {
        badge: 'Ασφάλεια και Υγεία στην Εργασία',
        title: 'Καλώς ήρθατε',
        intro: 'Η Ασφάλεια και Υγεία στην Εργασία αφορά την πρόληψη ατυχημάτων και επαγγελματικών κινδύνων, την προστασία της υγείας των εργαζομένων και τη δημιουργία ενός ασφαλούς και οργανωμένου περιβάλλοντος εργασίας.',
        appPurpose: 'Η εφαρμογή συγκεντρώνει την τεκμηρίωση, τη νομοθεσία, την επιχειρησιακή εικόνα και τις σημαντικές εξελίξεις σε ένα ενιαίο σημείο.',
        openFile: 'Άνοιγμα ΦΑΥ',
        browseLegislation: 'Προβολή Νομοθεσίας',
        mainChoices: 'Κύριες επιλογές',
        mainChoicesIntro: 'Επίλεξε την ενότητα που θέλεις να επισκεφθείς.',
        newsTitle: 'Νέα και εξελίξεις',
        newsIntro: 'Ενημερωτικό περιεχόμενο με προτεραιότητα στην Ευρωπαϊκή Ένωση και στη συνέχεια στην Κύπρο και στις διεθνείς εξελίξεις.',
        viewNews: 'Όλα τα νέα',
        development: 'Η εφαρμογή βρίσκεται σε στάδιο ανάπτυξης και χρησιμοποιεί ενδεικτικά δεδομένα.',
        newsItems: [
          ['Ευρωπαϊκή Ένωση', 'Οδηγίες, στρατηγικές, εκστρατείες και έρευνες για την Ασφάλεια και Υγεία στην Εργασία.'],
          ['Κύπρος', 'Νομοθετικές αλλαγές, ανακοινώσεις, εγκύκλιοι και τοπικές δράσεις πρόληψης.'],
          ['Διεθνή', 'Έρευνες, καλές πρακτικές, νέες τεχνολογίες και αναδυόμενοι επαγγελματικοί κίνδυνοι.'],
        ],
      }
    : {
        badge: 'Safety and Health at Work',
        title: 'Welcome',
        intro: 'Safety and health at work is concerned with preventing accidents and occupational risks, protecting workers’ health and creating a safe and well-organised working environment.',
        appPurpose: 'The application brings documentation, legislation, operational information and important developments together in one place.',
        openFile: 'Open Safety and Health File',
        browseLegislation: 'View Legislation',
        mainChoices: 'Main choices',
        mainChoicesIntro: 'Choose the area you want to visit.',
        newsTitle: 'News and developments',
        newsIntro: 'Information with priority given to the European Union, followed by Cyprus and wider international developments.',
        viewNews: 'All news',
        development: 'The application is under development and currently uses demonstration data.',
        newsItems: [
          ['European Union', 'Directives, strategies, campaigns and research on safety and health at work.'],
          ['Cyprus', 'Legislative changes, announcements, circulars and local prevention initiatives.'],
          ['International', 'Research, good practices, new technologies and emerging occupational risks.'],
        ],
      }

  const cards: HomeCard[] = [
    { view: 'safety-file', icon: 'shield', title: copy.nav[3][1], description: copy.nav[3][2] ?? '' },
    { view: 'legislation', icon: 'documents', title: copy.nav[2][1], description: copy.nav[2][2] ?? '' },
    { view: 'overview', icon: 'reports', title: copy.nav[1][1], description: copy.nav[1][2] ?? '' },
    { view: 'news', icon: 'bell', title: copy.nav[4][1], description: copy.nav[4][2] ?? '' },
  ]

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <span className="home-badge"><Icon name="shield" />{text.badge}</span>
          <h1 id="home-title">{text.title}</h1>
          <p className="home-intro">{text.intro}</p>
          <p className="home-purpose">{text.appPurpose}</p>
          <div className="home-hero-actions">
            <button className="primary-button" onClick={() => onSelectView('safety-file')} type="button">
              <Icon name="shield" />
              {text.openFile}
            </button>
            <button className="secondary-button" onClick={() => onSelectView('legislation')} type="button">
              <Icon name="documents" />
              {text.browseLegislation}
            </button>
          </div>
        </div>
        <div className="home-hero-symbol" aria-hidden="true">
          <Icon name="shield" />
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-choices-title">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">{copy.appName}</p>
            <h2 id="home-choices-title">{text.mainChoices}</h2>
            <p>{text.mainChoicesIntro}</p>
          </div>
        </div>
        <div className="home-card-grid">
          {cards.map((card) => (
            <button className="home-navigation-card" key={card.view} onClick={() => onSelectView(card.view)} type="button">
              <span className="home-card-icon"><Icon name={card.icon} /></span>
              <span className="home-card-copy">
                <strong>{card.title}</strong>
                <span>{card.description}</span>
              </span>
              <span className="home-card-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="home-section home-news-section" aria-labelledby="home-news-title">
        <div className="home-section-heading home-news-heading">
          <div>
            <p className="eyebrow">{copy.nav[4][1]}</p>
            <h2 id="home-news-title">{text.newsTitle}</h2>
            <p>{text.newsIntro}</p>
          </div>
          <button className="secondary-button" onClick={() => onSelectView('news')} type="button">
            {text.viewNews}
          </button>
        </div>
        <div className="home-news-grid">
          {text.newsItems.map(([title, description], index) => (
            <article className="home-news-card" key={title}>
              <span className="home-news-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <p className="home-development-note"><Icon name="info" />{text.development}</p>
    </div>
  )
}