# ADR-004: Internal Ministry Working Tool Identity

## Status

Accepted

## Context

Earlier project documentation described the current implementation accurately as a public prototype using fabricated demonstration data. That remains true for the present development deployment, but it does not describe the intended operational product identity.

The application is not intended to become a public product for developers or the general public. Its durable product identity must be clear before further feature work continues.

The current implementation does not yet include authentication, authorization, role-based access control, secure operational data storage, audit logging, secure attachment handling, or controlled internal hosting.

## Decision

The intended operational product is an internal working tool for the Safety and Health Officer of the Ministry. It supports the systematic organization, monitoring and documentation of the Safety, Health and Wellbeing of people at work.

The application remains human-centred. Records, risk assessments, measures, training, evidence and reports are tools serving the purpose of Safety, Health and Wellbeing of People at Work.

The initially intended users are:

- the Safety and Health Officer
- the Director General
- the First Administrative Officer
- other specifically authorized Ministry personnel at a later stage

Future access may be given only to selected authorized Ministry personnel according to their role and responsibilities.

Management remains responsible for decisions and obligations. The software supports professional and administrative judgement, but does not replace it.

The current implementation is a development frontend prototype. It uses fabricated demonstration data only, is currently publicly reachable as a development deployment, and is not ready for real operational Ministry data.

Real Ministry data may be used only after appropriate security, access, authorization, audit, attachment and information-protection controls are implemented.

## Consequences

User-facing product wording must present the application as an internal Ministry working tool, not as a public developer project.

The application must not claim that authentication, controlled access, secure storage, production hosting or official operational use already exists.

Developer-oriented details such as repository links, repository structure, technical roadmap language and implementation terminology belong in repository documentation, not in the operational user interface.

Documentation must distinguish between the intended operational product and the current prototype implementation.

Substantive or multi-file changes should use a feature branch or worktree, be validated before merging, and be reviewed through a Pull Request. Squash merge is preferred for a clean `main` history. Direct changes to `main` should be limited to very small corrections or explicit owner instructions.

## Alternatives considered

### Public product identity

Rejected because the intended users are internal Ministry roles and selected authorized personnel, not developers or the general public.

### Treat the current public prototype as operational

Rejected because the current implementation lacks the security, access-control, storage, audit, attachment and hosting controls required before real Ministry data can be introduced.

### Make the Safety and Health Officer fully accountable

Rejected because the application supports the Safety and Health Officer's professional work, while Management remains responsible for decisions and obligations.
