export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Algoriza • Software House
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              We design, build, and scale digital products that users love
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              From idea to launch, our cross‑functional teams deliver robust web & mobile apps, AI‑powered platforms, and cloud solutions with measurable impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow hover:shadow-md">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 text-slate-900 font-medium hover:bg-slate-50">
                See our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-500">
              <div>
                <p className="text-2xl font-bold text-slate-900">120+</p>
                <p className="text-sm">Projects shipped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">30+</p>
                <p className="text-sm">Engineers & designers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">8 yrs</p>
                <p className="text-sm">Average partnership</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur shadow-xl p-4">
              <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="team working" className="rounded-xl object-cover w-full h-[360px]" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
