import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer() {
  const { items, drawerOpen, toggleDrawer, removeFromCart, setQty, subtotal } = useCart()

  return (
    <>
     
      <div
        onClick={() => toggleDrawer(false)}
        className={`fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-cream z-50 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-line">
          <h2 className="font-display text-xl">Your Bag ({items.reduce((s, i) => s + i.qty, 0)})</h2>
          <button onClick={() => toggleDrawer(false)} aria-label="Close cart" className="p-1 hover:text-terracotta">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 py-16">
              <p className="text-stone text-sm">Your bag is empty.</p>
              <Link
                to="/women"
                onClick={() => toggleDrawer(false)}
                className="text-sm underline underline-offset-4 hover:text-terracotta"
              >
                Start shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.lineId} className="flex gap-4">
                <img
                  src={item.product.img}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover bg-line/40 flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">{item.product.name}</p>
                    <button
                      onClick={() => removeFromCart(item.lineId)}
                      aria-label="Remove item"
                      className="text-stone hover:text-terracotta flex-shrink-0"
                    >
                      <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-xs text-stone mt-1">Size {item.size}</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-line">
                      <button
                        onClick={() => setQty(item.lineId, item.qty - 1)}
                        className="p-1.5 hover:bg-ink/5"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.lineId, item.qty + 1)}
                        className="p-1.5 hover:bg-ink/5"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-medium">${(item.product.price * item.qty).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-5 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-stone">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-ink text-cream py-3.5 text-sm tracking-wide hover:bg-terracotta transition-colors">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
