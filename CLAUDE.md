# CLAUDE.md

Guidance for Claude Code working on the **Periscope landing page** on https://periscope.surdu.de.

## What this project is

Static landing page for Periscope, an LLM Visibility Audit for indie SaaS founders. Built with Astro, deployed to GitHub Pages.

For full project context, see `BRIEF.local.md` (private, gitignored).

## Tech preferences

- Use `bun`, never `npm`.
- Astro for the static site generator.
- Static output, no server runtime.
- Mobile-friendly, accessible, lightweight.
- No analytics or tracking pixels.
- Email capture via a `mailto:` link to `periscope@surdu.eu` with a prefilled subject and body. No third-party form provider, no embedded script. The mailbox is Google Workspace (the only processor for waitlist messages).
- Deploy via GitHub Pages, served at periscope.surdu.de.

## Tone for copy

- Honest, plain, low-hype. No "10x your AI visibility" copy.
- First person singular. Present and future tense for the product, past tense only for early run findings.
- Readable to a non-technical SaaS founder; one-line definitions for AEO and GEO.
- Short paragraphs. Skim-friendly. Bold the numbers.

## Repo hygiene

- Treat this repo as public.
- Files matching `*.local.md` are private and gitignored. Never commit them.
- Sensitive context (project framing, anonymization rules, pilot history) lives in `CLAUDE.local.md` and `BRIEF.local.md`. Read those for full context when working locally.

## Conventions

- Never use the em dash character in written content.
- Commit only when explicitly asked.
