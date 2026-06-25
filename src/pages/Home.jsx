import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/products.js'

export default function Home() {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <div>
      <section className="relative bg-ink text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-4">New Season</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
              Wardrobe staples, worn on repeat.
            </h1>
            <p className="text-cream/70 text-base max-w-md mb-8">
              Considered pieces in honest fabrics for women, men, and kids — built to outlast a season.
            </p>
            <Link
              to="/women"
              className="inline-block bg-terracotta text-cream px-7 py-3.5 text-sm tracking-wide hover:bg-cream hover:text-ink transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
          <div className="hidden md:block aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
              alt="Model wearing seasonal collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category teasers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[
            { to: '/women', label: 'Women', img: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80' },
            { to: '/men', label: 'Men', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80' },
            { to: '/kids', label: 'Kids', img: 'https://images.unsplash.com/photo-1503944168849-8a447f6db5cf?w=600&q=80' },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group relative block aspect-[4/5] overflow-hidden bg-line/30">
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-cream font-display text-2xl">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl">Just In</h2>
          <Link to="/women" className="text-sm underline underline-offset-4 hover:text-terracotta">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
