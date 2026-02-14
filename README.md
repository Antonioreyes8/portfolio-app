# Portfolio (React + TypeScript + Vite)

Minimal personal portfolio built with Vite, React and TypeScript.

Getting started

1. Install dependencies
```sh
npm install
```

2. Run dev server (HMR)
```sh
npm run dev
```
Open http://localhost:5173 (or the URL printed by Vite).

3. Build for production
```sh
npm run build
```

4. Preview production build locally
```sh
npm run preview
```

5. Lint code
```sh
npm run lint
```

Project structure (important files)
- [src/main.tsx](src/main.tsx) — app entry
- [src/App.tsx](src/App.tsx) — router + layout
- [src/sections/header.tsx](src/sections/header.tsx), [src/sections/menu.tsx](src/sections/menu.tsx)
- [src/pages/*.tsx](src/pages) — page components
- [src/styles/*.css](src/styles) — styles

Notes
- Uses React Router v7 as configured in [`App`](src/App.tsx).
- Vite config: [vite.config.ts](vite.config.ts)
- TypeScript project references: [tsconfig.app.json](tsconfig.app.json), [tsconfig.node.json](tsconfig.node.json)

License
- Unspecified. Add one if needed.