import classes from "./DynamicCampaignCardProducts.module.css";
import DynamicCampaignCard from "../ui/DynamicCampaignCard";

const DynamicCampaignCardProducts = (props) => {
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
        <p>Revamp your home in style</p>
      </div>
      <div className={classes.imageGrid}>{gridImages}</div>
      <div className={classes.explore}>Explore All...</div>
    </DynamicCampaignCard>
  );
};

export default DynamicCampaignCardProducts;
