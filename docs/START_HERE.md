# Start Here - Stateless Project Recovery

This repository is the persistent project memory for the Health and Safety App.

Previous ChatGPT conversations, uploaded files and conversational memory may have been deleted. Do not trust conversational memory. Reconstruct project context from the repository before starting implementation.

Implementation must not begin before the recovery audit is complete.

## Reading order

1. [AGENTS.md](../AGENTS.md)
2. [Project Product and Build Guide](PROJECT_PRODUCT_GUIDE.md)
3. [Current Project Status](PROJECT_STATUS.md)
4. [README](../README.md)
5. all ADRs in [docs/decisions](decisions)
6. [Project Architecture](architecture/PROJECT_ARCHITECTURE.md)
7. [General Software Project Guide](architecture/GENERAL_SOFTWARE_PROJECT_GUIDE.md)
8. relevant requirements documents in [docs/requirements](requirements)
9. recent Git history
10. current source and CI state

## Recovery-audit checklist

Before implementation, report:

- product purpose
- active scope
- accepted architecture
- Management-accountability model
- privacy restrictions
- current implementation
- prototype-only elements
- latest completed milestone
- current phase
- next approved task
- open decisions
- known issues
- contradictions between documentation, code and Git history

## Rules during recovery

- Do not redesign accepted decisions merely because prior chat history is unavailable.
- Do not modify files during the recovery audit.
- Do not start implementation until the project owner approves the next task.
- Report contradictions rather than resolving them silently.

## Bootstrap prompt for a future session

```text
Connect to the GitHub repository mmark76/Health-and-Safety-App.

You are starting statelessly. Do not rely on previous ChatGPT conversations, memory or uploaded files.

Perform a read-only recovery audit before making any changes. Read AGENTS.md, docs/START_HERE.md, docs/PROJECT_PRODUCT_GUIDE.md, docs/PROJECT_STATUS.md, README.md, all ADRs, PROJECT_ARCHITECTURE.md, GENERAL_SOFTWARE_PROJECT_GUIDE.md, relevant requirements documents, recent Git history, current source code and CI/deployment workflows.

Report the product purpose, active scope, accepted architecture, Management-accountability model, privacy restrictions, current implementation, prototype-only elements, latest completed milestone, current phase, next approved task, open decisions, known issues and any contradictions between documentation, code and Git history.

Do not modify files during the recovery audit. Do not start implementation until I approve the next task.
```
