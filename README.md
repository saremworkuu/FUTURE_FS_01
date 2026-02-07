## portofolio website 

A modern single-page developer portfolio built with React, TypeScript, and Vite. 
It showcases sections like Hero, About, Projects, Skills, Contact, and a themed footer.

### Tech Stack
- React + TypeScript
- Vite
- Tailwind CSS (via CDN in `index.html`)

---

### 1. Local Setup

**Prerequisite:** Node.js 18+ and npm installed.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually `http://localhost:5173` or `http://localhost:3001`).

---

### 2. Production Build

To create an optimized build:

```bash
npm run build
```

The static files will be generated in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

---

### 3. Deploying to GitHub Pages

Here is a simple way to deploy using a `gh-pages` branch:

1. Build the project:
   ```bash
   npm run build
   ```
2. Create a new branch for GitHub Pages (only once):
   ```bash
   git checkout --orphan gh-pages
   ```
3. Remove existing files from the index and add the built files:
   ```bash
   git --work-tree dist add .
   git --work-tree dist commit -m "Deploy portfolio"
   ```
4. Push to the `gh-pages` branch:
   ```bash
   git push origin HEAD:gh-pages --force
   ```
5. Switch back to your main branch:
   ```bash
   git checkout main
   ```
6. In GitHub → **Settings** → **Pages**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` / root

GitHub Pages will then host your built portfolio at:
`https://<your-username>.github.io/<your-repo-name>/`

If you prefer, you can also deploy the contents of `dist` manually to any static hosting service.
