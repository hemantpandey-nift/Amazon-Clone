import classes from "./BottomNavCard.module.css";

const BottomNavCard = (props) => {
  return <div className={classes.bottomNav}>{props.children}</div>;
};

export default BottomNavCard;
