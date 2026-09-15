# ShopEase — React E-Commerce Store

A responsive e-commerce store built with **React**, **Bootstrap 5**, and a live REST API
(https://muhammadfarhandeveloper.github.io/E-Commerce-fakeapi/).

## Features

- Fetches products & categories from a public REST API (`fetch` + `useEffect`)
- Responsive Bootstrap product cards
- Live search + category filtering
- Product details view
- Add to cart, update quantity, remove items
- Cart total & item count in the navbar
- Loading and error states
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

- ReactJS (functional components + Hooks: `useState`, `useEffect`, `useMemo`)
- JavaScript (ES6+)
- HTML5 & CSS3
- Bootstrap 5 (via CDN)
- Vite (build tool / dev server)

## Project Structure

```
ecommerce-store/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── api/
│   │   └── api.js          # fetchProducts(), fetchCategories()
│   └── components/
│       ├── Navbar.jsx
│       ├── CategoryFilter.jsx
│       ├── ProductList.jsx
│       ├── ProductCard.jsx
│       ├── ProductDetails.jsx
│       ├── Cart.jsx
│       ├── Loader.jsx
│       └── ErrorMessage.jsx
```

## Getting Started

```bash
npm install
npm run dev       # starts local dev server (usually http://localhost:5173)
```

Build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: React e-commerce store"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploying

### Option A — GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Set `base: '/<your-repo-name>/'` in `vite.config.js`
4. Run `npm run deploy`

### Option B — Vercel / Netlify
1. Import the GitHub repo on vercel.com or netlify.com
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy — done automatically on every push.

## API Reference

- `GET /products.json` → id, name, category, price, oldPrice, rating, reviews, badge, short_desc, long_description, image
- `GET /category.json` → id, name, description, image
