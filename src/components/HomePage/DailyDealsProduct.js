import classes from "./DailyDealsProduct.module.css";
import { useState, useEffect, useCallback } from "react";

const url =
  "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/products.json";

const DailyDealsProduct = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          image: data[key].image,
          link: data[key].link,
          text: data[key].text,
        });
      }

      setProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no movies.</p>;

  if (products.length > 0) {
    // const productsn = [products[0], products[1]];
    content = products.map((prod, i) => (
      <div key={`img_${i}`} className={`dealSlide ${classes.product}`}>
        <a href={prod.link}>
          <img src={prod.image} alt="not found" className={classes.image}></img>
        </a>
        <p className={classes.text}>{prod.text}</p>
      </div>
    ));
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return <div className={classes.banner}>{content}</div>;
};

export default DailyDealsProduct;
