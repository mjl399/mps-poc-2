# Dummy Repo — Feasibility Test for Design-to-Code Agent

Minimal stand-in for a production codebase. Used to validate the agent + Figma MCP + real-repo workflow before any GitHub connection.

## Contents

- `src/components/ui/card.tsx` — canonical Shadcn Card component (matches the Figma library)
- `src/lib/utils.ts` — `cn()` helper, standard Shadcn dependency
- `src/app/globals.css` — design system CSS variables including `--radius`
- `.claude/agents/design-to-code.md` — agent definition

## Why this exists

The agent uses Figma MCP to read components from the connected Figma file, then diffs against the actual files in this repo. This proves the workflow works against real code (not hypothetical), which is the missing piece between "demo wires up correctly" and "this would actually run in production at Assurant."

## How to test

```
cd ~/Desktop/mps-project/dummy-repo
claude
```

Then ask the agent to sync your latest Figma Card change against the local code.
