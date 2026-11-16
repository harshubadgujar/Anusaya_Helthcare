"use client";

import { useCopy, useLanguage } from "@/lib/language";

const reasons = [
  ["Qualified Nursing Professionals", "प्रशिक्षित नर्सिंग कर्मचारी", "Care matched to the patient's needs and the professional's scope.", "रुग्णाच्या गरजेनुसार आणि कर्मचाऱ्यांच्या कौशल्यानुसार सेवा."],
  ["Male & Female Staff", "पुरुष व महिला कर्मचारी", "Discuss your patient's preference when arranging care.", "सेवा ठरवताना रुग्णाची पसंती आम्हाला सांगा."],
  ["12 & 24 Hour Care", "१२ व २४ तास सेवा", "Day, night and round-the-clock shift options.", "दिवस, रात्र आणि पूर्ण दिवसाच्या शिफ्टचे पर्याय."],
  ["Personalised Care Plans", "वैयक्तिक काळजी योजना", "We discuss the patient's condition before arranging support.", "सेवा ठरवण्यापूर्वी आम्ही रुग्णाची स्थिती समजून घेतो."],
  ["Compassionate Support", "काळजीपूर्वक सहाय्य", "Patient comfort, dignity and family communication matter.", "रुग्णाचा आराम, सन्मान आणि कुटुंबाशी संवाद महत्त्वाचा."],
  ["Easy Enquiry", "सोपी चौकशी", "Call or WhatsApp to discuss services and availability.", "सेवा व उपलब्धतेसाठी कॉल किंवा व्हॉट्सॲप करा."],
] as const;

const patients = [
  ["Senior Citizens", "ज्येष्ठ नागरिक"], ["Bedridden Patients", "अंथरुणाला खिळलेले रुग्ण"],
  ["Post-Surgical Patients", "शस्त्रक्रियेनंतरचे रुग्ण"], ["Stroke & Paralysis Patients", "स्ट्रोक व अर्धांगवायूचे रुग्ण"],
  ["Post-ICU Patients", "आयसीयूनंतरचे रुग्ण"], ["Long-Term Care Patients", "दीर्घकालीन काळजी हवी असलेले रुग्ण"],
  ["Patients Needing Daily Nursing Procedures", "रोज नर्सिंग प्रक्रियांची गरज असलेले रुग्ण"],
] as const;

export default function WhyChooseUs() {
  const t = useCopy();
  const { language } = useLanguage();
  return <section id="why-us" className="bg-gradient-to-b from-white via-primary-lighter to-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center"><span className="rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">{t("Why Choose Us", "आम्हालाच का निवडावे")}</span><h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">{t("Care That Feels Like Family", "आपुलकीची रुग्णसेवा")}</h2><p className="mt-4 text-gray-600">{t("We understand that caring for a loved one at home requires trust, patience and professional support.", "आपल्या प्रिय व्यक्तीची घरी काळजी घेताना विश्वास, संयम आणि व्यावसायिक सहाय्य आवश्यक असते.")}</p></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{reasons.map((item, index) => <article key={item[0]} className="reveal rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-xl font-bold text-primary">{index + 1}</span><h3 className="mt-5 text-lg font-bold text-heading">{language === "mr" ? item[1] : item[0]}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{language === "mr" ? item[3] : item[2]}</p></article>)}</div>
      <div className="mt-16 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-primary/10 sm:p-10"><h3 className="text-center text-2xl font-bold text-heading">{t("Who Can Benefit From Our Services?", "आमच्या सेवांचा लाभ कोणाला होऊ शकतो?")}</h3><p className="mt-3 text-center text-gray-600">{t("We provide home healthcare support for:", "आम्ही खालील रुग्णांना घरी आरोग्यसेवा देतो:")}</p><ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{patients.map(item => <li key={item[0]} className="flex gap-3 text-gray-700"><span className="text-primary">✓</span>{language === "mr" ? item[1] : item[0]}</li>)}</ul></div>
    </div>
  </section>;
}
