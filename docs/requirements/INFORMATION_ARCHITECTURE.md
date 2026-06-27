# Information Architecture

## 1. Purpose

This document defines the user-facing information architecture for the Safety and Health at Work management application for office workplaces of the Cyprus Public Service.

It describes navigation, screen ownership and user paths. It does not define final visual layouts, routes, React components, database schemas, API endpoints or wireframes.

The Ministry of Energy, Commerce and Industry is used only as the initial organizational and operational model. The application uses a hybrid user-facing structure, while Plan-Do-Check-Act and relevant ISO 45001 concepts remain an underlying management framework rather than the navigation structure. The application must not claim ISO 45001 certification or compliance.

## 2. Navigation Principles

- Navigation is organized around user work and operational decisions.
- Domain entities remain owned by their authoritative modules.
- Overview and Reports aggregate information but do not own duplicate records.
- Users should be able to move from a gap, alert, metric or report item to its underlying authoritative record.
- Users should not need to understand ISO clause numbers to use the application.
- The same entity must not appear as separate unrelated records in multiple modules.
- The prototype remains bilingual in Greek and English.
- Terminology must consistently use Safety and Health at Work.
- Settings and user administration are supporting functions, not primary product areas.
- The Safety and Health Officer normally advises, coordinates, monitors and escalates; Management remains accountable.

## 3. Global Application Shell

The application shell should conceptually include:

- Persistent primary sidebar or equivalent main navigation.
- Top bar for page context and global utilities.
- Global search across authoritative records.
- Notifications or alerts for overdue, high-risk, review-due or Management-decision items.
- Language selector for Greek and English.
- User menu for user-specific supporting functions.
- Breadcrumbs where useful for deep records and workflow steps.
- Page title and contextual actions.
- Settings as a supporting navigation item.
- Clear demonstration-data indicator during the prototype phase.

This document does not prescribe CSS, visual layout, spacing, color, or component implementation.

## 4. Primary Navigation

The confirmed primary product areas are:

1. Overview
2. Coverage
3. Risks and Measures
4. Training and Preparedness
5. Compliance and Governance
6. Reports

Settings and user administration remain supporting functions.

## 5. Detailed Navigation Tree

### Overview

Overview contains links and aggregated indicators only. It does not own duplicate records.

- Executive overview
- Coverage gaps
- Critical risks
- Overdue measures
- Training and preparedness gaps
- Compliance gaps
- Matters requiring Management decision
- Upcoming reviews and deadlines

### Coverage

Coverage owns the authoritative records for who or what is covered, where, during which activity, under which foreseeable condition, and for what validity period.

- Organizational structure
- People and affected groups
- Safety and Health roles and assignments
- Committees and teams
- Locations
- Buildings, floors and spaces
- Work activities
- Foreseeable conditions
- Coverage relationships
- Coverage gaps

Named people are needed for responsibilities, training, certification, assigned measures, governance roles and other Safety and Health at Work purposes that require identification. Affected groups are sufficient where individual identification is unnecessary, including visitors and members of the public.

### Risks and Measures

Risks and Measures owns written risk assessments, hazard evaluations, risk results, measures, verification, review and reassessment.

- Written risk assessments
- Assessment scope
- Hazard assessments
- Existing controls
- Risk evaluation
- Additional measures
- Corrective actions
- Evidence and verification
- Reviews and reassessments
- Hazard library

The official qualitative risk matrix is represented through explicit categories and lookup results, not arbitrary numerical multiplication.

### Training and Preparedness

Training and Preparedness owns training, participation, certification, preparedness roles, drills and educational awareness material.

- Training programmes
- Training sessions
- Participation
- Certifications and renewals
- First aid
- AED
- Fire safety roles
- Evacuation roles
- Drills
- Preparedness coverage by location
- Educational awareness material
- Future Napo official links or legally permitted embeds

Napo content is for future education and awareness. It is not part of the first MVP, must initially use official links or legally permitted embedding, and must not imply endorsement.

### Compliance and Governance

Compliance and Governance owns requirements, applicability, governance records, Management accountability, ESYPP, Safety Committees, decisions and Management review.

- Legislation
- Regulations
- Competent-authority requirements, instructions and decisions
- Official guidance
- Guidelines
- Voluntary standards
- Good practices
- Legal and other requirements register
- Requirement applicability
- Policies and procedures
- Management accountability
- ESYPP
- Safety Committees
- Governance decisions
- Management review

Binding requirements must be clearly distinguished from guidance, voluntary standards, good practices and educational material. ISO 45001, OiRA, Napo and general guidance must not be described as legislation, certification or endorsement.

### Reports

Reports reads authoritative data from other modules. It does not own duplicate records.

- Coverage reports
- Risk-assessment register
- Risk and control reports
- Measures and overdue-action reports
- Training and preparedness reports
- Compliance-status reports
- Management decision reports
- Periodic Management reports
- Export and print functions

## 6. Screen Inventory

| Screen name | Owning product area | Purpose | Principal information displayed | Principal user actions | Related records | Expected entry points | Likely onward navigation | MVP or later |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Overview dashboard | Overview | Summarize current Safety and Health at Work status | Coverage gaps, active assessments, high risks, overdue measures, preparedness gaps, compliance gaps, Management decisions | Open source records, filter summary indicators, start permitted contextual actions | CoverageAssignment, RiskAssessment, HazardAssessment, CorrectiveAction, RequirementApplicability, Training records | Primary navigation, login landing | Gap detail, risk assessment, measure, report, Management review | MVP |
| Coverage gaps view | Overview | Show unresolved coverage gaps from authoritative Coverage data | Missing people/groups, locations, activities, conditions, validity periods | Open gap source, assign follow-up, create measure where permitted | CoverageAssignment, Location, WorkActivity, AffectedGroup, Person | Overview dashboard, Reports | Coverage records, measures, Management alert | MVP |
| Organizational structure list/detail | Coverage | Maintain public-service organizational units in scope | Organization units, hierarchy, active/inactive status, validity | Add or update unit, view linked coverage | Organization, OrganizationUnit | Coverage navigation, search | People/groups, locations, activities, reports | MVP |
| Person or affected-group list/detail | Coverage | Represent named persons where necessary and groups where sufficient | Person or group identity, reason for recording, linked roles, locations, activities, training, measures | Add group, add named person where necessary, update status, open related records | Person, AffectedGroup, RoleAssignment, CoverageAssignment | Coverage navigation, global search, assessment scope | Role assignments, coverage relationships, training, measures | MVP |
| Role-assignment list/detail | Coverage | Track Safety and Health roles and assignments | Role, holder, scope, validity, active/inactive status | Assign role, end assignment, open related duties | SafetyHealthRole, RoleAssignment, Person, OrganizationUnit, Location | Coverage navigation, person detail | Training, preparedness coverage, governance records | MVP |
| Location list/detail | Coverage | Represent all relevant places where persons may be affected | Location type, control/shared/external/temporary status, related units, activities, coverage | Add location, update status, open hierarchy or relationships | Location, Building, Floor, Space, CoverageAssignment | Coverage navigation, global search | Building/space detail, activities, assessments, preparedness | MVP |
| Building and space detail | Coverage | Show structured location hierarchy where applicable | Building, floors, spaces, use, responsible unit, active/historical status | Update structured location records, open linked coverage | Location, Building, Floor, Space | Location detail, search | People/groups, activities, risk assessments, preparedness | MVP |
| Work-activity list/detail | Coverage | Define relevant office work activities | Activity description, related locations, affected groups, conditions, status | Add/update activity, link coverage | WorkActivity, CoverageAssignment, ForeseeableCondition | Coverage navigation, assessment workflow | Affected groups, locations, assessments | MVP |
| Written risk-assessment list/detail | Risks and Measures | Manage written office risk assessments | Status, scope, hazards, controls, risk results, measures, review date | Create, review, approve where authorized, open workflow | RiskAssessment, AssessmentScope, HazardAssessment, AdditionalMeasure | Risks navigation, Overview, Coverage records | Creation workflow, hazard detail, measures, reports | MVP |
| Risk-assessment creation workflow | Risks and Measures | Complete the five-stage written assessment process | Preparation, hazard identification, risk evaluation, action plan, report preparation | Progress steps, save draft, request review, approve where authorized | RiskAssessment, AssessmentScope, HazardAssessment, RiskRating, AdditionalMeasure | Risk assessment list, Coverage gap, Management request | Assessment detail, measures, report | MVP |
| Hazard-assessment detail | Risks and Measures | Evaluate one hazard within an assessment | Hazard, affected groups, existing controls, probability, severity, qualitative matrix result, residual risk | Add controls, set risk category, propose measure | HazardAssessment, ExistingControl, RiskRating, AdditionalMeasure | Assessment detail, workflow | Measure detail, requirement applicability | MVP |
| Measure list/detail | Risks and Measures | Track additional and corrective measures | Source, owner, priority, due date, status, evidence, verification | Create, assign, update implementation, add evidence, verify | AdditionalMeasure, CorrectiveAction, Evidence, Verification | Overview, risk assessment, reports | Source hazard, owner, evidence, verification, Management alert | MVP |
| Training records view | Training and Preparedness | Record minimal training and awareness needed by first workflows | Programmes, sessions, participation, completion evidence | Record training, update participation, open person or role | TrainingProgram, TrainingSession, Participation | Training navigation, person detail, requirement detail | Person, role, preparedness coverage | MVP |
| Preparedness coverage view | Training and Preparedness | Show first aid, AED, fire and evacuation coverage by location | Preparedness roles, location coverage, gaps, renewals | Open role assignment, record gap, link training | PreparednessRole, Location, Certification, Drill | Training navigation, Overview gaps | Location, person, certification, measure | MVP for minimal coverage; later for full drills |
| Requirements register | Compliance and Governance | Maintain legal and other requirements register | Source category, requirement summary, status, applicability, review date | Add requirement, classify source, open applicability | LegalOrOtherRequirement | Compliance navigation, search | Requirement detail, applicability, reports | MVP |
| Requirement detail | Compliance and Governance | Explain one requirement and its applicability | Requirement text/summary, source category, applicability, linked records, evidence | Link applicability, review status, open related records | LegalOrOtherRequirement, RequirementApplicability, Evidence | Requirements register, risk assessment, report | Assessments, controls, evidence, gaps | MVP |
| Management review view | Compliance and Governance | Support Management review and accountability | Reports, high risks, overdue measures, unresolved requirements, decisions | Record decision, assign follow-up, close review | Review, ManagementDecision, Reports, CorrectiveAction | Overview, Reports, Compliance navigation | Management decision, measures, reports | MVP basic; later expanded |
| Reports index | Reports | Provide report entry points | Available reports, filters, export/print options | Select report, filter, export or print where permitted | Read models from domain modules | Primary navigation | Basic Management report, source records | MVP |
| Basic Management report | Reports | Summarize Management-level status for the first MVP | Coverage gaps, active assessments, high risks, overdue measures, requirement follow-up | Generate, filter, print/export, open source records | Coverage, Risks and Measures, Training and Preparedness, Compliance and Governance | Reports index, Management review | Authoritative source records, Management review | MVP |

## 7. Cross-Module Navigation

- Overview gap -> underlying Coverage record, CoverageAssignment, Location, WorkActivity, Person or AffectedGroup.
- Person or group -> locations, activities, roles, training, certifications and assigned measures.
- Location -> people/groups, activities, assessments, preparedness records and measures.
- Work activity -> affected groups, locations and assessments.
- Requirement -> applicability, related assessments, controls, evidence and gaps.
- Risk assessment -> scope, hazards, measures and review history.
- Measure -> source, owner, evidence, verification and related risk.
- Training or certification -> person, role and preparedness coverage.
- Management alert -> underlying issue and required Management decision.
- Report result -> authoritative source record.

Cross-module navigation must point to the owning record. It must avoid circular navigation that leaves the user without a clear authoritative record.

## 8. Global Actions

Global and contextual actions should be limited and permission-aware:

- Add coverage record
- Start risk assessment
- Report hazard or coverage gap
- Create measure
- Record training
- Add applicable requirement
- Record Management decision
- Generate report

Actions appear only where relevant and permitted. A global action may start a workflow, but the resulting record must be owned by the appropriate product area.

## 9. Search, Filtering and Status Visibility

Conceptual search and filtering requirements:

- Global search across authoritative records.
- Module-specific search within the active product area.
- Filters by organization, location, affected group, status, priority and due date.
- Clear active/inactive and current/historical distinctions.
- Visible lifecycle status on lists, details, alerts and reports.
- Overdue and review-due indicators.
- Bilingual searchable labels where practical.

This document does not design a search engine or backend.

## 10. MVP Information Architecture

The first MVP should expose only the smallest complete vertical slice needed for:

- Basic organizational units.
- People or affected groups.
- Locations, buildings, floors and spaces.
- Work activities and foreseeable conditions.
- Coverage gaps.
- One complete written risk-assessment workflow.
- Hazard evaluation.
- Measures, assignment, evidence and verification.
- Minimal training and preparedness records required by the workflow.
- Basic applicable-requirement linkage.
- Overview indicators.
- A basic Management report.

MVP screens:

- Overview dashboard.
- Coverage gaps view.
- Organizational structure list/detail.
- Person or affected-group list/detail.
- Role-assignment list/detail.
- Location list/detail.
- Building and space detail.
- Work-activity list/detail.
- Written risk-assessment list/detail.
- Risk-assessment creation workflow.
- Hazard-assessment detail.
- Measure list/detail.
- Minimal training records view.
- Minimal preparedness coverage view.
- Requirements register.
- Requirement detail.
- Basic Management review view.
- Reports index.
- Basic Management report.

Screens or sections that belong to the architecture but should remain hidden, placeholder-only or postponed during the first MVP:

- Full incident management.
- Extensive inspection management.
- Complete committee meeting administration.
- Advanced document management.
- Full training-campaign administration.
- Advanced certification workflows.
- Complete drill-management functionality.
- Full Napo integration.
- Advanced export automation.

## 11. Later Expansion

Later expansion may activate fuller navigation for:

- Office workplace inspections.
- Hazard, near-miss and incident reporting.
- Full first aid, AED, fire safety and evacuation administration.
- Training and certification campaigns.
- ESYPP and Safety Committee meeting administration.
- Documents and registers.
- Advanced Management reporting.
- Napo educational content through official links or legally permitted embeds.

These remain outside the first MVP unless required by the initial vertical slice.

## 12. Out-of-Scope Navigation

The application should not expose navigation for:

- Construction-site management.
- Industrial production, manufacturing or factory workflows.
- Heavy machinery, vehicle fleet or lifting-equipment management.
- Unrelated field-work management.
- Medical records or occupational health diagnoses.
- Salary, performance, disciplinary or unrelated HR records.
- Official Ministry, OiRA, DLI, Napo, ISO or European endorsement claims.

## 13. Consistency Rules

- Greek and English labels must remain semantically equivalent.
- One canonical name must be selected for every product area and entity.
- No page may create a duplicate authoritative record owned by another module.
- Status labels must use shared controlled terminology.
- Historical records must remain distinguishable from current records.
- Every alert, metric and report item should link to an explainable source.
- No UI wording may imply official Ministry, OiRA, DLI, Napo, ISO or European endorsement.
- Only fabricated demonstration data may be used in the public prototype.
- Overview and Reports must remain read and aggregation areas.
- The accepted six-area hybrid architecture must remain unchanged unless superseded by a later accepted ADR.
