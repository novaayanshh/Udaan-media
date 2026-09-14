# Udaan Media House — React + Tailwind

Full React + Tailwind CSS rebuild of the original PHP site (all pages).

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/`.

## Structure
- `src/pages` — one file per page/route
- `src/components` — Header, Footer, forms, reusable UI bits
- `src/data/siteData.js` — all nav links, service content, client logos, etc. Edit text/links here.
- `public/images` — all original site images (copied as-is)

## Notes
- Contact form (`ContactForm.jsx`, `QuickEnquiryForm.jsx`) is **frontend-only** for now:
  it validates a client-side captcha and redirects to `/thanks` on submit — no email/DB is wired up yet.
  To connect it to a real backend, replace the `handleSubmit` logic with an API call (e.g. `fetch('/api/contact', ...)`).
- Google Analytics tag was intentionally left out — add your GA snippet in `index.html` if needed.
