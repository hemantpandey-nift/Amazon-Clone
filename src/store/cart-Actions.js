import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = (cartData) => {
  const cartDataToDispatch = {
    cartItems: cartData.cartItems,
    quantity: cartData.quantity,
  };
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending",
        message: "Sending Data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartDataToDispatch),
          headers: { "content-type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send data");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully sent data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to send data",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching",
        message: "Fetching Cart Data",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/cart.json"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }
      const responseData = await response.json();

      return responseData;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart(cartData));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Cart Data fetched successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to fetch data",
        })
      );
    }
  };
};
