import classes from "./TopBanner.module.css";
import { bannerImagesSample } from "../../store/sampledata";

const TopBanner = () => {
  console.log("Top Banner");
  const imagesBanner = bannerImagesSample.map((image, i) => (
    <div key={`img_${i}`} className={`slide ${classes.slideContainer}`}>
      <img
        key={Math.random().toString()}
        className={classes.image}
        src={image}
        alt="banner mot found"
      />
    </div>
  ));

  return <div className={classes.slider}>{imagesBanner}</div>;
};

export default TopBanner;
