import classes from "./PrimeVideoCamp.module.css";

const PrimeVideoCamp = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.p1}>Prime Video: Recommended for you</p>
      <p className={classes.p2}>{props.images.text}</p>
      <a href="/">
        <img
          src={props.images.image}
          alt="Campaign"
          className={classes.image}
        ></img>
      </a>
    </div>
  );
};

export default PrimeVideoCamp;
