import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import classes from "./ImageSliderTopBanner.module.css";
import { useState } from "react";

const ImageSliderTopBanner = (props) => {
  const [current, setCurrent] = useState(0);
  const maxImages = props.images.length;

  const previousSlide = () => {
    if (current === 0) setCurrent(maxImages - 1);
    else setCurrent(() => current - 1);
  };
  const nextSlide = () => {
    if (current === maxImages - 1) setCurrent(0);
    else setCurrent(() => current + 1);
  };
  const image = (
    <img src={props.images[current]} alt="product" style={{ width: "100%" }} />
  );

  return (
    <div>
      <div className={classes.image}>{image}</div>
      <div className={classes.navigateBanner}>
        <div
          onClick={previousSlide}
          className={`${classes.navigatebox} ${classes.btn__left} `}
        >
          <div className={classes.navigatebtn}>
            <ArrowBackIosIcon style={{ color: "white", fontSize: "35pt" }} />
          </div>
        </div>

        <div
          onClick={nextSlide}
          className={`${classes.navigatebox} ${classes.btn__right} `}
        >
          <div className={classes.navigatebtn}>
            <ArrowForwardIosIcon style={{ color: "white", fontSize: "35pt" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderTopBanner;
