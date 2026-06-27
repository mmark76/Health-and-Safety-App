# Conceptual Domain Model

This is a conceptual product model, not a final database schema. It does not define detailed database columns, API endpoints, or implementation-specific classes.

The model supports Safety and Health at Work management for office workplaces of the Cyprus Public Service. The Ministry of Energy, Commerce and Industry is used only as the initial organizational and operational model.

## Central Coverage Relationship

Risk and protection coverage is created by linking:

- Person or affected group
- Location
- Activity
- Foreseeable condition
- Validity period

This relationship answers who or what is covered, where, while doing what, under which reasonably foreseeable conditions, and for which period.

Not every worker must be named inside each risk assessment. Affected groups can be used where individual identification is unnecessary. Named persons are required for responsibilities, training, certification, assigned measures, and governance roles. Visitors and members of the public are normally represented as affected groups, not individual records.

Medical diagnoses, personal health histories, salary, performance, disciplinary, and unrelated HR data are out of scope.

## Entities

### Organization

- Purpose: Represents the public-service organization in scope.
- Owning module: Coverage.
- Important relationships: Contains OrganizationUnits and provides context for buildings, policies, requirements, and reporting.
- Personal data: No.
- Lifecycle or validity: Usually long-lived; may require historical naming or structural changes.

### OrganizationUnit

- Purpose: Represents a ministry, department, unit, section, or other office organization level.
- Owning module: Coverage.
- Important relationships: Belongs to Organization; may be linked to people, spaces, activities, role assignments, assessments, and reports.
- Personal data: No.
- Lifecycle or validity: Requires validity periods for reorganizations or renamed units.

### Person

- Purpose: Represents a named person only where needed for Safety and Health at Work responsibilities, training, certification, assigned measures, or governance roles.
- Owning module: Coverage.
- Important relationships: May have RoleAssignments, TeamMemberships, TrainingSession participation, Certifications, CorrectiveActions, and PreparednessRoles.
- Personal data: Yes.
- Lifecycle or validity: Must support active, inactive, and historical responsibility periods with data minimization.

### AffectedGroup

- Purpose: Represents a category of people affected by work activities, such as office employees, cleaners, messengers or support staff, archive personnel, maintenance personnel, contractors, visitors, members of the public, or persons who may require additional functional protection arrangements.
- Owning module: Coverage.
- Important relationships: Used in CoverageAssignments, AssessmentScopes, and HazardAssessments.
- Personal data: No when defined generically.
- Lifecycle or validity: Must remain clear enough for risk coverage and reporting.

### SafetyHealthRole

- Purpose: Defines Safety and Health roles such as Safety and Health Officer, first aider, fire warden, or responsible manager.
- Owning module: Coverage.
- Important relationships: Assigned to Persons or OrganizationUnits through RoleAssignments.
- Personal data: No by itself.
- Lifecycle or validity: Role definitions may change; assignments require validity periods.

### RoleAssignment

- Purpose: Assigns a SafetyHealthRole to a Person or OrganizationUnit.
- Owning module: Coverage.
- Important relationships: Links SafetyHealthRole, Person or OrganizationUnit, ValidityPeriod, and sometimes Space or WorkActivity.
- Personal data: Yes when linked to a Person.
- Lifecycle or validity: Must keep start and end dates and historical traceability.

### CommitteeOrTeam

- Purpose: Represents a Safety Committee, ESYPP-related group, emergency team, or working group.
- Owning module: Compliance and Governance.
- Important relationships: Has TeamMemberships, ManagementDecisions, Reviews, and governance responsibilities.
- Personal data: No by itself.
- Lifecycle or validity: Must support creation, changes, and closure over time.

### TeamMembership

- Purpose: Records membership of a Person or role in a CommitteeOrTeam.
- Owning module: Compliance and Governance.
- Important relationships: Links Person, CommitteeOrTeam, RoleAssignment, and ValidityPeriod.
- Personal data: Yes when linked to a Person.
- Lifecycle or validity: Requires historical membership periods.

### Location

- Purpose: Represents any place where persons may reasonably be affected by Ministry work activities.
- Owning module: Coverage.
- Important relationships: May contain or be represented by Buildings, Floors and Spaces; may also represent shared, external or temporary office-related locations without artificial building or floor records. Links to CoverageAssignments, RiskAssessments, drills, requirements and reports.
- Personal data: No.
- Lifecycle or validity: Must support changes in control, use, relevance and validity over time. The first MVP may implement only the minimum location types required by its vertical slice.

### Building

- Purpose: Represents a Ministry-controlled or shared office building within the Location hierarchy.
- Owning module: Coverage.
- Important relationships: Is a structured Location type; contains Floors and Spaces; links to assessments, requirements, drills, and reports.
- Personal data: No.
- Lifecycle or validity: Must support opening, closure, and changes in use.

### Floor

- Purpose: Represents a floor or level within a Building.
- Owning module: Coverage.
- Important relationships: Is part of the Location hierarchy; belongs to Building; contains Spaces.
- Personal data: No.
- Lifecycle or validity: Must support changes in layout or occupancy.

### Space

- Purpose: Represents an office room, shared area, meeting room, corridor, reception area, archive, kitchen, or other office space.
- Owning module: Coverage.
- Important relationships: Is a structured Location type; belongs to Floor, Building or another Location; links to WorkActivities, CoverageAssignments, RiskAssessments, requirements, and reports.
- Personal data: No.
- Lifecycle or validity: Requires validity periods for use, changes, and decommissioning.

### WorkActivity

- Purpose: Represents an activity performed in an office context.
- Owning module: Coverage.
- Important relationships: Links to CoverageAssignments, AssessmentScopes, HazardAssessments, requirements, training, and controls.
- Personal data: No.
- Lifecycle or validity: May change as organizational work changes.

### ForeseeableCondition

- Purpose: Represents normal, temporary, non-routine, emergency, or other reasonably foreseeable conditions.
- Owning module: Coverage.
- Important relationships: Links to CoverageAssignments, AssessmentScopes, RiskAssessments, controls, and preparedness records.
- Personal data: No.
- Lifecycle or validity: Must support review as circumstances change.

### CoverageAssignment

- Purpose: Links a Person or AffectedGroup to a location, activity, foreseeable condition, and validity period.
- Owning module: Coverage.
- Important relationships: Connects Person or AffectedGroup, Location, WorkActivity, ForeseeableCondition, and ValidityPeriod.
- Personal data: Yes when linked to a Person.
- Lifecycle or validity: Central lifecycle entity; must maintain history and current coverage.

### ValidityPeriod

- Purpose: Represents when an assignment, relationship, requirement, control, or record is valid.
- Owning module: Coverage for coverage records; reused conceptually by other modules.
- Important relationships: Used by RoleAssignment, CoverageAssignment, RequirementApplicability, Certifications, and Reviews.
- Personal data: No by itself.
- Lifecycle or validity: Must support start date, end date, and historical traceability conceptually.

### LegalOrOtherRequirement

- Purpose: Represents binding legislation, regulations, applicable requirements, instructions or decisions of competent authorities, official guidance, guidelines, voluntary standards, good practices, educational material, or other relevant requirements.
- Owning module: Compliance and Governance.
- Important relationships: Links to RequirementApplicability, policies, procedures, assessments, controls, evidence, and ManagementDecisions.
- Personal data: No.
- Lifecycle or validity: Requires current, superseded, and historical status.

### RequirementApplicability

- Purpose: Records where and why a LegalOrOtherRequirement applies.
- Owning module: Compliance and Governance.
- Important relationships: Links requirements to people, affected groups, locations, activities, assessments, controls, measures, evidence, or training.
- Personal data: May contain personal data if linked to named persons; prefer groups where possible.
- Lifecycle or validity: Requires applicability periods and review.

### RiskAssessment

- Purpose: Represents a written risk assessment.
- Owning module: Risks and Measures.
- Important relationships: Has AssessmentScope, HazardAssessments, ExistingControls, AdditionalMeasures, RiskRatings, Evidence, Reviews, and reassessments.
- Personal data: Usually no; may refer to named responsible persons through assignments.
- Lifecycle or validity: Draft, under review, approved, active, due for review, superseded.

### AssessmentScope

- Purpose: Defines the coverage boundary of a RiskAssessment.
- Owning module: Risks and Measures.
- Important relationships: References Coverage records such as Spaces, WorkActivities, ForeseeableConditions, Persons, or AffectedGroups.
- Personal data: May contain personal data if named persons are necessary.
- Lifecycle or validity: Must be updated when coverage changes.

### HazardAssessment

- Purpose: Records an identified hazard and its evaluation within a RiskAssessment.
- Owning module: Risks and Measures.
- Important relationships: Links hazards to affected groups, ExistingControls, RiskRating, AdditionalMeasures, and residual risk.
- Personal data: Usually no.
- Lifecycle or validity: Requires review when controls, activities, or conditions change.

### ExistingControl

- Purpose: Records controls already in place before additional measures are defined.
- Owning module: Risks and Measures.
- Important relationships: Links to HazardAssessment, RequirementApplicability, Evidence, and Verification where relevant.
- Personal data: No unless it names a responsible person.
- Lifecycle or validity: Must support current and superseded controls.

### RiskRating

- Purpose: Records probability, severity, explicit risk-matrix result, and residual risk where relevant.
- Owning module: Risks and Measures.
- Important relationships: Belongs to HazardAssessment and may be recalculated after AdditionalMeasures.
- Personal data: No.
- Lifecycle or validity: Must preserve historical ratings for traceability.

### AdditionalMeasure

- Purpose: Defines an additional protective measure proposed by a risk assessment.
- Owning module: Risks and Measures.
- Important relationships: May create CorrectiveActions; links to HazardAssessment, responsible role, due date, Evidence, Verification, and residual risk.
- Personal data: May contain personal data when assigned to a named person.
- Lifecycle or validity: Proposed, assigned, in progress, completed, verified, overdue, cancelled.

### CorrectiveAction

- Purpose: Tracks an action to correct a gap, overdue requirement, hazard, or failed control.
- Owning module: Risks and Measures.
- Important relationships: Links to AdditionalMeasure, RequirementApplicability, Evidence, Verification, responsible Person or role, and Management escalation.
- Personal data: May contain personal data when assigned to a named person.
- Lifecycle or validity: Open, in progress, completed, verified, overdue, escalated, closed.

### Evidence

- Purpose: Records proof that an action, control, requirement, training, or review was completed or checked.
- Owning module: Evidence is not a separate user-facing product module. The originating domain module owns the relationship between evidence and its domain record.
- Important relationships: Risks and Measures owns evidence linked to measures, implementation and verification. Training and Preparedness owns evidence linked to participation, certification and drills. Compliance and Governance owns evidence linked to requirements, decisions, policies and reviews. Reports and Overview may read evidence metadata but do not own evidence records.
- Personal data: May contain personal data; must be minimized.
- Lifecycle or validity: Must support traceability, retention decisions, and source context. A future shared technical evidence or attachment capability may provide common file storage, metadata, access control, audit history, retention and security, but must not become a duplicate source of domain ownership.

### Verification

- Purpose: Records independent or responsible confirmation that a measure or control is effective or complete.
- Owning module: Risks and Measures.
- Important relationships: Links to CorrectiveAction, AdditionalMeasure, Evidence, Person or role, and residual risk.
- Personal data: May contain personal data when verifier is named.
- Lifecycle or validity: Must preserve verification date and outcome.

### TrainingProgram

- Purpose: Defines a training, awareness, preparedness, or certification programme.
- Owning module: Training and Preparedness.
- Important relationships: Has TrainingSessions, Participation, Certifications, requirements, and roles.
- Personal data: No by itself.
- Lifecycle or validity: Must support active, retired, and revised programmes.

### TrainingSession

- Purpose: Represents one delivered or scheduled training event.
- Owning module: Training and Preparedness.
- Important relationships: Belongs to TrainingProgram; has Participation and Evidence.
- Personal data: May contain personal data through participants or trainers.
- Lifecycle or validity: Planned, completed, cancelled, archived.

### Participation

- Purpose: Records attendance or completion by a Person or affected group.
- Owning module: Training and Preparedness.
- Important relationships: Links Person or AffectedGroup to TrainingSession and Evidence.
- Personal data: Yes when linked to a Person.
- Lifecycle or validity: Must support completion status and evidence retention.

### Certification

- Purpose: Records certification or renewal status where required for a Safety and Health role or preparedness duty.
- Owning module: Training and Preparedness.
- Important relationships: Links Person, TrainingProgram, RequirementApplicability, renewal dates, and Evidence.
- Personal data: Yes.
- Lifecycle or validity: Must support validity, expiry, renewal, and fabricated demonstration data only in the prototype.

### PreparednessRole

- Purpose: Represents preparedness responsibilities such as first aid, AED, fire safety, evacuation, or drill roles.
- Owning module: Training and Preparedness.
- Important relationships: Links Person or RoleAssignment to buildings, spaces, drills, training, and requirements.
- Personal data: Yes when assigned to a named person.
- Lifecycle or validity: Requires validity periods and coverage-gap detection.

### Drill

- Purpose: Records a preparedness drill such as an evacuation drill.
- Owning module: Training and Preparedness.
- Important relationships: Links buildings, spaces, participants, PreparednessRoles, Evidence, findings, and corrective actions.
- Personal data: May contain personal data if participants are named.
- Lifecycle or validity: Planned, completed, reviewed, actioned.

### ManagementDecision

- Purpose: Records a Management decision related to Safety and Health at Work.
- Owning module: Compliance and Governance.
- Important relationships: Links to requirements, reviews, high risks, overdue measures, committees, reports, and evidence.
- Personal data: May contain personal data when decision-makers or assignees are named.
- Lifecycle or validity: Must preserve decision history and rationale.

### Review

- Purpose: Records periodic review, reassessment, management review, or continuous-improvement activity.
- Owning module: Compliance and Governance for management review; Risks and Measures for risk-assessment review.
- Important relationships: Links to RiskAssessments, requirements, ManagementDecisions, Evidence, and Reports.
- Personal data: May contain personal data when participants are named.
- Lifecycle or validity: Scheduled, completed, actions assigned, closed.

## Future Privacy and Security Requirements

Before any real organizational or personal data is used, the system must define and implement role-based access control, audit history for important actions and changes, secure evidence and attachment handling, retention and deletion rules, data minimization, appropriate protection for confidential records, and authorization for viewing, uploading, changing and deleting records.

These are architectural requirements for later implementation, not functionality to be built during the current prototype phase.
