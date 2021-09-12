import classes from "./QuadCardCategory.module.css";
import profilePic from "../../images/profile.PNG";
import CampCard from "../../ui/CampCard";
import { useSelector } from "react-redux";

const QuadCardCategory = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
        <p>{isLoggedIn ? "Hi, Hemant" : "Hi, Guest"}</p>
      </div>

      <div className={classes.topLinks}>Top Links for You</div>
      <div className={classes.imageGrid}>{gridImages}</div>
    </CampCard>
  );
};

export default QuadCardCategory;
