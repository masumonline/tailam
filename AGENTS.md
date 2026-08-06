# AGENTS.md

GrapesJS plugin (`grapesjs-tailam`) that adds prebuilt Tailwind CSS component blocks to the GrapesJS editor. Entrypoint: `src/index.js` -> `src/blocks.js` -> `src/blocks/`. The published package is `main: dist/index.js`.

## Commands

- `npm start` / `npm run dev` — `grapesjs-cli serve`; loads the demo in `_index.html` (root of repo) with GrapesJS + Tailwind v4 browser CDN. Test new blocks here.
- `npm run build` — `grapesjs-cli build`; writes `dist/index.js` (+ sourcemap). `dist/` is committed, so **always build before committing** or the repo and published package diverge.
- `npm run bump` — `npm version patch`. There is no other version bump path; `npm run build` does NOT bump the version (README's old claim is wrong).
- No lint, typecheck, or test commands exist. Prettier 3.6.2 is the only formatter (`.prettierrc`: 4-space indent, semicolons). Run `npx prettier --write src` to match. Several legacy files still lack semicolons; code is being migrated to the prettier style.

## Adding a new block

1. Create `src/blocks/<category>/<name>.js` exporting `export default function addXxx(bm)`.
2. Inside, call `bm.add("unique-id", { label, category, media: <svg>, content: <html> })`. `content` is Tailwind HTML only (Tailwind v4 is injected at runtime; no component CSS/JS).
3. **Register it in `src/blocks.js` in BOTH places** — the `import` list AND the `addXxx(bm)` call list. The plugin only loads blocks registered there; a missing entry silently omits the block.
4. `category` must be an exact existing string. The layout category uses the typo `"Tailwind Layours"` (not "Layouts"). Other categories: `Tailwind Buttons`, `Tailwind Containers`, `Tailwind Card`, `Tailwind Blog`, `Tailwind Hero`, `Tailwind Gallery`, `Tailwind Footer`, `Tailwind Form`, `Tailwind Navbar`, `Tailwind Sidebar`. Categories render collapsed (`src/index.js` sets `open: false`).

## Gotchas

- Filenames are inconsistent; some contain spaces/odd casing, e.g. `search_Box_with_Shadow and Border.js`. Copy import paths exactly from `src/blocks.js`.
- Export naming is inconsistent (e.g. `job_application_form` is called directly, not `add...`). Match the pattern already used in `src/blocks.js`.
- CI (`.github/workflows/npm-publish.yml`) runs `npm publish` on every push to `main`. Only version-bump (`npm run bump`) when you intend to release.
- `.npmignore` excludes `src/`, so only `dist/` ships to npm.
