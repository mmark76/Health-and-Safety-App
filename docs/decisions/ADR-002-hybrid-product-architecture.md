# ADR-002: Hybrid Product Architecture

## Status

Superseded in part by [ADR-005: Approved User-Facing Navigation and Nested Functional Areas](ADR-005-approved-user-facing-navigation.md)

The functional boundaries and domain-ownership rules in this ADR remain accepted. The earlier decision to expose all six areas directly as the primary user-facing navigation is superseded by ADR-005.

## Context

The application is a Safety and Health at Work management system for office workplaces of the Cyprus Public Service. The Ministry of Energy, Commerce and Industry is used only as the initial organizational and operational model.

The product must support operational coverage, written risk assessments, additional and corrective measures, training and preparedness, legislation, compliance and governance, and Management reporting. It must also stay clear that it is not an official Ministry system, an official OiRA tool, or endorsed by the Department of Labour Inspection, the Napo Consortium, ISO, or any European institution.

The underlying management logic follows Plan-Do-Check-Act and may map to relevant ISO 45001 concepts, but the application must not claim ISO 45001 certification or compliance.

## Original decision

The hybrid functional architecture is accepted. The six functional areas are:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Legislation, Compliance and Governance
6. Reports

Overview and Reports aggregate information but do not own duplicate domain data. Coverage, Risks and Measures, Training and Preparedness, and Legislation, Compliance and Governance are the main domain-owning areas.

The application is organized around operational coverage and risk-management workflows rather than copying the ISO clause structure. ISO and PDCA concepts are an underlying management framework, not the application menu.

## Amendment introduced by ADR-005

The six functional areas above are no longer required to appear as six top-level sidebar entries.

The approved user-facing navigation is now:

- Home
- Overview
- Legislation
- Safety and Health File
- News and Developments

The approved nested card hierarchy and supporting options are defined in ADR-005.

The Safety and Health File is a user-facing navigation container. It does not become a monolithic owner of all Safety and Health records. The domain-ownership boundaries in this ADR remain mandatory.

## Consequences

- The application keeps clear internal functional boundaries and a single authoritative owner for every domain record.
- The user-facing menu may group internal functions into more understandable entry points for office users.
- Overview and Reports must not create duplicate copies of records from domain-owning modules.
- Coverage owns people or affected groups, organizational units, locations, activities, conditions, validity periods and coverage relationships.
- Risks and Measures owns assessments, hazards, controls, evaluations, measures, assignments, evidence, verification and reassessment.
- Training and Preparedness owns competence, participation, certification, drills and preparedness records.
- Legislation, Compliance and Governance owns legislation, legal and other requirements, applicability, policies, accountability and governance records.
- Reports reads and aggregates authoritative information and is not automatically a top-level sidebar item.
- Technical refactoring, routing or accessibility work must preserve the user-facing tree accepted in ADR-005.

## Alternatives considered

### 1. Object-centred architecture

An object-centred architecture would organize the product around nouns such as people, buildings, spaces, activities, controls, documents and requirements. It was rejected as the primary user-facing structure because it would expose internal data organization too directly and make everyday Safety and Health workflows harder to follow.

### 2. Risk-assessment-centred architecture

A risk-assessment-centred architecture would make written risk assessments the dominant product concept. It was rejected because the product must also manage coverage, training, preparedness, governance, legal requirements, Management accountability and reporting.

### 3. ISO/PDCA navigation architecture

An ISO/PDCA architecture would mirror management-system clauses or Plan-Do-Check-Act stages in the menu. It was rejected because it would be less intuitive for day-to-day users and could imply ISO 45001 compliance or certification.

### 4. Hybrid internal architecture with user-centred navigation

This is the current accepted direction. Internal modules preserve clear ownership and modular growth, while ADR-005 defines a simpler top-level menu and nested card hierarchy for users.
