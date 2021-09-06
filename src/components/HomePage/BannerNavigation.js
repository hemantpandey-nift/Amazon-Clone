import classes from "./BannerNavigation.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const BannerNavigation = () => {
  console.log("Navigation");
  const slides = document.querySelectorAll(".slide");
  console.log(slides);
  let currSlide = 0;
  const maxSlides = slides.length;
  console.log(maxSlides);
  const moveSlides = (curr) => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curr)}%)`;
    });
  };

  const nextSlide = function () {
    if (currSlide === maxSlides - 1) currSlide = 0;
    else currSlide++;
    console.log(currSlide);
    moveSlides(currSlide);
  };
  const previousSlide = function () {
    if (currSlide === 0) currSlide = maxSlides - 1;
    else currSlide--;
    console.log(currSlide);
    moveSlides(currSlide);
  };
  const init = function () {
    moveSlides(0);
  };

  init();

  return (
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
  );
};

export default BannerNavigation;
