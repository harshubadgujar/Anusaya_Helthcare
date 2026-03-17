"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Patient Care Taker (Male)",
  "Patient Care Taker (Female)",
  "Elderly Care Taker",
  "Home Nursing Care",
  "Bedridden Patient Care",
  "Baby Care Taker",
  "Post-Surgical Recovery Care",
  "Physiotherapy at Home",
  "First Aid Services",
  "Ambulance Services",
  "On-call Home Visit",
  "CPR Training / Awareness",
];

const PHONE_NUMBER = "918805042117";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    dateTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = [
      `Hello, I want to book a healthcare service.`,
      ``,
      `*Patient Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Location:* ${form.location}`,
      `*Service:* ${form.service}`,
      `*Date & Time:* ${form.dateTime}`,
      form.notes ? `*Notes:* ${form.notes}` : "",
      ``,
      `Please confirm my booking. Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="booking"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-primary-lighter via-primary-light/60 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <div className="reveal-left">
            <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Book a Service
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl">
              Schedule Your Care Today
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Fill in the form and we&apos;ll connect with you instantly via WhatsApp
              to confirm your booking. Quick, easy, and hassle-free.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { text: "Instant WhatsApp confirmation", icon: "✓" },
                { text: "No hidden charges", icon: "✓" },
                { text: "Flexible scheduling", icon: "✓" },
                { text: "Trained & verified staff", icon: "✓" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Need urgent help?</p>
                <a
                  href="tel:+918805042117"
                  className="text-lg font-bold text-primary hover:underline"
                >
                  +91 88050 42117
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal-right rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-gray-100 hover:shadow-3xl transition-shadow duration-500"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Patient Name */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Patient Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter patient's full name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Your area / address"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Service Type */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="dateTime"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Preferred Date &amp; Time *
                </label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  name="dateTime"
                  required
                  value={form.dateTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Notes */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements or medical conditions..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            {/* Trust text */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              Get confirmation within 5 minutes
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-3 w-full rounded-xl bg-accent py-4 text-base font-bold text-white shadow-lg shadow-accent/30 hover:bg-accent-dark hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 animate-pulse-gentle"
            >
              <WhatsAppIcon />
              Book via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-gray-400">
              You&apos;ll be redirected to WhatsApp with your booking details
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
