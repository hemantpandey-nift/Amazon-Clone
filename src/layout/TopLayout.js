import TopNavBar from "../components/HomePage/TopNavBar";
import BottomNavBar from "../components/HomePage/BottomNavBar";
import classes from "./TopLayout.module.css";

const TopLayout = () => {
  return (
    <div className={classes.main}>
      <TopNavBar />
      <BottomNavBar />
    </div>
  );
};

export default TopLayout;
