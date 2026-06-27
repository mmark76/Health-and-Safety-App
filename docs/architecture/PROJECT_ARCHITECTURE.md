# Project Architecture

## Product Modules

The application uses six main product areas:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration are supporting functions, not primary product areas.

The user-facing navigation follows this hybrid structure. The underlying management logic follows Plan-Do-Check-Act and may map to relevant ISO 45001 concepts, but the application must not claim ISO 45001 certification or compliance.

## Module Ownership

### Overview

Overview reads and aggregates information from the domain-owning modules. It may show coverage gaps, active assessments, high risks, overdue measures, training or preparedness gaps, and governance follow-up indicators.

Overview must not create duplicate copies of domain records.

### Coverage

Coverage owns the authoritative records for:

- Organizational units
- People only to the extent required for Safety and Health at Work
- Affected groups
- Safety and Health roles and assignments
- Locations
- Buildings
- Floors
- Spaces
- Work activities
- Reasonably foreseeable conditions
- Validity periods and coverage relationships

Coverage defines who or what is covered, where, during which activities, under which foreseeable conditions, and for what period.

A Location represents any place where persons may reasonably be affected by Ministry work activities. It may be a Ministry-controlled building or workplace, a building shared with other organizations, a floor, a space, a temporary office-related workplace, an external location where Ministry work activities occur, or another relevant location. Building, Floor and Space remain structured location types or parts of the location hierarchy. External or temporary locations do not require artificial building or floor records. The first MVP may implement only the minimum location types required by its vertical slice; construction sites, industrial locations, manufacturing and unrelated field-work remain outside the active product scope.

### Risks and Measures

Risks and Measures owns the authoritative records for:

- Written risk assessments
- Hazard assessments
- Affected groups within assessments
- Existing controls
- Probability
- Severity
- Explicit risk-matrix result
- Additional measures
- Corrective actions
- Verification
- Residual risk
- Review and reassessment

Risks and Measures uses Coverage records to define assessment scope. It must not duplicate people, buildings, spaces, or activities.

### Training and Preparedness

Training and Preparedness owns the authoritative records for:

- Training programmes
- Training sessions
- Participation
- Certifications
- Renewals
- First aid
- AED
- Fire safety roles
- Evacuation roles
- Drills
- Educational awareness material, including future Napo links or permitted embeds

Napo educational content is a future education and awareness component, outside the first MVP. Initial Napo implementation must use only official links or legally permitted embedding. No Napo media or assets may be copied into the repository until usage rights are verified, and no endorsement must be implied.

### Compliance and Governance

Compliance and Governance owns the authoritative records for:

- Legislation
- Regulations
- Official guidance
- Guidelines
- Applicable requirements, instructions or decisions of competent authorities
- Standards and good practices
- Legal and other requirements register
- Policies and procedures
- Management accountability
- ESYPP
- Safety Committees
- Governance decisions
- Management review

Compliance and Governance links requirements to Coverage, Risks and Measures, Training and Preparedness, evidence, and Reports without duplicating their domain records.

Management remains accountable for Safety and Health at Work. Assigning duties to the Safety and Health Officer, organizational units, committees, employees, or external services does not remove Management's responsibility.

### Reports

Reports reads and aggregates information from domain-owning modules. It may produce Management, coverage, risk, measure, training, preparedness, and governance reports.

Reports must not create duplicate copies of domain records.

## Evidence Ownership

Evidence is not a separate user-facing product module. The originating domain module owns the relationship between evidence and its domain record.

Examples:

- Risks and Measures owns evidence linked to measures, implementation and verification.
- Training and Preparedness owns evidence linked to participation, certification and drills.
- Compliance and Governance owns evidence linked to requirements, decisions, policies and reviews.

A future shared technical evidence or attachment capability may provide common file storage, metadata, access control, audit history, retention and security. This technical capability must not become a duplicate source of domain ownership. Reports and Overview may read evidence metadata but do not own evidence records.

## Architectural Boundaries

- One authoritative source exists for each domain entity.
- People, buildings, risk assessments, certifications, and legal requirements must not be duplicated across modules.
- Modules communicate through explicit interfaces or stable identifiers.
- UI pages must not contain core business rules.
- Domain rules must not depend on React components.
- Cross-module reporting must use read models or aggregation services.
- Shared code is created only after genuine reuse exists.
- Privacy and data minimization are architectural requirements.
- Lifecycle history, validity periods, and traceability must be supported.
- The current prototype may use fabricated demonstration data only.
- Medical diagnoses, personal health histories, salary, performance, disciplinary, and unrelated HR data are out of scope.
- The software supports management and documentation but cannot by itself guarantee safety, legal compliance, or the effectiveness of controls.
- Before any real organizational or personal data is used, the system must define and implement role-based access control, audit history for important actions and changes, secure evidence and attachment handling, retention and deletion rules, appropriate protection for confidential records, and authorization for viewing, uploading, changing and deleting records.
- These privacy and security requirements are for later implementation, not functionality to be built during the current prototype phase.

## Indicative Feature-Based Folder Structure

This structure is indicative only. Source folders are not created or moved as part of this documentation task.

```text
src/
  app/
  features/
    overview/
    coverage/
    risks-and-measures/
    training-and-preparedness/
    compliance-and-governance/
    reports/
    settings/
    user-administration/
  shared/
    components/
    domain/
    styles/
```

## Data Ownership Summary

Overview and Reports are aggregating areas. They read from domain-owning modules and present Management information, but they do not own duplicate domain data.

Coverage, Risks and Measures, Training and Preparedness, and Compliance and Governance are domain-owning areas. Their interfaces must be stable enough for reporting and cross-module workflows without requiring duplicated records.
