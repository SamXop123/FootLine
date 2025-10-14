

# [![Typing SVG](https://readme-typing-svg.demolab.com?font=Arial&size=40&letterSpacing=0.2rem&duration=2000&pause=1000&color=10FF0B&repeat=false&width=435&height=60&lines=FootLine)](https://git.io/typing-svg)

## [![Typing SVG](https://readme-typing-svg.demolab.com?font=Arial&size=15&letterSpacing=0.2rem&duration=1000&color=10FF0B&multiline=true&repeat=false&width=505&height=80&lines=Build+your+dream+football+lineup.+;Pick+formations%2C+search+players%2C+and;+save%2Fshare+lineups+%E2%80%94+fast.)](https://git.io/typing-svg)


## Features

- **Lineup Builder** with multiple formations (`4-4-2`, `4-3-3`, `3-5-2`, `4-2-3-1`, `5-3-2`).
- **Rich Player Search** with filters by position, team, nationality.
- **Smart Warnings** when placing players in non-standard positions.
- **AI Suggest**: generate a lineup from the database for the selected formation.
- **Save/Load/Delete** lineups (localStorage).
- **Toasts/Dialogs** for clean UX.

## Stack

- React 18 + Vite
- React Router
- Tailwind CSS 3 + PostCSS (ESM config)
- Radix UI primitives (Tabs, Select, ScrollArea, Tooltip, Dialog, Toast)
- lucide-react icons

## Getting Started

1) Install dependencies

```bash
pnpm install
```

2) Start dev server

```bash
pnpm dev
```


## Scripts

- `pnpm dev` – start Vite dev server
- `pnpm build` – production build
- `pnpm preview` – preview production build

## Project Structure

```
footline-react/
  src/
    components/
      ui/                # Reusable UI primitives (Radix + Tailwind)
      football-pitch.jsx # Pitch visualization with positions
      lineup-builder.jsx # Main lineup builder experience
      player-search.jsx  # Filterable player list
      player-card.jsx
      saved-lineups.jsx
      position-warning-dialog.jsx
      loading-state.jsx
    hooks/
      use-toast.js
    lib/
      utils.js           # helpers: cn(), formatDate(), generateRandomLineup()
      formations.js
      player-database.js # static dataset
    pages/
      Home.jsx
    App.jsx
    main.jsx
  postcss.config.js      # ESM PostCSS config
  tailwind.config.js
  vite.config.js         # alias @ -> ./src
```

## Configuration Notes

- This project uses ESM. `postcss.config.js` exports ESM: `export default { ... }`.
- Vite alias `@` maps to `./src` (see `vite.config.js`).
- Tailwind v3 is configured locally to avoid conflicts with other projects.

## Data

The demo uses a static `player-database.js` with goalkeepers, defenders, midfielders, and forwards across top leagues. You can replace or extend it with your own data source or API.

## Roadmap Ideas

- Shareable URLs with encoded lineup state
- Import/Export lineups as JSON
- Persist last lineup/formation across sessions
- Player images and advanced stats
- Drag-and-drop position assignment

## Contributing

PRs and suggestions are welcome. Please open an issue to discuss significant changes.

### License

MIT (Modified)
