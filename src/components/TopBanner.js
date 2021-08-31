import classes from "./TopBanner.module.css";
import { bannerImagesSample } from "../store/sampledata";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TopBanner = () => {
  const imagesBanner = bannerImagesSample.map((image) => (
    <img className={classes.images} src={image} alt="banner mot found" />
  ));
  return (
    <div className={classes.bannerbox}>
      <div>{imagesBanner}</div>
      <div className={`${classes.navigatebox} ${classes.positionleft}`}>
        <div className={classes.navigatebtn}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: "35pt" }} />
        </div>
      </div>
      <div className={`${classes.navigatebox} ${classes.positionright}`}>
        <div className={classes.navigatebtn}>
          <ArrowForwardIosIcon style={{ color: "white", fontSize: "35pt" }} />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
