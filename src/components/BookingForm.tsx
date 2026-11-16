"use client";

import { useState, type FormEvent } from "react";
import { useCopy, useLanguage } from "@/lib/language";
import { nursingServiceGroups, nursingServiceMarathi } from "@/lib/nursingServices";

const otherOptions = [
  ["Patient Care Taker (Male)", "पुरुष रुग्ण परिचर"], ["Patient Care Taker (Female)", "महिला रुग्ण परिचर"],
  ["Elderly Care Taker", "ज्येष्ठ नागरिक परिचर"], ["Home Nursing Care", "घरगुती नर्सिंग सेवा"],
  ["Bedridden Patient Care", "अंथरुणाला खिळलेल्या रुग्णांची काळजी"], ["Baby Care Taker", "बाळाची काळजी घेणारे परिचर"],
  ["Post-Surgical Recovery Care", "शस्त्रक्रियेनंतरची काळजी"], ["Physiotherapy at Home", "घरी फिजिओथेरपी"],
  ["First Aid Services", "प्रथमोपचार सेवा"], ["Ambulance Services", "रुग्णवाहिका सेवा"],
  ["On-call Home Visit", "मागणीनुसार घरी भेट"], ["CPR Training / Awareness", "सीपीआर प्रशिक्षण"],
] as const;

export function BookingFields() {
  const t = useCopy();
  const { language } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", location: "", service: "", dateTime: "", notes: "" });
  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const serviceMr = nursingServiceMarathi[form.service] || otherOptions.find(option => option[0] === form.service)?.[1] || form.service;
    const message = language === "mr"
      ? `नमस्कार, मला आरोग्यसेवा बुक करायची आहे.\n\n*रुग्णाचे नाव:* ${form.name}\n*फोन:* ${form.phone}\n*ठिकाण:* ${form.location}\n*सेवा:* ${serviceMr}\n*दिनांक व वेळ:* ${form.dateTime}\n*अतिरिक्त माहिती:* ${form.notes || "-"}\n\nकृपया उपलब्धता कळवा.`
      : `Hello, I would like to enquire about a healthcare service.\n\n*Patient Name:* ${form.name}\n*Phone:* ${form.phone}\n*Location:* ${form.location}\n*Service:* ${form.service}\n*Preferred Date & Time:* ${form.dateTime}\n*Notes:* ${form.notes || "-"}\n\nPlease confirm availability. Thank you!`;
    window.open(`https://wa.me/918805042117?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  const inputClass = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
  return <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-gray-100 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2 text-sm font-semibold text-gray-700">{t("Patient Name *", "रुग्णाचे नाव *")}<input className={`mt-1.5 ${inputClass}`} name="name" required value={form.name} onChange={change} placeholder={t("Enter patient's full name", "रुग्णाचे पूर्ण नाव लिहा")} /></label>
          <label className="text-sm font-semibold text-gray-700">{t("Phone Number *", "फोन नंबर *")}<input className={`mt-1.5 ${inputClass}`} type="tel" name="phone" required value={form.phone} onChange={change} placeholder="+91 XXXXX XXXXX" /></label>
          <label className="text-sm font-semibold text-gray-700">{t("Location *", "ठिकाण *")}<input className={`mt-1.5 ${inputClass}`} name="location" required value={form.location} onChange={change} placeholder={t("Your area / address", "तुमचा परिसर / पत्ता")} /></label>
          <label className="sm:col-span-2 text-sm font-semibold text-gray-700">{t("Service Type *", "सेवेचा प्रकार *")}<select className={`mt-1.5 ${inputClass}`} name="service" required value={form.service} onChange={change}><option value="">{t("Select a service", "सेवा निवडा")}</option>{nursingServiceGroups.map((group, index) => <optgroup key={group.title} label={t(group.title, ["व्यावसायिक घरगुती नर्सिंग सेवा", "घरी नर्सिंग प्रक्रिया", "इतर घरगुती आरोग्य सेवा"][index])}>{group.services.map(service => <option key={service} value={service}>{language === "mr" ? nursingServiceMarathi[service] : service}</option>)}</optgroup>)}<optgroup label={t("Other Existing Services", "इतर विद्यमान सेवा")}>{otherOptions.filter(option => !nursingServiceGroups.some(group => group.services.some(service => service === option[0]))).map(option => <option key={option[0]} value={option[0]}>{language === "mr" ? option[1] : option[0]}</option>)}</optgroup></select></label>
          <label className="sm:col-span-2 text-sm font-semibold text-gray-700">{t("Preferred Date & Time *", "पसंतीचा दिनांक व वेळ *")}<input className={`mt-1.5 ${inputClass}`} type="datetime-local" name="dateTime" required value={form.dateTime} onChange={change} /></label>
          <label className="sm:col-span-2 text-sm font-semibold text-gray-700">{t("Additional Notes", "अतिरिक्त माहिती")}<textarea className={`mt-1.5 ${inputClass} resize-none`} name="notes" rows={3} value={form.notes} onChange={change} placeholder={t("Patient condition or special requirements", "रुग्णाची स्थिती किंवा विशेष गरजा")} /></label>
        </div>
        <button type="submit" className="mt-6 w-full rounded-xl bg-accent py-4 font-bold text-white shadow-lg hover:bg-accent-dark">{t("Enquire via WhatsApp", "व्हॉट्सॲपवर चौकशी करा")}</button><p className="mt-3 text-center text-xs text-gray-500">{t("Your details will open in WhatsApp for your review before sending.", "माहिती पाठवण्यापूर्वी ती व्हॉट्सॲपवर तपासता येईल.")}</p>
  </form>;
}

export default function BookingForm() {
  const t = useCopy();
  return <section id="booking" className="scroll-mt-20 bg-gradient-to-b from-primary-lighter via-primary-light/60 to-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="reveal-left"><span className="rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">{t("Book a Nurse", "नर्स बुक करा")}</span><h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">{t("Arrange Care at Home", "घरी रुग्णसेवा मिळवा")}</h2><p className="mt-4 text-lg leading-relaxed text-gray-600">{t("Tell us what your patient needs. We will discuss suitable services, shift timings and staff availability with you on WhatsApp.", "रुग्णाला कोणत्या सेवेची गरज आहे ते कळवा. योग्य सेवा, शिफ्टची वेळ आणि कर्मचारी उपलब्धता आम्ही व्हॉट्सॲपवर तुमच्याशी चर्चा करू.")}</p><ul className="mt-8 space-y-4 text-gray-700">{[t("Share patient and service details", "रुग्णाची आणि सेवेची माहिती द्या"), t("Discuss a suitable care plan", "योग्य काळजी योजनेची चर्चा करा"), t("Confirm schedule and staff availability", "वेळ आणि कर्मचारी उपलब्धता निश्चित करा")].map(item => <li key={item} className="flex gap-3"><span className="text-primary">✓</span>{item}</li>)}</ul><div className="mt-9 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><p className="text-sm text-gray-500">{t("Prefer to speak with us?", "फोनवर बोलायचे आहे?")}</p><a href="tel:+918805042117" className="text-xl font-bold text-primary">+91 88050 42117</a></div></div>
      <BookingFields />
    </div>
  </section>;
}
