# ariella shulman's personal website

My personal website, built with [Lovable](https://lovable.dev) and hosted at **[ariellashulman.lovable.app](https://ariellashulman.lovable.app)**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [shadcn/ui](https://ui.shadcn.com) | UI component library |

---

## Project Structure

```
my-personal-website/
├── public/          # Static assets (favicon, images)
├── src/             # All website source code
│   ├── components/  # Reusable UI pieces (nav, sections, etc.)
│   ├── pages/       # Top-level page views
│   └── App.tsx      # Root component and routing
├── index.html       # HTML entry point
├── tailwind.config.ts  # Design tokens (colors, fonts, spacing)
└── package.json     # Dependencies and scripts
```

---

## Making Edits

**To change content** (text, links, sections): edit `.tsx` files inside `src/`

**To change colors or fonts**: edit `tailwind.config.ts`

**To change the page title or favicon**: edit `index.html` or swap files in `public/`

---

## Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Deployment

This site is deployed via [Lovable](https://lovable.dev). Pushing to the `main` branch automatically updates the live site.
