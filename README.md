# Health and Safety App

A human-centred prototype web application for Safety and Health at Work management in office workplaces of the Cyprus Public Service.

Its ultimate aim is to protect and promote the Safety, Health and Wellbeing of people at work. Records, risk assessments, measures, training and reports are management tools that support this human purpose.

The intended operational product is an internal Ministry working tool that primarily supports the Safety and Health Officer in organizing, monitoring and documenting Safety, Health and Wellbeing at work. Initially intended users include the Safety and Health Officer, the Director General, the First Administrative Officer and other specifically authorized Ministry personnel at a later stage.

The application is being shaped around the Ministry of Energy, Commerce and Industry as the initial organizational and operational model. This model guides early structure, terminology and workflows only. The current prototype is not an official Ministry system, an official OiRA tool, or a system endorsed by the Department of Labour Inspection, the Napo Consortium, ISO or any European institution.

All information currently displayed is demonstration data. The project must not include real names, contact details, internal correspondence, identifiable certificate details, health information or other personal, confidential or operational Ministry data.

## Current project state

- **Current phase:** Development frontend prototype and navigation/documentation alignment before functional operational workflows.
- **Implemented:** Bilingual responsive application shell; Home; Overview dashboard; informational landing pages for Legislation, the Safety and Health File, News and Developments, About the App and Useful telephone numbers; functional appearance Settings; language persistence; accessible mobile navigation; CI checks; and GitHub Pages deployment configuration.
- **Prototype-only:** Global search, notifications, profile controls, quick actions, most landing-page cards and operational records remain visual or informational placeholders.
- **Not yet implemented:** Complete routes and deep links, real search, operational records and workflows, backend services, database persistence, authentication, authorization, role-based access, audit logging and secure attachment handling.
- **Data and readiness:** The application uses fabricated demonstration data only, is publicly reachable as a development deployment and is not ready for real operational Ministry data.

For the approved product identity see [ADR-004](docs/decisions/ADR-004-internal-ministry-working-tool-identity.md). For the approved user-facing navigation see [ADR-005](docs/decisions/ADR-005-approved-user-facing-navigation.md).

## Product mission

The application supports the Ministry in systematically managing and documenting Safety and Health at Work for every person who may reasonably be affected by its work activities, in every relevant workplace or location, during relevant activities and under normal, temporary, non-routine, emergency and other reasonably foreseeable conditions.

The software supports management and documentation. It cannot by itself guarantee safety, legal compliance, wellbeing or the effectiveness of controls. Management remains accountable for decisions and obligations. The software supports professional and administrative judgement but does not replace it.

## Active scope

Current scope includes:

- office workplaces of the Cyprus Public Service;
- organizational units, people or affected groups, buildings, floors, spaces and office activities;
- written office risk assessments and preventive or corrective measures;
- training and preparedness records needed by the first workflows;
- applicable legal and other requirements;
- monitoring of coverage gaps, high risks, active assessments, overdue measures and Management information.

The current scope excludes construction sites, factories, industrial production, heavy machinery and unrelated specialist field-work environments.

## Approved user-facing navigation

The persistent sidebar and landing-page hierarchy are:

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

The Greek labels and full decision are recorded in ADR-005.

Search is a global application-shell function in the top search bar. It is not a navigation item. The language switch remains in the sidebar and is not part of Settings.

Settings contains only implemented appearance preferences. It must not contain language selection or future-feature information cards.

The current Settings page implements text size, high contrast, reduced motion and restore-defaults controls. These preferences apply immediately and are stored in localStorage when browser storage is available.

## Internal functional architecture

The internal architecture retains these functional boundaries:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Legislation, Compliance and Governance
6. Reports

These boundaries govern data ownership, code organization and future service interfaces. They are not required to appear as six top-level sidebar entries.

The user-facing Safety and Health File is a navigation container rather than a monolithic data owner. Coverage, Risks and Measures, Training and Preparedness, and Legislation, Compliance and Governance retain separate authoritative records. Overview and Reports aggregate information without duplicating source records.

The approved Greek terminology includes:

- `Νομοθεσία, Συμμόρφωση και Διακυβέρνηση`;
- `Εκθέσεις και Αναφορές`.

Reports remains an internal and contextual capability rather than a separate top-level sidebar item.

## General Risk Assessment workflow

The user-facing Safety and Health File contains the subsection **General Risk Assessment / Γενική Εκτίμηση Κινδύνων**. The underlying written risk-assessment workflow continues to include:

1. Preparation
2. Hazard identification
3. Risk evaluation
4. Action plan
5. Report preparation
6. Periodic review and reassessment

## Initial MVP

The first operational MVP remains a limited complete vertical slice containing:

- basic Coverage records for organizational units, people or affected groups, locations, activities and foreseeable conditions;
- one complete written risk-assessment workflow;
- creation and assignment of additional or corrective measures;
- minimal Training and Preparedness records required by the workflow;
- basic applicable-requirement linkage;
- Overview indicators;
- basic Management reporting.

The MVP must not attempt to implement every future module fully.

## Official-status limitations

This application is not:

- an official Ministry system;
- an official OiRA tool;
- endorsed by the Department of Labour Inspection;
- endorsed by the Napo Consortium;
- endorsed by ISO;
- endorsed by any European institution.

References to legislation, official guidance, voluntary standards, good practices or educational materials must identify their source and must not imply approval, certification, compliance or endorsement.

## Technology

- React
- TypeScript
- Vite
- Oxlint
- npm

## Architecture and project documentation

Start with:

- [AGENTS.md](AGENTS.md)
- [Stateless Project Recovery](docs/START_HERE.md)
- [Project Product and Build Guide](docs/PROJECT_PRODUCT_GUIDE.md)
- [Current Project Status](docs/PROJECT_STATUS.md)
- [Project Architecture](docs/architecture/PROJECT_ARCHITECTURE.md)
- [Information Architecture](docs/requirements/INFORMATION_ARCHITECTURE.md)
- [ADR-002: Hybrid Product Architecture](docs/decisions/ADR-002-hybrid-product-architecture.md)
- [ADR-005: Approved User-Facing Navigation](docs/decisions/ADR-005-approved-user-facing-navigation.md)

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at `http://localhost:5173/`.

## Quality checks

```bash
npm run lint
npm run build
npm test
```

Substantive or multi-file changes should use a feature branch, pass validation and be reviewed through a Pull Request. Squash merge is preferred for a clean `main` history.

## Deployment

Deployment uses GitHub Actions and GitHub Pages. The intended custom domain is:

`https://health-and-safety.markellosecosystem.com`

The public application contains demonstration data only.
