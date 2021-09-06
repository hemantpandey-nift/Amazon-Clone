import classes from "./HomePage.module.css";
import TopBanner from "../components/HomePage/TopBanner";
import DailyDealsProduct from "../components/HomePage/DailyDealsProduct";
import BannerNavigation from "../components/HomePage/BannerNavigation";
import DealsNavigation from "../components/HomePage/DealsNavigation";
import TopLayout from "./TopLayout";
import CampaignCardGridTop from "../components/HomePage/CampaignCardGridTop";
import CampaignCardGridBottom from "../components/HomePage/CampaignCardGridBottom";

const HomePage = () => {
  console.log("Home Page");
  return (
    <div className={classes.home}>
      <TopLayout />
      <div>
        <TopBanner />
      </div>
      <div>
        <BannerNavigation />
      </div>
      <div className={classes.campaignCardGridTop}>
        <CampaignCardGridTop />
      </div>

      <div className={classes.campaignCardGridBottom}>
        <CampaignCardGridBottom />
      </div>
      <div>
        <DailyDealsProduct />
      </div>
      <div>
        <DealsNavigation />
      </div>
    </div>
  );
};

export default HomePage;
