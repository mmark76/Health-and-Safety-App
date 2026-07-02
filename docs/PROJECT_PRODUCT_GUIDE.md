# Project Product and Build Guide

## 1. Purpose

This guide is the stable product and construction compass for the Health and Safety App. It is the first reference before significant product, architecture, feature, navigation, dashboard or refactoring work.

It summarizes accepted decisions without replacing the authoritative documents. A stateless future session must be able to reconstruct the product direction without relying on conversation history.

## 2. Documentation authority hierarchy

Use this hierarchy when reconstructing context or resolving uncertainty:

1. Accepted ADRs are authoritative for formally accepted decisions and rationale.
2. Requirements documents are authoritative for detailed product functionality and user paths.
3. `PROJECT_ARCHITECTURE.md` is authoritative for internal module boundaries and domain ownership.
4. `GENERAL_SOFTWARE_PROJECT_GUIDE.md` is authoritative for general software-construction principles.
5. `PROJECT_PRODUCT_GUIDE.md` is the central cross-cutting summary.
6. `PROJECT_STATUS.md` records the current implementation state and next approved task.
7. Source code, Git history, open Pull Requests and CI results show what is actually implemented.

Contradictions must not be resolved silently. Report them and update the appropriate authoritative document.

## 3. Product identity

The application is a Safety and Health at Work management and documentation system focused initially on office workplaces of the Cyprus Public Service.

The Ministry of Energy, Commerce and Industry is used as the initial organizational and operational model. The intended operational product is an internal Ministry working tool that primarily supports the Safety and Health Officer in systematically organizing, monitoring and documenting the Safety, Health and Wellbeing of people at work.

Initially intended users include the Safety and Health Officer, the Director General, the First Administrative Officer and other specifically authorized Ministry personnel at a later stage.

The current implementation is a public development frontend prototype using fabricated demonstration data. It has no operational authentication or authorization and is not ready for real Ministry data.

The application is not:

- an official Ministry system;
- an official OiRA application;
- endorsed by the Department of Labour Inspection;
- ISO 45001 certified or compliant;
- endorsed by Napo;
- endorsed by a European institution.

The software supports management and documentation. It does not replace professional, legal or Management judgement.

## 4. Central mission

The system supports systematic Safety and Health at Work coverage for every person or affected group who may reasonably be affected:

- in every relevant office workplace or location;
- during all relevant work activities;
- under normal, temporary, non-routine, emergency and other reasonably foreseeable conditions;
- throughout the relevant validity, assignment or exposure period;
- according to applicable legal and other requirements.

Core conceptual relationship:

```text
Person or affected group
+ Location
+ Work activity
+ Foreseeable condition
+ Validity period
-> Risk and protection coverage
```

## 5. Active scope

In scope:

- office departments, units and sections;
- office buildings, floors and spaces;
- meeting rooms, reception areas, corridors, kitchens, welfare areas and archive rooms;
- office activities and reasonably foreseeable office conditions;
- written office risk assessments, measures, training, preparedness, applicable requirements, Overview indicators and Management reporting.

Out of current scope:

- construction sites;
- factories, industrial production and manufacturing;
- unrelated field-work;
- heavy machinery and specialist high-risk operational environments.

## 6. Approved user-facing information architecture

ADR-005 is authoritative for the user-facing navigation.

### Primary sidebar

1. Home
2. Overview
3. Legislation
4. Safety and Health File
5. News and Developments

### Nested card hierarchy

```text
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

The corresponding Greek labels are recorded in ADR-005 and must be kept semantically aligned with the English interface.

Search is a global function in the top application bar. It is not a navigation item and must not be added as a Legislation submenu.

The language switch remains in the sidebar and is not part of Settings.

Settings contains only currently implemented appearance preferences: text size, high contrast, reduced motion and restore defaults. Do not place informational prototype cards, language selection, notification controls or future-feature descriptions inside Settings.

The current visual hierarchy, persistent dark sidebar and nested landing-page cards are approved UI references. Routing, testing, accessibility or refactoring work must preserve them unless a later explicit owner decision changes the design.

## 7. Internal functional architecture

The internal functional boundaries remain:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Legislation, Compliance and Governance
6. Reports

These are domain and ownership boundaries, not a requirement for six top-level sidebar items.

Domain ownership rules:

- Coverage owns people or affected groups, organizational units, locations, activities, conditions, validity periods and coverage relationships.
- Risks and Measures owns assessments, hazards, controls, evaluations, measures, assignments, evidence, verification and reassessment.
- Training and Preparedness owns competence, participation, certification, drills and preparedness records.
- Legislation, Compliance and Governance owns legislation, requirements, applicability, policies, accountability and governance records.
- Overview and Reports aggregate authoritative information and must not duplicate source records.

The Safety and Health File is a user-facing container. It does not become a second or monolithic owner of all records.

The top-level Legislation area provides access to European Union and Cyprus legislation. Applicability, compliance actions and governance records are handled through `Legislation, Compliance and Governance` while retaining one authoritative source for each record.

`Reports` is presented in Greek as `Εκθέσεις και Αναφορές`. It remains an internal or contextual reporting capability rather than a top-level sidebar entry.

The Useful telephone numbers page is a supporting placeholder until officially verified telephone information is approved. Do not invent or publish real-looking numbers.

## 8. Management accountability

Role terms:

- **Accountable:** Management authority ultimately answerable for ensuring the matter is addressed.
- **Responsible:** organizational unit or assigned person that performs the work.
- **Approver:** authorized person or body that formally accepts or approves the result.
- **Advisor / Coordinator:** normally the Safety and Health Officer or another competent role that advises, coordinates, monitors and escalates.
- **Verifier:** competent person who checks that implementation is complete and effective.
- **Participants / affected persons:** persons who provide information, are consulted, receive instructions or are affected by the workflow.

Management remains accountable. Assignment of work does not remove Management accountability.

## 9. General Risk Assessment and written-assessment workflow

The approved user-facing subsection is `General Risk Assessment / Γενική Εκτίμηση Κινδύνων`.

The underlying written risk-assessment lifecycle remains:

```text
Coverage scope
-> Hazard identification
-> Affected persons or groups
-> Existing controls
-> Risk evaluation
-> Additional measures
-> Responsibility and deadline
-> Implementation evidence
-> Verification
-> Review and reassessment
```

The qualitative risk matrix uses explicit category lookup rather than arbitrary numeric multiplication.

Canonical risk levels:

- Negligible / Αμελητέα
- Low / Χαμηλή
- Medium / Μέτρια
- High / Υψηλή

## 10. Privacy and data minimization

Exclude unrelated:

- HR information;
- salary information;
- performance and disciplinary records;
- family information;
- residential addresses;
- medical diagnoses and complete medical histories.

Future real-data use requires role-based access control, audit history, secure attachments, retention and deletion rules, authorization and controlled internal hosting.

## 11. Current MVP

The first operational MVP remains limited to one complete vertical slice containing:

- organizational units;
- people or affected groups;
- locations, buildings, floors and spaces;
- work activities and reasonably foreseeable conditions;
- coverage relationships and gap identification;
- one complete written risk-assessment workflow;
- hazard evaluation;
- measures, assignment, evidence and verification;
- minimal training and preparedness records;
- basic applicable-requirement linkage;
- Overview indicators;
- basic Management reporting.

Do not expand the MVP without an explicit documented decision.

## 12. Later expansion

Later modules may include office inspections, hazard and incident reporting, first aid and AED, fire safety and evacuation, full training and certification management, ESYPP and Safety Committees, documents and registers, management reporting and Napo educational content.

Napo use must rely on official links or legally permitted embedding. No Napo media may be copied into the repository until rights are verified and no endorsement may be implied.

## 13. Construction principles

Build using:

- feature-based architecture;
- one clear responsibility per file or module;
- low coupling and stable identifiers;
- business rules outside React presentation components;
- no duplicate authoritative records;
- small controlled vertical slices;
- testing as part of development;
- accessibility as a permanent requirement;
- root-cause fixes rather than accumulated patches.

Substantive work must use a feature branch or worktree, pass validation and be reviewed through a Pull Request. Preserve the approved navigation and nested card hierarchy during technical improvements.
