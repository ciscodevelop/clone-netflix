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
import { useSelector } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { selectUser } from "./components/featured/auth/authSlice";

function App() {
  const user1=useAppSelector(selectUser)
  const user = user1;
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
                <Home type="movie" />
              </Route>
              <Route path={"/series"}>
                <Home type="series" />
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
