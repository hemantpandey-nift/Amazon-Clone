import classes from "./DynamicCampaignCard.module.css";

const DynamicCampaignCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default DynamicCampaignCard;
