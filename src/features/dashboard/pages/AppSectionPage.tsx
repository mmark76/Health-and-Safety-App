import { Icon } from '../components/DashboardIcon'
import type { DashboardView, IconName, Language } from '../types/dashboard'
import './AppSectionPage.css'

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
  view: Exclude<DashboardView, 'home' | 'overview' | 'about'>
}

const greekSections: Record<AppSectionPageProps['view'], SectionDefinition> = {
  legislation: {
    eyebrow: 'Θεματική ενότητα',
    title: 'Νομοθεσία',
    intro: 'Συγκεντρωτική πρόσβαση στο ευρωπαϊκό και κυπριακό πλαίσιο για την Ασφάλεια και Υγεία στην Εργασία.',
    icon: 'documents',
    items: [
      { title: 'Ευρωπαϊκή Ένωση', description: 'Οδηγίες, κανονισμοί, στρατηγικές και κατευθυντήριες οδηγίες.', icon: 'documents' },
      { title: 'Κυπριακή νομοθεσία', description: 'Νόμοι, κανονισμοί, διατάγματα, εγκύκλιοι και ανακοινώσεις.', icon: 'shield' },
    ],
    note: 'Η καθολική αναζήτηση παραμένει στο επάνω search bar. Η ενότητα θα εμπλουτιστεί με ελεγμένες πηγές και ημερομηνίες ισχύος.',
  },
  'safety-file': {
    eyebrow: 'Κεντρικός φάκελος',
    title: 'Φάκελος Ασφάλειας και Υγείας',
    intro: 'Το ενιαίο σημείο οργάνωσης των στοιχείων, των εκτιμήσεων, των μέτρων και της τεκμηρίωσης Ασφάλειας και Υγείας.',
    icon: 'shield',
    items: [
      { title: 'Οργάνωση και αρμοδιότητες', description: 'Ρόλοι, υπεύθυνοι, ορισμοί, επιτροπές και αποφάσεις.', icon: 'user' },
      { title: 'Γενική Εκτίμηση Κινδύνων', description: 'Γραπτές εκτιμήσεις κινδύνων, μέτρα πρόληψης, αναθέσεις και επαληθεύσεις.', icon: 'risk' },
      { title: 'Εκπαίδευση και ετοιμότητα', description: 'Εκπαιδεύσεις, πιστοποιήσεις, ασκήσεις και σχέδια έκτακτης ανάγκης.', icon: 'training' },
      { title: 'Νομοθεσία, Συμμόρφωση και Διακυβέρνηση', description: 'Απαιτήσεις, εγκρίσεις, ανασκοπήσεις, έλεγχοι και ιστορικό αλλαγών.', icon: 'check' },
    ],
    note: 'Κάθε εγγραφή θα διατηρεί μία έγκυρη πηγή, ώστε να αποφεύγονται διπλά ή αντικρουόμενα στοιχεία.',
  },
  news: {
    eyebrow: 'Ενημέρωση',
    title: 'Νέα και Εξελίξεις',
    intro: 'Επιλεγμένη ενημέρωση για την Ασφάλεια και Υγεία με προτεραιότητα στο ευρωπαϊκό πλαίσιο που ακολουθούμε.',
    icon: 'bell',
    items: [
      { title: 'Ευρωπαϊκή Ένωση', description: 'Νέες πολιτικές, οδηγίες, έρευνες και εκστρατείες ευρωπαϊκών φορέων.', icon: 'shield' },
      { title: 'Κύπρος', description: 'Εθνικές ανακοινώσεις, νομοθετικές εξελίξεις και δράσεις πρόληψης.', icon: 'documents' },
      { title: 'Διεθνείς εξελίξεις', description: 'Καλές πρακτικές, νέες τεχνολογίες και αναδυόμενοι επαγγελματικοί κίνδυνοι.', icon: 'reports' },
    ],
    note: 'Τα νέα θα διαχωρίζονται καθαρά από τη νομοθεσία και από τα επίσημα τεκμήρια του ΦΑΥ.',
  },
  settings: {
    eyebrow: 'Βοηθητική επιλογή',
    title: 'Ρυθμίσεις',
    intro: 'Προσωπικές και λειτουργικές επιλογές της εφαρμογής, χωριστά από τις θεματικές ενότητες.',
    icon: 'settings',
    items: [
      { title: 'Γλώσσα', description: 'Επιλογή ελληνικής ή αγγλικής προβολής.', icon: 'info' },
      { title: 'Εμφάνιση', description: 'Μελλοντικές επιλογές εμφάνισης και προσβασιμότητας.', icon: 'dashboard' },
      { title: 'Ειδοποιήσεις', description: 'Μελλοντική διαχείριση προτιμήσεων ενημέρωσης.', icon: 'bell' },
    ],
    note: 'Οι ρυθμίσεις δεν αποτελούν μέρος του θεματικού κορμού της εφαρμογής.',
  },
  contact: {
    eyebrow: 'Βοηθητική επιλογή',
    title: 'Επικοινωνία',
    intro: 'Χώρος για σχόλια, προτάσεις, ερωτήσεις και αναφορά προβλημάτων σχετικά με την εφαρμογή.',
    icon: 'phone',
    items: [
      { title: 'Αναφορά προβλήματος', description: 'Καταγραφή τεχνικού προβλήματος ή δυσλειτουργίας.', icon: 'alert' },
      { title: 'Πρόταση βελτίωσης', description: 'Υποβολή ιδέας για νέα λειτουργία ή αλλαγή στη δομή.', icon: 'plus' },
      { title: 'Γενική επικοινωνία', description: 'Ερώτηση ή σχόλιο για τον σκοπό και τη χρήση της εφαρμογής.', icon: 'phone' },
    ],
    note: 'Τα πραγματικά στοιχεία και ο τρόπος επικοινωνίας θα προστεθούν πριν από τη δημόσια διάθεση.',
  },
}

const englishSections: Record<AppSectionPageProps['view'], SectionDefinition> = {
  legislation: {
    eyebrow: 'Thematic area',
    title: 'Legislation',
    intro: 'Central access to the European and Cypriot safety and health at work framework.',
    icon: 'documents',
    items: [
      { title: 'European Union', description: 'Directives, regulations, strategies and guidance.', icon: 'documents' },
      { title: 'Cyprus legislation', description: 'Laws, regulations, decrees, circulars and announcements.', icon: 'shield' },
    ],
    note: 'Global search remains in the top search bar. This area will be enriched with verified sources and effective dates.',
  },
  'safety-file': {
    eyebrow: 'Central file',
    title: 'Safety and Health File',
    intro: 'The central place for organising safety and health information, assessments, measures and evidence.',
    icon: 'shield',
    items: [
      { title: 'Organisation and responsibilities', description: 'Roles, responsible persons, appointments, committees and decisions.', icon: 'user' },
      { title: 'General Risk Assessment', description: 'Written risk assessments, preventive measures, assignments and verification.', icon: 'risk' },
      { title: 'Training and preparedness', description: 'Training, certification, exercises and emergency plans.', icon: 'training' },
      { title: 'Legislation, Compliance and Governance', description: 'Requirements, approvals, reviews, inspections and change history.', icon: 'check' },
    ],
    note: 'Each record will retain one authoritative source to prevent duplicate or conflicting information.',
  },
  news: {
    eyebrow: 'Information',
    title: 'News and Developments',
    intro: 'Selected safety and health information prioritising the European framework we follow.',
    icon: 'bell',
    items: [
      { title: 'European Union', description: 'New policies, directives, research and campaigns from European bodies.', icon: 'shield' },
      { title: 'Cyprus', description: 'National announcements, legislative developments and prevention initiatives.', icon: 'documents' },
      { title: 'International developments', description: 'Good practices, new technologies and emerging occupational risks.', icon: 'reports' },
    ],
    note: 'News will remain clearly separate from legislation and official Safety and Health File evidence.',
  },
  settings: {
    eyebrow: 'Supporting option',
    title: 'Settings',
    intro: 'Personal and functional application options, kept separate from the thematic areas.',
    icon: 'settings',
    items: [
      { title: 'Language', description: 'Choose the Greek or English interface.', icon: 'info' },
      { title: 'Appearance', description: 'Future display and accessibility preferences.', icon: 'dashboard' },
      { title: 'Notifications', description: 'Future information and alert preferences.', icon: 'bell' },
    ],
    note: 'Settings are not part of the application’s thematic core.',
  },
  contact: {
    eyebrow: 'Supporting option',
    title: 'Contact',
    intro: 'A place for feedback, suggestions, questions and application issue reports.',
    icon: 'phone',
    items: [
      { title: 'Report an issue', description: 'Record a technical problem or malfunction.', icon: 'alert' },
      { title: 'Suggest an improvement', description: 'Submit an idea for a feature or structural change.', icon: 'plus' },
      { title: 'General contact', description: 'Ask a question or leave a comment about the application.', icon: 'phone' },
    ],
    note: 'Actual contact details and submission methods will be added before public release.',
  },
}

export function AppSectionPage({ language, view }: AppSectionPageProps) {
  const section = language === 'el' ? greekSections[view] : englishSections[view]
  const status = language === 'el' ? 'Σε ανάπτυξη' : 'Under development'

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
