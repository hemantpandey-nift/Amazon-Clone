import classes from "./HomePage.module.css";
import TopBanner from "../components/TopBanner";
import {
  campaignGrid1ImagesSample,
  campaignGrid2ImagesSample,
} from "../store/sampledata";
import DynamicCampaignCardCategory from "../components/DynamicCampaignCardCategory";
import DynamicCampaignCardProducts from "../components/DyamicCampaignCardProducts";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <div>
        <TopNavBar />
      </div>
      <div>
        <BottomNavBar />
      </div>

      <div className={classes.topBanner}>
        <TopBanner />
      </div>
      <div className={classes.campaignCardGrid}>
        <div className={classes.block}>
          <DynamicCampaignCardCategory images={campaignGrid1ImagesSample} />
        </div>
        <div className={classes.block}>
          <DynamicCampaignCardCategory images={campaignGrid1ImagesSample} />
        </div>
        <div className={classes.block}>
          <DynamicCampaignCardProducts images={campaignGrid2ImagesSample} />
        </div>
        <div className={classes.block}>
          <DynamicCampaignCardCategory images={campaignGrid1ImagesSample} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
