import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })

      if (res.ok) {
        setStatus('Thanks! We will get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-slate-300">Tell us about your product and goals. We’ll reply within one business day.</p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-slate-300">
              <div>
                <p className="text-2xl font-semibold text-white">48h</p>
                <p className="text-sm">Proposal turnaround</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">100%</p>
                <p className="text-sm">Transparent pricing</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <button className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium">Send message</button>
              <p className="text-sm text-slate-300">{status}</p>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Algoriza. All rights reserved.</p>
      </div>
    </section>
  )
}
