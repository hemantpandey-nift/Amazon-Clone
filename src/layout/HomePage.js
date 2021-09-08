import classes from "./HomePage.module.css";
import ImageSliderTopBanner from "../ui/ImageSliderTopBanner";
import ImageSliderDeals from "../ui/ImageSliderDeals";
import TopLayout from "./TopLayout";
import CampaignCardGridTop from "../components/HomePage/CampaignCardGridTop";
import CampaignCardGridBottom from "../components/HomePage/CampaignCardGridBottom";
import { bannerImagesSample } from "../store/sampledata";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <TopLayout />
      <div>
        <ImageSliderTopBanner images={bannerImagesSample} />
      </div>

      <div className={classes.campaignCardGridTop}>
        <CampaignCardGridTop />
      </div>

      <div className={classes.campaignCardGridBottom}>
        <CampaignCardGridBottom />
      </div>
      <div>
        <ImageSliderDeals />
      </div>
    </div>
  );
};

export default HomePage;
