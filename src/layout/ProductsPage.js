import { useState, useEffect, Fragment } from "react";
import useFetchItem from "../hooks/use-fetchItems";
import TopLayout from "./TopLayout";
import classes from "./ProductsPage.module.css";
import ProductsByCategory from "../components/products/ProductsByCategory";
import { useParams } from "react-router";

const ProductsPage = () => {
  const params = useParams();
  const category = params.category;
  console.log(category);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const selectedProducts = [];
  const fetchItem = useFetchItem();
  const url =
    "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/SampleProducts.json";

  useEffect(() => {
    setIsLoading(true);
    fetchItem(url).then((data) => {
      setProducts(data.fetchedData);
      setError(data.loadingError);
      setIsLoading(false);
    });
  }, [fetchItem]);

  for (const key in products) {
    if (products[key].category === category) {
      selectedProducts.push({
        key: key,
        image: products[key].image,
        description: products[key].description,
        category: products[key].category,
        price: products[key].price,
      });
    }
  }
  return (
    <Fragment>
      <TopLayout />
      <div className={classes.home}>
        <div className={classes.side}>Grid</div>
        <ul className={classes.products}>
          {isLoading && <p>Loading....</p>}
          {error && <p>{error}</p>}
          <ProductsByCategory products={selectedProducts} />
        </ul>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
