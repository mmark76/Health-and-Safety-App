import { Icon } from '../components/DashboardIcon'
import type { DashboardView, IconName, Language } from '../types/dashboard'
import './AppSectionPage.css'

type SectionView = Exclude<DashboardView, 'home' | 'overview' | 'about'>

type SectionDefinition = {
  eyebrow: string
  title: string
  intro: string
  icon: IconName
  items: Array<{ title: string; description: string; icon: IconName }>
  note: string
}

type AppSectionPageProps = {
  language: Language
  view: SectionView
}

const greekSections: Record<SectionView, SectionDefinition> = {
  coverage: {
    eyebrow: 'Κύριος τομέας',
    title: 'Κάλυψη',
    intro: 'Προσδιορίζει ποιος ή ποια ομάδα καλύπτεται, σε ποιον χώρο, για ποια δραστηριότητα, υπό ποιες προβλέψιμες συνθήκες και για ποια περίοδο.',
    icon: 'documents',
    items: [
      { title: 'Άτομα και ομάδες', description: 'Ενδεικτική απεικόνιση ομάδων ή ρόλων μόνο όπου χρειάζεται για Ασφάλεια και Υγεία.', icon: 'user' },
      { title: 'Χώροι και δραστηριότητες', description: 'Γραφεία, κοινόχρηστοι χώροι, δραστηριότητες και προβλέψιμες συνθήκες.', icon: 'documents' },
      { title: 'Κενά κάλυψης', description: 'Προβολή κενών που αργότερα θα οδηγούν στην αρμόδια εγγραφή κάλυψης.', icon: 'alert' },
    ],
    note: 'Πρωτότυπη πληροφοριακή σελίδα. Δεν δημιουργεί, αποθηκεύει ή τροποποιεί εγγραφές κάλυψης.',
  },
  'risks-and-measures': {
    eyebrow: 'Κύριος τομέας',
    title: 'Κίνδυνοι και Μέτρα',
    intro: 'Καλύπτει γραπτές εκτιμήσεις κινδύνων, κινδύνους, υπάρχοντες ελέγχους, πρόσθετα μέτρα, επαλήθευση και επανεξέταση.',
    icon: 'risk',
    items: [
      { title: 'Γραπτές εκτιμήσεις', description: 'Μελλοντική ροή προετοιμασίας, αναγνώρισης κινδύνων, αξιολόγησης και σχεδίου δράσης.', icon: 'risk' },
      { title: 'Μέτρα', description: 'Ενδεικτικά μέτρα με ευθύνη, προθεσμία, τεκμήρια και επαλήθευση.', icon: 'actions' },
      { title: 'Επανεξέταση', description: 'Στατική απεικόνιση κύκλου ανασκόπησης και επαναξιολόγησης.', icon: 'calendar' },
    ],
    note: 'Πρωτότυπη πληροφοριακή σελίδα. Δεν υλοποιεί πραγματική ροή εκτίμησης κινδύνου.',
  },
  'training-and-preparedness': {
    eyebrow: 'Κύριος τομέας',
    title: 'Εκπαίδευση και Ετοιμότητα',
    intro: 'Οργανώνει την ελάχιστη εκπαίδευση, συμμετοχή, πιστοποιήσεις και ετοιμότητα που απαιτούνται για τις πρώτες ροές.',
    icon: 'training',
    items: [
      { title: 'Εκπαίδευση', description: 'Ενδεικτικές ανάγκες, συμμετοχές και ανανεώσεις χωρίς πραγματικά πιστοποιητικά.', icon: 'training' },
      { title: 'Ετοιμότητα', description: 'Ρόλοι πρώτων βοηθειών, πυρασφάλειας, εκκένωσης και τοπική κάλυψη.', icon: 'shield' },
      { title: 'Κενά ετοιμότητας', description: 'Στατική απεικόνιση ελλείψεων που θα παρακολουθούνται στο MVP.', icon: 'alert' },
    ],
    note: 'Πρωτότυπη πληροφοριακή σελίδα. Δεν περιέχει πραγματικά πρόσωπα ή πιστοποιήσεις.',
  },
  'compliance-and-governance': {
    eyebrow: 'Κύριος τομέας',
    title: 'Συμμόρφωση και Διακυβέρνηση',
    intro: 'Περιλαμβάνει νομοθεσία, απαιτήσεις, οδηγίες, πολιτικές, λογοδοσία Διεύθυνσης, αποφάσεις και ανασκοπήσεις.',
    icon: 'shield',
    items: [
      { title: 'Νομοθεσία και απαιτήσεις', description: 'Η νομοθεσία παραμένει μέρος του τομέα Συμμόρφωση και Διακυβέρνηση.', icon: 'documents' },
      { title: 'Λογοδοσία Διεύθυνσης', description: 'Η εφαρμογή υποστηρίζει αποφάσεις, χωρίς να μεταφέρει την ευθύνη στη λειτουργία.', icon: 'shield' },
      { title: 'Ανασκοπήσεις', description: 'Μελλοντική σύνδεση απαιτήσεων, αποφάσεων, τεκμηρίων και αναφορών.', icon: 'check' },
    ],
    note: 'Πρωτότυπη πληροφοριακή σελίδα. Δεν παρέχει νομική συμβουλή, επίσημη συμμόρφωση ή πιστοποίηση.',
  },
  reports: {
    eyebrow: 'Κύριος τομέας',
    title: 'Αναφορές',
    intro: 'Συγκεντρώνει πληροφορίες από τους τομείς που κατέχουν τις εγγραφές και τις παρουσιάζει για παρακολούθηση Διεύθυνσης.',
    icon: 'reports',
    items: [
      { title: 'Αναφορές κάλυψης', description: 'Μελλοντική συγκέντρωση κενών και σχέσεων κάλυψης.', icon: 'documents' },
      { title: 'Αναφορές κινδύνων και μέτρων', description: 'Μελλοντική απεικόνιση υψηλών κινδύνων, μέτρων και καθυστερήσεων.', icon: 'risk' },
      { title: 'Αναφορές Διεύθυνσης', description: 'Στατική απεικόνιση θεμάτων που χρειάζονται απόφαση ή προτεραιοποίηση.', icon: 'reports' },
    ],
    note: 'Οι αναφορές διαβάζουν δεδομένα από τους ιδιοκτήτες τομέων και δεν δημιουργούν δεύτερη πηγή αλήθειας.',
  },
  settings: {
    eyebrow: 'Υποστηρικτική επιλογή',
    title: 'Ρυθμίσεις',
    intro: 'Υποστηρικτικές επιλογές της εφαρμογής, χωριστά από τους έξι κύριους τομείς.',
    icon: 'settings',
    items: [
      { title: 'Γλώσσα', description: 'Η αλλαγή γλώσσας λειτουργεί από το πλαϊνό μενού και αποθηκεύεται τοπικά.', icon: 'info' },
      { title: 'Εμφάνιση', description: 'Μελλοντικές προτιμήσεις εμφάνισης και προσβασιμότητας.', icon: 'dashboard' },
      { title: 'Ειδοποιήσεις', description: 'Μελλοντικές προτιμήσεις ενημέρωσης. Δεν υπάρχουν πραγματικές ειδοποιήσεις.', icon: 'bell' },
    ],
    note: 'Οι ρυθμίσεις είναι υποστηρικτική περιοχή και όχι κύριος τομέας προϊόντος.',
  },
}

const englishSections: Record<SectionView, SectionDefinition> = {
  coverage: {
    eyebrow: 'Primary area',
    title: 'Coverage',
    intro: 'Defines who or which group is covered, where, during which activity, under which foreseeable conditions and for which period.',
    icon: 'documents',
    items: [
      { title: 'People and groups', description: 'Illustrative groups or roles only where needed for Safety and Health at Work.', icon: 'user' },
      { title: 'Locations and activities', description: 'Office spaces, shared areas, activities and foreseeable conditions.', icon: 'documents' },
      { title: 'Coverage gaps', description: 'Gaps that will later route to the owning Coverage record.', icon: 'alert' },
    ],
    note: 'Informational prototype page. It does not create, store or modify Coverage records.',
  },
  'risks-and-measures': {
    eyebrow: 'Primary area',
    title: 'Risks and Measures',
    intro: 'Covers written risk assessments, hazards, existing controls, additional measures, verification and reassessment.',
    icon: 'risk',
    items: [
      { title: 'Written assessments', description: 'Future flow for preparation, hazard identification, evaluation and action planning.', icon: 'risk' },
      { title: 'Measures', description: 'Illustrative measures with responsibility, due date, evidence and verification.', icon: 'actions' },
      { title: 'Review', description: 'Static view of the review and reassessment lifecycle.', icon: 'calendar' },
    ],
    note: 'Informational prototype page. It does not implement a real risk-assessment workflow.',
  },
  'training-and-preparedness': {
    eyebrow: 'Primary area',
    title: 'Training and Preparedness',
    intro: 'Organizes the minimal training, participation, certification and preparedness records needed by the first workflows.',
    icon: 'training',
    items: [
      { title: 'Training', description: 'Illustrative needs, participation and renewals without real certificates.', icon: 'training' },
      { title: 'Preparedness', description: 'First aid, fire safety, evacuation and local preparedness coverage.', icon: 'shield' },
      { title: 'Preparedness gaps', description: 'Static view of gaps that the MVP will later track.', icon: 'alert' },
    ],
    note: 'Informational prototype page. It contains no real people or certification records.',
  },
  'compliance-and-governance': {
    eyebrow: 'Primary area',
    title: 'Compliance and Governance',
    intro: 'Includes legislation, requirements, guidance, policies, Management accountability, decisions and reviews.',
    icon: 'shield',
    items: [
      { title: 'Legislation and requirements', description: 'Legislation remains part of the Compliance and Governance domain.', icon: 'documents' },
      { title: 'Management accountability', description: 'The app supports decisions without transferring responsibility to the tool.', icon: 'shield' },
      { title: 'Reviews', description: 'Future linkage between requirements, decisions, evidence and reports.', icon: 'check' },
    ],
    note: 'Informational prototype page. It provides no legal advice, official compliance or certification.',
  },
  reports: {
    eyebrow: 'Primary area',
    title: 'Reports',
    intro: 'Aggregates information from the domain-owning areas and presents it for Management monitoring.',
    icon: 'reports',
    items: [
      { title: 'Coverage reports', description: 'Future summary of coverage gaps and relationships.', icon: 'documents' },
      { title: 'Risk and measure reports', description: 'Future view of high risks, measures and overdue follow-up.', icon: 'risk' },
      { title: 'Management reports', description: 'Static view of matters needing decision or prioritization.', icon: 'reports' },
    ],
    note: 'Reports read from domain owners and do not create a second source of truth.',
  },
  settings: {
    eyebrow: 'Supporting option',
    title: 'Settings',
    intro: 'Supporting application options, separate from the six primary product areas.',
    icon: 'settings',
    items: [
      { title: 'Language', description: 'Language switching works from the sidebar and is stored locally.', icon: 'info' },
      { title: 'Appearance', description: 'Future display and accessibility preferences.', icon: 'dashboard' },
      { title: 'Notifications', description: 'Future alert preferences. No real notifications exist.', icon: 'bell' },
    ],
    note: 'Settings are a supporting area, not a primary product domain.',
  },
}

export function AppSectionPage({ language, view }: AppSectionPageProps) {
  const section = language === 'el' ? greekSections[view] : englishSections[view]
  const status = language === 'el' ? 'Υπό ανάπτυξη / Under development' : 'Under development / Υπό ανάπτυξη'

  return (
    <div className="app-section-page">
      <header className="app-section-hero">
        <span className="app-section-icon"><Icon name={section.icon} /></span>
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h1>{section.title}</h1>
          <p>{section.intro}</p>
        </div>
        <span className="app-section-status">{status}</span>
      </header>

      <div className="app-section-grid">
        {section.items.map((item) => (
          <article className="app-section-card" key={item.title}>
            <span><Icon name={item.icon} /></span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <p className="app-section-note"><Icon name="info" />{section.note}</p>
    </div>
  )
}
