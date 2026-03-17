import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#booking" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Patient Care Taker",
  "Elderly Care",
  "Home Nursing",
  "Baby Care",
  "Physiotherapy",
  "Ambulance Services",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-heading text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <div className="relative -top-14 rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-glow p-10 sm:p-14 text-center shadow-2xl shadow-primary/40 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white" />
          </div>

          <div className="relative">
            <p className="text-blue-200 text-sm font-medium tracking-wide uppercase mb-3">
              Because Family Comes First
            </p>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight">
              Your loved ones deserve<br className="hidden sm:block" /> the best care
            </h3>
            <p className="mt-4 text-blue-100/90 max-w-xl mx-auto text-lg">
              Don&apos;t wait — get professional healthcare at your doorstep. We&apos;re
              available 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-primary hover:bg-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Book a Service Now
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="tel:+918805042117"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-base font-bold text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call: +91 88050 42117
              </a>
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-extrabold text-lg shadow-md shadow-primary/20">
                A
              </div>
              <div className="leading-tight">
                <span className="block text-[17px] font-extrabold text-white tracking-tight">Anusaya Care</span>
                <span className="block text-[9px] font-medium text-gray-400 tracking-wider uppercase">
                  Care You Can Trust at Home
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Providing professional, affordable, and compassionate home
              healthcare services across Pimpri-Chinchwad &amp; Pune since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Thergaon, Pimpri-Chinchwad, Maharashtra 411033
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+918805042117" className="hover:text-white transition-colors">
                  +91 88050 42117
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:rushikble7180@gmail.com" className="hover:text-white transition-colors break-all">
                  rushikble7180@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/50 py-6 text-center text-xs text-gray-500">
          &copy; {currentYear} Anusaya Care (AHCS). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
