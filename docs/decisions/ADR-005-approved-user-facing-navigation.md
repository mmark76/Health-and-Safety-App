# ADR-005: Approved User-Facing Navigation and Nested Functional Areas

## Status

Accepted

## Date

2026-07-02

## Context

ADR-002 established six functional product areas and their domain-ownership boundaries. A later prototype iteration introduced a simpler user-facing navigation based on the way an office user is expected to enter the application: Home, Overview, Legislation, the Safety and Health File, and News and Developments.

The project owner has reviewed the current prototype screens and approved the existing sidebar, landing-page card hierarchy and overall visual direction. The six functional areas remain important for architecture and data ownership, but they must not automatically become six top-level sidebar entries.

The application must therefore distinguish between:

- the navigation and labels presented to users;
- the functional and domain boundaries used internally by the software.

## Decision

### Primary navigation

The approved top-level user-facing navigation is:

1. Home
2. Overview
3. Legislation
4. Safety and Health File
5. News and Developments

### Nested navigation

The approved nested card hierarchy is:

```text
Home
Overview

Legislation
├── European Union
└── Cyprus legislation

Safety and Health File
├── Organisation and responsibilities
├── General Risk Assessment
├── Training and preparedness
└── Legislation, Compliance and Governance

News and Developments
├── European Union
├── Cyprus
└── International developments

Supporting options
├── Useful telephone numbers
├── About the App
└── Settings
```

The Greek labels are:

```text
Αρχική
Επισκόπηση

Νομοθεσία
├── Ευρωπαϊκή Ένωση
└── Κυπριακή νομοθεσία

Φάκελος Ασφάλειας και Υγείας
├── Οργάνωση και αρμοδιότητες
├── Γενική Εκτίμηση Κινδύνων
├── Εκπαίδευση και ετοιμότητα
└── Νομοθεσία, Συμμόρφωση και Διακυβέρνηση

Νέα και Εξελίξεις
├── Ευρωπαϊκή Ένωση
├── Κύπρος
└── Διεθνείς εξελίξεις

Βοηθητικές επιλογές
├── Χρήσιμα τηλέφωνα
├── Σχετικά με την εφαρμογή
└── Ρυθμίσεις
```

### Search and language

Search is a global application-shell function. It remains in the top search bar and is not a navigation item or a Legislation submenu.

The language switch remains in the sidebar and is not part of Settings.

### Settings

Settings contains only real appearance preferences that are currently implemented. It must not contain informational prototype cards, language selection, future-feature descriptions or unrelated thematic content.

### Terminology

The approved Greek terminology changes are:

- `Συμμόρφωση και Διακυβέρνηση` becomes `Νομοθεσία, Συμμόρφωση και Διακυβέρνηση`.
- `Αναφορές` becomes `Εκθέσεις και Αναφορές`.

The English label for the first term is `Legislation, Compliance and Governance`. The concise English label `Reports` remains acceptable for `Εκθέσεις και Αναφορές`.

`Εκθέσεις και Αναφορές` / `Reports` remains a functional reporting capability and is not a separate top-level sidebar item unless a later approved decision changes the navigation.

### Internal architecture and ownership

The internal functional boundaries remain:

- Overview
- Coverage
- Risks and Measures
- Training and Preparedness
- Legislation, Compliance and Governance
- Reports

These boundaries govern source-of-truth ownership, code organisation, services, workflows, reporting and future backend interfaces. They may appear as internal modules, contextual destinations or records without being promoted to top-level navigation.

The user-facing Safety and Health File is a navigation container, not a single monolithic owner of every record. Domain ownership remains distributed as follows:

- Coverage owns people or affected groups, organisational units, locations, activities, foreseeable conditions, validity periods and coverage relationships.
- Risks and Measures owns risk assessments, hazards, controls, evaluations, measures, assignments, evidence, verification and reassessment.
- Training and Preparedness owns competence, participation, certification, drills and preparedness records.
- Legislation, Compliance and Governance owns legal and other requirements, applicability, policies, accountability and governance records.
- Overview and Reports aggregate authoritative information and must not duplicate source records.

The top-level Legislation area provides user-facing access to European Union and Cyprus legislation. Applicability, compliance actions and governance records are managed through the Safety and Health File area `Legislation, Compliance and Governance`, while retaining one authoritative source for each record.

## Consequences

- The existing sidebar and landing-page visual hierarchy are preserved.
- Technical work may add routing, testing, accessibility improvements and stable identifiers without redesigning the approved tree.
- Internal domain modules must not be promoted to top-level navigation without explicit owner approval and a new or superseding ADR.
- The About page may describe the functional areas, but it must not present them as the sidebar tree.
- Documentation, source labels and future Pull Requests must distinguish user-facing navigation from internal domain architecture.
- ADR-002 remains authoritative for internal functional boundaries and domain ownership, but its user-facing navigation decision is superseded by this ADR.
