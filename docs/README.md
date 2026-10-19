# Sadi Enis — Game Developer portfolio

## Publishing

Deployment target: **GitHub Pages**, repository `SadiEnis/SadiEnis.github.io`.
See [GITHUB-PAGES.md](GITHUB-PAGES.md) for setup. The workflow in
`.github/workflows/pages.yml` builds and publishes pushes to `main`.
Vercel deployment instructions are historical; do not use them for new releases.

First design iteration. Next.js App Router, React, TypeScript, and plain CSS. The versions follow the existing GameWeb project. The site exports static HTML for portable hosting; no CMS or database is required for these three pages.

## Local development

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3100. Run `npm run build` for the static `out/` export and `npm run typecheck` for TypeScript validation.

## Content

- `src/app/page.tsx`: introduction, availability and target statement, work history, and four selected projects.
- `src/app/motivation/page.tsx`: the owner's personal statement, written in Turkish and mirrored in English and Polish.
- `src/app/cv/page.tsx`: a print-optimized resume generated from the same data as the site, with an A4 stylesheet in `src/app/cv/print.css`. It follows the visitor's language and mirrors the owner's PDF section for section.
- `src/app/contact/page.tsx`: verified LinkedIn, email, and GitHub destinations plus a link to the resume.
- `src/app/globals.css`: responsive design and illustrative project graphics. These are not gameplay screenshots.

Project facts use the owner's statements and the local Project First Run documentation reviewed in this chat. CleanOcean's COP31 status is omitted pending clarification. No employment dates, studios, shipped titles, or awards have been invented.

Fonts use Google Fonts with system fallbacks. Replace illustrations with actual gameplay captures when available. Refine the biography before public use.

## Resume

Two resume surfaces, both kept in sync by hand:

- `/cv/` — a single-column, print-optimized page generated from the site's own data, in the visitor's language. Its section order and wording mirror the owner's PDF: summary, education, experience, projects, languages, references. The layout is deliberately single-column with DOM order matching reading order, so applicant tracking systems parse it without reconstructing columns.
- `/cv/sadi-enis-guculer-cv.pdf` — the owner's own English PDF, served as a static file from `public/cv/`. Replace that file to update it; the download link on `/cv/` needs no change.

Only projects flagged `inResume` in `src/app/projects.ts` appear on `/cv/`. The `resumeHighlights` field carries the full bullet lists; `highlights` and `details` stay short for the project cards on the home page.

The email address, phone number, location, and profile links live in `src/app/i18n/messages.ts` under `email`, `phone`, `location`, `github`, and `linkedin`. Update them there once a custom domain is available; nothing else hardcodes them.
