import React from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import TopLayout from "../../layout/TopLayout";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
  let itemsAvailableCart = false;
  const cartData = useSelector((state) => state.cart.cartItems);
  if (cartData.length > 0) itemsAvailableCart = true;
  const cartList = cartData.map((item) => <CartItem product={item} />);

  return (
    <Fragment>
      <TopLayout />
      <div className={classes.home}>
        <div className={classes.products}>
          {!itemsAvailableCart && <p>No Item Available in the Cart</p>}
          {itemsAvailableCart && cartList}
        </div>
        <div className={classes.grid}>
          <div className={classes.sale}>
            <div className={classes.button}>CheckOut</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Cart;
