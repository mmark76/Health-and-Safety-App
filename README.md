# Health and Safety App

A modular web application for managing essential health and safety activities.

## Current scope

The current development phase establishes the application foundation and the initial dashboard page.

Planned dashboard modules include:

- Risk Assessments
- Inspections
- Incidents & Near Misses
- Corrective Actions
- Toolbox Talks
- Documents & Forms
- Reports
- Emergency Contacts
- Settings

The individual modules have not yet been implemented.

## Technology

- React
- TypeScript
- Vite
- Oxlint
- npm

## Architecture

The project follows a modular, feature-based architecture.

Current source structure:

- `src/app/` â€” application entry point
- `src/features/dashboard/` â€” dashboard feature
- `src/shared/styles/` â€” shared global styling

The approved architecture guide is stored at:

`docs/architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md`

## Local development

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

The application will normally be available at:

`http://localhost:5173/`

## Quality checks

Run the linter:

`npm run lint`

Create a production build:

`npm run build`

## Repository

`https://github.com/mmark76/Health-and-Safety-App`

## Intended deployment

The application is intended to be hosted through GitHub Pages at:

`https://health-and-safety.markellosecosystem.com`

Deployment has not yet been configured or completed.

## Current status

- React, TypeScript and Vite initialized
- Minimal modular structure created
- Initial dashboard placeholder available
- Demo Vite content removed
- Lint and production build passing
- GitHub Pages deployment pending
