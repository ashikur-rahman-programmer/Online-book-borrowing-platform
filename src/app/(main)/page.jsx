import Banner from "@/components/homePage/Banner";
import ScrollMarquee from "@/components/shared/ScrollMarquee";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <ScrollMarquee />
    </div>
  );
};

export default Home;
