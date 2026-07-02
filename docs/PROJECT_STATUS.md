# Current Project Status

## Status metadata

- Status date: 2026-07-02
- Baseline `main` commit: `439c12cfb77055e34a7a7b76a76a60cc84d87a88`
- Current alignment branch: `fix/align-approved-navigation-and-content`
- Project phase: frontend prototype and navigation/documentation alignment
- Public prototype URL: `https://health-and-safety.markellosecosystem.com`

## Approved navigation

Primary sidebar:

1. Home
2. Overview
3. Legislation
4. Safety and Health File
5. News and Developments

Nested landing-page cards:

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
```

Supporting options:

1. Useful telephone numbers
2. About the App
3. Settings

Search remains global in the top bar. The language selector remains in the sidebar. Settings contains only implemented appearance preferences.

ADR-005 records this decision. ADR-002 remains authoritative for internal functional boundaries and domain ownership, but not for the top-level menu.

## Implemented prototype views

- Home
- Overview dashboard
- Legislation landing page
- Safety and Health File landing page
- News and Developments landing page
- About the App
- supporting navigation pages
- global search field in the top bar
- language selector in the sidebar

Current functional behaviour includes local view switching, Greek and English selection, language persistence, document-language updates, responsive sidebar behaviour, Escape-to-close, CI lint/build checks and GitHub Pages deployment.

## Prototype-only elements

- Search does not yet query application content.
- Landing-page cards do not yet open complete operational workflows.
- Quick actions do not create records.
- Notifications and profile controls are placeholders.
- All displayed records, dates and indicators are demonstration content.

## Approved terminology

- `Νομοθεσία, Συμμόρφωση και Διακυβέρνηση`
- `Εκθέσεις και Αναφορές`
- `Γενική Εκτίμηση Κινδύνων` as the user-facing risk-assessment subsection

The concise English label `Reports` remains acceptable for `Εκθέσεις και Αναφορές`.

## Not yet implemented

- complete client-side routes and deep links;
- real global search;
- operational Coverage records;
- complete General Risk Assessment workflow;
- operational training, preparedness, compliance and governance workflows;
- generated reports from authoritative records;
- backend and database;
- authentication, authorization and role-based access;
- audit logging and secure attachments;
- production readiness.

## Open branches and Pull Requests

- PR #11 contains valuable technical improvements but proposes a different top-level navigation. It must be revised to preserve ADR-005 before merge.
- PR #7 and PR #8 contain terminology changes that are now part of the approved direction. Their old branches should not be merged unchanged.

## Next approved task

Apply routing, stable identifiers, accessibility improvements, tests and CI hardening while preserving the ADR-005 sidebar, landing pages and nested card hierarchy.

After technical stabilization, proceed through controlled operational vertical slices, beginning with the foundational Coverage data needed by Organisation and responsibilities and General Risk Assessment.

## Known limitations

- The current application is a development prototype.
- Navigation still uses local React state.
- Several visible controls are not operational.
- The current deployment is not ready for operational Ministry use.

Update this file after material changes to navigation, architecture, phase, implemented functionality, next approved task, deployment or MVP scope.
