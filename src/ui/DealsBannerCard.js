import classes from "./DealsBannerCard.module.css";

const DealsBannerCard = (props) => {
  return <div className={classes.banner}>{props.children}</div>;
};

export default DealsBannerCard;
