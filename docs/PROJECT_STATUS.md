# Current Project Status

## Status metadata

- Audit date: 2026-06-28
- Baseline HEAD commit inspected before the recovery documentation task: `ff64ca9fb4a6b3d6e5dd6e4d0533424e7a70fc43`
- Current branch: `main`
- Public prototype URL documented in the repository: `https://health-and-safety.markellosecosystem.com`
- Current project phase: public prototype and project-continuity documentation, before the first functional Coverage vertical slice

The baseline commit above records the starting point of the stateless recovery audit. Later commits may contain the current status and subsequent prototype improvements.

## Completed product work

Completed and documented milestones:

- approved office-public-service scope
- approved hybrid product architecture
- conceptual domain model
- core workflows
- information architecture
- project architecture
- central product and build guide
- human-centred product framing focused on the Safety, Health and Wellbeing of people at work
- bilingual dashboard prototype
- bilingual informational About the App view
- supporting About the App navigation without changing the accepted six primary product areas
- responsive navigation
- mobile sidebar accessibility behaviour
- language switching, language persistence and document-language updates
- demonstration-data labelling
- alignment of dashboard content with the six product areas
- controlled split of the dashboard page into focused dashboard-specific files
- feature-specific `about-app` implementation
- CI workflow for lint and build
- automated GitHub Pages deployment workflow
- custom-domain public prototype configuration

## Currently implemented functionality

Rendered prototype UI:

- one Vite/React single-page application rendered by `src/app/App.tsx`
- bilingual Greek/English Overview dashboard copy
- bilingual Greek/English informational About the App view
- About the App content emphasizing that records and workflows serve the Safety, Health and Wellbeing of people at work
- sidebar navigation showing the six accepted product areas plus Settings and a separate supporting About the App item
- top bar with search field, notifications button and demonstration user profile
- Overview-style metrics, alerts, deadlines, activity, quick actions and product-area cards
- informational summaries of product purpose, current status, the six areas, limitations and the next milestone

Genuinely functional behaviour:

- switching between the Overview and About the App views
- language selection between Greek and English
- language persistence in local storage
- document `<html lang>` updates
- responsive mobile sidebar open/close
- Escape closes the mobile sidebar
- focus returns to the mobile menu button after Escape closes the sidebar
- accessibility attributes including `aria-current`, `aria-expanded`, `aria-controls` and `aria-pressed`
- external links from the About the App view to the repository and current project status
- CI lint/build checks are configured
- GitHub Pages build and deployment workflow using the generated `dist` directory is configured

Placeholder buttons and controls:

- product-area navigation buttons do not route to separate functional product-area pages
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

A visible button, card or informational description must not be treated as proof that the corresponding operational feature exists.

## Current next task

The earlier continuity request expected this to be the next task:

`Controlled refactor of DashboardPage.tsx into focused dashboard-specific files, with no intentional visual, textual, accessibility or behavioural change.`

Repository audit shows that task is already complete in commit `d0adfbf` and in the current `src/features/dashboard/` structure.

The informational About the App view is also complete as a supporting prototype function. It does not change the approved MVP sequence.

The next implementation task remains:

`First functional Coverage vertical slice.`

## Open decisions

No blocking open decisions are currently documented.

Future implementation will still require design decisions for data persistence, authentication, authorization, audit history, attachment storage, role-based access, and detailed UI/workflow behaviour for each MVP slice.

## Known issues and limitations

- The application is a public prototype, not production software.
- Only the Overview and informational About the App views are currently rendered; operational product-area screens are not yet implemented.
- View switching is currently local single-page state rather than route-based navigation.
- Product-area navigation and quick actions are not yet wired to real routes or workflows.
- The `v0.1 · Development` sidebar label remains as non-blocking prototype wording.
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
