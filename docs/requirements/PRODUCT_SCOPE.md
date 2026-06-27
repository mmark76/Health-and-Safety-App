# Product Scope

## Purpose

The application supports Safety and Health at Work management for office workplaces of the Cyprus Public Service. It is intended to help public-service organizations document coverage, risk assessments, protective and corrective measures, training and preparedness, governance obligations, and Management reporting.

The Ministry of Energy, Commerce and Industry is used as the initial organizational and operational model for early development. This does not make the application an official Ministry system.

The software supports management and documentation. It cannot by itself guarantee safety, legal compliance, or the effectiveness of controls. Management remains accountable even when duties are assigned to the Safety and Health Officer, organizational units, committees, employees, or external services.

## Product Areas

The confirmed user-facing product areas are:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration are supporting functions, not primary product areas.

## Users

Expected users include:

- Safety and Health Officers
- Departmental or unit coordinators
- Office managers and designated responsible persons
- Authorized reviewers of written risk assessments and corrective measures
- Management users reviewing risks, obligations, coverage gaps, and follow-up status

The prototype must use demonstration users only. It must not include real names, email addresses, telephone numbers, health information, internal correspondence, real identifiable confidential certificate details, or personal data from real Ministry or government records. Fabricated demonstration certificate data may be used later if it is clearly non-real and non-identifiable.

## Organizational Scope

The target environment is the Cyprus Public Service. The first version focuses on office-based organizational structures, including ministries, departments, units, sections, and shared office facilities.

## Office Area Types

Initial office area types include:

- General office rooms
- Open-plan office areas
- Meeting and conference rooms
- Reception and public-service counters
- Corridors, stairways, and internal circulation areas
- Archive and records rooms
- Kitchens, break rooms, and welfare areas
- Copy, print, and stationery areas
- Small storage rooms for office supplies
- Server or communications rooms where access is office-managed

## Location Scope

The product uses a general Location concept for any place where persons may reasonably be affected by Ministry work activities. A Location may represent Ministry-controlled buildings and workplaces, buildings shared with other organizations, floors, spaces, temporary office-related workplaces, external locations where Ministry work activities occur, or other relevant locations.

Building, Floor and Space remain structured location types or parts of the location hierarchy. External or temporary locations do not require artificial building or floor records.

The first MVP may implement only the minimum location types required by its vertical slice. Construction sites, industrial locations, manufacturing and unrelated field-work remain outside the active product scope.

## Included Hazard Categories

Included office hazard categories are:

- Fire safety, emergency exits, and evacuation arrangements
- Electrical safety for office equipment, cabling, and sockets
- Slips, trips, and falls
- Display screen equipment and ergonomics
- Indoor air quality, lighting, temperature, and ventilation
- Housekeeping and safe storage
- Manual handling of office files, supplies, and small office equipment
- Psychosocial risks, workload, and work organization
- Visitor and reception-area safety
- Emergency preparedness and first response arrangements

## MVP Scope

The first MVP is a limited but complete vertical slice containing:

- Basic Coverage records for organizational units, people or affected groups, buildings, floors, spaces, work activities, and foreseeable conditions
- One complete written risk-assessment workflow
- Creation and assignment of additional or corrective measures
- Basic Training and Preparedness records needed by the first workflows
- Basic Compliance and Governance linkage to legal and other requirements
- An Overview showing coverage gaps, active assessments, high risks, and overdue measures
- Basic Management reporting

## Later Expansion

Later expansion remains outside the first MVP unless required by the initial vertical slice. Planned later areas include office workplace inspections, hazard, near-miss and incident reporting, first aid and AED, fire safety and evacuation, training and certification management, ESYPP and Safety Committees, documents and registers, management reporting, and Napo educational content.

## Exclusions

The current product scope excludes:

- Construction sites and construction-site inspections
- Factories, industrial production, and manufacturing processes
- Field-work operations
- Heavy machinery, lifting equipment, and vehicle fleets
- Specialist chemical, biological, radiological, or high-risk operational environments
- Medical records, occupational health records, and personal health data

## Privacy Limitations

The prototype may use demonstration data only. It must not contain real personal data, internal correspondence, real identifiable confidential certificate details, health information, telephone numbers, email addresses, or identifiable records from the Ministry or any other public-service organization. Fabricated demonstration certificate data may be used later if it is clearly non-real and non-identifiable.

## Official-Source Limitations

The application must not claim to be an official Ministry system, an official OiRA tool, or endorsed by the Department of Labour Inspection, the Napo Consortium, ISO, or any European institution. The underlying management logic may map to Plan-Do-Check-Act and relevant ISO 45001 concepts, but the application must not claim ISO 45001 certification or compliance.

Compliance and learning sources must be distinguished as binding legislation, regulations, applicable requirements, instructions or decisions of competent authorities, official guidance, guidelines, voluntary standards, good practices, or educational material. Official sources may be referenced in future documentation or educational content only with clear attribution and without implying approval, certification, or endorsement.

## Future Privacy and Security Requirements

Before any real organizational or personal data is used, the system must define and implement role-based access control, audit history for important actions and changes, secure evidence and attachment handling, retention and deletion rules, data minimization, appropriate protection for confidential records, and authorization for viewing, uploading, changing and deleting records.

These are architectural requirements for later implementation, not functionality to be built during the current prototype phase.

## Role of Napo as Future Educational Content

Napo will be used as a future educational component for office safety education and awareness. Napo content is not part of the first MVP. Initial implementation must use only official links or legally permitted embedding, and no Napo media or assets may be copied into this repository until usage rights are verified. Napo content must not be presented as endorsed, integrated, or approved by the Napo Consortium or any European institution.
