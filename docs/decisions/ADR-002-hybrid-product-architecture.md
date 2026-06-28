# ADR-002: Hybrid Product Architecture

## Status

Accepted

## Context

The application is a Safety and Health at Work management system for office workplaces of the Cyprus Public Service. The Ministry of Energy, Commerce and Industry is used only as the initial organizational and operational model.

The product must support operational coverage, written risk assessments, additional and corrective measures, training and preparedness, compliance and governance, and Management reporting. It must also stay clear that it is not an official Ministry system, an official OiRA tool, or endorsed by the Department of Labour Inspection, the Napo Consortium, ISO, or any European institution.

The underlying management logic follows Plan-Do-Check-Act and may map to relevant ISO 45001 concepts, but the application must not claim ISO 45001 certification or compliance.

The existing general software project guide intentionally allows project-specific architecture decisions where needed.

## Decision

The hybrid product architecture is accepted.

The confirmed user-facing product areas are:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration are supporting functions, not primary product areas.

The application is organized around operational coverage and risk-management workflows rather than copying the ISO clause structure into the navigation. ISO and PDCA concepts are an underlying management framework, not the application menu.

Overview and Reports aggregate information but do not own duplicate domain data. Coverage, Risks and Measures, Training and Preparedness, and Compliance and Governance are the main domain-owning areas.

Project-specific architecture documentation takes precedence when the general guide intentionally allows project variation.

The earlier project-specific workflow of working directly on `main` has been superseded for substantive work by ADR-004 and the repository operating instructions. Substantive or multi-file changes should now use a feature branch or worktree and be reviewed through a Pull Request before merging.

## Consequences

The navigation can remain understandable to office users while still supporting a structured management system underneath.

Domain ownership must be explicit. Each domain record must have one authoritative owner, and Overview or Reports must not create duplicate copies of records from domain-owning modules.

The architecture can map to PDCA and ISO 45001 concepts internally without implying certification, compliance, or endorsement.

Documentation and future implementation must use the six product areas consistently.

## Alternatives considered

### 1. Object-centred architecture

An object-centred architecture would organize the product around nouns such as people, buildings, spaces, activities, controls, documents, and requirements. This was rejected as the primary user-facing structure because it would expose internal data organization too directly and would make everyday Safety and Health workflows harder to follow.

### 2. Risk-assessment-centred architecture

A risk-assessment-centred architecture would make written risk assessments the dominant product concept. This was rejected because the product must also manage coverage, training, preparedness, governance, legal requirements, Management accountability, and reporting. Risk assessments are central, but they are not the whole management system.

### 3. ISO/PDCA navigation architecture

An ISO/PDCA navigation architecture would mirror management-system clauses or Plan-Do-Check-Act stages in the application menu. This was rejected because it would be less intuitive for day-to-day users and could imply ISO 45001 compliance or certification. PDCA and ISO concepts should guide the underlying logic, not dictate the menu.

### 4. Hybrid architecture

The hybrid architecture combines operational coverage, risk-management workflows, preparedness, governance, and reporting into six clear product areas. It was selected because it gives users a practical navigation model while preserving clear domain ownership and allowing the system to grow modularly.
