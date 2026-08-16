import SiteProvider from "@/components/SiteProvider";
import LoadingScreen from "@/components/LoadingScreen";
import OpenGate from "@/components/OpenGate";
import Navbar from "@/components/Navbar";
import Ambient from "@/components/Ambient";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
// Story section removed per request
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import Rsvp from "@/components/Rsvp";
import Family from "@/components/Family";
// Blessings & Gift sections removed per request
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AutoTour from "@/components/AutoTour";
import PWA from "@/components/PWA";

export default function Home() {
  return (
    <SiteProvider>
      <PWA />
      <LoadingScreen />
      <OpenGate />
      <Navbar />
      <Ambient />

      <main className="relative">
        <Hero />
        <Countdown />
        <Couple />
        <Events />
        <Venue />
        <Rsvp />
        <Family />
      </main>

      <Footer />
      <FloatingButtons />
      <AutoTour />
    </SiteProvider>
  );
}
