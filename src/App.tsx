import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import "./app.scss";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  const user = true;
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path={"/"}>
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>
          <Route path={"/register"}>
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path={"/login"}>
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>
          {user && (
            <>
              <Route path={"/movies"}>
                <Home type="movies" />
              </Route>
              <Route path={"/series"}>
                <Home type="crime" />
              </Route>
              <Route path={"/watch"}>
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
