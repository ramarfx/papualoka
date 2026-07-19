# AI Agent Instructions

This repository uses a dependency graph to minimize context usage.

## Primary Rule

Never scan the whole repository unless explicitly requested.

Always determine the minimal set of files required to solve the task.

---

## Workflow

For every task:

1. Read graph/graph.json.
2. Identify affected nodes.
3. Compute blast radius.
4. Read only directly related files.
5. Expand only if required.

Never recursively explore unrelated folders.

---

## Reading Priority

Priority 1
- graph/graph.json
- graph/symbols.json
- graph/imports.json

Priority 2
- Files returned by graph traversal

Priority 3
- Shared utilities

Priority 4
- Read the rest of repository only if absolutely necessary.

---

## Next.js Rules

Prefer App Router.

Follow existing patterns.

Do not introduce Pages Router.

Reuse existing Server Actions.

Reuse existing API routes.

Reuse existing Providers.

Never duplicate business logic.

---

## Components

Before creating a component:

Search symbols.json.

If an equivalent component exists,
reuse it.

Do not create:

Button2

CardNew

NavbarCopy

unless explicitly requested.

---

## Imports

Before adding a dependency:

Search graph.

Reuse existing utilities.

Avoid duplicate helper functions.

---

## Editing

If editing a file:

Determine blast radius first.

Verify all direct dependents.

Verify exported types remain compatible.

---

## Refactoring

During refactoring:

Update imports.

Remove dead imports.

Preserve public interfaces.

---

## Context Budget

Maximum initial context:

- graph
- target file
- direct dependencies
- direct dependents

Expand gradually.

Never read unrelated feature folders.

---

## Folder Priority

app/

components/

hooks/

lib/

services/

store/

types/

utils/

Only visit lower priority folders if graph indicates dependency.

---

## Goal

Minimize token usage.

Minimize unnecessary file reads.

Prefer graph traversal over filesystem traversal.
