import classes from "./CampCard.module.css";

const CampCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default CampCard;
