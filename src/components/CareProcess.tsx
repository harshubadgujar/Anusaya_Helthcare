"use client";

import { useCopy, useLanguage } from "@/lib/language";

const steps = [
  ["Contact Our Team", "आमच्याशी संपर्क साधा", "Call or WhatsApp us with your patient's requirements.", "रुग्णाच्या गरजा सांगण्यासाठी कॉल किंवा व्हॉट्सॲप करा."],
  ["Share Patient Details", "रुग्णाची माहिती द्या", "Tell us about the condition, medical advice and required service.", "रुग्णाची स्थिती, वैद्यकीय सल्ला आणि हवी असलेली सेवा कळवा."],
  ["Plan Care & Staff", "सेवा व कर्मचारी ठरवा", "We discuss shift timings and suitable staff availability.", "शिफ्टची वेळ आणि योग्य कर्मचारी उपलब्धतेची चर्चा करू."],
  ["Begin Service", "सेवा सुरू करा", "Care starts at the agreed time after the arrangements are confirmed.", "व्यवस्था निश्चित झाल्यावर ठरलेल्या वेळी सेवा सुरू होईल."],
  ["Ongoing Coordination", "सतत समन्वय", "Our team remains available for coordination and feedback.", "समन्वय आणि अभिप्रायासाठी आमची टीम उपलब्ध राहते."],
] as const;

const faqs = [
  ["Do you provide 24-hour home nursing?", "तुम्ही २४ तास घरगुती नर्सिंग देता का?", "Yes, depending on patient requirements and staff availability.", "होय, रुग्णाची गरज आणि कर्मचारी उपलब्धतेनुसार."],
  ["Can I book a nurse for 12 hours?", "१२ तासांसाठी नर्स बुक करता येते का?", "Yes, day and night shifts can be discussed.", "होय, दिवस किंवा रात्रीच्या शिफ्टबद्दल चर्चा करता येते."],
  ["Do you provide male and female nurses?", "पुरुष आणि महिला नर्स उपलब्ध आहेत का?", "We discuss your preference and arrange staff subject to availability.", "तुमची पसंती समजून उपलब्धतेनुसार कर्मचारी ठरवतो."],
  ["Is care available after hospital discharge?", "रुग्णालयातून घरी आल्यानंतर सेवा मिळते का?", "Yes, post-hospital and post-surgical nursing support is available.", "होय, रुग्णालयातून घरी आल्यानंतर व शस्त्रक्रियेनंतर नर्सिंग सहाय्य उपलब्ध आहे."],
  ["Can you arrange injections and IV services at home?", "घरी इंजेक्शन आणि IV सेवा मिळते का?", "Prescribed procedures can be discussed, subject to medical advice and professional scope.", "डॉक्टरांचा सल्ला आणि कर्मचाऱ्यांच्या कार्यक्षेत्रानुसार प्रक्रियांबद्दल चर्चा करता येते."],
  ["Which locations do you cover?", "तुमची सेवा कोणत्या भागात आहे?", "Pune and PCMC, including Wakad, Hinjewadi, Thergaon, Chinchwad, Baner and nearby areas. Please confirm availability for your address.", "पुणे आणि पिंपरी-चिंचवड, वाकड, हिंजवडी, थेरगाव, चिंचवड, बाणेर व आसपासचे भाग. तुमच्या पत्त्यासाठी उपलब्धता तपासा."],
] as const;

export default function CareProcess() {
  const t = useCopy();
  const { language } = useLanguage();
  return <section className="bg-white py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center"><span className="text-xs font-bold uppercase tracking-wider text-primary">{t("Simple Booking Process", "सोपी बुकिंग प्रक्रिया")}</span><h2 className="mt-3 text-3xl font-extrabold text-heading sm:text-4xl">{t("How Home Nursing Works", "घरगुती नर्सिंग सेवा कशी सुरू होते")}</h2></div>
      <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">{steps.map((item, index) => <li key={item[0]} className="rounded-2xl border border-primary/10 bg-primary-lighter p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">{index + 1}</span><h3 className="mt-4 font-bold text-heading">{language === "mr" ? item[1] : item[0]}</h3><p className="mt-2 text-sm leading-relaxed text-gray-600">{language === "mr" ? item[3] : item[2]}</p></li>)}</ol>
      <div id="faq" className="mx-auto mt-20 max-w-3xl scroll-mt-24"><h2 className="text-center text-3xl font-extrabold text-heading">{t("Frequently Asked Questions", "वारंवार विचारले जाणारे प्रश्न")}</h2><div className="mt-8 space-y-3">{faqs.map(item => <details key={item[0]} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"><summary className="cursor-pointer font-semibold text-heading">{language === "mr" ? item[1] : item[0]}</summary><p className="mt-3 text-sm leading-relaxed text-gray-600">{language === "mr" ? item[3] : item[2]}</p></details>)}</div></div>
    </div>
  </section>;
}
