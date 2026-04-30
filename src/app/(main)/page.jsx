import Banner from "@/components/homePage/Banner";
import FeaturedBooks from "@/components/homePage/FeaturedBooks";
import ScrollMarquee from "@/components/shared/ScrollMarquee";

const Home = () => {
  return (
    <div className="container mx-auto my-10 space-y-10">
      <Banner />
      <ScrollMarquee />
      <FeaturedBooks />
    </div>
  );
};

export default Home;
