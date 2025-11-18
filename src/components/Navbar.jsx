import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 shadow ring-1 ring-white/40" />
          <span className="font-semibold text-slate-900 text-lg tracking-tight">Algoriza</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow hover:shadow-md transition">
            Start a project
          </a>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg hover:bg-slate-200/60">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg text-slate-700 hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-medium">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
