import classes from "./TopBanner.module.css";
import { bannerImagesSample } from "../store/sampledata";

const TopBanner = () => {
  const imagesBanner = bannerImagesSample.map((image) => (
    <img className={classes.images} src={image} alt="banner mot found" />
  ));
  return (
    <div className={classes.bannerbox}>
      <div>{imagesBanner}</div>
      <div className={`${classes.navigatebox} ${classes.positionleft}`}>
        <div className={classes.navigatebtn}>&larr;</div>
      </div>
      <div className={`${classes.navigatebox} ${classes.positionright}`}>
        <div className={classes.navigatebtn}>&rarr;</div>
      </div>
    </div>
  );
};

export default TopBanner;
