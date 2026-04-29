import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ProductsGrid from "@/components/sections/ProductsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SebiNotices from "@/components/sections/SebiNotices";
import GrievanceQuickAccess from "@/components/sections/GrievanceQuickAccess";
import PartnerCTA from "@/components/sections/PartnerCTA";
import VoiceReader from "@/components/ui/VoiceReader";

export const metadata = {
  title: "Shri Venkatesh Stock Broker Services India Pvt. Ltd. | SEBI Registered Broker Raipur",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsGrid />
      <WhyChooseUs />
      <SebiNotices />
      <GrievanceQuickAccess />
      <PartnerCTA />
      <VoiceReader />
    </>
  );
}
