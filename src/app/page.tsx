import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import CareProcess from "@/components/CareProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BookingForm />
      <WhyChooseUs />
      <CareProcess />
      <Testimonials />
      <Contact />
    </>
  );
}
