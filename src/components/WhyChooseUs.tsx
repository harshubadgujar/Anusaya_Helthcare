const reasons = [
  {
    title: "24/7 Availability",
    badge: "Always On",
    description:
      "Round-the-clock healthcare support. Day or night, we are always just a phone call away.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Experienced Staff",
    badge: "Certified",
    description:
      "Our team comprises trained, certified nurses and caregivers with years of field experience.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    badge: "Best Value",
    description:
      "Quality healthcare doesn't have to be expensive. We offer the most competitive rates in Pune.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Quick Response",
    badge: "Trusted",
    description:
      "We understand urgency. Our team responds within minutes and dispatches care swiftly.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gradient-to-b from-white via-primary-lighter to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">
            Trusted by Families Across Pune
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We go above and beyond to provide unmatched quality and care for
            every patient and family we serve.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="reveal group text-center rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-400"
            >
              {/* Badge */}
              <span className="inline-block mb-4 rounded-full bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 ring-1 ring-amber-200/50">
                {reason.badge}
              </span>

              <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-glow text-white shadow-xl shadow-primary/30 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-heading">{reason.title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
