import Navbar from "@/components/modules/navbar/Navbar";
import CategorySection from "@/components/template/categorySection/CategorySection";
import FlashSaleSection from "@/components/template/flashSaleSection/FlashSaleSection";
import HeroSection from "@/components/template/heroSection/HeroSection";


export default function Home() {
  return (
  <>
    <Navbar/>
    <main>
      <HeroSection/>
      <FlashSaleSection/>
      <CategorySection/>
    </main>
   
  </>
  );
}
