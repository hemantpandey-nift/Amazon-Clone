import { Fragment } from "react";
import classes from "./ProductsByCategory.module.css";
import { Link } from "react-router-dom";

const ProductsByCategory = (props) => {
  const products = props.products;

  const productList = products.map((prod) => (
    <Link to={`/product/${prod.key}`}>
      <li key={prod.key} className={classes.product}>
        <div className={classes.imageContainer}>
          <img src={prod.image} alt="prduct" className={classes.image} />
        </div>
        <div className={classes.details}>
          <p className={classes.description}>{prod.description}</p>
          <p className={classes.price}>
            <sup>&#8377;</sup>
            {prod.price}
          </p>
        </div>
      </li>
    </Link>
  ));

  return <Fragment>{productList}</Fragment>;
};

export default ProductsByCategory;
