import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import classes from "./ImageSliderDeals.module.css";
import { useState, useEffect, useCallback } from "react";
import useHttp from "../hooks/use-http";
import { Link } from "react-router-dom";

const url =
  "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/products.json";

const ImageSliderDeals = () => {
  const [products, setProducts] = useState([]);
  const [firstImage, setFirstImage] = useState(0);
  const images = [];

  const applydata = useCallback((data) => {
    const loadedProducts = [];
    for (const key in data) {
      loadedProducts.push({
        id: key,
        image: data[key].image,
        category: data[key].category,
        link: data[key].link,
        text: data[key].text,
      });
    }
    setProducts(loadedProducts);
  }, []);

  const { isLoading, error, sendRequest: fetchData } = useHttp(applydata);

  useEffect(() => {
    fetchData({ url: url });
  }, [fetchData]);

  const maxImages = products.length;
  if (maxImages > 0) {
    for (let i = firstImage; i <= firstImage + 4; i++) {
      images.push(
        <div key={products[i].id} className={classes.product}>
          <Link to={`products/category/${products[i].category}`}>
            <img
              src={products[i].image}
              alt="not found"
              className={classes.image}
            ></img>
          </Link>
          <p className={classes.text}>{products[i].text}</p>
        </div>
      );
    }
  }

  const previousSlide = () => {
    if (firstImage === 0) setFirstImage(maxImages - 5);
    else setFirstImage(() => firstImage - 1);
  };
  const nextSlide = () => {
    if (firstImage === maxImages - 5) setFirstImage(0);
    else setFirstImage(() => firstImage + 1);
  };

  return (
    <div>
      <div className={classes.banner}>
        {isLoading && <p style={{ color: "maroon" }}>Loading...</p>}
        {error && <p style={{ color: "maroon" }}>{error}</p>}
        {images}
      </div>
      <div className={classes.navigateBanner}>
        <div
          onClick={previousSlide}
          className={`${classes.navigatebox} ${classes.btn__left} `}
        >
          <div className={classes.navigatebtn}>
            <ArrowBackIosIcon style={{ color: "black", fontSize: "30pt" }} />
          </div>
        </div>

        <div
          onClick={nextSlide}
          className={`${classes.navigatebox} ${classes.btn__right} `}
        >
          <div className={classes.navigatebtn}>
            <ArrowForwardIosIcon style={{ color: "black", fontSize: "30pt" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderDeals;
