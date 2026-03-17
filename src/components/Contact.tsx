export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white to-primary-lighter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Contact Us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Reach out to us anytime. We&apos;re here to help you and your loved
            ones with the best healthcare services.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="reveal-left space-y-5">
            {/* Phone */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-glow text-white shadow-lg shadow-primary/25">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-heading">Phone</p>
                <a
                  href="tel:+918805042117"
                  className="text-primary font-semibold hover:underline text-lg"
                >
                  +91 88050 42117
                </a>
                <p className="mt-1 text-sm text-gray-400">Available 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-glow text-white shadow-lg shadow-primary/25">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-heading">Email</p>
                <a
                  href="mailto:rushikble7180@gmail.com"
                  className="text-primary font-semibold hover:underline break-all"
                >
                  rushikble7180@gmail.com
                </a>
                <p className="mt-1 text-sm text-gray-400">
                  We reply within a few hours
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-glow text-white shadow-lg shadow-primary/25">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-heading">Address</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Condominium complex, 6, Gujar Nagar, Sai Colony,
                  <br />
                  Thergaon, Pimpri-Chinchwad,
                  <br />
                  Maharashtra 411033
                </p>
              </div>
            </div>

            {/* Call Now button */}
            <a
              href="tel:+918805042117"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now — Get Instant Help
            </a>
          </div>

          {/* Map */}
          <div className="reveal-right overflow-hidden rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-400">
            <iframe
              title="Anusaya Care - AHCS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3!2d73.76!3d18.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b900e3085c25%3A0x94aaef3c34e25b86!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
