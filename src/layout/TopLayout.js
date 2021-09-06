import TopNavBar from "../components/HomePage/TopNavBar";
import BottomNavBar from "../components/HomePage/BottomNavBar";
import { Fragment } from "react";
const TopLayout = () => {
  return (
    <Fragment>
      <TopNavBar />
      <BottomNavBar />
    </Fragment>
  );
};

export default TopLayout;
