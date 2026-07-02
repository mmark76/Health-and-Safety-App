# AGENTS.md

Permanent operating instructions for ChatGPT, Codex, GitHub Copilot, Claude, Gemini and any other AI agent working in this repository.

This file is the first operational entry point for AI-assisted work. It does not replace the Architecture Decision Records, requirements, architecture documents or project-status records. When documents disagree, follow the authority hierarchy below and report the conflict instead of resolving it silently.

## 1. Mandatory startup protocol

Before making a substantive product, architecture, navigation, feature, refactoring, data-model, security or workflow change:

1. Confirm the current branch, HEAD commit and repository status.
2. Read this file completely.
3. Read [docs/START_HERE.md](docs/START_HERE.md).
4. Read [docs/PROJECT_PRODUCT_GUIDE.md](docs/PROJECT_PRODUCT_GUIDE.md).
5. Read [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md).
6. Read every relevant ADR, architecture document and requirement.
7. Inspect recent Git history, open Pull Requests and relevant branches.
8. Inspect the current source and CI/deployment configuration.
9. Report any contradiction, stale instruction, unresolved review comment or scope ambiguity.
10. Do not begin substantive implementation until the recovery check is complete and the task is consistent with the authoritative documents.

For a very small, clearly isolated correction, use proportional judgement, but still verify that it does not contradict an ADR, introduce real data, weaken accessibility or change the approved product scope.

## 2. Documentation authority hierarchy

Use the following order when reconstructing context or resolving uncertainty:

1. Accepted ADRs: formally approved decisions and rationale.
2. Requirements documents: detailed product and domain behaviour.
3. `docs/architecture/PROJECT_ARCHITECTURE.md`: module boundaries and ownership.
4. `docs/architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md`: general construction principles.
5. `docs/PROJECT_PRODUCT_GUIDE.md`: cross-cutting product and build summary.
6. `docs/PROJECT_STATUS.md`: current phase, implemented work and next approved task.
7. Source code, Git history, Pull Requests and CI results: what is actually implemented.
8. Issue or task wording: valid only when it does not silently override the documents above.

A later accepted ADR may supersede an earlier ADR. Code does not automatically supersede an accepted decision merely because it was merged.

## 3. Product identity

The intended operational product is an internal Cyprus Public Service working tool for Safety and Health at Work. It primarily supports the Safety and Health Officer in organizing, monitoring and documenting the Safety, Health and Wellbeing of people at work.

Initially intended users include:

- the Safety and Health Officer
- the Director General
- the First Administrative Officer
- other specifically authorized Ministry personnel at a later stage

Management remains accountable for decisions and obligations. The application supports professional and administrative judgement; it does not replace it.

The current implementation is a public development prototype using fabricated demonstration data. It is not ready for operational Ministry use or real organizational and personal data.

The application must never be presented as:

- an official Ministry system
- an official OiRA tool
- endorsed by the Department of Labour Inspection
- ISO 45001 certified or compliant
- endorsed by the Napo Consortium
- endorsed by an EU or other public institution

## 4. Active scope

The active scope is office workplaces of the Cyprus Public Service.

Included examples:

- office organizational units and affected groups
- buildings, floors, rooms and shared office spaces
- office work activities and foreseeable conditions
- written office risk assessments
- preventive and corrective measures
- training and preparedness records needed by the approved MVP
- applicable legal and other requirements
- Management overview and reporting

Excluded from the current scope unless an explicit decision changes it:

- construction sites
- factories and industrial production
- heavy machinery and specialist operational environments
- unrelated field work
- medical records and complete health histories
- HR, salary, performance, disciplinary or family information

Do not expand the MVP or domain scope without an explicit documented decision.

## 5. Accepted architecture and navigation

ADR-002 defines the accepted internal functional boundaries and domain-ownership rules:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Legislation, Compliance and Governance
6. Reports

ADR-005 supersedes ADR-002 only for the user-facing navigation. The approved top-level sidebar is:

1. Home
2. Overview
3. Legislation
4. Safety and Health File
5. News and Developments

Supporting options are Useful telephone numbers, About the App and Settings. Settings and user administration are supporting functions, not primary product areas. Reports is an internal or contextual capability and is not currently a top-level sidebar item.

Domain ownership rules:

- Coverage owns people or affected groups, organizational units, locations, activities, conditions, validity periods and coverage relationships.
- Risks and Measures owns assessments, hazards, controls, evaluations, measures, assignments, evidence, verification and reassessment.
- Training and Preparedness owns competence, participation, certification, drills and preparedness records.
- Legislation, Compliance and Governance owns legislation, requirements, policies, accountability and governance records.
- Overview and Reports read and aggregate; they must not become duplicate owners of source records.

Each domain record has one authoritative owner. Avoid duplicate sources of truth.

## 6. Navigation resolution

ADR-005, accepted on 2 July 2026, resolves the earlier documentation-and-code conflict about whether the six internal functional areas must appear as six top-level sidebar items.

Current rules:

- preserve the approved dark sidebar and nested landing-page hierarchy;
- do not expose Coverage, Risks and Measures, Training and Preparedness, Legislation, Compliance and Governance or Reports as separate top-level sidebar items unless a later ADR approves it;
- keep Search as a global top-bar function, not a navigation item or Legislation submenu;
- keep the language selector at the bottom of the sidebar and out of Settings;
- keep Settings limited to implemented appearance preferences;
- retain ADR-002 domain ownership internally and avoid duplicate sources of truth.

## 7. Current implementation limits

Treat visible prototype content honestly. At the current stage:

- navigation is local React state rather than route-based application navigation
- most thematic pages are informational landing pages
- search, notifications, profile controls, quick actions and legal footer links are placeholders
- there is no backend or database
- there is no authentication or authorization
- there is no role-based access control
- there is no audit trail
- there is no secure attachment handling
- there is no controlled internal hosting
- there is no complete operational workflow

A visible control or page is not proof that its business function exists.

## 8. Privacy, security and data restrictions

Use demonstration data only.

Never add real:

- names or contact details
- Ministry or government records
- internal correspondence
- health information or diagnoses
- certificate records that identify a person
- sensitive building, installation or security information
- credentials, API keys, secrets or tokens

Before any real operational data can be introduced, the system must have approved and implemented controls for authentication, authorization, role-based access, audit history, secure attachments, retention and deletion, confidential-record protection and controlled internal hosting.

Do not claim that these controls exist before they are implemented and verified.

## 9. Git and Pull Request workflow

For substantive or multi-file work:

1. Start from a clean and synchronized `main`.
2. Create a focused worktree or feature branch.
3. Keep one logical task per branch and Pull Request.
4. Avoid unrelated refactoring.
5. Use small, understandable commits.
6. Run all required validation.
7. Inspect the complete final diff.
8. Open a Pull Request with an accurate summary, scope, validation and limitations.
9. Resolve or explicitly disposition all material review comments before merge.
10. Prefer squash merge for a clean `main` history.
11. Delete obsolete branches after merge or closure.

Direct changes to `main` should be limited to trivial corrections or explicit owner instructions.

Do not merge merely because CI is green. CI currently verifies technical build quality, not product governance, legal correctness, domain validity or architectural conformity.

## 10. Coding and architecture rules

- Use a modular, feature-based structure.
- Keep one clear responsibility per file or module.
- Keep feature-specific code inside its feature until genuine reuse exists.
- Do not place business rules in React presentation components.
- Keep domain rules independent from the UI framework.
- Use explicit interfaces and stable identifiers.
- Avoid global mutable state, cyclic dependencies and deep cross-feature imports.
- Prefer root-cause fixes over accumulated patches.
- Avoid premature abstractions and unnecessary dependencies.
- Keep files reasonably small and split them when responsibilities diverge.
- Preserve existing behaviour unless a change is explicitly approved.
- Update documentation when a material product or architecture decision changes.
- Create or supersede an ADR for significant architectural decisions.

## 11. Bilingual and accessibility requirements

Greek and English are permanent product requirements.

For every user-facing change:

- preserve semantic equivalence between Greek and English
- avoid translating only one language
- preserve document-language updates and language persistence
- use semantic HTML
- ensure keyboard operation
- preserve visible focus indication
- maintain appropriate accessible names and labels
- use `aria-current`, `aria-expanded`, `aria-controls` and `aria-pressed` where applicable
- manage focus when opening or closing modal or overlay navigation
- respect reduced-motion preferences
- verify responsive behaviour at narrow and desktop widths
- do not rely on colour alone to communicate status

Placeholder controls must be clearly non-deceptive. Prefer disabling or labelling them as unavailable rather than making inactive controls appear fully operational.

## 12. Dependency and supply-chain discipline

- Add a dependency only when the task cannot be solved cleanly with the existing stack.
- Prefer maintained, well-documented packages with compatible licences.
- Never paste unknown third-party code without checking its origin and licence.
- Keep the lockfile synchronized.
- Do not weaken CI, TypeScript or lint rules merely to make a change pass.
- Recommend automated dependency updates and security scanning when appropriate.

## 13. Required validation

At minimum, after a code change run:

```bash
npm ci
npm run lint
npm run build
npm test
git diff --check
```

Where relevant, also perform:

- unit, component, integration or end-to-end tests
- keyboard and focus testing
- desktop and mobile visual inspection
- route and refresh testing
- accessibility checks
- dependency/security scanning
- verification that no real or sensitive data entered the diff

The repository currently has no comprehensive automated test suite. Do not describe lint and build as full testing.

If a validation step cannot be performed, state that clearly in the Pull Request and final report.

## 14. Review checklist

Review every material change for:

- consistency with accepted ADRs and scope
- correct domain ownership
- duplicate-source-of-truth risk
- privacy and data minimization
- security assumptions
- accurate prototype wording
- Greek/English equivalence
- accessibility and responsive behaviour
- maintainability and file responsibility
- hidden coupling and regressions
- adequate tests and validation
- documentation updates
- unresolved review comments
- obsolete branches or Pull Requests

Severity guidance:

- P0: data exposure, destructive behaviour, credential leakage or severe operational safety risk
- P1: architecture, authorization, privacy, correctness or major workflow failure
- P2: maintainability, accessibility, incomplete behaviour or significant UX issue
- P3: minor quality, consistency or documentation improvement

## 15. Prohibited agent behaviour

An AI agent must not:

- silently override an accepted ADR
- invent project-owner approval
- introduce real data
- claim official, legal, security or production status without evidence
- merge with unresolved material review feedback
- hide failed or unperformed validation
- fabricate test results, screenshots, links or deployment status
- delete branches, files or data without a clear task and impact review
- perform broad refactoring unrelated to the requested change
- create duplicate documentation that competes with an existing authoritative file
- expand the MVP because a future feature appears useful
- use the current public prototype as if it were a secure internal system

## 16. Completion and handoff report

At the end of a task, report:

- task completed
- branch and commit or Pull Request
- files changed
- key design decisions
- validation actually performed and its result
- tests not available or not performed
- known limitations
- documentation or ADR changes
- unresolved conflicts, review comments or follow-up items
- whether the change is safe to merge

Do not say a task is complete when implementation, validation, documentation or required review remains unfinished.

## 17. Definition of done

A material change is complete only when:

- it satisfies the requested scope
- it is consistent with accepted decisions or includes an approved decision update
- privacy and security restrictions are preserved
- Greek and English remain aligned
- accessibility is not knowingly degraded
- lint and build pass
- relevant tests pass, or their absence is explicitly recorded
- the final diff is reviewed
- documentation is updated where necessary
- no material review thread remains unresolved
- the Pull Request accurately describes the result and limitations

## 18. Owner approval gates

Explicit project-owner approval is required before:

- replacing or superseding an accepted product architecture
- expanding the MVP
- introducing a backend, database or authentication architecture
- using any real Ministry, personal or operational data
- selecting production hosting or identity providers
- changing domain ownership
- adding sensitive-data collection
- introducing external integrations that transmit project data
- deleting or rewriting significant history or documentation

When approval is missing, prepare the options and consequences, but do not present an unapproved option as the accepted direction.
