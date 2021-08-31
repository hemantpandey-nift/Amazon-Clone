import classes from "./DynamicCampaignCardCategory.module.css";
import profilePic from "../images/profile.PNG";
import DynamicCampaignCard from "../ui/DynamicCampaignCard";

const DynamicCampaignCardCategory = (props) => {
  const gridImages = props.images.map((img) => (
    <div className={classes.imageGridCell}>
      <a href={img.link}>
        <div className={classes.item}>
          <img
            class={classes.imageThumb}
            src={img.image}
            alt="dynamic campaign"
          />
          <p className={classes.itemP}>{img.text}</p>
        </div>
      </a>
    </div>
  ));

  return (
    <DynamicCampaignCard>
      <div className={classes.profile}>
        <img src={profilePic} alt="profile" />
        <p>Hi, Aarna</p>
      </div>

      <div className={classes.topLinks}>Top Links for You</div>
      <div className={classes.imageGrid}>{gridImages}</div>
    </DynamicCampaignCard>
  );
};

export default DynamicCampaignCardCategory;
