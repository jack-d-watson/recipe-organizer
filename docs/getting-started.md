# Getting Started

## Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- [Docker](https://www.docker.com/) (optional, for containerised runs)

## Local Development

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start both services

```bash
pnpm start
```

This starts:
- **Backend** on http://localhost:4000
- **Frontend** on http://localhost:3000

> **Note**: `pnpm start` runs production builds. Use `pnpm dev` for hot-reloading during development.

### 3. Storybook (component explorer)

```bash
pnpm storybook
```

Opens Storybook on http://localhost:6006.

### 4. Run backend tests

```bash
pnpm test
```

## Docker

To run the full stack in Docker:

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Project Scripts (root)

| Script | Description |
|---|---|
| `pnpm start` | Start both frontend and backend (production) |
| `pnpm dev` | Start both with hot-reload |
| `pnpm build` | Build both packages |
| `pnpm test` | Run backend Jest tests |
| `pnpm storybook` | Launch Storybook for frontend |
