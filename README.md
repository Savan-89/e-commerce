# Maison — Responsive E-commerce (React + Tailwind)

## Setup
```bash
npm install
npm run dev
```
Build: `npm run build`

## Structure
- `src/pages/` — Home, CategoryPage (Women/Men/Kids), ProductDetail, About, Contact
- `src/components/` — Navbar, Footer, ProductCard, CartDrawer
- `src/context/CartContext.jsx` — global cart state (add/remove/qty) via useReducer
- `src/data/products.js` — static dummy product catalogue

## Routes
- `/` Home
- `/women`, `/men`, `/kids` category grids
- `/product/:id` product detail with size + add to cart
- `/about`, `/contact`

## Notes
- Fully responsive: mobile hamburger nav, 2-col mobile / 4-col desktop product grids, slide-in cart drawer.
- Cart state is in-memory (React context) — no localStorage, per Tailwind/artifact constraints; swap in real persistence/backend for production.
- Images are placeholder Unsplash URLs — swap with real product photography.
