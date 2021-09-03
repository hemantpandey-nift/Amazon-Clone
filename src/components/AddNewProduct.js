import classes from "./AddNewProduct.module.css";
import useInputValidation from "../hooks/use-InputValidation";
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
    inputValue: linkValue,
    inputIsValid: linkIsValid,
    inputChangeHandler: linkChangeHandler,
    inputBlurHandler: linkBlurHandler,
    resetInput: resetLink,
  } = useInputValidation((value) => value.trim() !== "");

  const {
    inputValue: textValue,
    inputIsValid: textIsValid,
    inputChangeHandler: textChangeHandler,
    inputBlurHandler: textBlurHandler,
    resetInput: resetText,
  } = useInputValidation((value) => value.trim() !== "");

  let formIsValid = false;
  if (imageIsValid && linkIsValid && textIsValid) {
    formIsValid = true;
  }

  const addDataToDatabase = async (data) => {
    return await fetch(
      "https://react-learning-582ab-default-rtdb.firebaseio.com/AmazonClone/products.json",
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
      link: linkValue,
      text: textValue,
    };

    try {
      const response = await addDataToDatabase(product);
      if (!response.ok) {
        throw new Error("Unable to add Data");
      }
    } catch (error) {
      setHasError(true);
    }

    resetText();
    resetImage();
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
          <label htmlFor="link">Link :</label>
          <input
            type="text"
            id="link"
            onChange={linkChangeHandler}
            onBlur={linkBlurHandler}
            value={linkValue}
            className={classes.input}
          ></input>
        </div>
        <div className={classes.inputBox}>
          <label htmlFor="text">Text :</label>
          <input
            type="text"
            id="text"
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            value={textValue}
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
