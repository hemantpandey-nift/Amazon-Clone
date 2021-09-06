import classes from "./SingleProductCamp.module.css";
import CampCard from "../../ui/CampCard";

const SingleProductCamp = (props) => {
  return (
    <CampCard>
      <div className={classes.heading}>
        <p>{props.images.text}</p>
      </div>
      <div>
        <a href={props.images.link}>
          <img
            src={props.images.image}
            alt="product not found"
            className={classes.image}
          ></img>
        </a>
        <div>
          <a href="https://www.amazon.in/ref=nav_logo">
            <p className={classes.footer}>See More</p>
          </a>
        </div>
      </div>
    </CampCard>
  );
};

export default SingleProductCamp;
