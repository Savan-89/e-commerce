import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Check } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    addToCart(product, product.sizes[Math.floor(product.sizes.length / 2)])
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-line/30 aspect-[3/4]">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={handleQuickAdd}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cream/95 flex items-center justify-center shadow-md transition-all hover:bg-ink hover:text-cream"
        >
          {added ? <Check size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
        </button>
      </Link>
      <Link to={`/product/${product.id}`} className="block mt-3">
        <h3 className="text-sm font-medium leading-snug">{product.name}</h3>
        <p className="text-xs text-stone mt-0.5">{product.color}</p>
        <p className="text-sm mt-1">${product.price.toFixed(2)}</p>
      </Link>
    </div>
  )
}
