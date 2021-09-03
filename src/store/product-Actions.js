import { productActions } from "./productSlice";

export const fetchProductData = () => {
  return async (dispatch) => {
    console.log("in fetchdata");
    const fetchData = async () => {
      const response = await fetch(
        "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/products.json"
      );
      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }
      const responseData = await response.json();
      return responseData;
    };

    const productData = await fetchData();
    dispatch(productActions.replaceProducts(productData));
  };
};
