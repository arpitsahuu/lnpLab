import Training from "../components/Training"
import Collaboration from "../components/Collaboration"
import ButtonGradient from "../assets/svg/ButtonGradient"
import Roadmap from "../components/Roadmap"
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Training />
        <Roadmap />
        <InfiniteMovingCardsDemo />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}
