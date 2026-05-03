import Banner from "@/components/homePage/Banner";
import ContactSection from "@/components/homePage/ContactSection";
import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import StatsSection from "@/components/homePage/StatsSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import ScrollMarquee from "@/components/shared/ScrollMarquee";
// import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <ScrollMarquee />
      <FeaturedBooks />
      <TestimonialSection />
      <StatsSection />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
