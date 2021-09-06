import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./layout/HomePage";
import AddNewProduct from "./components/seller/AddNewProduct";

function App() {
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
    </Switch>
  );
}

export default App;
