import classes from "./HomePage.module.css";
import TopBanner from "../components/TopBanner";
import {
  campaignGrid1ImagesSample,
  campaignGrid2ImagesSample,
} from "../store/sampledata";
import DynamicCampaignCardCategory from "../ui/DynamicCampaignCardCategory";
import DynamicCampaignCardProducts from "../ui/DyamicCampaignCardProducts";

const HomePage = () => {
  return (
    <div className={classes.home}>
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
