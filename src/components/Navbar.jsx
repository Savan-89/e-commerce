import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const LINKS = [
  { to: '/women', label: 'Women' },
  { to: '/men', label: 'Men' },
  { to: '/kids', label: 'Kids' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount, toggleDrawer } = useCart()

  const linkClass = ({ isActive }) =>
    `relative py-1 text-sm tracking-wide transition-colors ${
      isActive ? 'text-ink' : 'text-stone hover:text-ink'
    } after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-terracotta after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight text-ink">
          MAISON
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleDrawer(true)}
            aria-label="Open cart"
            className="relative p-2 rounded-full hover:bg-ink/5 transition-colors"
          >
            <ShoppingBag size={22} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-terracotta text-cream text-[10px] font-semibold rounded-full w-4.5 h-4.5 min-w-[18px] h-[18px] flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-full hover:bg-ink/5 transition-colors"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-line ${
          open ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col px-4 sm:px-6 py-2">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 text-base border-b border-line/70 last:border-0 ${
                  isActive ? 'text-ink font-medium' : 'text-stone'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
