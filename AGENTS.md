# AGENTS.md

Permanent repository operating instructions for Codex and other coding agents.

## Required reading before significant changes

Before significant product, architecture, feature, navigation, refactoring or implementation work, read:

1. [docs/START_HERE.md](docs/START_HERE.md)
2. [docs/PROJECT_PRODUCT_GUIDE.md](docs/PROJECT_PRODUCT_GUIDE.md)
3. [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)
4. relevant ADRs, architecture documents and requirements

## Project-specific rules

- Work directly on `main` unless the project owner explicitly requests otherwise.
- Do not create branches, pull requests or worktrees unless explicitly requested.
- Verify a clean and synchronized repository before editing.
- Keep one logical task per change.
- Avoid unrelated refactoring.
- Preserve the accepted six-area product architecture: Overview, Coverage, Risks and Measures, Training and Preparedness, Compliance and Governance, Reports.
- Preserve the office-public-service scope.
- Use demonstration data only.
- Never add real personal, Ministry or sensitive operational data.
- Do not make endorsement, certification or official-system claims.
- Maintain bilingual, responsive and accessible behaviour.
- Maintain one authoritative source for each domain record.
- Keep feature-specific code within its feature until genuine reuse exists.
- Do not place business rules in presentation components.
- Do not expand the MVP without an explicit documented decision.
- Report documentation conflicts before implementation.
- Run lint and build after changes.
- Run tests where available.
- Inspect the final diff.
- Use a clear commit message.
- Push only after validation.
- Update `PROJECT_STATUS.md` after material milestones.
- Create or update an ADR when a significant decision changes.

Instructions in a specific user task may narrow the work, but they must not silently contradict authoritative project documentation.
