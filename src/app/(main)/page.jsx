import Banner from "@/components/homePage/Banner";
import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import ScrollMarquee from "@/components/shared/ScrollMarquee";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <ScrollMarquee />
      <FeaturedBooks />
      <TestimonialSection />
    </div>
  );
};

export default Home;
