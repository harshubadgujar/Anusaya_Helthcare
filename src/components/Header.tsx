"use client";

import { useState } from "react";
import Image from "next/image";
import { useCopy, useLanguage } from "@/lib/language";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useCopy();
  const links = [
    ["#services", t("Services", "सेवा")],
    ["#booking", t("Book Now", "बुक करा")],
    ["#why-us", t("Why Us", "आम्हालाच का निवडावे")],
    ["#testimonials", t("Reviews", "अभिप्राय")],
    ["#contact", t("Contact", "संपर्क")],
  ];
  const switcher = <div role="group" aria-label={t("Choose language", "भाषा निवडा")} className="inline-flex rounded-full border border-primary/20 bg-primary-lighter p-1 text-xs font-bold">
    <button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={`rounded-full px-3 py-1.5 ${language === "en" ? "bg-primary text-white" : "text-primary"}`}>English</button>
    <button type="button" onClick={() => setLanguage("mr")} aria-pressed={language === "mr"} className={`rounded-full px-3 py-1.5 ${language === "mr" ? "bg-primary text-white" : "text-primary"}`}>मराठी</button>
  </div>;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <a href="#" className="flex shrink-0 items-center gap-2.5">
        <Image src="/anusaya-logo.jpeg" alt="Anusaya Health Care Services logo" width={48} height={48} className="h-10 w-10 shrink-0 rounded-full bg-white object-contain sm:h-12 sm:w-12" priority />
        <span className="leading-tight"><span className="block text-[15px] font-extrabold text-heading sm:text-[17px]">Anusaya Care</span><span className="hidden text-[9px] font-medium uppercase tracking-wider text-primary/70 sm:block">{t("Care You Can Trust at Home", "घरी विश्वासार्ह काळजी")}</span></span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">{links.map(([href, label]) => <a key={href} href={href} className="rounded-lg px-2.5 py-2 text-sm font-medium text-gray-700 hover:bg-primary-light hover:text-primary">{label}</a>)}{switcher}<a href="tel:+918805042117" className="ml-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white">{t("Call Now", "कॉल करा")}</a></nav>
      <div className="flex items-center gap-2 md:hidden">{switcher}<button type="button" onClick={() => setOpen(!open)} aria-label={t("Toggle menu", "मेनू उघडा किंवा बंद करा")} aria-expanded={open} className="rounded-lg p-2 text-heading hover:bg-primary-light"><svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"}/></svg></button></div>
    </div>
    {open && <nav className="flex flex-col border-t bg-white px-4 py-3 md:hidden">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary-light">{label}</a>)}<a href="tel:+918805042117" className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white">{t("Call Now", "कॉल करा")}</a></nav>}
  </header>;
}
