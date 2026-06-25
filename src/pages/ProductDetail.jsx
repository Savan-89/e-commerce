import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getProductById } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart, toggleDrawer } = useCart()
  const [size, setSize] = useState(product?.sizes?.[0])
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-stone mb-4">Product not found.</p>
        <Link to="/" className="underline underline-offset-4 hover:text-terracotta">Back to home</Link>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(product, size)
    setAdded(true)
    toggleDrawer(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14">
        <div className="aspect-[3/4] overflow-hidden bg-line/30">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="md:py-4">
          <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-3">{product.category}</p>
          <h1 className="font-display text-3xl md:text-4xl mb-2">{product.name}</h1>
          <p className="text-stone text-sm mb-6">{product.color}</p>
          <p className="text-xl mb-6">${product.price.toFixed(2)}</p>
          <p className="text-sm text-stone leading-relaxed mb-8 max-w-md">{product.description}</p>

          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase text-stone mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    size === s
                      ? 'border-ink bg-ink text-cream'
                      : 'border-line hover:border-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full sm:w-auto sm:min-w-[260px] flex items-center justify-center gap-2 bg-ink text-cream px-8 py-3.5 text-sm tracking-wide hover:bg-terracotta transition-colors"
          >
            {added ? <Check size={16} /> : null}
            {added ? 'Added to bag' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}
