# Security Review (Layman's Version)

## Is this repo secure right now?
It is **significantly safer than before**, but security is never "done." The biggest improvement was moving away from the old CRA dependency line in `package.json` and adding stronger baseline browser protections.

## What was improved

### 1) Hardened browser behavior with CSP + Referrer Policy
- Think of CSP like a browser "allow-list" for what code/content can run or load.
- We now limit scripts/assets/connections to trusted sources (`self`) and disable risky legacy features like embedded objects.
- We also reduced referrer leakage with `strict-origin-when-cross-origin`.

### 2) Reduced attack surface
- Removed unused service worker code to avoid stale-cache/update pitfalls and unnecessary complexity.

### 3) Secured dependency direction (toolchain modernization)
- Updated project dependency targets from legacy CRA 2.x / React 16.x to modern maintained lines in `package.json`:
  - `react` 18
  - `react-dom` 18
  - `react-scripts` 5
- Removed an unused dependency (`react-spring`) to shrink risk exposure.

### 4) Added safer repo/runtime defaults
- Added `.gitignore` for local artifacts and env files.
- Added Node runtime guidance (`.nvmrc`, `.node-version`) and `engines` in `package.json` so teams use compatible supported Node/npm.
- Added `security:check` script for a repeatable `npm audit` check.

## Important note
- This environment blocked npm advisory API access (`403`), so I could not complete a live vulnerability scan here.
- To fully realize the dependency upgrade, run install in CI/dev with network access (`npm install`) so lockfile/modules align to updated versions.

## Industry best-practice next steps
1. Regenerate and commit `package-lock.json` with the upgraded toolchain.
2. Add CI jobs for:
   - `npm ci`
   - `npm run build`
   - `npm run security:check`
3. Enforce server-side headers too (CSP, HSTS, `X-Content-Type-Options`, etc.) in hosting config.
4. Enable Dependabot/Renovate to keep dependencies patched continuously.
