export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-heading via-primary-dark to-primary pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background medical image overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 0h8v36h36v8H44v36h-8V44H0v-8h36V0z' opacity='.15'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-400/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-glow/10 blur-2xl animate-float" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Available 24/7 — Serving Pune &amp; PCMC
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up animation-delay-200 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl max-w-5xl leading-[1.1]">
            Anusaya Care —{" "}
            <span className="shimmer-text">Trusted Healthcare at Your Doorstep</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-2xl text-lg text-blue-100/90 sm:text-xl leading-relaxed">
            24/7 Professional Nursing &amp; Care Services in Pune &amp; PCMC.
            Experienced, compassionate &amp; affordable home healthcare you can rely on.
          </p>

          {/* Trust line */}
          <p className="animate-fade-in-up animation-delay-400 mt-3 text-sm text-blue-200/80 font-medium tracking-wide">
            Serving Pune &amp; PCMC &bull; Trusted by 1000+ Families
          </p>

          {/* Urgency line */}
          <div className="animate-fade-in-up animation-delay-600 mt-5 inline-flex items-center gap-2 rounded-full bg-red-500/20 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-red-200 ring-1 ring-red-400/30">
            <svg className="h-4 w-4 text-red-400 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            Emergency? Get Care Within 30 Minutes
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-base font-bold text-primary shadow-2xl hover:shadow-white/25 hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarIcon />
              Book Now
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+918805042117"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-9 py-4 text-base font-bold text-white ring-1 ring-white/25 hover:bg-white/20 hover:ring-white/40 transition-all duration-300 hover:-translate-y-1"
            >
              <PhoneIcon />
              Call Now — 8805042117
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { icon: "🕐", label: "24/7 Available" },
              { icon: "✅", label: "Verified Staff" },
              { icon: "⚡", label: "Fast Response" },
              { icon: "🛡️", label: "Trusted Care" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="animate-fade-in mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "1000+", label: "Patients Served" },
              { value: "24/7", label: "Available" },
              { value: "50+", label: "Trained Staff" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="mt-1 text-sm text-blue-200/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45C96 40 192 30 288 28C384 26 480 32 576 40C672 48 768 58 864 58C960 58 1056 48 1152 42C1248 36 1344 34 1392 33L1440 32V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
