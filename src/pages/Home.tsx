import Hero from "../components/home/Hero";
import ImpactStats from "../components/home/ImpactStats";
import PillarsSection from "../components/home/PillarsSection";
import FeaturedDiscovery from "../components/home/FeaturedDiscovery";
import UpcomingExpeditions from "../components/home/UpcomingExpeditions";
import FeaturedSpecies from "../components/home/FeaturedSpecies";
import TeamSection from "../components/home/TeamSection";
import CtaBand from "../components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingExpeditions />
      <ImpactStats />
      <PillarsSection />
      <FeaturedDiscovery />
      <FeaturedSpecies />
      <TeamSection />
      <CtaBand />
    </>
  );
}