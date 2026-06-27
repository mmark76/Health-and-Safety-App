# Health and Safety App

A prototype web application for occupational safety and health management in office workplaces of the Cyprus Public Service.

The application is being shaped around the Ministry of Energy, Commerce and Industry as the initial organizational and operational model. This model is used only to guide early structure, terminology, and workflows. The application is not an official Ministry system, an official OiRA tool, or a system endorsed by the Department of Labour Inspection, the Napo Consortium, or any European institution.

All information currently displayed in the application is demonstration data. The project must not include real names, email addresses, telephone numbers, internal correspondence, real identifiable confidential certificate details, health information, or other personal data from real Ministry or government records. Fabricated demonstration certificate data may be used later if it is clearly non-real and non-identifiable.

## Purpose

The application supports structured occupational safety and health management for public-service office environments. It is intended to help organize office areas, document written risk assessments, track corrective measures, and monitor key safety-management activity from a dashboard.

## Scope

Current scope:

- Office workplaces of the Cyprus Public Service
- Office departments, units, floors, rooms, shared areas, archives, meeting rooms, reception areas, corridors, kitchens, welfare areas, and storage rooms for office supplies
- Written office risk assessments and corrective measures
- Monitoring of office workplace inspections and follow-up actions

The current application scope does not include construction sites, factories, industrial production, field-work operations, heavy machinery, or specialist non-office operational environments.

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

The first minimum viable product focuses on:

- Organizational structure and office areas
- Written risk assessments
- Corrective measures
- Monitoring dashboard

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

## Future Planned Modules

Planned modules include:

- Office risk assessments
- Office workplace inspections
- Hazard, near-miss, and incident reporting
- Corrective action plans
- First aid and AED information
- Fire safety and evacuation
- Training and certification management
- ESYPP and Safety Committees
- Documents and registers
- Management reporting
- Napo educational content
- Settings and administration

These modules are planned as public-service office workplace features. They are not intended to introduce construction, industrial production, manufacturing, field-work, or heavy-machinery functionality into the current product scope.

The later Napo educational-content module will support education and awareness. It is outside the first MVP. Initial implementation must use only official links or legally permitted embedding, and no Napo media or assets may be copied into this repository until usage rights are verified. No endorsement by the Napo Consortium or any European institution must be implied.

## Official-Status Limitations

This application is not:

- An official Ministry system
- An official OiRA tool
- Endorsed by the Department of Labour Inspection
- Endorsed by the Napo Consortium
- Endorsed by any European institution

Any future references to official guidance or educational materials must clearly identify the source and must not imply endorsement.

## Technology

- React
- TypeScript
- Vite
- Oxlint
- npm

## Architecture

The project follows a modular, feature-based architecture.

Current source structure:

- `src/app/` - application entry point
- `src/features/dashboard/` - dashboard feature
- `src/shared/styles/` - shared global styling

The approved architecture guide is stored at:

`docs/architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md`

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
