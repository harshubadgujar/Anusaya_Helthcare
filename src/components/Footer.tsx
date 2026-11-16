"use client";

import { useCopy } from "@/lib/language";

export default function Footer() {
  const t = useCopy();
  const links = [
    ["#", t("Home", "मुख्यपृष्ठ")], ["#services", t("Services", "सेवा")],
    ["#nursing-care", t("All Nursing Services", "सर्व नर्सिंग सेवा")],
    ["#more-services", t("More Services", "इतर सेवा")],
    ["#booking", t("Book Now", "बुक करा")], ["#why-us", t("Why Us", "आम्हालाच का निवडावे")],
    ["#faq", t("FAQ", "प्रश्नोत्तरे")], ["#contact", t("Contact", "संपर्क")],
  ];
  return <footer className="bg-heading text-gray-300">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative -top-10 rounded-3xl bg-gradient-to-r from-primary-dark via-primary to-glow p-8 text-center shadow-2xl sm:p-12">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-100">{t("Because Family Comes First", "कुटुंब सर्वप्रथम")}</p>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{t("We Care For Your Loved Ones, Just Like Family.", "तुमच्या प्रिय व्यक्तींची आम्ही कुटुंबासारखी काळजी घेतो.")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">{t("Tell us what support your family needs. We will discuss suitable care options.", "तुमच्या कुटुंबाला कोणत्या सेवेची गरज आहे ते सांगा. योग्य पर्यायांबद्दल आम्ही चर्चा करू.")}</p>
        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row"><a href="#booking" className="rounded-full bg-white px-8 py-3.5 font-bold text-primary">{t("Book a Nurse", "नर्स बुक करा")}</a><a href="tel:+918805042117" className="rounded-full border border-white/40 px-8 py-3.5 font-bold text-white">{t("Call", "कॉल करा")}: +91 88050 42117</a></div>
      </div>
      <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        <div><h3 className="text-xl font-extrabold text-white">Anusaya Health Care Services</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">{t("Home nursing, patient care and supporting healthcare services in Pune and PCMC.", "पुणे आणि पिंपरी-चिंचवडमध्ये घरगुती नर्सिंग, रुग्णसेवा आणि इतर आरोग्य सेवा.")}</p></div>
        <div><h4 className="font-bold text-white">{t("Quick Links", "महत्त्वाचे दुवे")}</h4><ul className="mt-4 grid grid-cols-2 gap-3">{links.map(([href, label]) => <li key={href}><a href={href} className="text-sm text-gray-400 hover:text-white">{label}</a></li>)}</ul></div>
        <div><h4 className="font-bold text-white">{t("Contact Info", "संपर्क माहिती")}</h4><p className="mt-4 text-sm text-gray-400">{t("Thergaon, Pimpri-Chinchwad, Maharashtra 411033", "थेरगाव, पिंपरी-चिंचवड, महाराष्ट्र ४११०३३")}</p><a href="tel:+918805042117" className="mt-3 block text-sm hover:text-white">+91 88050 42117</a><a href="mailto:anusayahealthcareservices@gmail.com" className="mt-3 block break-all text-sm hover:text-white">anusayahealthcareservices@gmail.com</a></div>
      </div>
      <div className="border-t border-gray-700/50 py-6 text-center text-xs text-gray-400"><p>© {new Date().getFullYear()} Anusaya Care (AHCS). {t("All rights reserved.", "सर्व हक्क राखीव.")}</p><p className="mt-2">{t("Designed & Developed by", "डिझाइन आणि विकास")} Harshal Badgujar | +91 7038555308</p></div>
    </div>
  </footer>;
}
