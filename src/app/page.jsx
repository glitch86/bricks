import Categories from "@/Components/Home/Categories";
import CommunityShowcase from "@/Components/Home/CommunityShowcase";
import CTA from "@/Components/Home/CTA";
import Featured from "@/Components/Home/Featured";
import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Home/HowItWorks";
import WhyBricks from "@/Components/Home/WhyBricks";
import LegoPeople from "@/Components/LegoPeople";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <CommunityShowcase></CommunityShowcase>
      <Categories></Categories>
      <HowItWorks></HowItWorks>
      <WhyBricks></WhyBricks>
      <CTA></CTA>
    </div>
  );
}
