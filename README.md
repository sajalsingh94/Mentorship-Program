# The Coach Programme 2026 – Single Page Site

A clean, aspirational, conversion-focused single-page website for a multi-exam mentorship programme (UPSC, SSC, Banking, CAT, State PSCs, etc.).

## Quick Start (Local)

Open `index.html` directly, or run a static server for best results.

### Python (built-in on most systems)
```bash
cd /workspace
python3 -m http.server 8000
```
Open: `http://localhost:8000/index.html`

### Node (npx)
```bash
cd /workspace
npx serve -l 8000
```
Open: `http://localhost:8000`

## GitHub Codespaces

This repo includes a dev container. In Codespaces, port 8000 is forwarded and a server auto-starts.

Steps:
- Open on GitHub → Code → Codespaces → Create codespace.
- Wait for the container to start; preview should open on port 8000.
- If not, run:
```bash
python3 -m http.server 8000
```
Then open the forwarded URL for port 8000.

## Project Structure

- `index.html` – main single-page site
- `styles.css` – modern, responsive styling
- `script.js` – smooth scrolling, mobile nav, modals, simple form handler
- `brochure.html` – printable brochure page (opens in a new tab)
- `.devcontainer/devcontainer.json` – Codespaces config (Python 3.11, port 8000, auto-start server)

## Customize

- Edit copy in `index.html`.
- Tweak colors in `styles.css` (CSS variables at top).
- Replace background image URLs in `styles.css`.
- Wire the form in `script.js` to a real endpoint (webhook/Sheets/backend) instead of the simulated submit.

## Deploy

Upload the files to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3). No build step required.

### GitHub Pages (quick)
- Settings → Pages → Deploy from branch → `/ (root)` → Save.

## License

All rights reserved. Replace with your preferred license if needed.