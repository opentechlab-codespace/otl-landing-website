# OpenTech Lab Landing Website - Local Setup Guide

A modern landing website for OpenTech Lab built with Next.js, React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you start, make sure you have the following installed on your local machine:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**/pnpm as preferred package manager
- **Git** - [Download here](https://git-scm.com/)

Verify installations:

```bash
node --version
npm --version
git --version
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd otl-landing-main
```

### 2. Install Dependencies

Using npm:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

---

## Development

### Start the Development Server

```bash
npm run dev
```

This will start the development server at **http://localhost:3000**

The application will:

- Auto-reload when you make changes to your code
- Show helpful error messages in the browser and terminal

### View in Browser

Open your browser and navigate to: `http://localhost:3000`

---

## Building for Production

### Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Start Production Server

```bash
npm run start
```

This runs the application in production mode (must run `build` first).

---

## Available Scripts

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| `npm run dev`            | Start development server with hot reload |
| `npm run build`          | Build for production                     |
| `npm run start`          | Run production server                    |
| `npm run lint`           | Run ESLint to check code quality         |
| `npm run test`           | Run Jest tests once                      |
| `npm run test:watch`     | Run Jest tests in watch mode             |
| `npm run type-check`     | Check TypeScript types without emitting  |
| `npm run security:audit` | Run npm security audit                   |

---

## Project Structure

```
src/
├── app/                    # Next.js app directory (pages)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── academy/           # Academy pages
│   ├── contact/           # Contact page
│   └── ...
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── sections/         # Page sections (hero, services, etc.)
│   └── layout/           # Layout components (navbar, footer)
├── lib/                   # Utility functions and helpers
│   ├── api/              # API client and middleware
│   ├── hooks/            # Custom React hooks
│   └── utils.ts          # Utility functions
├── data/                  # Static data (clients, courses, team)
├── types/                 # TypeScript type definitions
├── styles/               # Global styles and animations
└── config/               # Configuration files
```

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/react)
- **Linting**: [ESLint](https://eslint.org/) with security plugins
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Troubleshooting

### Port 3000 is already in use

Kill the process using port 3000:

```bash
# On macOS/Linux
lsof -ti:3000 | xargs kill -9

# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Then restart the dev server.

### Dependencies not installing

Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

Run type checking:

```bash
npm run type-check
```

### ESLint errors

Check linting issues:

```bash
npm run lint
```

### Node version mismatch

Use a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to switch versions:

```bash
nvm use
```

---

## Additional Notes

- **Environment Variables**: If needed, create a `.env.local` file in the root directory for local environment configuration.
- **Netlify Deployment**: This project is configured for Netlify. See `netlify.toml` for deployment settings.
- **Code Quality**: Always run `npm run lint` and `npm run type-check` before committing code.

---

## Need Help?

For more information:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Happy coding! 🚀
