const testimonials = [
  {
    quote: 'They felt like an extension of our team. We shipped faster and with higher quality than we thought possible.',
    name: 'Sarah Kim',
    role: 'VP Product, Finverse'
  },
  {
    quote: 'Algoriza brought clarity to a complex AI roadmap and delivered a platform our users love.',
    name: 'David Lee',
    role: 'CTO, Knowly'
  },
  {
    quote: 'World‑class engineering culture. Proactive, transparent, and deeply collaborative.',
    name: 'Priya Patel',
    role: 'Head of Engineering, Shopora'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What clients say</h2>
        <p className="mt-3 text-slate-600">Results and relationships that last.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
