""
import Navbar from "@/components/modules/navbar/Navbar";
import BestSellingSection from "@/components/template/bestSellingSection/BestSellingSection";
import CategorySection from "@/components/template/categorySection/CategorySection";
import ExploreSection from "@/components/template/exploreSection/ExploreSection";
import FlashSaleSection from "@/components/template/flashSaleSection/FlashSaleSection";
import HeroSection from "@/components/template/heroSection/HeroSection";
import LatestProductsSection from "@/components/template/latestProductsSection/LatestProductsSection";
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
      <ExploreSection/>
      <LatestProductsSection/>
    </main>
   
  </>
  );
}
