import Navbar from "@/components/modules/navbar/Navbar";
import BestSellingSection from "@/components/template/bestSellingSection/BestSellingSection";
import CategorySection from "@/components/template/categorySection/CategorySection";
import FlashSaleSection from "@/components/template/flashSaleSection/FlashSaleSection";
import HeroSection from "@/components/template/heroSection/HeroSection";
import PromoSection from "@/components/template/promoSection/PromoSection";


export default function Home() {
  return (
  <>
    <Navbar/>
    <main>
      <HeroSection/>
      <FlashSaleSection/>
      <CategorySection/>
      <BestSellingSection/>
      <PromoSection/>
    </main>
   
  </>
  );
}
