import Banner from "@/components/homePage/Banner";
import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import StatsSection from "@/components/homePage/StatsSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import ScrollMarquee from "@/components/shared/ScrollMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <ScrollMarquee />
      <FeaturedBooks />
      <TestimonialSection />
      <StatsSection />
    </div>
  );
};

export default Home;
