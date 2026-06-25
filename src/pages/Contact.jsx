import React, { useState } from 'react'
import { Mail, MapPin, Phone, Check } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-10 md:mb-14">
        <p className="text-terracotta text-xs tracking-[0.2em] uppercase mb-3">Get in touch</p>
        <h1 className="font-display text-3xl md:text-4xl">Contact Us</h1>
      </div>

      <div className="grid md:grid-cols-5 gap-10 md:gap-14">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-terracotta mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-stone leading-relaxed">
              42 Atelier Lane<br />Brooklyn, NY 11211
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={20} className="text-terracotta mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-stone">hello@maison.com</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={20} className="text-terracotta mt-0.5 flex-shrink-0" strokeWidth={1.5} />
            <p className="text-sm text-stone">+1 (555) 012-3456</p>
          </div>
        </div>

        <div className="md:col-span-3">
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center gap-3 py-16 border border-line">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                <Check size={22} className="text-sage" />
              </div>
              <p className="font-display text-xl">Message sent</p>
              <p className="text-sm text-stone max-w-xs">
                Thanks for reaching out — we'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-stone mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-line bg-cream px-4 py-3 text-sm focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-stone mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-line bg-cream px-4 py-3 text-sm focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-stone mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-line bg-cream px-4 py-3 text-sm focus:outline-none focus:border-terracotta resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-ink text-cream px-8 py-3.5 text-sm tracking-wide hover:bg-terracotta transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
