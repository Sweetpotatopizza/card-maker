import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import styles from "./app.module.css";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
