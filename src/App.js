import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./layout/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/amazonclone" />
      </Route>
      <Route path="/amazonclone">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;
