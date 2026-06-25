import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h2 className="font-display text-2xl mb-3">MAISON</h2>
          <p className="text-sm text-cream/60 leading-relaxed">
            Considered essentials, made to be worn often and kept for years.
          </p>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-cream/50 mb-4">Shop</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/women" className="hover:text-terracotta transition-colors">Women</Link></li>
            <li><Link to="/men" className="hover:text-terracotta transition-colors">Men</Link></li>
            <li><Link to="/kids" className="hover:text-terracotta transition-colors">Kids</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-cream/50 mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-terracotta transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase text-cream/50 mb-4">Newsletter</h3>
          <p className="text-sm text-cream/60 mb-3">Occasional notes on new arrivals.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border border-cream/30 text-sm px-3 py-2 w-full focus:outline-none focus:border-terracotta"
            />
            <button className="px-4 py-2 bg-terracotta text-cream text-sm whitespace-nowrap">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Maison. All rights reserved.
      </div>
    </footer>
  )
}
