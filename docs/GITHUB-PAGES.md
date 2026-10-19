# GitHub Pages deployment

Target repository: `SadiEnis/SadiEnis.github.io`.
Target URL: `https://sadienis.github.io/`.

The site uses Next.js static export (`output: 'export'`) and trailing slashes.
This user-site repository serves from the root, so no basePath or assetPrefix is needed.
All four routes, images, the English PDF, and client-side EN/TR/PL selection are included.

## Initial setup

1. Create the repository `SadiEnis.github.io` on the SadiEnis account.
2. Put this project at the repository root and push branch `main`.
3. In Settings → Pages, set the publishing source to **GitHub Actions**.
4. Run **Publish portfolio to GitHub Pages** in Actions, or push a new commit.
5. Confirm the deployment succeeds and test `/`, `/motivation/`, `/contact/`, `/cv/`, language selection, and PDF download on the new URL.

The workflow installs locked dependencies with npm ci, runs localization tests,
builds static output, verifies essential files, and deploys only `out/`.
It uses GitHub's built-in token and OIDC; no Vercel credentials are needed.
Subsequent pushes to main publish automatically after successful checks.

Vercel is no longer the deployment destination. Its existing deployment is left
untouched until the owner decides to remove it. The old Vercel instructions are historical.

Status: local workflow prepared; remote repository setup and first GitHub Pages deployment must be verified.
