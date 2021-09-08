import classes from "./AddNewProduct.module.css";
import useInputValidation from "../../hooks/use-InputValidation";
import { useState } from "react";

const AddNewProduct = () => {
  const [hasError, setHasError] = useState(false);
  const {
    inputValue: imageValue,
    inputIsValid: imageIsValid,
    inputChangeHandler: imageChangeHandler,
    inputBlurHandler: imageBlurHandler,
    resetInput: resetImage,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    inputValue: descriptionValue,
    inputIsValid: descriptionIsValid,
    inputChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    resetInput: resetDescription,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    inputValue: priceValue,
    inputIsValid: priceIsValid,
    inputChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    resetInput: resetPrice,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    inputValue: categoryValue,
    inputIsValid: categoryIsValid,
    inputChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    resetInput: resetCategory,
  } = useInputValidation((value) => value.trim() !== "");

  let formIsValid = false;
  if (imageIsValid && descriptionIsValid && priceIsValid && categoryIsValid) {
    formIsValid = true;
  }

  const addDataToDatabase = async (data) => {
    return await fetch(
      "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/SampleProducts.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
      }
    );
  };

  const addDataHandler = async (event) => {
    event.preventDefault();
    const product = {
      image: imageValue,
      description: descriptionValue,
      price: priceValue,
      category: categoryValue,
    };

    try {
      const response = await addDataToDatabase(product);
      if (!response.ok) {
        throw new Error("Unable to add Data");
      }
    } catch (error) {
      setHasError(true);
    }
    resetImage();
    resetPrice();
    resetDescription();
    resetCategory();
  };

  return (
    <form onSubmit={addDataHandler}>
      <div className={classes.form}>
        <h1>Add New Product</h1>
        <div className={classes.inputBox}>
          <label htmlFor="image">Image : </label>
          <input
            type="text"
            id="image"
            onChange={imageChangeHandler}
            onBlur={imageBlurHandler}
            value={imageValue}
            className={classes.input}
          ></input>
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="description">Description :</label>
          <input
            type="text"
            id="description"
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
            value={descriptionValue}
            className={classes.input}
          ></input>
        </div>
        <div className={classes.inputBox}>
          <label htmlFor="price">price :</label>
          <input
            type="price"
            id="price"
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
            value={priceValue}
            className={classes.input}
          ></input>
        </div>

        <div className={classes.inputBox}>
          <label htmlFor="category">Category :</label>
          <input
            type="category"
            id="category"
            onChange={categoryChangeHandler}
            onBlur={categoryBlurHandler}
            value={categoryValue}
            className={classes.input}
          ></input>
        </div>

        {hasError && (
          <p style={{ marginLeft: "310px", color: "red" }}>
            Unable to Add Data
          </p>
        )}
        <div>
          <button disabled={!formIsValid}>Add Data</button>
        </div>
      </div>
    </form>
  );
};

export default AddNewProduct;
