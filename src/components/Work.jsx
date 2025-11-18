const projects = [
  {
    title: 'Fintech SuperApp',
    img: 'https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1600&auto=format&fit=crop',
    tags: ['React Native', 'GraphQL', 'AWS'],
  },
  {
    title: 'E‑commerce Platform',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Next.js', 'Stripe', 'Vercel'],
  },
  {
    title: 'AI Knowledge Base',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    tags: ['Python', 'LangChain', 'Pinecone'],
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A snapshot of recent partnerships and outcomes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-700 border border-slate-200">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
