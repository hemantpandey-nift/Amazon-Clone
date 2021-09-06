import classes from "./QuadCardCategory.module.css";
import profilePic from "../../images/profile.PNG";
import CampCard from "../../ui/CampCard";

const QuadCardCategory = (props) => {
  const gridImages = props.images.map((img) => (
    <div key={Math.random().toString()} className={classes.imageGridCell}>
      <a href={img.link}>
        <div className={classes.item}>
          <img
            className={classes.imageThumb}
            src={img.image}
            alt="dynamic campaign"
          />
          <p className={classes.itemP}>{img.text}</p>
        </div>
      </a>
    </div>
  ));

  return (
    <CampCard>
      <div className={classes.profile}>
        <img src={profilePic} alt="profile" />
        <p>Hi, Aarna</p>
      </div>

      <div className={classes.topLinks}>Top Links for You</div>
      <div className={classes.imageGrid}>{gridImages}</div>
    </CampCard>
  );
};

export default QuadCardCategory;
