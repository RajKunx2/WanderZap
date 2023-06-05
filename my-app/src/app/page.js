import Navbar from "../../Components/Navbar/index";
import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Hero/Explore";
import Testimonials from "../../Components/Testimonials/index";
import Guide from "../../Components/Hero/Guide";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Guide />
      <Testimonials />
    </>
  );
}
