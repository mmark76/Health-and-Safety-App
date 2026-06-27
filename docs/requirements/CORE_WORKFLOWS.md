# Core Workflows

These workflows describe product behaviour conceptually. They do not define API endpoints, database schemas, or implementation-specific classes.

## 1. Establish Organizational and Workplace Coverage

- Trigger: A new organization, unit, office location, or activity needs Safety and Health coverage.
- Required inputs: Organization, units, buildings, floors, spaces, activities, foreseeable conditions, validity dates.
- Main steps: Create or verify Coverage records; link units to locations and activities; define affected people or groups; identify missing relationships.
- Responsible roles: Safety and Health Officer, responsible unit, Management.
- Outputs: Initial coverage map.
- Status or lifecycle: Draft, active, under review, superseded.
- Evidence created: Coverage record history and review note.
- Possible escalation: Coverage gaps or missing accountable units escalate to Management.
- Related product modules: Coverage, Overview, Reports.

## 2. Register a Person or Affected Group for Safety and Health Purposes

- Trigger: A person has a Safety and Health responsibility or an affected group needs coverage.
- Required inputs: Minimum person details or group definition, reason for recording, related unit or activity, validity period.
- Main steps: Decide whether a named person is necessary; create Person or AffectedGroup; link to roles or coverage where needed.
- Responsible roles: Safety and Health Officer, responsible unit, Management where role assignment is significant.
- Outputs: Person or AffectedGroup available for coverage, roles, training, or measures.
- Status or lifecycle: Active, inactive, archived.
- Evidence created: Registration reason and assignment history.
- Possible escalation: Unclear responsibility or unnecessary personal data escalates for review.
- Related product modules: Coverage, Training and Preparedness, Risks and Measures, Compliance and Governance.

## 3. Register a Building, Floor and Workplace

- Trigger: A building, floor, or office space enters the product scope.
- Required inputs: Building identity, floors, spaces, use, responsible unit, validity period.
- Main steps: Create Building; create Floors; create Spaces; classify office area type; link responsible units.
- Responsible roles: Safety and Health Officer, facilities contact, responsible unit.
- Outputs: Location structure available for coverage and assessment.
- Status or lifecycle: Draft, active, changed, closed.
- Evidence created: Location registration history.
- Possible escalation: Missing responsible unit or unclear location use escalates to Management.
- Related product modules: Coverage, Risks and Measures, Training and Preparedness, Reports.

## 4. Link People or Affected Groups to Locations, Activities and Foreseeable Conditions

- Trigger: Coverage needs to show who may be affected by an activity in a location under foreseeable conditions.
- Required inputs: Person or AffectedGroup, location, activity, foreseeable condition, validity period.
- Main steps: Select group or person; link to Space or Building; link to WorkActivity and ForeseeableCondition; confirm validity.
- Responsible roles: Safety and Health Officer, responsible unit.
- Outputs: CoverageAssignment.
- Status or lifecycle: Active, expired, superseded.
- Evidence created: Coverage relationship history.
- Possible escalation: Uncovered people, groups, activities, or locations escalate as coverage gaps.
- Related product modules: Coverage, Overview, Reports.

## 5. Identify a Coverage Gap

- Trigger: Overview, review, or user check detects missing coverage.
- Required inputs: Current coverage records, locations, activities, people or affected groups, conditions.
- Main steps: Compare expected coverage against actual assignments; classify the gap; assign follow-up.
- Responsible roles: Safety and Health Officer, responsible unit.
- Outputs: Coverage gap record or corrective measure.
- Status or lifecycle: Open, assigned, resolved, verified.
- Evidence created: Gap finding and resolution evidence.
- Possible escalation: High-impact or overdue coverage gaps escalate to Management.
- Related product modules: Overview, Coverage, Risks and Measures, Reports.

## 6. Create and Approve a Written Risk Assessment

- Trigger: New coverage, periodic review, changed activity, identified hazard, or Management request.
- Required inputs: Assessment scope, hazards, affected groups, existing controls, requirements, responsible roles.
- Main steps: Prepare assessment; identify hazards; evaluate risk; define action plan; prepare report; approve and set review date.
- Responsible roles: Safety and Health Officer, responsible unit, Management approver where required.
- Outputs: Approved written RiskAssessment.
- Status or lifecycle: Draft, under review, approved, active, due for review, superseded.
- Evidence created: Assessment report, approval record, review schedule.
- Possible escalation: High risks or missing approvals escalate to Management.
- Related product modules: Risks and Measures, Coverage, Compliance and Governance, Reports.

## 7. Identify and Evaluate a Hazard

- Trigger: Risk assessment, inspection, hazard report, review, or changed condition.
- Required inputs: Hazard description, affected groups, location, activity, condition, existing controls.
- Main steps: Record hazard; link affected groups; record existing controls; evaluate probability and severity; record explicit risk-matrix result.
- Responsible roles: Safety and Health Officer, responsible unit, specialist input where needed.
- Outputs: HazardAssessment and RiskRating.
- Status or lifecycle: Draft, evaluated, action required, controlled, reviewed.
- Evidence created: Hazard record, risk rating rationale.
- Possible escalation: High or uncontrolled risk escalates to Management.
- Related product modules: Risks and Measures, Coverage, Compliance and Governance.

## 8. Create, Assign and Prioritize an Additional or Corrective Measure

- Trigger: Hazard evaluation, coverage gap, overdue requirement, verification failure, or Management review.
- Required inputs: Measure description, source record, priority, responsible person or role, due date.
- Main steps: Create measure; assign responsibility; set priority and due date; link evidence requirements.
- Responsible roles: Safety and Health Officer, responsible unit, assigned owner.
- Outputs: AdditionalMeasure or CorrectiveAction.
- Status or lifecycle: Proposed, assigned, in progress, overdue, completed, verified, closed.
- Evidence created: Measure record and assignment history.
- Possible escalation: High priority or overdue measures escalate to Management.
- Related product modules: Risks and Measures, Overview, Reports.

## 9. Complete and Independently Verify a Measure

- Trigger: Assigned owner marks a measure complete.
- Required inputs: Completion evidence, measure record, verifier or verification role.
- Main steps: Add evidence; review completion; verify effectiveness; update residual risk if needed; close or reopen.
- Responsible roles: Assigned owner, verifier, Safety and Health Officer.
- Outputs: Verification result and updated measure status.
- Status or lifecycle: Completed, verified, reopened, closed.
- Evidence created: Completion evidence and verification record.
- Possible escalation: Failed verification or unresolved high risk escalates to Management.
- Related product modules: Risks and Measures, Compliance and Governance, Reports.

## 10. Trigger Risk-Assessment Review or Reassessment

- Trigger: Review date, changed workplace, new activity, incident, high risk, failed control, or new requirement.
- Required inputs: Existing assessment, change reason, related coverage, hazards, controls, requirements.
- Main steps: Record trigger; decide review or reassessment; update scope and hazards; revise controls and measures; prepare updated report.
- Responsible roles: Safety and Health Officer, responsible unit, Management where significant.
- Outputs: Review record, updated RiskAssessment, or new reassessment.
- Status or lifecycle: Triggered, in review, updated, approved, superseded.
- Evidence created: Review rationale and updated assessment evidence.
- Possible escalation: Delayed reassessment or unmanaged high risk escalates to Management.
- Related product modules: Risks and Measures, Coverage, Compliance and Governance.

## 11. Record Training and Certification

- Trigger: Training need, role assignment, requirement, renewal, or preparedness gap.
- Required inputs: Training programme, session, participant or group, completion evidence, certification or renewal need.
- Main steps: Schedule or record session; record participation; attach evidence; update certification or renewal status where relevant.
- Responsible roles: Safety and Health Officer, trainer, responsible unit, participant.
- Outputs: Participation and Certification records.
- Status or lifecycle: Planned, completed, expired, renewed, archived.
- Evidence created: Attendance, completion, renewal, or fabricated demonstration evidence.
- Possible escalation: Missing required training or expired certification escalates to responsible unit or Management.
- Related product modules: Training and Preparedness, Coverage, Compliance and Governance, Reports.

## 12. Detect Certification Expiry or Preparedness Coverage Gaps

- Trigger: Scheduled check, Overview indicator, role change, or review.
- Required inputs: Preparedness roles, certifications, validity periods, buildings, spaces, requirements.
- Main steps: Compare required coverage against current records; identify expired or missing certification; assign follow-up.
- Responsible roles: Safety and Health Officer, responsible unit.
- Outputs: Gap record, renewal task, or corrective measure.
- Status or lifecycle: Open, assigned, completed, verified.
- Evidence created: Gap detection and resolution record.
- Possible escalation: Critical preparedness gaps or overdue renewals escalate to Management.
- Related product modules: Training and Preparedness, Overview, Reports.

## 13. Record an Applicable Legal or Other Requirement

- Trigger: New or updated legislation, regulation, official guidance, standard, good practice, or internal policy.
- Required inputs: Requirement source, summary, applicability rationale, effective date, owner.
- Main steps: Create requirement record; classify source; identify applicability; assign review responsibility.
- Responsible roles: Safety and Health Officer, Compliance and Governance owner, Management where significant.
- Outputs: LegalOrOtherRequirement.
- Status or lifecycle: Draft, active, under review, superseded, retired.
- Evidence created: Source reference and applicability note.
- Possible escalation: Significant new obligations escalate to Management.
- Related product modules: Compliance and Governance, Reports.

## 14. Link a Requirement to People, Locations, Activities, Assessments, Controls or Evidence

- Trigger: Requirement applicability is identified or reviewed.
- Required inputs: Requirement, target records, applicability rationale, validity period.
- Main steps: Link requirement to relevant Coverage, RiskAssessment, controls, measures, training, preparedness records, or evidence; set review date.
- Responsible roles: Safety and Health Officer, Compliance and Governance owner.
- Outputs: RequirementApplicability.
- Status or lifecycle: Active, changed, superseded, reviewed.
- Evidence created: Applicability record and linked evidence.
- Possible escalation: Unaddressed or disputed applicability escalates to Management.
- Related product modules: Compliance and Governance, Coverage, Risks and Measures, Training and Preparedness.

## 15. Escalate High Risk, Overdue Measures or Unaddressed Requirements to Management

- Trigger: High risk, overdue measure, failed verification, unaddressed requirement, or unresolved coverage gap.
- Required inputs: Source record, risk or obligation context, due dates, responsible roles, evidence.
- Main steps: Create escalation; notify or assign Management review; record decision; track follow-up.
- Responsible roles: Safety and Health Officer, responsible unit, Management.
- Outputs: ManagementDecision or escalation record.
- Status or lifecycle: Open, reviewed, actioned, closed.
- Evidence created: Escalation note, decision record, follow-up evidence.
- Possible escalation: Continued inaction remains visible in Overview and Reports.
- Related product modules: Overview, Risks and Measures, Compliance and Governance, Reports.

## 16. Produce Management and Coverage Reports

- Trigger: Scheduled reporting, Management request, review meeting, or audit preparation.
- Required inputs: Coverage, risk, measures, training, preparedness, requirements, evidence, and review data.
- Main steps: Aggregate authoritative data; generate report; identify gaps and trends; record report issue.
- Responsible roles: Safety and Health Officer, reporting owner, Management.
- Outputs: Management report or coverage report.
- Status or lifecycle: Draft, issued, reviewed, archived.
- Evidence created: Report output and issue history.
- Possible escalation: Reported high risks or unresolved gaps require Management decision.
- Related product modules: Reports, Overview, all domain-owning modules.

## 17. Perform Management Review and Continuous Improvement

- Trigger: Scheduled management review, significant change, recurring gaps, high risk, or governance need.
- Required inputs: Reports, escalations, risk status, requirement status, training gaps, preparedness gaps, previous decisions.
- Main steps: Review performance; decide priorities; assign improvements; set review dates; monitor completion.
- Responsible roles: Management, Safety and Health Officer, relevant committees or responsible units.
- Outputs: Review, ManagementDecision, assigned measures, improvement actions.
- Status or lifecycle: Planned, completed, actions assigned, monitored, closed.
- Evidence created: Review record, decisions, assigned actions, follow-up evidence.
- Possible escalation: Unresolved Management actions remain visible in Reports and Overview.
- Related product modules: Compliance and Governance, Reports, Overview, Risks and Measures.
