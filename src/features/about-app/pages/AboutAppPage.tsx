import type { Language } from '../../dashboard/types/dashboard'
import './AboutAppPage.css'

type AboutAppContent = {
  eyebrow: string
  title: string
  intro: string
  badges: string[]
  summaries: { title: string; text: string }[]
  areasTitle: string
  areasLead: string
  areas: { title: string; text: string }[]
  implementedTitle: string
  implemented: string[]
  pendingTitle: string
  pending: string[]
  noticeTitle: string
  noticeText: string
  nextTitle: string
  nextText: string
  repositoryLink: string
  documentationLink: string
}

const aboutAppContent: Record<Language, AboutAppContent> = {
  el: {
    eyebrow: 'Ο άνθρωπος στο επίκεντρο',
    title: 'Ασφάλεια, Υγεία και Ευημερία των Ανθρώπων στην Εργασία',
    intro:
      'Το Health and Safety App έχει ως τελικό σκοπό την προστασία και προαγωγή της Ασφάλειας, της Υγείας και της Ευημερίας των ανθρώπων στην εργασία. Οι εγγραφές, οι εκτιμήσεις κινδύνου, τα μέτρα, η εκπαίδευση και οι αναφορές είναι τα διαχειριστικά εργαλεία που υπηρετούν αυτόν τον ανθρώπινο σκοπό.',
    badges: ['Δημόσιο πρωτότυπο', 'Ελληνικά και Αγγλικά', 'Μόνο ενδεικτικά δεδομένα'],
    summaries: [
      {
        title: 'Ανθρώπινος σκοπός',
        text: 'Η πρόληψη βλάβης, η προστασία της υγείας και η υποστήριξη της ευημερίας κάθε ανθρώπου που μπορεί εύλογα να επηρεαστεί από την εργασία.',
      },
      {
        title: 'Τρέχουσα φάση',
        text: 'Δημόσιο frontend prototype με λειτουργική δίγλωσση Επισκόπηση και τεκμηρίωση συνέχειας του έργου.',
      },
      {
        title: 'Επόμενο ορόσημο',
        text: 'Η πρώτη λειτουργική κάθετη ενότητα Κάλυψης, πριν από τη σταδιακή υλοποίηση των υπόλοιπων ροών του MVP.',
      },
    ],
    areasTitle: 'Οι έξι κύριες περιοχές',
    areasLead:
      'Η εφαρμογή οργανώνεται σε έξι σταθερές περιοχές εργασίας. Η παρούσα πληροφοριακή σελίδα είναι υποστηρικτική και δεν αποτελεί έβδομη κύρια περιοχή.',
    areas: [
      { title: 'Επισκόπηση', text: 'Συγκεντρωτικοί δείκτες, κενά, προθεσμίες και θέματα Διοίκησης.' },
      { title: 'Κάλυψη', text: 'Άνθρωποι ή ομάδες, οργανωτικές μονάδες, χώροι, δραστηριότητες και συνθήκες.' },
      { title: 'Κίνδυνοι και Μέτρα', text: 'Γραπτές εκτιμήσεις, κίνδυνοι, έλεγχοι, μέτρα, επαλήθευση και επανεκτίμηση.' },
      { title: 'Εκπαίδευση και Ετοιμότητα', text: 'Γνώσεις, συμμετοχή, ρόλοι ετοιμότητας και βασική τεκμηρίωση.' },
      { title: 'Συμμόρφωση και Διακυβέρνηση', text: 'Απαιτήσεις, ευθύνες, αποφάσεις και διοικητική εποπτεία.' },
      { title: 'Αναφορές', text: 'Συγκεντρωτική πληροφόρηση από τις έγκυρες εγγραφές των αρμόδιων ενοτήτων.' },
    ],
    implementedTitle: 'Τι λειτουργεί σήμερα',
    implemented: [
      'Δίγλωσση και responsive Επισκόπηση με ενδεικτικό περιεχόμενο.',
      'Επιλογή και αποθήκευση γλώσσας με ενημέρωση της γλώσσας του εγγράφου.',
      'Προσβάσιμο mobile sidebar με κλείσιμο μέσω Escape και επιστροφή focus.',
      'Αυτοματοποιημένοι έλεγχοι lint και build και ρύθμιση ανάπτυξης μέσω GitHub Pages.',
    ],
    pendingTitle: 'Τι δεν λειτουργεί ακόμη',
    pending: [
      'Πραγματικές διαδρομές και λειτουργικές σελίδες για τις κύριες περιοχές.',
      'Εγγραφές και ροές Κάλυψης και ολοκληρωμένη γραπτή εκτίμηση κινδύνου.',
      'Backend, βάση δεδομένων, authentication, authorization και audit logging.',
      'Ασφαλής διαχείριση συνημμένων ή χρήση πραγματικών προσωπικών και επιχειρησιακών δεδομένων.',
    ],
    noticeTitle: 'Σημαντική διευκρίνιση',
    noticeText:
      'Η εφαρμογή είναι δημόσιο πρωτότυπο με κατασκευασμένα δεδομένα επίδειξης. Δεν είναι επίσημο σύστημα Υπουργείου ή OiRA, δεν αποτελεί πιστοποίηση ISO 45001 και δεν υποκαθιστά την επαγγελματική, νομική ή διοικητική κρίση. Η Διοίκηση παραμένει υπόλογη για την Ασφάλεια και Υγεία στην Εργασία.',
    nextTitle: 'Τρέχουσα κατεύθυνση του έργου',
    nextText:
      'Το επόμενο τεκμηριωμένο ορόσημο είναι η πρώτη λειτουργική κάθετη ενότητα Κάλυψης. Η ανάπτυξη θα συνεχιστεί με μικρά, ελεγχόμενα βήματα και με μία έγκυρη πηγή για κάθε εγγραφή.',
    repositoryLink: 'Repository στο GitHub',
    documentationLink: 'Αναλυτική κατάσταση έργου',
  },
  en: {
    eyebrow: 'People at the centre',
    title: 'Safety, Health and Wellbeing of People at Work',
    intro:
      'The ultimate purpose of the Health and Safety App is to protect and promote the Safety, Health and Wellbeing of people at work. Records, risk assessments, measures, training and reports are management tools that serve this human purpose.',
    badges: ['Public prototype', 'Greek and English', 'Demonstration data only'],
    summaries: [
      {
        title: 'Human purpose',
        text: 'Preventing harm, protecting health and supporting the wellbeing of every person who may reasonably be affected by work.',
      },
      {
        title: 'Current phase',
        text: 'A public frontend prototype with a functional bilingual Overview and project-continuity documentation.',
      },
      {
        title: 'Next milestone',
        text: 'The first functional Coverage vertical slice, followed by gradual implementation of the remaining MVP workflows.',
      },
    ],
    areasTitle: 'The six main product areas',
    areasLead:
      'The application is organized into six stable areas of work. This informational page is a supporting function and is not a seventh primary product area.',
    areas: [
      { title: 'Overview', text: 'Aggregated indicators, gaps, deadlines and matters requiring Management attention.' },
      { title: 'Coverage', text: 'People or groups, organizational units, locations, activities and foreseeable conditions.' },
      { title: 'Risks and Measures', text: 'Written assessments, hazards, controls, measures, verification and reassessment.' },
      { title: 'Training and Preparedness', text: 'Knowledge, participation, preparedness roles and basic evidence.' },
      { title: 'Compliance and Governance', text: 'Requirements, accountability, decisions and Management oversight.' },
      { title: 'Reports', text: 'Aggregated information from authoritative records owned by the relevant modules.' },
    ],
    implementedTitle: 'What works today',
    implemented: [
      'A bilingual, responsive Overview with demonstration content.',
      'Language selection and persistence, including document-language updates.',
      'An accessible mobile sidebar with Escape closing and focus return.',
      'Automated lint and build checks and GitHub Pages deployment configuration.',
    ],
    pendingTitle: 'What is not yet functional',
    pending: [
      'Real routes and functional pages for the main product areas.',
      'Coverage records and workflows and a complete written risk-assessment workflow.',
      'A backend, database, authentication, authorization and audit logging.',
      'Secure attachment handling or the use of real personal and operational data.',
    ],
    noticeTitle: 'Important clarification',
    noticeText:
      'The application is a public prototype using fabricated demonstration data. It is not an official Ministry or OiRA system, does not represent ISO 45001 certification and does not replace professional, legal or Management judgement. Management remains accountable for Safety and Health at Work.',
    nextTitle: 'Current project direction',
    nextText:
      'The next documented milestone is the first functional Coverage vertical slice. Development will continue through small, controlled steps with one authoritative source for every domain record.',
    repositoryLink: 'GitHub repository',
    documentationLink: 'Detailed project status',
  },
}

type AboutAppPageProps = {
  language: Language
}

export function AboutAppPage({ language }: AboutAppPageProps) {
  const copy = aboutAppContent[language]

  return (
    <div className="about-app-page">
      <section className="about-app-hero" aria-labelledby="about-app-title">
        <p className="about-app-eyebrow">{copy.eyebrow}</p>
        <h1 className="about-app-title" id="about-app-title">{copy.title}</h1>
        <p className="about-app-intro">{copy.intro}</p>
        <div className="about-app-badges" aria-label={copy.eyebrow}>
          {copy.badges.map((badge) => (
            <span className="about-app-badge" key={badge}>{badge}</span>
          ))}
        </div>
      </section>

      <section className="about-app-summary-grid" aria-label={copy.title}>
        {copy.summaries.map((summary) => (
          <article className="about-app-summary-card" key={summary.title}>
            <strong>{summary.title}</strong>
            <p>{summary.text}</p>
          </article>
        ))}
      </section>

      <section className="about-app-section">
        <h2>{copy.areasTitle}</h2>
        <p className="about-app-section-lead">{copy.areasLead}</p>
        <div className="about-app-area-grid">
          {copy.areas.map((area, index) => (
            <article className="about-app-area-card" key={area.title}>
              <span className="about-app-area-number">{index + 1}</span>
              <div>
                <strong>{area.title}</strong>
                <span>{area.text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-app-columns">
        <article className="about-app-list-card">
          <h2>{copy.implementedTitle}</h2>
          <ul>
            {copy.implemented.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="about-app-list-card">
          <h2>{copy.pendingTitle}</h2>
          <ul>
            {copy.pending.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <aside className="about-app-notice">
        <strong>{copy.noticeTitle}</strong>
        <p>{copy.noticeText}</p>
      </aside>

      <section className="about-app-next-step">
        <h2>{copy.nextTitle}</h2>
        <p>{copy.nextText}</p>
        <div className="about-app-links">
          <a
            className="about-app-link"
            href="https://github.com/mmark76/Health-and-Safety-App"
            rel="noreferrer"
            target="_blank"
          >
            {copy.repositoryLink}
          </a>
          <a
            className="about-app-link"
            href="https://github.com/mmark76/Health-and-Safety-App/blob/main/docs/PROJECT_STATUS.md"
            rel="noreferrer"
            target="_blank"
          >
            {copy.documentationLink}
          </a>
        </div>
      </section>
    </div>
  )
}
