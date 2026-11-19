"use client";

import Image from "next/image";
import { useCopy } from "@/lib/language";

export default function Hero() {
  const t = useCopy();
  return <section className="relative overflow-hidden bg-gradient-to-br from-heading via-primary-dark to-primary bg-cover bg-[position:22%_center] pt-32 pb-28 sm:pt-40 sm:pb-36" style={{ backgroundImage: 'url("/doctor2.png")' }}>
    <div className="absolute inset-0 bg-gradient-to-r from-[#052a57]/90 via-[#0a3b78]/84 to-[#0b4ea2]/80" aria-hidden />
    <div className="pointer-events-none absolute right-4 top-[24%] w-40 mix-blend-multiply opacity-50 sm:right-[6%] sm:top-[22%] sm:w-72 lg:right-[8%] lg:top-[20%] lg:w-[25rem]" aria-hidden="true">
      <Image src="/anusaya-logo.jpeg" alt="" width={800} height={800} className="h-auto w-full rounded-full" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl lg:translate-x-8">
        <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-xs font-semibold text-white ring-1 ring-white/20 sm:px-5 sm:text-sm">
          <span className="availability-dot h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" aria-hidden="true" />
          {t("Available 24/7 — Serving Pune & PCMC", "२४/७ उपलब्ध — पुणे व पिंपरी-चिंचवडमध्ये सेवा")}
        </span>
        <h1 className="mx-auto mt-7 max-w-5xl text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          {t("Anusaya Health Care Services", "अनुसया हेल्थ केअर सर्व्हिसेस")}
        </h1>
        <p className="mx-auto mt-4 max-w-[58rem] text-center text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
          <span className="block">{t("Professional Home Nursing", "व्यावसायिक घरगुती नर्सिंग")}</span>
          <span className="shimmer-text mt-1 inline-block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #bae6fd 0%, #ffffff 50%, #67e8f9 100%)" }}>{t("Care at Your Doorstep", "सेवा तुमच्या घरी")}</span>
        </p>
        <p className="mt-6 text-base font-semibold text-blue-100 sm:text-lg">{t("Genuine and Affordable Nursing Care & Patient Support in Pune and PCMC.", "पुणे आणि पिंपरी-चिंचवडमध्ये विश्वासार्ह व परवडणारी नर्सिंग आणि रुग्णसेवा.")}</p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-blue-100/90 sm:text-lg">{t("From elderly care to post-hospital recovery, our nursing professionals provide compassionate, personalised care in the comfort of your home.", "ज्येष्ठांची काळजी असो किंवा रुग्णालयातून घरी आल्यानंतरची सेवा, आमचे नर्सिंग कर्मचारी तुमच्या घरी काळजीपूर्वक आणि वैयक्तिक सहाय्य देतात.")}</p>
        <p className="mt-5 text-sm font-bold tracking-wide text-cyan-200 sm:text-base">{t("Your Family's Health. Our Responsibility.", "तुमच्या कुटुंबाचे आरोग्य, आमची जबाबदारी.")}</p>
        <a href="tel:+918805042117" className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full bg-red-500/25 px-4 py-2 text-xs font-semibold text-red-100 ring-1 ring-red-300/40 hover:bg-red-500/35 sm:text-sm">
          <span aria-hidden="true">⚠</span>
          {t("Emergency? Get Care Within 30 Minutes", "आपत्कालीन गरज? ३० मिनिटांत सेवा मिळवा")}
        </a>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#booking" className="rounded-full bg-white px-9 py-4 font-bold text-primary shadow-xl hover:bg-gray-50">{t("Book a Nurse", "नर्स बुक करा")}</a>
          <a href="#services" className="rounded-full bg-white/10 px-9 py-4 font-bold text-white ring-1 ring-white/30 hover:bg-white/20">{t("Explore Nursing Services", "नर्सिंग सेवा पाहा")}</a>
          <a href="tel:+918805042117" className="rounded-full bg-white/10 px-9 py-4 font-bold text-white ring-1 ring-white/30 hover:bg-white/20">{t("Call Now", "आता कॉल करा")}</a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-2 text-xs text-white/90 sm:gap-3 sm:text-sm">
          {[
            ["🟢", t("24/7 Available", "२४/७ उपलब्ध")],
            ["✅", t("Verified Staff", "पडताळलेले कर्मचारी")],
            ["⚡", t("Fast Response", "जलद प्रतिसाद")],
            ["🛡️", t("Trusted Care", "विश्वासार्ह सेवा")],
          ].map(([icon, label]) => <span key={label} className="rounded-full bg-white/10 px-3 py-2 ring-1 ring-white/10 sm:px-4"><span aria-hidden="true">{icon}</span> {label}</span>)}
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-6 text-center sm:grid-cols-4 sm:gap-4">
          {[
            ["3+", t("Years Experience", "वर्षांचा अनुभव")],
            ["500+", t("Patients Served", "रुग्णांना सेवा")],
            ["24/7", t("Available", "उपलब्ध")],
            ["50+", t("Trained Staff", "प्रशिक्षित कर्मचारी")],
          ].map(([value, label]) => <div key={value} className="min-w-0"><p className="text-2xl font-extrabold leading-none text-white sm:text-3xl">{value}</p><p className="mt-1 text-xs text-blue-100/80 sm:text-sm">{label}</p></div>)}
        </div>
      </div>
    </div>
    <svg viewBox="0 0 1440 100" className="absolute bottom-0 left-0 w-full" aria-hidden><path d="M0 50L48 45C96 40 192 30 288 28C384 26 480 32 576 40C672 48 768 58 864 58C960 58 1056 48 1152 42C1248 36 1344 34 1392 33L1440 32V100H0V50Z" fill="white"/></svg>
  </section>;
}
