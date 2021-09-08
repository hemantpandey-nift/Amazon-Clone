import TopNavCard from "../../ui/TopNavCard";
import classes from "./TopNavBar.module.css";
import logo from "../../images/logo.PNG";
import AddressNavItem from "../../ui/AddressNavItem";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import flag from "../../images/flag.PNG";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const cartData = useSelector((state) => state.cart.quantity);
  return (
    <TopNavCard>
      <div className={classes.nav}>
        <div className={classes.navItem}>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.navItem}>
          <AddressNavItem />
        </div>
        <div className={classes.navItem}>
          <div className={classes.searchBar}>
            <div className={classes.all}>
              <p className={classes.allText}>All</p>
              <ArrowDropDownIcon
                style={{ marginTop: "10px", color: "black" }}
              />
            </div>
            <input className={classes.search}></input>
            <div className={classes.searchIcon}>
              <SearchOutlinedIcon
                style={{
                  marginTop: "8px",
                  marginLeft: "8px",
                  color: "black",
                  fontSize: "22pt",
                  fontWeight: "bolder",
                }}
              />
            </div>
          </div>
        </div>

        <div className={classes.navItem} style={{ marginLeft: "20px" }}>
          <img src={flag} alt="language" className={classes.flag} />
          <ArrowDropDownIcon
            style={{ marginTop: "15px", color: "grey", fontSize: "14pt" }}
          />
        </div>

        <div
          className={classes.navItem}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div>
            <p className={classes.hello}>Hello, Hemant</p>
            <p className={classes.account}>Account & Lists</p>
          </div>
          <ArrowDropDownIcon
            style={{ marginTop: "28px", color: "grey", fontSize: "14pt" }}
          />
        </div>

        <div className={classes.navItem}>
          <div>
            <p className={classes.hello}>Returns</p>
            <p className={classes.account}>& Orders</p>
          </div>
        </div>

        <div
          className={classes.navItem}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Link to="/cart">
            <div>
              <p className={classes.cartItems}>{cartData}</p>
              <ShoppingCartOutlinedIcon
                style={{
                  color: "white",
                  fontSize: "22pt",
                }}
              />
            </div>
          </Link>
          <p className={classes.cart}>Cart</p>
        </div>
      </div>
    </TopNavCard>
  );
};

export default TopNavBar;
