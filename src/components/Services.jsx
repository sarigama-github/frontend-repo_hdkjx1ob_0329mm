const services = [
  {
    title: 'Product Strategy',
    desc: 'Discovery workshops, roadmaps, and UX research to validate ideas and align on success metrics.',
    icon: '🧭'
  },
  {
    title: 'Web & Mobile Apps',
    desc: 'High‑performance React, Next.js, Node, and native mobile apps built to scale securely.',
    icon: '📱'
  },
  {
    title: 'AI & Data',
    desc: 'LLM apps, recommender systems, and data pipelines that unlock intelligent automation.',
    icon: '🧠'
  },
  {
    title: 'Cloud & DevOps',
    desc: 'CI/CD, observability, and cloud infrastructure on AWS, GCP, and Azure for reliability.',
    icon: '☁️'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">A full‑stack partner from strategy to launch and beyond.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
