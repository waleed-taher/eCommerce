import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/widget/Hero";
import PromotionEvent from "./components/widget/PromotionEvent";
import ProductSection from "./components/widget/ProductSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromotionEvent />
      <ProductSection />
      <Footer />
    </main>
  );
}
