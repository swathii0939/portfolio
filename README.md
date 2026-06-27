# Swathi S. — AI & ML Portfolio (React + MUI)

A personal portfolio built with **React** and **Material UI**, upgraded from an
earlier HTML/CSS version. Showcases skills, featured AI/ML projects, education,
and contact info, with a small animated neural-network motif in the hero section.

## Tech stack
- React 18 + Vite
- Material UI (MUI) v6
- Emotion (styling engine used by MUI)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
  App.jsx
  main.jsx
  theme.js
```

## Customize

- Replace placeholder details (email, college name, LinkedIn/GitHub links,
  resume PDF) in `src/components/Hero.jsx`, `Education.jsx`, and `Contact.jsx`.
- Add a real resume at `public/resume.pdf` so the "Download Resume" button works.
