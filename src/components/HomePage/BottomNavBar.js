import classes from "./BottomNavBar.module.css";
import BottomNavCard from "../../ui/BottomNavCard";
import moviesNav from "../../images/moviesNav.PNG";
import MenuIcon from "@material-ui/icons/Menu";

const BottomNavBar = () => {
  return (
    <BottomNavCard>
      <div className={classes.nav}>
        <div className={classes.menu}>
          <MenuIcon
            style={{
              padding: "0px 2px 0px 2px",
              color: "white",
              fontSize: "20pt",
            }}
          />
          <a href="https://www.amazon.in" style={{ marginTop: "5px" }}>
            All
          </a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Fresh</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Best Sellers</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Amazon Pay</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Mobiles</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Prime</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Buy Again</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Customer Service</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Electronics</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">Gift Cards</a>
        </div>
        <div className={classes.navItem}>
          <a href="https://www.amazon.in">New Releases</a>
        </div>
        <div className={classes.movieBar}>
          <a href="https://www.amazon.in">
            <img src={moviesNav} alt="movies" style={{ height: "40px" }} />
          </a>
        </div>
      </div>
    </BottomNavCard>
  );
};

export default BottomNavBar;
