# Vercel publication

Account: `sadienis`

Project: `sadienis-portfolio`

The local checkout is linked through the ignored `.vercel/` directory. This is a CLI deployment, not an automatic GitHub deployment. The existing Sites source remote has not been changed.

To publish subsequent approved changes from this directory:

```powershell
npx.cmd --yes vercel@64.5.0 deploy --prod --yes
```

Vercel builds the existing Next.js static export. No database or runtime environment variables are required. `.vercelignore` excludes internal notes, Sites configuration, and local build artifacts from uploads.
