import classes from "./HomePage.module.css";
import TopNavBar from "../components/TopNavBar";
import BottomNavBar from "../components/BottomNavBar";
import TopBanner from "../components/TopBanner";
import {
  campaignGrid1ImagesSample,
  campaignGrid2ImagesSample,
  campaignGrid3ImagesSample,
  campaignGrid4ImagesSample,
  campaignGrid5ImagesSample,
  campaignGrid6ImagesSample,
  campaignGrid7ImagesSample,
} from "../store/sampledata";
import QuadCardCategory from "../components/QuadCardCategory";
import QuadCardProducts from "../components/QuadCardProducts";
import SingleProductCamp from "../components/SingleProductCamp";
import DoubleProductCamp from "../components/DoublePoductCamp";
import PrimeVideoCamp from "../components/PrimeVideoCamp";
import DailyDealsProduct from "../components/DailyDealsProduct";

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
      <div className={classes.campaignCardGridTop}>
        <div style={{ marginLeft: "15px" }}>
          <QuadCardCategory images={campaignGrid1ImagesSample} />
        </div>
        <div>
          <SingleProductCamp images={campaignGrid3ImagesSample} />
        </div>
        <div>
          <QuadCardProducts images={campaignGrid2ImagesSample} />
        </div>
        <div>
          <DoubleProductCamp images={campaignGrid4ImagesSample} />
        </div>
      </div>
      <div className={classes.campaignCardGridBottom}>
        <div>
          <PrimeVideoCamp images={campaignGrid5ImagesSample} />
        </div>
        <div>
          <QuadCardProducts images={campaignGrid6ImagesSample} />
        </div>
        <div>
          <QuadCardProducts images={campaignGrid7ImagesSample} />
        </div>
      </div>
      <div className={classes.dealsBanner}>
        <DailyDealsProduct />
      </div>
    </div>
  );
};

export default HomePage;
