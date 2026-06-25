import React, { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { getProductsByCategory } from '../data/products.js'

export default function CategoryPage({ category }) {
  const [sort, setSort] = useState('default')
  let products = getProductsByCategory(category)

  if (sort === 'price-asc') products = [...products].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products = [...products].sort((a, b) => b.price - a.price)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
        <div>
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-2">Collection</p>
          <h1 className="font-display text-3xl md:text-4xl">{category}</h1>
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
          className="border border-line bg-cream text-sm px-4 py-2.5 focus:outline-none focus:border-terracotta self-start sm:self-auto"
        >
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
