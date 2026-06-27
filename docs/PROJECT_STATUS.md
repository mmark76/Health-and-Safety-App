# Current Project Status

## Status metadata

- Audit date: 2026-06-28
- Baseline HEAD commit inspected before this documentation task: `ff64ca9fb4a6b3d6e5dd6e4d0533424e7a70fc43`
- Current branch at audit: `main`
- Public prototype URL documented in the repository: `https://health-and-safety.markellosecosystem.com`
- Current project phase: public prototype and project-continuity documentation, before the first functional Coverage vertical slice

The baseline commit above is the commit inspected before this documentation task. It is not the commit that contains this file.

## Completed product work

Completed and documented milestones:

- approved office-public-service scope
- approved hybrid product architecture
- conceptual domain model
- core workflows
- information architecture
- project architecture
- central product and build guide
- bilingual dashboard prototype
- responsive navigation
- mobile sidebar accessibility behaviour
- language switching, language persistence and document-language updates
- demonstration-data labelling
- alignment of dashboard content with the six product areas
- controlled split of the dashboard page into focused dashboard-specific files
- CI workflow for lint and build
- automated GitHub Pages deployment workflow
- custom-domain public prototype configuration

## Currently implemented functionality

Rendered prototype UI:

- one Vite/React single-page dashboard rendered by `src/app/App.tsx`
- bilingual Greek/English dashboard copy
- sidebar navigation showing the six accepted product areas plus Settings
- top bar with search field, notifications button and demonstration user profile
- Overview-style metrics, alerts, deadlines, activity, quick actions and product-area cards

Genuinely functional behaviour:

- language selection between Greek and English
- language persistence in local storage
- document `<html lang>` updates
- responsive mobile sidebar open/close
- Escape closes the mobile sidebar
- focus returns to the mobile menu button after Escape closes the sidebar
- accessibility attributes including `aria-current`, `aria-expanded`, `aria-controls` and `aria-pressed`
- CI lint/build checks
- GitHub Pages build and deployment workflow using the generated `dist` directory

Placeholder buttons and controls:

- navigation buttons do not route to separate product-area pages
- dashboard quick-action buttons do not create records
- search input is visual only and does not query records
- notifications and profile buttons are visual controls only
- product-area cards are visual entry points only

Demonstration records:

- all displayed metrics, alerts, activities, tasks, names and labels are demonstration content
- there is no real Ministry, personal, health, certificate, operational or confidential data

Infrastructure and deployment functionality:

- React, TypeScript, Vite, Oxlint and npm are configured
- CI runs on pushes and pull requests to `main`
- GitHub Pages deployment runs on pushes to `main` and manual dispatch
- the intended custom domain is documented as `health-and-safety.markellosecosystem.com`

## Not yet implemented

The repository does not yet implement:

- real application routes for the product areas
- Coverage CRUD or real workflows
- a functional Written Risk Assessment workflow
- a backend
- a database
- authentication
- authorization
- audit logging
- real attachments
- real personal or operational data
- production readiness

A visible dashboard button or card must not be treated as proof that the corresponding feature exists.

## Current next task

The attached continuity request expected this to be the next task:

`Controlled refactor of DashboardPage.tsx into focused dashboard-specific files, with no intentional visual, textual, accessibility or behavioural change.`

Repository audit shows that task is already complete in commit `d0adfbf` and in the current `src/features/dashboard/` structure.

The next implementation task after the completed dashboard refactor is:

`First functional Coverage vertical slice.`

## Open decisions

No blocking open decisions are currently documented.

Future implementation will still require design decisions for data persistence, authentication, authorization, audit history, attachment storage, role-based access, and detailed UI/workflow behaviour for each MVP slice.

## Known issues and limitations

- The application is a public prototype, not production software.
- The dashboard is currently the only rendered app screen.
- Product-area navigation and quick actions are not yet wired to real routes or workflows.
- The `v0.1 · Development` sidebar label still exists as non-blocking prototype wording.
- No backend, database, authentication, authorization, audit logging or secure attachment handling exists yet.

## Status update rules

Update this file whenever a material change occurs to:

- current phase
- completed milestone
- implemented functionality
- next approved task
- known blocking issue
- deployment state
- MVP scope

This file does not need to change after every trivial formatting edit.
