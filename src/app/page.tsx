import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/widget/Hero";
import PromotionEvent from "./components/widget/PromotionEvent";
import ProductSection from "./components/widget/ProductSection";
import ShowCase from "./components/widget/ShowCase";
import NewsLetter from "./components/widget/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromotionEvent />
      <ProductSection />
      <ShowCase />
      <NewsLetter />
      <Footer />
    </main>
  );
}
