import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import AboutUs from "@/components/AboutUs";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import MainPrograms from "@/components/MainPrograms";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Technopal.us",
  description: "Technopal.us",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <AboutUs />
      <About />
      <FeaturesTab />
      <FunFact />
      <MainPrograms />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
