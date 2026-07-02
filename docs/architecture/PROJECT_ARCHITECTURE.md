# Project Architecture

## Purpose

This document defines internal functional boundaries, source-of-truth ownership and module responsibilities. User-facing navigation is defined separately in [ADR-005](../decisions/ADR-005-approved-user-facing-navigation.md) and [INFORMATION_ARCHITECTURE.md](../requirements/INFORMATION_ARCHITECTURE.md).

The user-facing menu and the internal domain architecture are intentionally related but not identical.

## Approved user-facing containers

The persistent top-level navigation is:

- Home
- Overview
- Legislation
- Safety and Health File
- News and Developments

Supporting entries are Useful telephone numbers, About the App and Settings.

The Safety and Health File groups operational work for users but is not a monolithic data-owning module. The top-level Legislation and News areas are user-facing entry points and do not create duplicate legal, compliance or evidence records.

## Internal functional modules

The internal functional boundaries remain:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Legislation, Compliance and Governance
6. Reports

These boundaries support modular code, future services and clear record ownership. They are not required to appear as six top-level sidebar entries.

## Module ownership

### Overview

Overview reads and aggregates information from domain-owning modules. It may show coverage gaps, active assessments, high risks, overdue measures, training or preparedness gaps and governance follow-up indicators.

Overview must not create duplicate copies of domain records.

### Coverage

Coverage owns authoritative records for:

- organizational units;
- people only to the extent required for Safety and Health at Work;
- affected groups;
- Safety and Health roles and assignments;
- locations, buildings, floors and spaces;
- work activities;
- reasonably foreseeable conditions;
- validity periods and coverage relationships.

Coverage defines who or what is covered, where, during which activities, under which foreseeable conditions and for what period.

In the user-facing navigation, Coverage functions are normally reached through **Safety and Health File → Organisation and responsibilities**, through contextual links from Overview or through the General Risk Assessment workflow.

### Risks and Measures

Risks and Measures owns authoritative records for:

- written and general risk assessments;
- assessment scope;
- hazards and affected groups;
- existing controls;
- probability, severity and explicit risk-matrix results;
- additional and corrective measures;
- assignments and deadlines;
- implementation evidence and verification;
- residual risk, review and reassessment.

In the user-facing navigation, these functions are reached primarily through **Safety and Health File → General Risk Assessment**.

Risks and Measures uses Coverage records to define assessment scope and must not duplicate people, locations or activities.

### Training and Preparedness

Training and Preparedness owns authoritative records for:

- training programmes and sessions;
- participation;
- certifications and renewals;
- first aid and AED preparedness;
- fire-safety and evacuation roles;
- drills and preparedness coverage;
- educational awareness material.

In the user-facing navigation, these functions are reached through **Safety and Health File → Training and preparedness**.

### Legislation, Compliance and Governance

Legislation, Compliance and Governance owns authoritative records for:

- legislation and regulations;
- official guidance and guidelines;
- competent-authority requirements, instructions and decisions;
- standards and good practices;
- legal and other requirements;
- applicability and review status;
- policies and procedures;
- Management accountability;
- ESYPP and Safety Committees;
- governance decisions and Management review.

The top-level **Legislation** area gives users direct access to European Union and Cyprus legislation. The Safety and Health File subsection **Legislation, Compliance and Governance** supports applicability, compliance action, accountability, review and governance.

These are two user-facing entry points into one coherent ownership model. They must not create duplicate legal or requirement records.

### Reports

Reports reads and aggregates authoritative data from other modules. The approved Greek label is **Εκθέσεις και Αναφορές**.

Reports may produce Management, coverage, risk, measure, training, preparedness and governance outputs. It is a contextual or internal capability and is not currently a top-level sidebar entry.

Reports must not create duplicate copies of source records.

## Supporting and informational areas

### Home

Home is a user-facing entry point that introduces the application and links to the main areas. It does not own business records.

### News and Developments

News and Developments is informational and is separated from authoritative legislation and Safety and Health File evidence. It may present European Union, Cyprus and international updates without becoming the source of legal obligations.

### Useful telephone numbers

Useful telephone numbers is a supporting area. Real numbers must be added only after official verification and approval. Demonstration or invented contact details must not be presented as real.

### About the App

About the App describes purpose, intended users, current functionality, limitations and internal functional areas. It must not describe the six internal modules as the sidebar tree.

### Settings

Settings contains only implemented appearance preferences: text size, high contrast, reduced motion and restore defaults. Language selection remains a global sidebar control and does not belong in Settings.

### Global search

Search is a global application-shell capability in the top bar. It may search across authoritative records and informational content in the future, but it is not a module or navigation node.

## Evidence ownership

Evidence is not a separate user-facing product module. The originating domain owns the relationship between evidence and its record.

A future shared attachment capability may provide common storage, metadata, access control, audit history, retention and security. It must not become a duplicate source of business ownership.

## Architectural boundaries

- One authoritative source exists for each domain entity.
- People, locations, risk assessments, certifications and legal requirements must not be duplicated across modules.
- Modules communicate through explicit interfaces or stable identifiers.
- UI pages must not contain core business rules.
- Domain rules must not depend on React components.
- Cross-module reporting uses read models or aggregation services.
- Privacy and data minimization are architectural requirements.
- Lifecycle history, validity periods and traceability must be supported.
- The current prototype may use fabricated demonstration data only.
- Before real data is used, the system must implement approved authentication, authorization, role-based access, audit history, secure attachment handling, retention and deletion rules, confidential-record protection and controlled hosting.

## Indicative feature structure

```text
src/
  app/
  features/
    home/
    overview/
    legislation/
    safety-file/
      organisation-and-responsibilities/
      general-risk-assessment/
      training-and-preparedness/
      legislation-compliance-and-governance/
    news/
    useful-telephone-numbers/
    about-app/
    settings/
    coverage/
    risks-and-measures/
    reports/
  shared/
    components/
    domain/
    styles/
```

User-facing feature folders and internal domain packages may evolve separately, provided ownership remains explicit and the approved navigation is preserved.
