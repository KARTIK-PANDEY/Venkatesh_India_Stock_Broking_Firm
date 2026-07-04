import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import WelcomeSection from "@/components/sections/WelcomeSection";
import ProductsGrid from "@/components/sections/ProductsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SebiNotices from "@/components/sections/SebiNotices";
import GrievanceQuickAccess from "@/components/sections/GrievanceQuickAccess";
import PartnerCTA from "@/components/sections/PartnerCTA";
import VoiceReader from "@/components/ui/VoiceReader";
import FATCAAlert from "@/components/ui/FATCAAlert";

export const metadata = {
  title: "Shri Venkatesh Stock Broker Services India Pvt. Ltd. | SEBI Registered Broker Raipur",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WelcomeSection />
      <ProductsGrid />
      <WhyChooseUs />
      <SebiNotices />
      <GrievanceQuickAccess />
      <PartnerCTA />
      <VoiceReader />
      <FATCAAlert />
    </>
  );
}
