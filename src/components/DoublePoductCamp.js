import classes from "./DoubleProductCamp.module.css";

const DoubleProductCamp = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.upperCard}>
        <a href="/">
          <p className={classes.p1}>Shop on the Amazon App </p>
          <p className={classes.p2}>
            Fast, convenient and secure | Over 17 crore products in your pocket
          </p>
          <p className={classes.p3}>Download the Amazon App</p>
        </a>
      </div>

      <a href="/">
        <img
          src={props.images.image}
          alt="not found"
          className={classes.lowerCard}
        ></img>
      </a>
    </div>
  );
};

export default DoubleProductCamp;
