import { useState, useEffect, Fragment, useCallback } from "react";
import useHttp from "../hooks/use-http";
import TopLayout from "./TopLayout";
import classes from "./ProductsPage.module.css";
import ProductsByCategory from "../components/products/ProductsByCategory";
import { useParams } from "react-router";

const url =
  "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/SampleProducts.json";

const ProductsPage = () => {
  const params = useParams();
  const category = params.category;
  console.log(category);
  const [products, setProducts] = useState([]);

  const applydata = useCallback(
    (data) => {
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: key,
          image: data[key].image,
          description: data[key].description,
          category: data[key].category,
          price: data[key].price,
        });
      }
      const selectedProducts = loadedProducts.filter(
        (prod) => prod.category === category
      );
      setProducts(selectedProducts);
    },
    [category]
  );

  const { isLoading, error, sendRequest: fetchData } = useHttp(applydata);

  useEffect(() => {
    fetchData({ url: url });
  }, [fetchData]);

  return (
    <Fragment>
      <TopLayout />
      <div className={classes.home}>
        <div className={classes.side}>Grid</div>
        <ul className={classes.products}>
          {isLoading && <p>Loading....</p>}
          {error && <p>{error}</p>}
          <ProductsByCategory products={products} />
        </ul>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
