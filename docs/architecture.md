# Architecture

## Overview

This project is a monorepo managed with **pnpm workspaces** containing two packages:

```
recipe-organizer/
├── backend/        # Express + TypeScript API
├── frontend/       # Next.js + TypeScript + Chakra UI app
├── docs/           # Project documentation
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
├── package.json    # Root workspace config
└── pnpm-workspace.yaml
```

## Frontend (`frontend/`)

- **Framework**: [Next.js 14](https://nextjs.org/) with TypeScript and the Pages Router
- **UI Library**: [Chakra UI v2](https://chakra-ui.com/)
- **Storybook**: Component stories are co-located with components in `src/components/`
- **Port**: 3000 (dev and production)

### Key files
| Path | Purpose |
|---|---|
| `src/pages/_app.tsx` | Root app shell — wraps everything in `ChakraProvider` |
| `src/pages/index.tsx` | Home page |
| `.storybook/` | Storybook configuration |

## Backend (`backend/`)

- **Runtime**: Node.js 20
- **Framework**: [Express 4](https://expressjs.com/) with TypeScript
- **Testing**: [Jest](https://jestjs.io/) + [Supertest](https://github.com/visionmedia/supertest)
- **Port**: 4000

### Key files
| Path | Purpose |
|---|---|
| `src/index.ts` | Express app entry point |
| `src/__tests__/` | Jest tests |

## Data Flow

```
Browser → Next.js (port 3000) → Express API (port 4000)
```
