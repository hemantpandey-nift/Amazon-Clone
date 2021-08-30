import classes from "./DynamicCampaignCardCategory.module.css";
import profilePic from "../images/profile.PNG";

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
    <div className={classes.card}>
      <div className={classes.profile}>
        <img src={profilePic} alt="profile" />
        <p>Hi, Aarna</p>
      </div>

      <div className={classes.topLinks}>Top Links for You</div>
      <div className={classes.imageGrid}>{gridImages}</div>
    </div>
  );
};

export default DynamicCampaignCardCategory;
