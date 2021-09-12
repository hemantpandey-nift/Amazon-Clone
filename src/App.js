import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./layout/HomePage";
import AddNewProduct from "./components/seller/AddNewProduct";
import ProductsPage from "./layout/ProductsPage";
import SingleProduct from "./components/products/SingleProduct";
import AuthPage from "./layout/AuthPage";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-Actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartData.changed) {
      dispatch(sendCartData(cartData));
    }
  }, [cartData, dispatch]);

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/amazonclone" />
      </Route>
      <Route path="/amazonclone">
        <HomePage />
      </Route>
      <Route path="/seller">
        <AddNewProduct />
      </Route>
      <Route path="/products/category/:category">
        <ProductsPage />
      </Route>
      <Route path="/product/:productId">
        <SingleProduct />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      {!isLoggedIn && (
        <Route path="/login">
          <AuthPage />
        </Route>
      )}
    </Switch>
  );
}

export default App;
