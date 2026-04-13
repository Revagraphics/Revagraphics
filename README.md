# Reva Graphics

A modern creative agency website built with React, Vite, Tailwind CSS, and GSAP. This project showcases a responsive digital marketing and branding experience with multiple pages, animated sections, and a polished agency-style UI.

## Features

- React 19 + Vite app shell
- Responsive navigation with desktop dropdowns and mobile sidebar
- Animated hero, client logo carousel, and section transitions using GSAP
- Tailwind CSS utility-first styling
- React Router v7 for page routing
- Multiple service pages including Branding, Content, Marketing, Development, Designing, and Printing
- Portfolio, About, and Contact pages
- Custom reusable components for team, reviews, services, and more

## Project Structure

- `src/App.jsx` — app routes and global components
- `src/pages/` — main pages like `Home`, `About`, `Portfolio`, `Contact`, and service pages
- `src/components/` — reusable UI components
- `src/assets/` — images and static media
- `public/` — public assets such as fonts

## Technologies

- React
- Vite
- Tailwind CSS
- GSAP
- React Router DOM
- React Icons
- ESLint

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start local development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

5. Run lint checks

```bash
npm run lint
```

## Deployment

Build the project and deploy the `dist/` output to your hosting provider.

## Notes

- Make sure the project root contains `package.json` and `vite.config.js`.
- Use the `src/pages` folder to add or update route pages.
- Use the `src/components` folder to update reusable UI sections.

## License

This repository is provided as-is.
