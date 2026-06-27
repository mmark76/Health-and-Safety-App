# ADR-003: Repository as Persistent Project Memory

## Status

Accepted

## Context

The project owner routinely deletes ChatGPT conversations, memory and uploaded files after finishing a work session.

ChatGPT and Codex sessions may therefore begin without conversational context. Git history shows code changes, but it does not always explain product rationale, current intent, documentation hierarchy or the next approved step.

Important accepted decisions must not depend on disposable conversations.

## Decision

The GitHub repository is the persistent project memory.

Project continuity is maintained through:

- ADRs
- requirements
- architecture documents
- `PROJECT_PRODUCT_GUIDE.md`
- `PROJECT_STATUS.md`
- `START_HERE.md`
- `AGENTS.md`
- Git history
- current source
- CI results

No important accepted decision may exist only in a disposable conversation.

## Alternatives considered

### Relying on ChatGPT memory

Rejected because memory may be deleted, unavailable, incomplete or different between ChatGPT and Codex sessions.

### Keeping all chat transcripts

Rejected because the project owner intentionally deletes conversations and uploaded files after work sessions.

### Relying only on Git commit history

Rejected because commits show what changed, but not always the full product rationale, current phase, authority hierarchy or next approved task.

### Maintaining one enormous undifferentiated project document

Rejected because a single document would become difficult to maintain and would blur the distinction between decisions, requirements, architecture, current status and operating rules.

## Consequences

- Deleted conversations no longer threaten project continuity.
- Meaningful decisions require documentation.
- The status file requires periodic maintenance.
- Future AI sessions must perform a recovery audit.
- The exact wording of deleted conversations is not preserved.
- Accepted decisions, rationale, current state and next actions are preserved.

## Operational rules

- Start new stateless sessions with `docs/START_HERE.md`.
- Keep ADRs for accepted decisions and rationale.
- Keep requirements documents for detailed product behaviour.
- Keep `PROJECT_STATUS.md` current after material milestones or changes to next approved work.
- Update or create an ADR when a significant decision changes.
- Report contradictions between documentation, source and Git history; do not resolve them silently.
