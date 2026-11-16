"use client";

import { useEffect, useRef } from "react";
import { BookingFields } from "@/components/BookingForm";
import { useCopy } from "@/lib/language";

export default function BookingPrompt() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const t = useCopy();

  useEffect(() => {
    if (window.location.hash !== "#booking") {
      dialogRef.current?.showModal();
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="booking-dialog-title"
      className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-3xl border border-primary/10 bg-white p-0 text-gray-800 shadow-2xl backdrop:bg-heading/70"
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-gray-100 bg-white px-6 py-5 sm:px-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            {t("Home Nursing Care", "घरगुती नर्सिंग सेवा")}
          </span>
          <h2 id="booking-dialog-title" className="mt-1 text-xl font-extrabold text-heading sm:text-2xl">
            {t("Arrange Care at Home", "घरी रुग्णसेवा मिळवा")}
          </h2>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label={t("Close booking form", "बुकिंग फॉर्म बंद करा")}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-primary-light hover:text-heading"
        >
          ×
        </button>
      </div>
      <BookingFields />
    </dialog>
  );
}
