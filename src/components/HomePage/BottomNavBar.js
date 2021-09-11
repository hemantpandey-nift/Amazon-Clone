import classes from "./BottomNavBar.module.css";
import BottomNavCard from "../../ui/BottomNavCard";
import moviesNav from "../../images/moviesNav.PNG";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ marginTop: "5px" }}>
            All
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Fresh</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Best Sellers</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Amazon Pay</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Mobiles</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Prime</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Buy Again</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Customer Service</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Electronics</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">Gift Cards</Link>
        </div>
        <div className={classes.navItem}>
          <Link to="/">New Releases</Link>
        </div>
        <div className={classes.movieBar}>
          <Link to="/">
            <img src={moviesNav} alt="movies" style={{ height: "40px" }} />
          </Link>
        </div>
      </div>
    </BottomNavCard>
  );
};

export default BottomNavBar;
