"use client";

import { useRef, useState, type FormEvent } from "react";
import { useCopy, useLanguage } from "@/lib/language";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Thergaon, Pune",
    rating: 5,
    text: "Excellent service! The caretaker was very professional and caring with my elderly mother. Would highly recommend AHCS to everyone.",
    textMr: "उत्तम सेवा! माझ्या आईची काळजी घेणारे कर्मचारी व्यावसायिक आणि आपुलकीने वागणारे होते. मी AHCS ची शिफारस करेन.",
    color: "bg-pink-500",
  },
  {
    name: "Rajesh Patil",
    location: "Pimpri, Pune",
    rating: 5,
    text: "My father needed post-surgery care and AHCS provided a trained nurse within hours. The care quality was outstanding. Thank you AHCS!",
    textMr: "माझ्या वडिलांना शस्त्रक्रियेनंतर काळजी हवी होती. AHCS ने प्रशिक्षित नर्सची व्यवस्था केली. सेवेबद्दल धन्यवाद!",
    color: "bg-blue-500",
  },
  {
    name: "Meena Joshi",
    location: "Nigdi, Pune",
    rating: 5,
    text: "The 24/7 availability is a lifesaver. We called late at night for my father's care, and they arranged everything within an hour.",
    textMr: "२४ तास उपलब्धता आमच्यासाठी खूप उपयुक्त ठरली. वडिलांच्या काळजीसाठी रात्री उशिरा संपर्क केला आणि व्यवस्था झाली.",
    color: "bg-amber-500",
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
  const t = useCopy();
  const { language } = useLanguage();
  const reviewDialogRef = useRef<HTMLDialogElement>(null);
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState("5");
  const [review, setReview] = useState("");

  const submitReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = language === "mr"
      ? `नमस्कार, मला अनुसया हेल्थ केअर सर्व्हिसेसबद्दल अभिप्राय द्यायचा आहे.\n\n*नाव:* ${reviewerName.trim()}\n*रेटिंग:* ${rating}/5\n*अभिप्राय:* ${review.trim()}`
      : `Hello, I would like to share a review for Anusaya Health Care Services.\n\n*Name:* ${reviewerName.trim()}\n*Rating:* ${rating}/5\n*Review:* ${review.trim()}`;
    window.open(`https://wa.me/918805042117?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-primary-light/20 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {t("Nursing & Patient Care Reviews", "नर्सिंग आणि रुग्णसेवेचे अभिप्राय")}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">
            {t("What Families Say About Our Care", "आमच्या सेवेबद्दल कुटुंबांचे अनुभव")}
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            {t("Experiences with home nursing and patient care for loved ones.", "प्रिय व्यक्तींसाठी घरगुती नर्सिंग आणि रुग्णसेवा घेतलेल्या कुटुंबांचे अनुभव.")}
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
                &ldquo;{language === "mr" ? t.textMr : t.text}&rdquo;
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
        <div className="mt-10 text-center">
          <p className="text-gray-600">{t("Received care from our team? Share your experience.", "आमच्या टीमकडून सेवा घेतली आहे? तुमचा अनुभव सांगा.")}</p>
          <button type="button" onClick={() => reviewDialogRef.current?.showModal()} aria-haspopup="dialog" className="mt-4 rounded-full bg-primary px-7 py-3 font-semibold text-white hover:bg-primary-dark">
            {t("Write a Review", "अभिप्राय लिहा")}
          </button>
        </div>
      </div>
      <dialog ref={reviewDialogRef} aria-labelledby="review-dialog-title" className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-primary/10 bg-white p-6 text-gray-800 shadow-2xl backdrop:bg-heading/70 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="review-dialog-title" className="text-2xl font-extrabold text-heading">{t("Share Your Review", "तुमचा अभिप्राय द्या")}</h3>
            <p className="mt-2 text-sm text-gray-600">{t("Tell us about your experience with our nursing or patient care service.", "आमच्या नर्सिंग किंवा रुग्णसेवेबद्दल तुमचा अनुभव सांगा.")}</p>
          </div>
          <button type="button" onClick={() => reviewDialogRef.current?.close()} aria-label={t("Close review form", "अभिप्राय फॉर्म बंद करा")} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-primary-light">×</button>
        </div>
        <form onSubmit={submitReview} className="mt-6 space-y-4">
          <label className="block text-sm font-semibold text-gray-700">{t("Your Name *", "तुमचे नाव *")}
            <input required maxLength={80} value={reviewerName} onChange={(event) => setReviewerName(event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="block text-sm font-semibold text-gray-700">{t("Rating *", "रेटिंग *")}
            <select required value={rating} onChange={(event) => setRating(event.target.value)} className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
              {[5, 4, 3, 2, 1].map((value) => <option key={value} value={value}>{value} / 5</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold text-gray-700">{t("Your Review *", "तुमचा अभिप्राय *")}
            <textarea required minLength={10} maxLength={500} rows={5} value={review} onChange={(event) => setReview(event.target.value)} placeholder={t("How was your experience?", "तुमचा अनुभव कसा होता?")} className="mt-1.5 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <button type="submit" className="w-full rounded-xl bg-accent py-3.5 font-bold text-white hover:bg-accent-dark">{t("Send Review via WhatsApp", "व्हॉट्सॲपवर अभिप्राय पाठवा")}</button>
          <p className="text-center text-xs text-gray-500">{t("Your review opens in WhatsApp for you to check and send.", "पाठवण्यापूर्वी तुमचा अभिप्राय व्हॉट्सॲपवर तपासता येईल.")}</p>
        </form>
      </dialog>
    </section>
  );
}
