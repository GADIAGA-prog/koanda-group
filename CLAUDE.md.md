# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🎯 Project Overview

**Groupe Koanda** is the corporate website for a Burkina Faso-based holding company that manages multiple subsidiaries across various sectors. The site serves three main audiences:

1. **Public visitors** — Discover the group, its subsidiaries, projects, and news
2. **Partners & investors** — Access governance information and corporate identity
3. **Internal admin team** — Publish and manage news articles via a secured back office

The site must convey **professionalism, ambition, and African excellence** while remaining fast, accessible, and SEO-friendly.

---

## 🛠 Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (http://localhost:5173)
npm run build      # Build production bundle to /dist
npm run preview    # Preview production build locally
npm run lint       # Run ESLint (if configured)
```

> **Note:** No test runner is currently configured. If adding tests, prefer **Vitest** for unit tests and **Playwright** for E2E (lightweight, Vite-native).

---

## 🏗 Architecture

**Stack:** React 18 SPA built with **Vite**, deployed on **Vercel** with serverless API functions. Single global CSS file. Flat JSON file as data store. No external database.

### Directory Structure

```
groupe-koanda/
├── api/                              # Vercel serverless functions
│   ├── _lib/
│   │   ├── articles.js               # Article CRUD against data/articles.json
│   │   ├── auth.js                   # HMAC session management
│   │   └── http.js                   # JSON helpers, cookie parsing
│   ├── news/
│   │   ├── index.js                  # GET /api/news
│   │   └── [slug].js                 # GET /api/news/:slug
│   └── admin/
│       ├── login.js                  # POST /api/admin/login
│       ├── logout.js                 # POST /api/admin/logout
│       ├── session.js                # GET  /api/admin/session
│       └── articles/
│           ├── index.js              # GET (list all) / POST (create)
│           └── [id].js               # PUT (update) / DELETE (remove)
├── data/
│   └── articles.json                 # Flat JSON store for articles
├── public/                           # Static assets (favicon, images, logos)
├── src/
│   ├── main.jsx                      # ReactDOM entry point
│   ├── App.jsx                       # React Router v7, all routes
│   ├── styles.css                    # Single global stylesheet (~59KB)
│   ├── components/                   # Shared components
│   │   ├── SiteLayout.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SubsidiaryCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── OrgChartExplorer.jsx
│   │   ├── AdminArticleEditor.jsx
│   │   └── AdminArticleList.jsx
│   ├── pages/                        # One component per route
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── GovernancePage.jsx
│   │   ├── SubsidiariesPage.jsx
│   │   ├── SubsidiaryDetailPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── NewsPage.jsx
│   │   ├── NewsArticlePage.jsx
│   │   ├── PartnersPage.jsx
│   │   ├── CareersPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LegalPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── AdminLoginPage.jsx
│   │   └── AdminDashboardPage.jsx
│   ├── data/
│   │   └── siteContent.js            # Single source of truth for static content
│   └── lib/
│       └── newsApi.js                # Fetch helpers calling /api/news/*
├── vercel.json                       # Rewrites for SPA routing
├── vite.config.js
└── package.json
```

---

## 🧭 Routing (React Router v7)

### Public routes (wrapped in `<SiteLayout>`)

| Path | Component | Purpose |
|---|---|---|
| `/` | `HomePage` | Hero, group overview, featured subsidiaries, latest news, partners |
| `/a-propos` | `AboutPage` | History, mission, vision, values |
| `/gouvernance` | `GovernancePage` | Interactive org chart |
| `/filiales` | `SubsidiariesPage` | Grid of subsidiaries |
| `/filiales/:slug` | `SubsidiaryDetailPage` | Subsidiary detail page |
| `/projets` | `ProjectsPage` | Portfolio of projects/achievements |
| `/actualites` | `NewsPage` | Published articles list (fetched from API) |
| `/actualites/:slug` | `NewsArticlePage` | Full article view |
| `/partenaires` | `PartnersPage` | Partner logos and presentations |
| `/carrieres` | `CareersPage` | Job openings, HR values |
| `/contact` | `ContactPage` | Contact form + coordinates |
| `/mentions-legales` | `LegalPage` | Legal notice |
| `/confidentialite` | `PrivacyPage` | Privacy policy |
| `*` | `NotFoundPage` | 404 page |

### Admin routes (rendered **without** `<SiteLayout>`)

| Path | Component | Purpose |
|---|---|---|
| `/admin/login` | `AdminLoginPage` | Login form |
| `/admin` | `AdminDashboardPage` | Article list with CRUD actions |
| `/admin/articles/nouveau` | `AdminDashboardPage` (editor mode) | Create new article |
| `/admin/articles/:id` | `AdminDashboardPage` (editor mode) | Edit existing article |

**Protection:** Admin routes must check session via `GET /api/admin/session` on mount. Redirect to `/admin/login` if unauthenticated.

---

## 🎨 Frontend Conventions

### Components (`src/components/`)

| Component | Responsibility |
|---|---|
| `SiteLayout` | Header (logo, nav menu, mobile burger), main content slot, footer (links, social, copyright) |
| `SectionHeading` | Reusable section title: eyebrow text + title + optional subtitle + decorative line |
| `SubsidiaryCard` | Card with logo, name, sector tag, short description, "Découvrir" CTA |
| `ContactForm` | Name, email, phone, subject, message + client-side validation + submit handler |
| `OrgChartExplorer` | Expandable/collapsible hierarchical organization chart |
| `AdminArticleEditor` | Form: title, slug (auto-generated, editable), excerpt, content (textarea/markdown), cover image URL, status toggle (draft/published) |
| `AdminArticleList` | Table: title, status badge, published date, action buttons (edit, delete, toggle status) |

### Styling rules

- **Single global stylesheet:** `src/styles.css` (~59KB). **No** CSS modules, **no** Tailwind, **no** styled-components, **no** CSS-in-JS.
- Use **BEM-like naming**: `.subsidiary-card`, `.subsidiary-card__title`, `.subsidiary-card--featured`.
- Define **CSS custom properties** at `:root` for the design system (colors, spacing, typography, radii, shadows).
- **Mobile-first** breakpoints: `640px`, `768px`, `1024px`, `1280px`.

### Design system tokens (in `:root`)

```css
:root {
  /* Brand colors — Burkina Faso inspired, used with restraint */
  --color-primary: #C8102E;        /* Burkinabè red */
  --color-secondary: #009A44;      /* Burkinabè green */
  --color-accent: #FCD116;         /* Burkinabè yellow (accents only) */
  --color-ink: #1A1A1A;            /* Body text */
  --color-muted: #6B7280;          /* Secondary text */
  --color-surface: #FFFFFF;
  --color-background: #FAFAF7;     /* Warm off-white */
  --color-border: #E5E5E0;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;

  /* Spacing scale (4px base) */
  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem;
  --space-4: 1rem;    --space-6: 1.5rem; --space-8: 2rem;
  --space-12: 3rem;   --space-16: 4rem;  --space-24: 6rem;

  /* Radii & shadows */
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.12);

  /* Layout */
  --container-max: 1200px;
  --header-height: 80px;
}
```

### Static content (`src/data/siteContent.js`)

This file is the **single source of truth** for non-article content. It must export:

```js
export const companyInfo = {
  name: 'Groupe Koanda',
  tagline: '…',
  description: '…',
  founded: 2010,
  headquarters: 'Ouagadougou, Burkina Faso',
  email: 'contact@groupekoanda.com',
  phone: '+226 …',
  address: '…',
  social: { linkedin: '…', facebook: '…', twitter: '…' }
};

export const subsidiaries = [
  {
    slug: 'koanda-btp',
    name: 'Koanda BTP',
    sector: 'Bâtiment & Travaux Publics',
    shortDescription: '…',
    longDescription: '…',
    logo: '/images/subsidiaries/koanda-btp.svg',
    coverImage: '/images/subsidiaries/koanda-btp-cover.jpg',
    foundedYear: 2012,
    featuredProjects: ['project-slug-1', 'project-slug-2'],
    services: ['…', '…'],
    contact: { email: '…', phone: '…' }
  },
  // … at least 3 subsidiaries with realistic Burkinabè content
];

export const projects = [
  {
    slug: 'centre-commercial-ouaga-2000',
    title: '…',
    subsidiarySlug: 'koanda-btp',
    year: 2024,
    location: 'Ouagadougou',
    image: '/images/projects/…',
    description: '…',
    highlights: ['…', '…']
  },
  // … at least 5 projects
];

export const partners = [
  { name: '…', logo: '/images/partners/…', url: '…' },
  // … at least 6 partners
];

export const orgChart = {
  // Hierarchical structure for OrgChartExplorer
  id: 'ceo',
  name: '…',
  role: 'Président Directeur Général',
  children: [
    {
      id: 'dg-operations',
      name: '…',
      role: 'Directeur Général Opérations',
      children: [/* … */]
    },
    // …
  ]
};

export const values = [
  { icon: '…', title: 'Excellence', description: '…' },
  // … 4 to 6 values
];
```

### API client (`src/lib/newsApi.js`)

```js
const API_BASE = '/api';

export async function fetchPublishedArticles() { /* GET /api/news */ }
export async function fetchArticleBySlug(slug) { /* GET /api/news/:slug */ }

// Admin
export async function fetchAllArticles() { /* GET /api/admin/articles */ }
export async function createArticle(data) { /* POST /api/admin/articles */ }
export async function updateArticle(id, data) { /* PUT /api/admin/articles/:id */ }
export async function deleteArticle(id) { /* DELETE /api/admin/articles/:id */ }

// Auth
export async function login(username, password) { /* POST /api/admin/login */ }
export async function logout() { /* POST /api/admin/logout */ }
export async function checkSession() { /* GET /api/admin/session */ }
```

All fetchers must include `credentials: 'include'` for admin endpoints, throw on non-2xx responses with the API's error message, and return parsed JSON.

---

## ⚙️ Backend (Vercel Serverless Functions)

### API surface

| Method | Route | Auth | Purpose |
|---|---|---|---|
| `GET` | `/api/news` | Public | List **published** articles, sorted by `publishedAt` desc |
| `GET` | `/api/news/:slug` | Public | Get article by slug (404 if not published or not found) |
| `POST` | `/api/admin/login` | Public | Set session cookie if credentials valid |
| `POST` | `/api/admin/logout` | Auth | Clear session cookie |
| `GET` | `/api/admin/session` | Auth | Returns `{ authenticated: true, username }` or 401 |
| `GET` | `/api/admin/articles` | Auth | List **all** articles (drafts included) |
| `POST` | `/api/admin/articles` | Auth | Create article (generates `id`, `createdAt`, `updatedAt`) |
| `PUT` | `/api/admin/articles/:id` | Auth | Update article fields, refresh `updatedAt` |
| `DELETE` | `/api/admin/articles/:id` | Auth | Remove article from JSON |

### Helpers (`api/_lib/`)

**`articles.js`** — Centralized read/write logic for `data/articles.json`:
- `readArticles()` — Read and parse JSON file (return `[]` if missing)
- `writeArticles(articles)` — Atomic write to JSON file
- `findArticleBySlug(slug)`, `findArticleById(id)`
- `createArticle(data)`, `updateArticle(id, data)`, `deleteArticle(id)`
- Auto-generate `id` (UUID v4), `slug` (kebab-case from title if not provided), timestamps

**`auth.js`** — Session management:
- Cookie name: `koanda_admin_session`
- Algorithm: **HMAC-SHA256** with `ADMIN_SESSION_SECRET`
- Payload: `{ username, issuedAt, expiresAt }` (base64-encoded JSON)
- TTL: **12 hours**
- Cookie flags: `HttpOnly`, `SameSite=Lax`, `Path=/`, `Secure` in production
- Exports: `signSession(payload)`, `verifySession(cookieValue)`, `requireAuth(req, res)` middleware

**`http.js`** — Shared HTTP utilities:
- `json(res, statusCode, body)` — Send JSON response
- `parseCookies(req)` — Parse cookie header into object
- `setCookie(res, name, value, options)` — Set Set-Cookie header
- `getBody(req)` — Parse JSON request body
- `errorResponse(res, statusCode, message)` — Consistent error format `{ error: '...' }`

### Article schema

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "slug": "lancement-nouveau-projet-koanda-btp",
  "title": "Lancement d'un nouveau projet par Koanda BTP",
  "excerpt": "Résumé court de 1 à 2 phrases…",
  "content": "Contenu complet en markdown ou HTML simple…",
  "coverImage": "/images/news/cover-projet.jpg",
  "author": "Direction de la Communication",
  "publishedAt": "2026-05-27T10:00:00Z",
  "status": "published",
  "createdAt": "2026-05-20T08:00:00Z",
  "updatedAt": "2026-05-27T10:00:00Z"
}
```

`status` is `"published"` or `"draft"`. Public endpoints only return `published`.

---

## 🔐 Environment Variables

| Variable | Purpose | Dev default | Production |
|---|---|---|---|
| `ADMIN_SESSION_SECRET` | HMAC signing key for session cookies | Hardcoded dev secret | **Required**: random 64+ char string |
| `ADMIN_USERNAME` | Admin login username | `commercial` | Override recommended |
| `ADMIN_PASSWORD` | Admin login password | `KoandaAdmin2026!` | **Required**: strong password |

> ⚠️ **Production checklist:** The Vercel project must set all three variables. Dev defaults are only safe for local development and **must never be used in production**.

---

## 🚀 Deployment

- `vercel.json` rewrites all unmatched routes to `/index.html` to support client-side routing.
- Vercel **auto-discovers** functions in `api/`. No build step needed for the API.
- Node.js runtime: **Node 20.x** (specify in `package.json` `engines` field).

### `vercel.json`

```json
{
  "rewrites": [
    { "source": "/((?!api/).*)", "destination": "/index.html" }
  ]
}
```

---

## 📋 Working Conventions

### When adding a new page

1. Create the component in `src/pages/`.
2. Add the route in `src/App.jsx`, wrapped in `<SiteLayout>` (or not, for admin).
3. Add navigation entry in `SiteLayout` if it should appear in the menu.
4. Add any new static content to `src/data/siteContent.js`.
5. Style with new BEM classes appended to `src/styles.css`.

### When adding a new API endpoint

1. Create the file under `api/` matching the desired route (Vercel maps filesystem to URL).
2. Use helpers from `api/_lib/` — don't reinvent JSON/cookie/auth handling.
3. Protect admin endpoints by calling `requireAuth(req, res)` first; return early on 401.
4. Always return JSON with consistent shape: `{ error: '…' }` on failure, the resource on success.
5. Handle `OPTIONS` requests for CORS preflight if needed (same-origin so usually not needed).

### When modifying article logic

- **Always** go through `api/_lib/articles.js`. Do not read/write `data/articles.json` directly from route handlers.
- Slugs must be unique. On create, if a duplicate slug is provided, append `-2`, `-3`, etc.
- Validate required fields (`title`, `content`) before write; return 400 with explicit message.

### Editing styles

- All styles live in `src/styles.css`. Open it, find the relevant section (organized top to bottom: reset → tokens → typography → layout → components → utilities → media queries), and append/edit there.
- Keep selectors flat (max 3 levels). Avoid `!important` unless overriding a third-party style.

---

## ✅ Quality Bar

Every change should preserve or improve:

- **Accessibility (a11y)** — Semantic HTML, ARIA labels where needed, keyboard navigation, focus-visible styles, WCAG AA color contrast.
- **Performance** — Lazy-load route components with `React.lazy()`, lazy-load `<img>` with `loading="lazy"`, minimize bundle size (target Lighthouse > 90 on all categories).
- **SEO** — Each page sets its own `<title>` and `<meta name="description">` (use `react-helmet-async` if added, or update `document.title` in `useEffect`).
- **Responsiveness** — Test at 375px, 768px, 1024px, 1440px widths.
- **Localization** — All UI copy in **French** (primary language: Burkina Faso). Article content is also in French. Date formatting uses `Intl.DateTimeFormat('fr-FR')`.

---

## 🚫 Hard Constraints

- ❌ **No** CSS frameworks (Tailwind, Bootstrap, etc.) or CSS-in-JS libraries.
- ❌ **No** UI component libraries (Material UI, Chakra, Ant Design, shadcn, etc.).
- ❌ **No** external database. `data/articles.json` is the sole article store.
- ❌ **No** state management library (Redux, Zustand, etc.). Use `useState`/`useReducer`/`useContext` only.
- ❌ **No** form library (Formik, react-hook-form). Hand-roll forms with controlled components.
- ❌ **No** secret committed to git. All secrets via environment variables.
- ✅ **Minimal dependencies**: `react`, `react-dom`, `react-router-dom`, `vite`, `@vitejs/plugin-react`. Add new dependencies only when justified.

---

## 🧪 Manual Test Checklist (before deploying)

- [ ] Home page loads and all sections render (hero, subsidiaries, news, partners, CTA)
- [ ] All public routes are reachable from the navigation
- [ ] Subsidiary detail page renders for every slug in `siteContent.js`
- [ ] News list fetches from `/api/news` and displays only published articles
- [ ] Clicking an article opens the detail page with full content
- [ ] Contact form validates required fields and shows success/error feedback
- [ ] Mobile menu opens, closes, and traps focus correctly
- [ ] `/admin/login` rejects invalid credentials and accepts the configured ones
- [ ] Admin dashboard lists all articles (including drafts)
- [ ] Create / edit / delete article each work and persist to `data/articles.json`
- [ ] Logout clears the session and redirects to login
- [ ] 404 page renders for unknown routes
- [ ] Site builds with `npm run build` without warnings

---

## 📚 Additional Notes for Claude Code

- **Prefer small, focused commits.** When adding a feature, make sure existing pages still work.
- **Reuse existing components** before creating new ones. Look in `src/components/` first.
- **Match existing code style.** Function components, named exports, `.jsx` extension, 2-space indentation.
- **When unsure about Burkinabè content**, propose realistic placeholders (use plausible Burkinabè names, Ouagadougou neighborhoods like Ouaga 2000, Zone du Bois, Pissy; reference real sectors of the Burkinabè economy: BTP, agriculture, mining, transport, telecom).
- **Never invent endpoints** — if a feature needs a new route, add it explicitly under `api/` and document it here.
- **Read `siteContent.js` before editing the homepage** — most "content" changes belong in that file, not in components.
