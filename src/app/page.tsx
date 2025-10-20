import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import BestSellingSection from "@/components/template/bestSellingSection/BestSellingSection";
import CategorySection from "@/components/template/categorySection/CategorySection";
import ExploreSection from "@/components/template/exploreSection/ExploreSection";
import FlashSaleSection from "@/components/template/flashSaleSection/FlashSaleSection";
import HeroSection from "@/components/template/heroSection/HeroSection";
import LatestProductsSection from "@/components/template/latestProductsSection/LatestProductsSection";
import PromoSection from "@/components/template/promoSection/PromoSection";
import ServicesSection from "@/components/template/servicesSection/ServicesSection";
import { verifyAccessToken } from "@/utiles/auth";
import { cookies } from "next/headers";
import UserModel from "../../models/User"

export default async function Home() {
  const token = cookies().get("token")
  let user = null

  if (token) {
    const tokenPayload = verifyAccessToken(token.value)
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email })
    }

  }

  return (
    <>
      <Navbar isLogin={!!user} />
      <main>
        <HeroSection />
        <FlashSaleSection />
        <CategorySection />
        <BestSellingSection />
        <PromoSection />
        <ExploreSection />
        <LatestProductsSection />
        <ServicesSection />
        <Footer />
      </main>

    </>
  );
}
