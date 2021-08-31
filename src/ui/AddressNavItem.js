import classes from "./AddressNavItem.module.css";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const AddressNavItem = () => {
  return (
    <div className={classes.item}>
      <div>
        <LocationOnOutlinedIcon
          style={{ color: "white", marginTop: "20px", fontSize: "16pt" }}
        />
      </div>
      <div>
        <p className={classes.hello}>Hello</p>
        <p className={classes.address}>Select Your Address</p>
      </div>
    </div>
  );
};

export default AddressNavItem;
