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
}

const aboutAppContent: Record<Language, AboutAppContent> = {
  el: {
    eyebrow: 'Ο άνθρωπος στο επίκεντρο',
    title: 'Ασφάλεια, Υγεία και Ευημερία των Ανθρώπων στην Εργασία',
    intro:
      'Το Health and Safety App έχει ως τελικό σκοπό την προστασία και προαγωγή της Ασφάλειας, της Υγείας και της Ευημερίας των ανθρώπων στην εργασία. Οι εγγραφές, οι εκτιμήσεις κινδύνου, τα μέτρα, η εκπαίδευση και οι αναφορές είναι διαχειριστικά εργαλεία που υπηρετούν αυτόν τον ανθρώπινο σκοπό.',
    badges: ['Προορίζεται για εσωτερική χρήση', 'Ελληνικά και Αγγλικά', 'Μόνο ενδεικτικά δεδομένα'],
    summaries: [
      {
        title: 'Ανθρωποκεντρικός σκοπός',
        text: 'Η πρόληψη βλάβης, η προστασία της υγείας και η υποστήριξη της ευημερίας κάθε ανθρώπου που μπορεί εύλογα να επηρεαστεί από την εργασία.',
      },
      {
        title: 'Κύρια υποστήριξη',
        text: 'Το εργαλείο προορίζεται κυρίως για την υποστήριξη του Λειτουργού Ασφάλειας και Υγείας στην οργάνωση, παρακολούθηση και τεκμηρίωση της εργασίας του.',
      },
      {
        title: 'Προβλεπόμενη πρόσβαση',
        text: 'Μελλοντική πρόσβαση μπορεί να δοθεί μόνο σε επιλεγμένο εξουσιοδοτημένο προσωπικό σύμφωνα με ρόλο και αρμοδιότητες.',
      },
      {
        title: 'Αρχικά προβλεπόμενοι χρήστες',
        text: 'Οι αρχικά προβλεπόμενοι χρήστες περιλαμβάνουν τον Λειτουργό Ασφάλειας και Υγείας, τον Γενικό Διευθυντή, την Α΄ Διοικητική Λειτουργό και άλλο ειδικά εξουσιοδοτημένο προσωπικό.',
      },
    ],
    areasTitle: 'Οι έξι κύριοι τομείς',
    areasLead:
      'Η εφαρμογή οργανώνεται στους έξι σταθερούς τομείς του ADR-002. Η Αρχική, οι Ρυθμίσεις και αυτή η πληροφοριακή σελίδα είναι υποστηρικτικές λειτουργίες και όχι πρόσθετοι κύριοι τομείς.',
    areas: [
      { title: 'Επισκόπηση', text: 'Συγκεντρωτικοί δείκτες, κενά, προθεσμίες και θέματα που απαιτούν προσοχή Διεύθυνσης.' },
      { title: 'Κάλυψη', text: 'Άτομα ή ομάδες, οργανωτικές μονάδες, χώροι, δραστηριότητες, συνθήκες και σχέσεις κάλυψης.' },
      { title: 'Κίνδυνοι και Μέτρα', text: 'Γραπτές εκτιμήσεις, κίνδυνοι, έλεγχοι, μέτρα, επαλήθευση και επανεκτίμηση.' },
      { title: 'Εκπαίδευση και Ετοιμότητα', text: 'Γνώσεις, συμμετοχή, πιστοποιήσεις, ρόλοι ετοιμότητας και βασική τεκμηρίωση.' },
      { title: 'Συμμόρφωση και Διακυβέρνηση', text: 'Νομοθεσία, απαιτήσεις, ευθύνες, αποφάσεις και διοικητική εποπτεία.' },
      { title: 'Αναφορές', text: 'Συγκεντρωτική πληροφόρηση από τις έγκυρες εγγραφές των αρμόδιων τομέων.' },
    ],
    implementedTitle: 'Τι λειτουργεί σήμερα',
    implemented: [
      'Δίγλωσση και responsive Αρχική, Επισκόπηση και πληροφοριακές σελίδες τομέων με ενδεικτικό περιεχόμενο.',
      'Πραγματικές client-side routes για τους κύριους και υποστηρικτικούς προορισμούς.',
      'Επιλογή και αποθήκευση γλώσσας με ενημέρωση της γλώσσας του εγγράφου.',
      'Προσβάσιμο mobile sidebar με Escape, overlay, επιστροφή focus και σαφή ενεργό σύνδεσμο.',
      'Σαφής σήμανση ή απενεργοποίηση controls που δεν έχουν ακόμη πραγματική λειτουργία.',
    ],
    pendingTitle: 'Τι δεν λειτουργεί ακόμη',
    pending: [
      'Πραγματικές εγγραφές Κάλυψης και πλήρης ροή γραπτής εκτίμησης κινδύνου.',
      'Backend, βάση δεδομένων, authentication, authorization ή αποθήκευση πραγματικών δεδομένων.',
      'Πραγματικές ειδοποιήσεις, αναζήτηση, υποβολές φόρμας, uploads ή operational workflows.',
      'Ασφαλής διαχείριση συνημμένων ή χρήση πραγματικών προσωπικών και επιχειρησιακών δεδομένων.',
    ],
    noticeTitle: 'Σημαντική διευκρίνιση',
    noticeText:
      'Η εφαρμογή προορίζεται ως εσωτερικό εργαλείο εργασίας για την Ασφάλεια, Υγεία και Ευημερία των ανθρώπων στην εργασία. Υποστηρίζει την επαγγελματική και διοικητική κρίση, αλλά δεν την αντικαθιστά. Η Διοίκηση παραμένει υπεύθυνη για τις αποφάσεις, τις υποχρεώσεις και τη διασφάλιση ότι τα θέματα αντιμετωπίζονται κατάλληλα.',
    nextTitle: 'Κατάσταση της εφαρμογής',
    nextText:
      'Η εφαρμογή βρίσκεται σε ενεργή ανάπτυξη ως frontend prototype. Η σημερινή έκδοση χρησιμοποιεί μόνο ενδεικτικά δεδομένα και δεν διαθέτει ακόμη ελεγχόμενη πρόσβαση χρηστών. Πραγματικά δεδομένα μπορούν να χρησιμοποιηθούν μόνο μετά την υλοποίηση των απαραίτητων μηχανισμών ασφάλειας, πρόσβασης και προστασίας πληροφοριών.',
  },
  en: {
    eyebrow: 'People at the centre',
    title: 'Safety, Health and Wellbeing of People at Work',
    intro:
      'The ultimate purpose of the Health and Safety App is to protect and promote the Safety, Health and Wellbeing of people at work. Records, risk assessments, measures, training and reports are management tools that serve this human purpose.',
    badges: ['Intended for internal use', 'Greek and English', 'Demonstration data only'],
    summaries: [
      {
        title: 'Human purpose',
        text: 'Preventing harm, protecting health and supporting the wellbeing of every person who may reasonably be affected by work.',
      },
      {
        title: 'Primary support',
        text: 'The tool is intended primarily to support the Safety and Health Officer in organizing, monitoring and documenting professional Safety and Health work.',
      },
      {
        title: 'Intended access',
        text: 'Future access may be given only to selected authorized personnel according to their role and responsibilities.',
      },
      {
        title: 'Initially intended users',
        text: 'The initially intended users include the Safety and Health Officer, the Director General, the First Administrative Officer and other specifically authorized personnel.',
      },
    ],
    areasTitle: 'The six main product areas',
    areasLead:
      'The application is organized into the six stable ADR-002 areas. Home, Settings and this informational page are supporting functions, not additional primary product areas.',
    areas: [
      { title: 'Overview', text: 'Aggregated indicators, gaps, deadlines and matters requiring Management attention.' },
      { title: 'Coverage', text: 'People or groups, organizational units, locations, activities, conditions and coverage relationships.' },
      { title: 'Risks and Measures', text: 'Written assessments, hazards, controls, measures, verification and reassessment.' },
      { title: 'Training and Preparedness', text: 'Knowledge, participation, certifications, preparedness roles and basic evidence.' },
      { title: 'Compliance and Governance', text: 'Legislation, requirements, accountability, decisions and Management oversight.' },
      { title: 'Reports', text: 'Aggregated information from authoritative records owned by the relevant modules.' },
    ],
    implementedTitle: 'What works today',
    implemented: [
      'Bilingual, responsive Home, Overview and informational product-area pages with demonstration content.',
      'Real client-side routes for the primary and supporting destinations.',
      'Language selection and persistence, including document-language updates.',
      'Accessible mobile sidebar behavior with Escape, overlay, focus return and active-route state.',
      'Clear disabled or under-development treatment for controls that do not yet have real functionality.',
    ],
    pendingTitle: 'What is not yet functional',
    pending: [
      'Real Coverage records and a complete written risk-assessment workflow.',
      'Backend, database, authentication, authorization or storage of real data.',
      'Real notifications, search, form submissions, uploads or operational workflows.',
      'Secure attachment handling or the use of real personal and operational data.',
    ],
    noticeTitle: 'Important clarification',
    noticeText:
      'The application is intended as an internal working tool for the Safety, Health and Wellbeing of people at work. It supports professional and administrative judgement, but it does not replace it. Management remains responsible for decisions, obligations and ensuring that matters are addressed appropriately.',
    nextTitle: 'Application status',
    nextText:
      'The application is in active development as a frontend prototype. The current version uses demonstration data only and does not yet provide controlled user access. Real data may be used only after the necessary security, access and information-protection controls are implemented.',
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
      </section>
    </div>
  )
}
