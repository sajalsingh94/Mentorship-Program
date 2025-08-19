# Udaan Mentorship – Single-Page Website

A modern, responsive, conversion-focused landing page for the multi-exam mentorship programme covering UPSC, SSC, Banking, CAT, and State PSCs.

### What’s inside
- **Hero**: Bold title, aspirational copy, strong CTAs
- **Why Students Struggle**: Common pain points
- **Programme Overview**: Mentor-led, personalized roadmap
- **Key Highlights**: 1:1 sessions, diagnostics, practice, workshops
- **Differentiators**: Personalized mentorship, discipline + motivation, multi-exam adaptability
- **How It Works**: 4 clear steps to enroll
- **Testimonials**: Quotes from diverse exams
- **Brochure & Resources**: PDF brochure (client-side) + video embed
- **Contact & Footer**: Contact details, legal modals, socials

### Tech stack
- **Vanilla** HTML + CSS + JavaScript (no framework)
- **jsPDF** for client-side brochure generation

### Project structure
```
/workspace
├─ index.html      # Markup for all sections and modals
├─ styles.css      # Minimalist, responsive, dark theme styling
└─ script.js       # Interactivity: modals, forms, smooth scroll, brochure
```

### Running locally
1. Ensure Python 3 is installed.
2. From the project root, start a local server:
```bash
python3 -m http.server 8080 --directory .
```
3. Open `http://localhost:8080` in your browser.

Notes:
- Stop the server with `Ctrl+C`.
- If port 8080 is busy, swap `8080` with another open port.

### Running in GitHub Codespaces
1. Open the repository on GitHub and click: Code → Open with Codespaces → New codespace.
2. When the Codespace is ready, open a terminal (it starts in the project root).
3. Run a static server:
```bash
python3 -m http.server 8080 --directory .
```
4. In the Ports panel, Codespaces will detect port 8080:
   - If prompted, click “Open in Browser”.
   - Or open the Ports tab → right-click on port 8080 → Open in Browser.
   - Optionally set Visibility → Public if you want to share a preview URL.

### Customization
- Update copy and CTAs in `index.html`.
- Adjust brand colors and spacing in `styles.css` (CSS variables at the top).
- Edit interactivity, form behavior, or brochure contents in `script.js`.

### Accessibility & SEO
- Semantic landmarks, meaningful alt text, and accessible modals.
- Meta description and Open Graph tags included.

### License
This project is provided as-is for demonstration and marketing use. Add your preferred license if needed.