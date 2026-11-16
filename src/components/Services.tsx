"use client";

import Image from "next/image";
import { useCopy, useLanguage } from "@/lib/language";
import { nursingServiceGroups, nursingServiceMarathi } from "@/lib/nursingServices";

const featured = [
  { en: "12 & 24 Hours Home Nursing", mr: "१२ व २४ तास घरगुती नर्सिंग", desc: "Flexible day, night and round-the-clock nursing support based on your patient's needs.", descMr: "रुग्णाच्या गरजेनुसार दिवस, रात्र किंवा संपूर्ण दिवस नर्सिंग सहाय्य.", image: "/services/nursing.jpg" },
  { en: "Elderly Patient Nursing Care", mr: "ज्येष्ठ रुग्णांसाठी नर्सिंग सेवा", desc: "Attentive support with daily care, medication reminders and health monitoring for older adults.", descMr: "ज्येष्ठांसाठी दैनंदिन काळजी, औषधांची आठवण आणि आरोग्य तपासणी.", image: "/services/elderly.jpg" },
  { en: "Bedridden Patient Care", mr: "अंथरुणाला खिळलेल्या रुग्णांची काळजी", desc: "Assistance with hygiene, feeding, repositioning and everyday comfort at home.", descMr: "घरात स्वच्छता, आहार, स्थिती बदलणे आणि दैनंदिन आरामासाठी सहाय्य.", image: "/services/bedridden-care.jpg" },
  { en: "Post-Operative Nursing Care", mr: "शस्त्रक्रियेनंतर नर्सिंग सेवा", desc: "Support after surgery or hospital discharge, including prescribed wound care and vital monitoring.", descMr: "शस्त्रक्रिया किंवा रुग्णालयातून घरी आल्यानंतर जखमेची काळजी आणि आरोग्य तपासणी.", image: "/services/post-surgery-care.jpg" },
  { en: "Nursing Procedures at Home", mr: "घरी नर्सिंग प्रक्रिया", desc: "Prescribed injections, IV care, wound dressing and routine health checks by trained staff.", descMr: "प्रशिक्षित कर्मचाऱ्यांकडून डॉक्टरांच्या सल्ल्यानुसार इंजेक्शन्स, IV, ड्रेसिंग आणि तपासण्या.", image: "/services/on-call-home-visit.jpg" },
  { en: "Specialised Patient Care", mr: "विशेष रुग्णसेवा", desc: "Care coordination for stroke, paralysis, dementia, cancer and patients recovering after ICU.", descMr: "स्ट्रोक, अर्धांगवायू, स्मृतिभ्रंश, कर्करोग आणि आयसीयूनंतरच्या रुग्णांसाठी काळजी.", image: "/services/patient-care.jpg" },
];

const procedures = [
  ["Vital Signs Monitoring", "महत्त्वाच्या आरोग्य मोजमापांची तपासणी", "BP, pulse, temperature and SpO2 monitoring at home.", "घरी रक्तदाब, नाडी, तापमान आणि SpO2 तपासणी."],
  ["Blood Sugar Monitoring", "रक्तातील साखर तपासणी", "Regular glucose monitoring and recording.", "रक्तातील साखरेची नियमित तपासणी आणि नोंद."],
  ["Wound Dressing", "जखमेची ड्रेसिंग", "Surgical wound care and dressing as prescribed.", "डॉक्टरांच्या सल्ल्यानुसार शस्त्रक्रियेच्या जखमेची काळजी आणि ड्रेसिंग."],
  ["IV & Injection Services", "IV व इंजेक्शन सेवा", "Prescribed IV, IM and SC procedures by qualified nursing staff.", "प्रशिक्षित नर्सिंग कर्मचाऱ्यांकडून डॉक्टरांच्या सल्ल्यानुसार IV, IM आणि SC प्रक्रिया."],
  ["Catheter Care", "कॅथेटरची काळजी", "Catheter hygiene and urine output monitoring.", "कॅथेटरची स्वच्छता आणि लघवीचे प्रमाण तपासणे."],
  ["Bedsore Care", "बेडसोरची काळजी", "Pressure area care and prescribed wound management.", "दबाव येणाऱ्या भागांची काळजी आणि डॉक्टरांच्या सल्ल्यानुसार जखमेची देखभाल."],
] as const;

const existing = [
  ["Patient Care Taker", "रुग्ण परिचर", "Personal assistance with daily activities and comfort.", "दैनंदिन कामे आणि आरामासाठी वैयक्तिक सहाय्य.", "/services/patient-care.jpg"],
  ["Elderly Care Taker", "ज्येष्ठ नागरिक परिचर", "Companionship and daily support for older adults.", "ज्येष्ठांसाठी सहवास आणि दैनंदिन मदत.", "/services/elderly.jpg"],
  ["Home Nursing Care", "घरगुती नर्सिंग सेवा", "Nursing support at home according to patient needs.", "रुग्णाच्या गरजेनुसार घरी नर्सिंग सहाय्य.", "/services/nursing.jpg"],
  ["Bedridden Patient Care", "अंथरुणाला खिळलेल्या रुग्णांची काळजी", "Support with hygiene, mobility and monitoring.", "स्वच्छता, हालचाल आणि तपासणीसाठी सहाय्य.", "/services/bedridden-care.jpg"],
  ["Baby Care Taker", "बाळाची काळजी घेणारे परिचर", "Care support for babies and young children.", "बाळे आणि लहान मुलांसाठी काळजी.", "/services/baby-care.jpg"],
  ["Post-Surgical Recovery", "शस्त्रक्रियेनंतरची काळजी", "Recovery assistance after an operation.", "शस्त्रक्रियेनंतर बरे होण्यासाठी सहाय्य.", "/services/post-surgery-care.jpg"],
  ["Physiotherapy at Home", "घरी फिजिओथेरपी", "Rehabilitation and mobility support at home.", "घरी पुनर्वसन आणि हालचालीसाठी सहाय्य.", "/services/physiotherapy.jpg"],
  ["First Aid Services", "प्रथमोपचार सेवा", "First aid assistance when needed.", "गरजेनुसार प्रथमोपचार सहाय्य.", "/services/first-aid.jpg"],
  ["Ambulance Services", "रुग्णवाहिका सेवा", "Help coordinating patient transport.", "रुग्ण वाहतुकीसाठी समन्वय.", "/services/ambulance.jpg"],
  ["On-call Home Visit", "मागणीनुसार घरी भेट", "Arrange a healthcare visit at home.", "आरोग्यसेवेसाठी घरी भेट आयोजित करा.", "/services/on-call-home-visit.jpg"],
  ["CPR Training", "सीपीआर प्रशिक्षण", "CPR training and awareness programmes.", "सीपीआर प्रशिक्षण आणि जनजागृती कार्यक्रम.", "/services/cpr-training.jpg"],
] as const;

export default function Services() {
  const t = useCopy();
  const { language } = useLanguage();
  return <section id="services" className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-3xl text-center reveal">
        <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">{t("Our Nursing Services", "आमच्या नर्सिंग सेवा")}</span>
        <h2 className="mt-4 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl">{t("Professional Home Nursing & Patient Care", "व्यावसायिक घरगुती नर्सिंग आणि रुग्णसेवा")}</h2>
        <p className="mt-4 text-lg text-gray-600">{t("Practical, compassionate care at home. Choose the support that fits your family.", "तुमच्या कुटुंबाच्या गरजेनुसार घरी काळजीपूर्वक आणि व्यावहारिक सेवा निवडा.")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => <article key={service.en} className="reveal group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-48 overflow-hidden"><Image src={service.image} alt={language === "mr" ? service.mr : service.en} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>
          <div className="p-6"><h3 className="text-xl font-bold text-heading">{language === "mr" ? service.mr : service.en}</h3><p className="mt-3 min-h-16 text-sm leading-relaxed text-gray-600">{language === "mr" ? service.descMr : service.desc}</p><a href="#booking" className="mt-4 inline-flex rounded-full bg-primary-light px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white">{t("Enquire Now", "चौकशी करा")}</a></div>
        </article>)}
      </div>

      <div className="mt-20">
        <div className="text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">{t("Nursing Visits at Home", "घरी नर्सिंग भेटी")}</span><h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">{t("Everyday Nursing Procedures", "दैनंदिन नर्सिंग प्रक्रिया")}</h2><p className="mt-3 text-gray-600">{t("Prescribed care and routine checks, explained clearly.", "डॉक्टरांच्या सल्ल्यानुसार सेवा आणि नियमित तपासण्या, सोप्या भाषेत.")}</p></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{procedures.map((item, index) => <article key={item[0]} className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-lg font-bold text-primary">{index + 1}</span><h3 className="mt-4 text-lg font-bold text-heading">{language === "mr" ? item[1] : item[0]}</h3><p className="mt-2 min-h-12 text-sm leading-relaxed text-gray-600">{language === "mr" ? item[3] : item[2]}</p><a href="#booking" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">{t("Enquire Now", "चौकशी करा")} →</a></article>)}</div>
      </div>

      <div id="nursing-care" className="mt-20 scroll-mt-24 rounded-3xl bg-primary-lighter p-6 ring-1 ring-primary/10 sm:p-10">
        <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">{t("Complete Service List", "सर्व सेवांची यादी")}</span><h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">{t("Home Nursing Care Services", "घरगुती नर्सिंग सेवा")}</h2><p className="mt-3 text-gray-600">{t("Ask us about the right service and staff availability for your patient.", "तुमच्या रुग्णासाठी योग्य सेवा आणि कर्मचारी उपलब्धतेबद्दल आमच्याशी संपर्क साधा.")}</p></div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">{nursingServiceGroups.map((group, index) => <div key={group.title} className={`rounded-2xl bg-white p-6 shadow-sm sm:p-8 ${index === 2 ? "lg:col-span-2" : ""}`}><h3 className="text-xl font-bold text-heading">{t(group.title, ["व्यावसायिक घरगुती नर्सिंग सेवा", "घरी नर्सिंग प्रक्रिया", "इतर घरगुती आरोग्य सेवा"][index])}</h3><ul className={`mt-5 grid gap-3 ${index === 2 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>{group.services.map((service) => <li key={service} className="flex items-start gap-3 text-sm text-gray-700 sm:text-base"><span className="mt-0.5 text-primary" aria-hidden>✓</span><span>{language === "mr" ? nursingServiceMarathi[service] : service}</span></li>)}</ul></div>)}</div>
        <div className="mt-8 text-center"><a href="#booking" className="inline-flex rounded-full bg-primary px-8 py-3 font-semibold text-white hover:bg-primary-dark">{t("Book Nursing Care", "नर्सिंग सेवा बुक करा")}</a></div>
      </div>

      <details id="more-services" className="mt-14 scroll-mt-24 rounded-3xl border border-gray-200 bg-white shadow-sm open:pb-8">
        <summary className="cursor-pointer list-none rounded-3xl px-6 py-6 text-center text-lg font-bold text-primary hover:bg-primary-lighter sm:text-xl">{t("Explore More Services", "इतर सेवा पाहा")} <span aria-hidden className="ml-2">⌄</span></summary>
        <p className="px-6 pb-6 text-center text-gray-600">{t("Our existing care and support services remain available.", "आमच्या पूर्वीच्या काळजी आणि सहाय्य सेवा उपलब्ध आहेत.")}</p>
        <div className="grid gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">{existing.map((service) => <article key={service[0]} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div className="relative h-40"><Image src={service[4]} alt={language === "mr" ? service[1] : service[0]} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div><div className="p-5"><h3 className="font-bold text-heading">{language === "mr" ? service[1] : service[0]}</h3><p className="mt-2 text-sm text-gray-600">{language === "mr" ? service[3] : service[2]}</p><a href="#booking" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">{t("Enquire Now", "चौकशी करा")} →</a></div></article>)}</div>
      </details>
    </div>
  </section>;
}
