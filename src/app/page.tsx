import Navbar from "@/components/modules/navbar/Navbar";
import FlashSaleSection from "@/components/template/flashSaleSection/FlashSaleSection";
import HeroSection from "@/components/template/heroSection/HeroSection";


export default function Home() {
  return (
  <>
    <Navbar/>
    <main>
      <HeroSection/>
      <FlashSaleSection/>
    </main>
   
  </>
  );
}
