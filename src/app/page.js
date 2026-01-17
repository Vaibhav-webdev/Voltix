import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection"
import FeaturesSection from "./components/featuresSection";
import Marquee from "./components/Marquee"
import Questions from "./components/questions";
import CallToAction from "./components/call_to_action";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Marquee />
      <CallToAction />
      <Questions />
      <Footer />
    </>
  );
}
