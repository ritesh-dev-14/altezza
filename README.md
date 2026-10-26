# ALTEZZA

A React website foundation for ALTEZZA, a premium modular kitchen and wardrobe
brand. Built with Vite, React Router, and Tailwind CSS v4.

## Getting started

```sh
npm install
npm run dev
```

## Available routes

- `/` — Home
- `/kitchens` — Kitchens
- `/wardrobes` — Wardrobes
- `/design` — Design process
- `/materials` — Materials and craftsmanship
- `/projects` — Projects
- `/about` — About
- `/contact` — Contact
- `/consultation` — Consultation enquiry

The consultation form currently has no backend or submission integration
configured. It validates required fields and clearly reports that details have
not been sent; connect an approved enquiry service before accepting submissions.

## Editorial photography

Additional self-hosted editorial images are sourced from Unsplash and Pexels
under their standard image licenses. Source photo IDs are `1600607687920`,
`1631679706909`, and `1600210492486` (Unsplash), plus `6186818`, `6585750`,
`6585752`, `6585753`, `6588592`, and `6301177` (Pexels). The Projects page
identifies these as visual references rather than completed ALTEZZA commissions.

Tailwind CSS is integrated through `@tailwindcss/vite`, with the brand palette
and typography tokens defined in `src/index.css`.
