const reasons = [
  {
    title: 'Senior teams only',
    desc: 'We staff projects with seasoned engineers, designers, and PMs from day one — no handoffs, no surprises.'
  },
  {
    title: 'Outcome‑driven',
    desc: 'We align on business goals and measure success with clear KPIs and product analytics.'
  },
  {
    title: 'Velocity with quality',
    desc: 'Tight feedback loops, CI/CD, and automated testing to ship fast without breaking things.'
  },
  {
    title: 'Long‑term partners',
    desc: 'We stay through scale-up and beyond with SRE, growth engineering, and product iteration.'
  }
]

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why Algoriza</h2>
          <p className="mt-3 text-slate-600">A partner obsessed with impact, not just deliverables.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
