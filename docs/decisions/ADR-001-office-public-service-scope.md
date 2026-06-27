# ADR-001: Office Public-Service Scope

## Status

Accepted

## Context

The project is an early prototype for occupational safety and health management. The intended environment is the Cyprus Public Service, where the first useful version should support office workplaces and written risk assessment activity.

The Ministry of Energy, Commerce and Industry is used as the initial organizational and operational model because it provides a concrete public-service office structure for early product decisions. This does not make the application an official Ministry system.

The product must avoid implying official endorsement by the Ministry, the Department of Labour Inspection, OiRA, the Napo Consortium, or any European institution.

## Decision

The first version will focus on office workplaces in the Cyprus Public Service.

The Ministry of Energy, Commerce and Industry will be used only as the initial organizational model for prototype structure, terminology, and workflow assumptions.

Construction and industrial functionality is postponed. The current scope will not include construction sites, factories, industrial production, manufacturing, field-work operations, heavy machinery, vehicle fleets, or lifting-equipment management.

The application will grow through modular features, beginning with organizational structure, office areas, written risk assessments, corrective action plans, dashboard monitoring, and reporting.

Later modules will remain outside the initial MVP until deliberately added. Planned later modules include office workplace inspections, hazard, near-miss and incident reporting, first aid and AED, fire safety and evacuation, training and certification management, ESYPP and Safety Committees, documents and registers, management reporting, and Napo educational content.

## Consequences

This decision keeps the first product version focused and easier to validate with office-based public-service safety workflows.

Documentation, dashboard content, demonstration data, and future module descriptions must remain aligned with office workplace safety and health management.

Future expansion can add modules when there is a clear product decision and scope update, but non-office functionality must not be introduced by incidental examples or placeholder content.

The prototype must continue to use demonstration data only and must avoid real personal data or internal government records.

Napo will be a future education and awareness component, but it is not part of the first MVP. Initial use must rely on official links or legally permitted embedding, no Napo media or assets may be copied into the repository until usage rights are verified, and no endorsement by the Napo Consortium or any European institution may be implied.

## Alternatives considered

One alternative was to build a general safety-management platform covering office, construction, industrial, and field-work environments from the beginning. This was rejected because it would blur the first product scope and introduce requirements that are not needed for office workplaces of the Cyprus Public Service.

Another alternative was to model the product as an official government or OiRA-adjacent system. This was rejected because the project has no official endorsement or integration status.
