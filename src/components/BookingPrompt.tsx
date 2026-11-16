"use client";

import { useEffect, useRef } from "react";
import { useCopy } from "@/lib/language";

const PROMPT_KEY = "ahcs-booking-prompt-seen";

export default function BookingPrompt() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = useCopy();

  useEffect(() => {
    if (window.location.hash !== "#booking" && !window.sessionStorage.getItem(PROMPT_KEY)) {
      dialogRef.current?.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={() => window.sessionStorage.setItem(PROMPT_KEY, "1")}
      aria-labelledby="booking-prompt-title"
      aria-describedby="booking-prompt-description"
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-3xl border border-primary/10 bg-white p-0 text-gray-800 shadow-2xl backdrop:bg-heading/65"
    >
      <div className="relative overflow-hidden p-7 sm:p-9">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-light" aria-hidden="true" />
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={t("Close booking prompt", "बुकिंग संदेश बंद करा")}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-gray-500 shadow-sm hover:text-heading"
        >
          ×
        </button>
        <span className="relative inline-flex rounded-full bg-primary-light px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          {t("Home Nursing Care", "घरगुती नर्सिंग सेवा")}
        </span>
        <h2 id="booking-prompt-title" className="relative mt-5 text-2xl font-extrabold leading-tight text-heading sm:text-3xl">
          {t("Need care for a loved one at home?", "प्रिय व्यक्तीसाठी घरी रुग्णसेवा हवी आहे का?")}
        </h2>
        <p id="booking-prompt-description" className="relative mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {t("Fill the short enquiry form. We’ll contact you to discuss the right nursing service and staff availability.", "छोटा चौकशी फॉर्म भरा. योग्य नर्सिंग सेवा आणि कर्मचारी उपलब्धतेबद्दल आम्ही तुमच्याशी संपर्क साधू.")}
        </p>
        <div className="relative mt-7 flex flex-col gap-3">
          <a
            href="#booking"
            onClick={() => dialogRef.current?.close()}
            className="rounded-full bg-primary px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
          >
            {t("Fill Booking Form", "बुकिंग फॉर्म भरा")}
          </a>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-full px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-lighter"
          >
            {t("Explore Website", "आधी वेबसाइट पाहा")}
          </button>
        </div>
      </div>
    </dialog>
  );
}
