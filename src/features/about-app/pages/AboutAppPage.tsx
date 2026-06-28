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
      'Το Health and Safety App έχει ως τελικό σκοπό την προστασία και προαγωγή της Ασφάλειας, της Υγείας και της Ευημερίας των ανθρώπων στην εργασία. Οι εγγραφές, οι εκτιμήσεις κινδύνου, τα μέτρα, η εκπαίδευση και οι αναφορές είναι τα διαχειριστικά εργαλεία που υπηρετούν αυτόν τον ανθρώπινο σκοπό.',
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
        text: 'Μελλοντική πρόσβαση μπορεί να δοθεί μόνο σε επιλεγμένο εξουσιοδοτημένο προσωπικό του Υπουργείου, σύμφωνα με ρόλο και αρμοδιότητες.',
      },
      {
        title: 'Αρχικά προβλεπόμενοι χρήστες',
        text: 'Οι αρχικά προβλεπόμενοι χρήστες περιλαμβάνουν τον Λειτουργό Ασφάλειας και Υγείας, τον Γενικό Διευθυντή, την Α΄ Διοικητική Λειτουργό και άλλο ειδικά εξουσιοδοτημένο προσωπικό.',
      },
    ],
    areasTitle: 'Οι έξι κύριες περιοχές',
    areasLead:
      'Η εφαρμογή οργανώνεται σε έξι σταθερές περιοχές εργασίας. Η παρούσα πληροφοριακή σελίδα είναι υποστηρικτική και δεν αποτελεί έβδομη κύρια περιοχή.',
    areas: [
      { title: 'Επισκόπηση', text: 'Συγκεντρωτικοί δείκτες, κενά, προθεσμίες και θέματα Διοίκησης.' },
      { title: 'Άνθρωποι, Χώροι και Δραστηριότητες', text: 'Άνθρωποι ή ομάδες, οργανωτικές μονάδες, χώροι, δραστηριότητες και συνθήκες.' },
      { title: 'Γραπτές Εκτιμήσεις Κινδύνων (ΓΕΚ)', text: 'Γραπτές εκτιμήσεις, κίνδυνοι, έλεγχοι, μέτρα, επαλήθευση και επανεκτίμηση.' },
      { title: 'Εκπαίδευση και Ετοιμότητα', text: 'Γνώσεις, συμμετοχή, ρόλοι ετοιμότητας και βασική τεκμηρίωση.' },
      { title: 'Συμμόρφωση και Διακυβέρνηση', text: 'Απαιτήσεις, ευθύνες, αποφάσεις και διοικητική εποπτεία.' },
      { title: 'Αναφορές', text: 'Συγκεντρωτική πληροφόρηση από τις έγκυρες εγγραφές των αρμόδιων ενοτήτων.' },
    ],
    implementedTitle: 'Τι λειτουργεί σήμερα',
    implemented: [
      'Δίγλωσση και responsive Επισκόπηση με ενδεικτικό περιεχόμενο.',
      'Επιλογή και αποθήκευση γλώσσας με ενημέρωση της γλώσσας του εγγράφου.',
      'Προσβάσιμο mobile sidebar με κλείσιμο μέσω Escape και επιστροφή focus.',
      'Υποστηρικτική σελίδα πληροφοριών για τον σκοπό, τους χρήστες και την κατάσταση της εφαρμογής.',
    ],
    pendingTitle: 'Τι δεν λειτουργεί ακόμη',
    pending: [
      'Πλήρεις λειτουργικές σελίδες και ενέργειες για τις κύριες περιοχές.',
      'Εγγραφές και ροές Κάλυψης και ολοκληρωμένη γραπτή εκτίμηση κινδύνου.',
      'Ελεγχόμενη πρόσβαση χρηστών, πρόσβαση σύμφωνα με αρμοδιότητες και ασφαλές ιστορικό σημαντικών ενεργειών.',
      'Ασφαλής αποθήκευση, ασφαλής διαχείριση συνημμένων ή χρήση πραγματικών προσωπικών και επιχειρησιακών δεδομένων.',
    ],
    noticeTitle: 'Σημαντική διευκρίνιση',
    noticeText:
      'Η εφαρμογή προορίζεται ως εσωτερικό εργαλείο εργασίας για την Ασφάλεια, Υγεία και Ευημερία των ανθρώπων στην εργασία. Υποστηρίζει την επαγγελματική και διοικητική κρίση, αλλά δεν την αντικαθιστά. Η Διοίκηση παραμένει υπεύθυνη για τις αποφάσεις, τις υποχρεώσεις και τη διασφάλιση ότι τα θέματα αντιμετωπίζονται κατάλληλα.',
    nextTitle: 'Κατάσταση της εφαρμογής',
    nextText:
      'Η εφαρμογή βρίσκεται σε ενεργή ανάπτυξη ως πρωτότυπο. Η σημερινή έκδοση χρησιμοποιεί μόνο ενδεικτικά δεδομένα και δεν διαθέτει ακόμη ελεγχόμενη πρόσβαση χρηστών. Πραγματικά δεδομένα του Υπουργείου θα μπορούν να χρησιμοποιηθούν μόνο όταν υλοποιηθούν οι απαραίτητοι μηχανισμοί ασφάλειας, πρόσβασης και προστασίας πληροφοριών.',
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
        text: 'Future access may be given only to selected authorized Ministry personnel according to their role and responsibilities.',
      },
      {
        title: 'Initially intended users',
        text: 'The initially intended users include the Safety and Health Officer, the Director General, the First Administrative Officer and other specifically authorized personnel.',
      },
    ],
    areasTitle: 'The six main product areas',
    areasLead:
      'The application is organized into six stable areas of work. This informational page is a supporting function and is not a seventh primary product area.',
    areas: [
      { title: 'Overview', text: 'Aggregated indicators, gaps, deadlines and matters requiring Management attention.' },
      { title: 'People, Locations and Activities', text: 'People or groups, organizational units, locations, activities and foreseeable conditions.' },
      { title: 'Written Risk Assessments', text: 'Written assessments, hazards, controls, measures, verification and reassessment.' },
      { title: 'Training and Preparedness', text: 'Knowledge, participation, preparedness roles and basic evidence.' },
      { title: 'Compliance and Governance', text: 'Requirements, accountability, decisions and Management oversight.' },
      { title: 'Reports', text: 'Aggregated information from authoritative records owned by the relevant modules.' },
    ],
    implementedTitle: 'What works today',
    implemented: [
      'A bilingual, responsive Overview with demonstration content.',
      'Language selection and persistence, including document-language updates.',
      'An accessible mobile sidebar with Escape closing and focus return.',
      'A supporting information page explaining the application purpose, users and status.',
    ],
    pendingTitle: 'What is not yet functional',
    pending: [
      'Complete operational pages and actions for the main product areas.',
      'Coverage records and workflows and a complete written risk-assessment workflow.',
      'Controlled user access, access according to responsibilities and a secure record of important actions.',
      'Secure storage, secure attachment handling or the use of real personal and operational data.',
    ],
    noticeTitle: 'Important clarification',
    noticeText:
      'The application is intended as an internal working tool for the Safety, Health and Wellbeing of people at work. It supports professional and administrative judgement, but it does not replace it. Management remains responsible for decisions, obligations and ensuring that matters are addressed appropriately.',
    nextTitle: 'Application status',
    nextText:
      'The application is in active development as a prototype. The current version uses demonstration data only and does not yet provide controlled user access. Real Ministry data may be used only after the necessary security, access and information-protection controls are implemented.',
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
