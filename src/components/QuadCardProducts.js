import classes from "./QuadCardProducts.module.css";
import CampCard from "../ui/CampCard";

const QuadCardProducts = (props) => {
  const gridImages = props.images.map((img) => (
    <div key={Math.random().toString()} className={classes.imageGridCell}>
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
    <CampCard>
      <div className={classes.profile}>
        <p>Revamp your home in style</p>
      </div>
      <div className={classes.imageGrid}>{gridImages}</div>
      <div className={classes.explore}>See More</div>
    </CampCard>
  );
};

export default QuadCardProducts;
