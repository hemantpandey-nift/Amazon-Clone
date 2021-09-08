import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const item = props.product;

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    const product = {
      id: item.id,
      image: item.image,
      price: item.price,
      description: item.description,
      quantity: 1,
    };

    dispatch(cartActions.addProductToCart(product));
  };
  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeProductFromCart(item.id));
  };

  return (
    <div key={item.key} className={classes.product}>
      <div className={classes.image}>
        <img style={{ height: "150px" }} src={item.image} alt="product" />
      </div>

      <div className={classes.details}>
        <p className={classes.p1}>{item.description}</p>
        <p className={classes.p2}>
          Unit Price : <sup>&#8377;</sup> {item.price}
        </p>
        <p className={classes.p2}>Quantity : {item.quantity}</p>
        <p className={classes.p2}>
          Total Amount : <sup>&#8377;</sup>
          {(item.quantity * item.price).toLocaleString("en-In")}
        </p>
        <div className={classes.actions}>
          <button onClick={removeItemFromCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
