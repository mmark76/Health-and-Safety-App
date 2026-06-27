# Project Product and Build Guide

## 1. Purpose

This guide is the stable product and construction compass for the Health and Safety App. It is the first reference before significant product, architecture, feature, navigation, dashboard, or refactoring work.

It summarizes accepted decisions without replacing the authoritative documents. It must help a stateless future ChatGPT or Codex session reconstruct the product direction without relying on deleted conversations or memory.

## 2. Documentation authority hierarchy

Use this hierarchy when reconstructing context or resolving uncertainty:

1. ADRs are authoritative for formally accepted decisions and their rationale.
2. Requirements documents are authoritative for detailed product functionality and domain behaviour.
3. `PROJECT_ARCHITECTURE.md` is authoritative for module boundaries and domain ownership.
4. `GENERAL_SOFTWARE_PROJECT_GUIDE.md` is authoritative for general software-construction principles.
5. `PROJECT_PRODUCT_GUIDE.md` is the central cross-cutting summary and first reference.
6. `PROJECT_STATUS.md` is authoritative for the current phase, completed work and next approved task.
7. Source code, Git history and CI results show what is actually implemented.

Contradictions must not be resolved silently. Report them and correct the appropriate authoritative document.

## 3. Product identity

The application is a Safety and Health at Work management and documentation system. It is initially and exclusively focused on office workplaces of the Cyprus Public Service.

The Ministry of Energy, Commerce and Industry is used only as the initial organizational and operational model. It provides early structure, terminology and workflow assumptions, but the application is not an official Ministry system.

The current application is a public prototype using fabricated demonstration data.

The application is not:

- an official Ministry system
- an official OiRA application
- endorsed by the Department of Labour Inspection
- ISO 45001 certified
- endorsed by Napo
- endorsed by a European institution

The software supports management and documentation. It cannot by itself guarantee workplace safety, legal compliance, the effectiveness of controls, or correct professional or legal judgement.

## 4. Central mission

The system supports systematic Safety and Health at Work coverage for every person or affected group who may reasonably be affected:

- in every relevant building, workplace or other location
- during all relevant work activities
- under normal, temporary, non-routine, emergency and other reasonably foreseeable conditions
- throughout the relevant validity, assignment or exposure period
- according to applicable legal and other requirements

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

The active product scope is office workplaces of the Cyprus Public Service.

In scope:

- office departments, units and sections
- office buildings, floors and spaces
- meeting rooms, reception areas, corridors, kitchens, welfare areas and archive rooms
- office activities and reasonably foreseeable office conditions
- written office risk assessments, measures, training, preparedness, applicable requirements, Overview indicators and Management reporting

Out of current scope:

- construction sites
- factories, industrial production and manufacturing
- unrelated field-work
- heavy machinery, lifting equipment and vehicle fleets
- specialist high-risk operational environments

## 6. Accepted user-facing product architecture

The accepted primary areas are exactly:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration are supporting functions, not primary product areas.

Overview and Reports aggregate and present information but do not own duplicate business records. Coverage owns foundational coverage entities and relationships. Risks and Measures owns assessments, hazards, controls, actions and reassessments. Training and Preparedness owns competence, certification and preparedness records. Compliance and Governance owns requirements and governance records.

ISO and PDCA provide underlying management logic rather than user navigation.

## 7. Management accountability

Role terms:

- **Accountable:** Management authority ultimately answerable for ensuring the matter is addressed.
- **Responsible:** organizational unit or assigned person that performs the work.
- **Approver:** authorized person or body that formally accepts or approves the result.
- **Advisor / Coordinator:** normally the Safety and Health Officer or another competent role that advises, coordinates, monitors and escalates.
- **Verifier:** competent person who checks that implementation is complete and effective.
- **Participants / affected persons:** persons who provide information, are consulted, receive instructions or are affected by the workflow.

Management remains accountable. Assignment of work does not remove Management accountability. The Safety and Health Officer advises, coordinates, monitors and escalates; the Safety and Health Officer is not the final accountable owner of the whole system.

## 8. Written Risk Assessment

Written Risk Assessment is central, but it does not constitute the whole Safety and Health at Work system. The application also manages coverage, preparedness, requirements, governance, Management accountability and reporting.

Lifecycle:

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

## 9. Domain ownership and evidence

The system follows a single-source-of-truth principle. Each domain record has one authoritative owner.

Examples:

- Person or affected group -> Coverage
- Location -> Coverage
- Written Risk Assessment -> Risks and Measures
- Training certification -> Training and Preparedness
- Applicable requirement -> Compliance and Governance

The originating domain module owns the relationship between evidence and its business record.

A future shared attachment capability may manage file storage, metadata, access control, audit history, retention and attachment security. It must not become a second owner of the underlying domain data.

## 10. Privacy and data minimization

The application is people-centred only for Safety and Health at Work purposes.

Exclude unrelated:

- HR information
- salary information
- performance records
- disciplinary information
- family information
- residential addresses
- medical diagnoses
- complete medical histories

Where special protection is necessary, record only minimum functional information.

Future real-data use requires role-based access control, audit history, secure attachments, retention and deletion, authorization and confidential-record protection.

## 11. Current MVP

The MVP remains limited to one complete vertical slice containing:

- organizational units
- people or affected groups
- locations, buildings, floors and spaces
- work activities
- reasonably foreseeable conditions
- coverage relationships
- coverage-gap identification
- one complete Written Risk Assessment workflow
- hazard evaluation
- measures, assignment, evidence and verification
- minimal training and preparedness records
- basic applicable-requirement linkage
- Overview indicators
- basic Management reporting

Do not expand the MVP without an explicit documented decision.

## 12. Later expansion

Later expansion remains outside the first MVP unless required by the initial vertical slice. Planned later modules include office workplace inspections, hazard, near-miss and incident reporting, first aid and AED, fire safety and evacuation, training and certification management, ESYPP and Safety Committees, documents and registers, management reporting and Napo educational content.

Napo will be used for education and awareness. It is not part of the first MVP. Initial use must rely on official links or legally permitted embedding. No Napo media or assets may be copied into the repository until usage rights are verified, and no endorsement may be implied.

## 13. Construction principles

Build using:

- feature-based architecture
- one clear responsibility per file or module
- low coupling
- explicit interfaces and stable identifiers
- business rules outside React presentation components
- shared code only after genuine reuse
- no premature abstractions
- no duplicate authoritative records
- small controlled vertical slices
- testing as part of development
- accessibility as a permanent requirement
- root-cause fixes rather than accumulated patches

Indicative feature structure only:

```text
src/
  app/
  features/
    dashboard/
    coverage/
    risks-and-measures/
    training-and-preparedness/
    compliance-and-governance/
    reports/
  shared/
```

This guide does not define a final database schema, API, route map or design system.

## 14. Agreed implementation sequence

Current sequence based on accepted documents and actual Git history:

1. Product and architecture foundation - completed
2. Public prototype, CI and deployment - completed
3. Controlled dashboard refactor - completed in commit `d0adfbf`
4. First Coverage vertical slice - next implementation task
5. First complete Written Risk Assessment flow
6. Minimal Training, Preparedness and applicable-requirement linkage
7. Basic Management reporting
8. Gradual later expansion

The task text that expected the dashboard refactor to remain next is stale relative to the repository. Source code and Git history show the refactor is already complete.

## 15. UI and accessibility

Preserve:

- bilingual Greek and English content
- semantic equivalence between languages
- responsive behaviour
- keyboard operation
- focus management
- accessible labels
- `aria-current`
- `aria-expanded`
- `aria-controls`
- `aria-pressed`

The public prototype must keep the demonstration-data indicator visible.

## 16. Public prototype rules

Only fabricated, anonymized or demonstration data may appear publicly.

Exclude real:

- names
- email addresses
- telephone numbers
- internal correspondence
- certificate records
- health information
- costs
- sensitive building or installation information
- unauthorized official branding

Do not claim official status, endorsement, certification or legal compliance.

## 17. New-feature checklist

Before adding a feature, confirm:

- the real Safety and Health at Work problem
- owning product area
- owning domain module
- reused entities and stable identifiers
- duplicate-source-of-truth risk
- responsibility roles
- minimum personal data
- applicable requirements
- lifecycle and states
- evidence ownership
- reassessment or review triggers
- tests and accessibility checks
- MVP necessity
- simplest maintainable implementation

## 18. Cross-references

- [README](../README.md)
- [Start Here - Stateless Project Recovery](START_HERE.md)
- [Current Project Status](PROJECT_STATUS.md)
- [General Software Project Guide](architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md)
- [Project Architecture](architecture/PROJECT_ARCHITECTURE.md)
- [ADR-001: Office Public-Service Scope](decisions/ADR-001-office-public-service-scope.md)
- [ADR-002: Hybrid Product Architecture](decisions/ADR-002-hybrid-product-architecture.md)
- [ADR-003: Repository as Persistent Project Memory](decisions/ADR-003-repository-as-persistent-project-memory.md)
- [Product Scope](requirements/PRODUCT_SCOPE.md)
- [Minimum Viable Product](requirements/MVP.md)
- [Conceptual Domain Model](requirements/DOMAIN_MODEL.md)
- [Core Workflows](requirements/CORE_WORKFLOWS.md)
- [Information Architecture](requirements/INFORMATION_ARCHITECTURE.md)
