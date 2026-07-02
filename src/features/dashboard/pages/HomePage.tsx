import { Icon } from '../components/DashboardIcon'
import type { DashboardContent, DashboardView, IconName, Language, NavigationItem } from '../types/dashboard'
import './HomePage.css'

type HomePageProps = {
  copy: DashboardContent
  language: Language
  navigationItems: NavigationItem[]
  onSelectView: (view: DashboardView) => void
}

type HomeCard = {
  view: DashboardView
  icon: IconName
  title: string
  description: string
}

export function HomePage({ copy, language, navigationItems, onSelectView }: HomePageProps) {
  const text = language === 'el'
    ? {
        badge: 'Ασφάλεια και Υγεία στην Εργασία',
        title: 'Καλώς ήρθατε',
        intro: 'Το προσωπικό prototype δείχνει πώς μπορούν να οργανωθούν η κάλυψη, οι κίνδυνοι, τα μέτρα, η εκπαίδευση, η συμμόρφωση και οι αναφορές για γραφειακούς χώρους.',
        appPurpose: 'Η Αρχική παραμένει υποστηρικτική σελίδα. Οι κύριοι τομείς της εφαρμογής είναι οι έξι τομείς του ADR-002.',
        openOverview: 'Άνοιγμα Επισκόπησης',
        openCoverage: 'Άνοιγμα Κάλυψης',
        mainChoices: 'Κύριοι τομείς',
        mainChoicesIntro: 'Επίλεξε έναν από τους εγκεκριμένους τομείς της αρχιτεκτονικής.',
        statusTitle: 'Κατάσταση prototype',
        statusIntro: 'Οι σελίδες τομέων είναι πληροφοριακές και σημαίνονται καθαρά ως υπό ανάπτυξη.',
        development: 'Η εφαρμογή βρίσκεται σε στάδιο ανάπτυξης και χρησιμοποιεί μόνο ενδεικτικά δεδομένα.',
        statusItems: [
          ['Χωρίς backend', 'Δεν υπάρχει βάση δεδομένων, authentication, authorization ή αποθήκευση πραγματικών εγγραφών.'],
          ['Μόνο ενδεικτικά δεδομένα', 'Δεν προστίθενται πραγματικά προσωπικά, Υπουργειακά ή ευαίσθητα δεδομένα.'],
          ['Υπό ανάπτυξη', 'Τα μη λειτουργικά controls είναι disabled ή σημασμένα ως υπό ανάπτυξη.'],
        ],
      }
    : {
        badge: 'Safety and Health at Work',
        title: 'Welcome',
        intro: 'This personal prototype shows how coverage, risks, measures, training, compliance and reports can be organized for office workplaces.',
        appPurpose: 'Home remains a supporting page. The application’s main structure is the six ADR-002 product areas.',
        openOverview: 'Open Overview',
        openCoverage: 'Open Coverage',
        mainChoices: 'Primary areas',
        mainChoicesIntro: 'Choose one of the approved architecture areas.',
        statusTitle: 'Prototype status',
        statusIntro: 'Domain pages are informational and clearly marked as under development.',
        development: 'The application is under development and currently uses demonstration data.',
        statusItems: [
          ['No backend', 'There is no database, authentication, authorization or real record storage.'],
          ['Demonstration data only', 'No real personal, Ministry or sensitive data is introduced.'],
          ['Under development', 'Non-functional controls are disabled or labelled as under development.'],
        ],
      }

  const cards: HomeCard[] = navigationItems
    .filter((item) => item.category === 'primary')
    .map((item) => ({
      view: item.id,
      icon: item.icon,
      title: item.label,
      description: item.description ?? '',
    }))

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy">
          <span className="home-badge"><Icon name="shield" />{text.badge}</span>
          <h1 id="home-title">{text.title}</h1>
          <p className="home-intro">{text.intro}</p>
          <p className="home-purpose">{text.appPurpose}</p>
          <div className="home-hero-actions">
            <button className="primary-button" onClick={() => onSelectView('overview')} type="button">
              <Icon name="dashboard" />
              {text.openOverview}
            </button>
            <button className="secondary-button" onClick={() => onSelectView('coverage')} type="button">
              <Icon name="documents" />
              {text.openCoverage}
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

      <section className="home-section home-news-section" aria-labelledby="home-status-title">
        <div className="home-section-heading home-news-heading">
          <div>
            <p className="eyebrow">{copy.demo}</p>
            <h2 id="home-status-title">{text.statusTitle}</h2>
            <p>{text.statusIntro}</p>
          </div>
        </div>
        <div className="home-news-grid">
          {text.statusItems.map(([title, description], index) => (
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
