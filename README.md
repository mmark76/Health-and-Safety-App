# Health and Safety App

A prototype web application for Safety and Health at Work management in office workplaces of the Cyprus Public Service.

The application is being shaped around the Ministry of Energy, Commerce and Industry as the initial organizational and operational model. This model is used only to guide early structure, terminology, and workflows. The application is not an official Ministry system, an official OiRA tool, or a system endorsed by the Department of Labour Inspection, the Napo Consortium, ISO, or any European institution.

All information currently displayed in the application is demonstration data. The project must not include real names, email addresses, telephone numbers, internal correspondence, real identifiable confidential certificate details, health information, or other personal data from real Ministry or government records. Fabricated demonstration certificate data may be used later if it is clearly non-real and non-identifiable.

## Product Mission

The application supports the Ministry in systematically managing and documenting Safety and Health at Work for every person who may reasonably be affected by its work activities, in every relevant building, workplace or other location, during all relevant activities and under normal, temporary, non-routine, emergency and other reasonably foreseeable conditions, throughout the period in which the activity, exposure or responsibility exists.

This is achieved by identifying applicable binding legislation, regulations, requirements, instructions or decisions of competent authorities, official guidance, guidelines, voluntary standards, good practices and educational material; identifying hazards; assessing risks; applying prevention principles; defining technical and organizational protective measures; assigning responsibilities; providing training and preparedness; maintaining evidence; monitoring implementation; and carrying out periodic review and reassessment.

The software supports management and documentation. It cannot by itself guarantee safety, legal compliance, or the effectiveness of controls.

Management remains accountable for Safety and Health at Work. Assigning duties to the Safety and Health Officer, organizational units, committees, employees, or external services does not remove Management's responsibility.

## Scope

Current scope:

- Office workplaces of the Cyprus Public Service
- Office departments, units, floors, rooms, shared areas, archives, meeting rooms, reception areas, corridors, kitchens, welfare areas, and storage rooms for office supplies
- Written office risk assessments and corrective measures
- Training and preparedness records needed by the first workflows
- Basic legal and other requirement linkage
- Monitoring of coverage gaps, high risks, active assessments, overdue measures, and Management reporting

The current application scope does not include construction sites, factories, industrial production, field-work operations, heavy machinery, or specialist non-office operational environments.

## Product Architecture

The product uses a hybrid architecture with six main user-facing product areas:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration are supporting functions, not primary product areas.

The user-facing navigation follows this hybrid structure. The underlying management logic follows the Plan-Do-Check-Act approach and may map to relevant ISO 45001 concepts, but the application must not claim ISO 45001 certification or compliance.

## Current Prototype Status

The project is in an early prototype phase. The implemented application currently provides a bilingual dashboard with demonstration content and a modular frontend structure. The individual operational modules are planned but not yet fully implemented.

## Risk Assessment Workflow

The application follows a five-stage risk assessment workflow:

1. Preparation
2. Hazard identification
3. Risk evaluation
4. Action plan
5. Report preparation

Report preparation completes the five-stage workflow, but periodic review and reassessment remain ongoing lifecycle requirements for office risk management.

## Initial MVP

The first MVP is a limited but complete vertical slice containing:

- Basic Coverage records for organizational units, people or affected groups, buildings, floors, spaces, work activities, and foreseeable conditions
- One complete written risk-assessment workflow
- Creation and assignment of additional or corrective measures
- Basic Training and Preparedness records needed by the first workflows
- Basic Compliance and Governance linkage to legal and other requirements
- An Overview showing coverage gaps, active assessments, high risks, and overdue measures
- Basic Management reporting

The first MVP must not attempt to implement every future module fully.

## Main Office Hazard Categories

Initial office hazard categories include:

- Fire safety and emergency exits
- Electrical safety for office equipment and cabling
- Slips, trips, and falls in office and shared areas
- Ergonomics and display screen equipment
- Indoor air quality, lighting, temperature, and ventilation
- Housekeeping, storage, and safe access routes
- Manual handling of office materials and records
- Psychosocial risks and workload-related factors
- Visitor, reception, and shared-space safety
- Emergency preparedness and evacuation arrangements

## Later Expansion

Later expansion may include:

- Office workplace inspections
- Hazard, near-miss, and incident reporting
- First aid and AED
- Fire safety and evacuation
- Training and certification management
- ESYPP and Safety Committees
- Documents and registers
- Management reporting
- Napo educational content
- Settings and administration

Future detailed modules such as incidents, extensive inspection management, full committee meeting management, advanced document management, and full certification campaign management remain outside the first MVP unless required by the initial vertical slice.

The later Napo educational-content module will support education and awareness. It is outside the first MVP. Initial implementation must use only official links or legally permitted embedding, and no Napo media or assets may be copied into this repository until usage rights are verified. No endorsement by the Napo Consortium or any European institution must be implied.

## Official-Status Limitations

This application is not:

- An official Ministry system
- An official OiRA tool
- Endorsed by the Department of Labour Inspection
- Endorsed by the Napo Consortium
- Endorsed by ISO
- Endorsed by any European institution

Any future references to official guidance, guidelines, voluntary standards, good practices, or educational materials must clearly identify the source and must not imply approval, certification, compliance, or endorsement.

## Technology

- React
- TypeScript
- Vite
- Oxlint
- npm

## Architecture Documentation

The project follows a modular, feature-based architecture guided by:

- `docs/architecture/PROJECT_ARCHITECTURE.md`
- `docs/requirements/INFORMATION_ARCHITECTURE.md`
- `docs/decisions/ADR-001-office-public-service-scope.md`
- `docs/decisions/ADR-002-hybrid-product-architecture.md`
- `docs/architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md`

Project-specific architecture documentation takes precedence where the general guide intentionally allows project variation.

Current source structure:

- `src/app/` - application entry point
- `src/features/dashboard/` - dashboard feature
- `src/shared/styles/` - shared global styling

## Local Development

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

The application will normally be available at:

`http://localhost:5173/`

## Quality Checks

Run the linter:

`npm run lint`

Create a production build:

`npm run build`

## Repository

`https://github.com/mmark76/Health-and-Safety-App`

## Intended Deployment

The application is intended to be hosted through GitHub Pages at:

`https://health-and-safety.markellosecosystem.com`

Deployment has not yet been configured or completed.
