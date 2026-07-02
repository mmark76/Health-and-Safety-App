# Information Architecture

## 1. Purpose

This document defines the approved user-facing information architecture for the Health and Safety App. Internal module boundaries and user-facing navigation are related but are not the same thing.

The visual layout is not defined here. The approved sidebar and landing-page hierarchy are recorded in ADR-005.

## 2. Navigation principles

- Organize navigation around clear user entry points.
- Preserve the persistent sidebar and nested landing-page cards.
- Keep one authoritative owner for each domain record.
- Overview and Reports aggregate information without duplicating source records.
- Keep the Greek and English interfaces semantically aligned.
- Keep global utilities separate from thematic navigation.
- Management remains accountable; the Safety and Health Officer supports, coordinates, monitors and escalates.

## 3. Global application shell

The application shell includes:

- persistent left sidebar;
- top bar;
- global search in the top search bar;
- notifications and profile controls;
- language selector in the sidebar;
- breadcrumbs where useful;
- demonstration-data indicators during the prototype phase.

Search is a global function. It is not a navigation item and is not a Legislation submenu. The language selector remains outside Settings.

## 4. Approved navigation tree

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

Greek labels:

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

## 5. Main areas

### Home

Home introduces the application and links to the Safety and Health File, Legislation, Overview and News. It owns no business records.

### Overview

Overview presents indicators, alerts, deadlines and recent activity. It links to authoritative source records when operational workflows are implemented.

### Legislation

Legislation provides direct access to European Union and Cyprus legislation. A separate thematic-search card is not part of the approved tree because search is global.

The Legislation page is a user-facing read and discovery entry point. It does not create a second source for legal or requirement records.

### Safety and Health File

The Safety and Health File is the main user-facing operational container. It is not a monolithic domain owner.

#### Organisation and responsibilities

Expected content includes organizational structure, people or affected groups, roles, assignments, locations, activities, conditions and coverage relationships.

Internal owner: Coverage.

#### General Risk Assessment

Expected content includes written assessments, scope, hazards, existing controls, qualitative risk evaluation, additional measures, assignments, evidence, verification, review and reassessment.

Internal owner: Risks and Measures.

#### Training and preparedness

Expected content includes training, participation, certifications, preparedness roles, drills and related evidence.

Internal owner: Training and Preparedness.

#### Legislation, Compliance and Governance

Expected content includes applicable requirements, applicability, policies, accountability, committees, decisions and Management review.

Internal owner: Legislation, Compliance and Governance.

The top-level Legislation page and this operational subsection are two user paths into one coherent ownership model. They must not create duplicate records.

### News and Developments

News is grouped into European Union, Cyprus and International developments. Informational news remains separate from binding legislation and official Safety and Health File evidence.

## 6. Supporting areas

### Useful telephone numbers

This page is a supporting reference area. Contact information must be added only after verification through an approved source.

### About the App

About the App presents purpose, intended users, current functionality, limitations and internal functional areas. It must not describe the six internal modules as the sidebar tree.

### Settings

Settings contains only implemented appearance preferences: text size, high contrast, reduced motion and restore defaults. It does not contain language selection, notification settings, future-feature cards, thematic content or general prototype explanations.

## 7. Internal ownership map

| User-facing entry | Internal owner or role |
| --- | --- |
| Home | Navigation only |
| Overview | Aggregation only |
| Legislation | Read/discovery entry into Legislation, Compliance and Governance |
| Organisation and responsibilities | Coverage |
| General Risk Assessment | Risks and Measures |
| Training and preparedness | Training and Preparedness |
| Legislation, Compliance and Governance | Legislation, Compliance and Governance |
| News and Developments | Informational content |
| Useful telephone numbers | Supporting reference content |
| Reports / Εκθέσεις και Αναφορές | Cross-domain aggregation; not top-level navigation |

## 8. Cross-area navigation

- Overview gap → relevant Coverage record.
- Person or affected group → locations, roles, training and measures.
- Location → activities, assessments, preparedness and measures.
- Legislation item → authoritative source and applicable requirement where available.
- Requirement → applicability, assessments, controls and evidence.
- Risk assessment → scope, hazards, measures and review history.
- Report result → authoritative source record.

Cross-area navigation must point to the owning record.

## 9. Global actions and search

Future permission-aware actions may include adding coverage, starting a General Risk Assessment, creating a measure, recording training, adding a requirement, recording a Management decision and generating a report.

Global search remains in the top bar. Future filters may include organization, location, affected group, status, priority and due date.

## 10. MVP information architecture

The first operational MVP should expose the smallest complete vertical slice needed for:

- basic organizational units;
- people or affected groups;
- locations and office activities;
- coverage relationships and gaps;
- one complete written risk-assessment workflow under General Risk Assessment;
- measures, assignment, evidence and verification;
- minimal training and preparedness records;
- basic applicable-requirement linkage;
- Overview indicators;
- basic Management reporting.

Reports are presented in Greek as `Εκθέσεις και Αναφορές` and remain contextual rather than a separate top-level menu item.
