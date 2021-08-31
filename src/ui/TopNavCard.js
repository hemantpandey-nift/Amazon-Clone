import classes from "./TopNavCard.module.css";

const TopNavCard = (props) => {
  return <div className={classes.topNav}>{props.children}</div>;
};

export default TopNavCard;
