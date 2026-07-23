# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Lee Xuanhui (https://www.xuanhuilee.com/). A single-page React app built with Create React App and Tailwind CSS.

## Commands

- `npm start` — dev server (react-scripts)
- `npm run build` — production build to `build/`
- `npm test` — run tests in watch mode (Jest via react-scripts); run a single file with `npm test -- App.test.js`

## Deployment

Deployed as static assets via Cloudflare Workers (`wrangler.toml` serves `./build` with SPA not-found handling; `_redirects` also rewrites all routes to `index.html`). Deploy with `npx wrangler deploy` after `npm run build`.

## Architecture

- `src/App.js` composes the entire site as one page: `Navbar → AboutMe → Experience → Projects → Footer`, wrapped in `DarkModeProvider`. There is no routing despite `react-router-dom` being installed.
- **Dark mode** (`src/components/darkmodecontext.js`): context provider persists the theme to `localStorage` and toggles the `dark` class on `<html>`. Tailwind is configured with `darkMode: 'selector'`, so all components style dark mode via `dark:` variants. Any new UI must include `dark:` classes to match.
- **Content is hardcoded in components**, not fetched: `experience.js` contains job cards inline, `projects.js` contains project cards inline (with `projectsData.js` holding an additional data object). Updating resume content means editing these JSX files directly.
- **Images** live in `public/` and are referenced by bare filename (e.g. `imageUrl="govtech.png"`, tech logos as `` `${logo}.png` ``), resolved relative to the public root. Add new images to `public/` and reference them by filename.
- Navbar links use in-page anchors (`#experience`, etc.) matching section `id`s.
