import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import useFetchItem from "../../hooks/use-fetchItems";
import classes from "./SingleProduct.module.css";
import TopLayout from "../../layout/TopLayout";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.productId;

  const fetchItem = useFetchItem();
  const url =
    "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/SampleProducts.json";

  useEffect(() => {
    setIsLoading(true);
    fetchItem(url).then((data) => {
      setError(data.loadingError);
      setIsLoading(false);
      const products = data.fetchedData;
      const selectedProduct = [];
      for (const key in products) {
        if (productId === key) {
          selectedProduct.push({
            id: key,
            image: products[key].image,
            description: products[key].description,
            price: products[key].price,
            quantity: 1,
          });
        }
      }
      setProduct(selectedProduct);
    });
  }, [fetchItem, productId]);

  const productItem = product[0];
  let productToRender;

  const addProductToCartHandler = () => {
    console.log("clicked 1");
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
          {isLoading && <p>Loading....</p>}
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
