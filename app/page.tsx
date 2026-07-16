import SiteProvider from "@/components/SiteProvider";
import LoadingScreen from "@/components/LoadingScreen";
import OpenGate from "@/components/OpenGate";
import Navbar from "@/components/Navbar";
import Ambient from "@/components/Ambient";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Couple from "@/components/Couple";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import Rsvp from "@/components/Rsvp";
import Family from "@/components/Family";
import Blessings from "@/components/Blessings";
import Gift from "@/components/Gift";
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
        <Story />
        <Events />
        <Gallery />
        <Venue />
        <Rsvp />
        <Family />
        <Blessings />
        <Gift />
      </main>

      <Footer />
      <FloatingButtons />
      <AutoTour />
    </SiteProvider>
  );
}
