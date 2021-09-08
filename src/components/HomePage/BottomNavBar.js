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
          <Link href="/" style={{ marginTop: "5px" }}>
            All
          </Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Fresh</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Best Sellers</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Amazon Pay</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Mobiles</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Prime</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Buy Again</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Customer Service</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Electronics</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">Gift Cards</Link>
        </div>
        <div className={classes.navItem}>
          <Link href="/">New Releases</Link>
        </div>
        <div className={classes.movieBar}>
          <Link href="/">
            <img src={moviesNav} alt="movies" style={{ height: "40px" }} />
          </Link>
        </div>
      </div>
    </BottomNavCard>
  );
};

export default BottomNavBar;
