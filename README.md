# Nissanol Website

Marketing and product-catalog website for Nissanol, built with React and Vite.

## Overview

This project is a single-page application for the Nissanol lubricants brand. It includes:

- Home page
- About Us page
- Product category and product listing pages
- Distributor Enquiry page
- Global Presence page
- Contact Us page

The app uses client-side routing with `react-router-dom` and is configured for deployment on Vercel.

## Tech Stack

- React
- Vite
- React Router
- React Icons

## Project Structure

```text
nessanol/
|-- public/
|   |-- assets/
|-- src/
|   |-- components/
|   |-- data/
|   |-- pages/
|   |-- App.jsx
|   |-- main.jsx
|   |-- styles.css
|-- index.html
|-- package.json
|-- vite.config.js
|-- vercel.json
```

## Routes

- `/`
- `/about-us`
- `/products`
- `/products/:categorySlug`
- `/distributor-enquiry`
- `/global-presence`
- `/contact-us`
- `/privacy-policy`

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment

This project is ready for Vercel deployment.

`vercel.json` includes a rewrite rule so direct access or refresh on routes like `/about-us` or `/contact-us` does not return a 404.

## Product Data

Product categories and product cards are data-driven:

- `src/data/homeData.js`
- `src/data/productCatalog.js`

To update product listings, category labels, or images, edit those files and the matching assets in `public/assets`.

## Notes

- Internal app navigation uses React Router links.
- The React contact and distributor forms currently prevent default submission and are not connected to a backend.
- `sendemail.php` exists in the repository from the older static site version, but it is not wired into the React app.
- The repository also contains legacy static HTML/CSS assets that are separate from the Vite app.

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
