import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment, useCallback } from "react";

import classes from "./SingleProduct.module.css";
import TopLayout from "../../layout/TopLayout";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";

const url =
  "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/SampleProducts.json";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.productId;

  const applydata = useCallback(
    (data) => {
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          image: data[key].image,
          description: data[key].description,
          price: data[key].price,
          quantity: 1,
        });
      }
      const selectedProduct = loadedProducts.filter(
        (prod) => prod.id === productId
      );
      console.log(selectedProduct);
      setProduct(selectedProduct);
    },
    [productId]
  );

  const { isLoading, error, sendRequest: fetchData } = useHttp(applydata);

  useEffect(() => {
    fetchData({ url: url });
  }, [fetchData]);

  const productItem = product[0];
  let productToRender;

  const addProductToCartHandler = () => {
    dispatch(cartActions.addProductToCart(productItem));
  };

  if (product.length > 0) {
    productToRender = (
      <Fragment>
        <div className={classes.imageContainer}>
          <img
            src={productItem.image}
            alt="prdouct"
            className={classes.image}
          />
        </div>

        <div className={classes.details}>
          <p className={classes.description}>{productItem.description}</p>
          <p className={classes.price}>
            <sup>&#8377;</sup>
            {productItem.price}
          </p>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <TopLayout />
      <div className={classes.home}>
        <div className={classes.product}>
          <div style={{ margin: "auto" }}>Image List</div>
          {isLoading && <p>Loading ....</p>}
          {error && <p>{error}</p>}
          {productToRender}
          <div className={classes.sale}>
            <div className={classes.button} onClick={addProductToCartHandler}>
              Add to Cart
            </div>
            <Link to="/cart">
              <div className={classes.button}>Go to Cart</div>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
