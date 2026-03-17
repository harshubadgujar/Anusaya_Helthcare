const testimonials = [
  {
    name: "Priya Sharma",
    location: "Thergaon, Pune",
    rating: 5,
    text: "Excellent service! The caretaker was very professional and caring with my elderly mother. Would highly recommend AHCS to everyone.",
    color: "bg-pink-500",
  },
  {
    name: "Rajesh Patil",
    location: "Pimpri, Pune",
    rating: 5,
    text: "My father needed post-surgery care and AHCS provided a trained nurse within hours. The care quality was outstanding. Thank you AHCS!",
    color: "bg-blue-500",
  },
  {
    name: "Sneha Kulkarni",
    location: "Chinchwad, Pune",
    rating: 5,
    text: "We hired a baby care taker from AHCS and she was wonderful. Very patient, hygienic, and experienced. Highly satisfied with the service.",
    color: "bg-purple-500",
  },
  {
    name: "Amit Deshmukh",
    location: "Wakad, Pune",
    rating: 4,
    text: "Quick response time and very affordable pricing. The physiotherapist they sent was skilled and helped my knee recover much faster.",
    color: "bg-teal-500",
  },
  {
    name: "Meena Joshi",
    location: "Nigdi, Pune",
    rating: 5,
    text: "The 24/7 availability is a lifesaver. We called late at night for my father's care, and they arranged everything within an hour.",
    color: "bg-amber-500",
  },
  {
    name: "Vikram Singh",
    location: "Ravet, Pune",
    rating: 5,
    text: "Professional, reliable, and truly caring staff. AHCS has been our go-to for home healthcare. Exceptional service every single time.",
    color: "bg-indigo-500",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${star <= rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-primary-light/20 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hear from families who trust Anusaya Care for their
            loved ones.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal group rounded-2xl bg-white p-7 shadow-md border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-400"
            >
              {/* Quote icon */}
              <svg className="h-8 w-8 text-primary/15 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <StarRating rating={t.rating} />
              <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${t.color} text-white font-bold text-sm ring-2 ring-white shadow-md`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
