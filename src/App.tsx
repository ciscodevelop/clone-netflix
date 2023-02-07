import React from "react";

import "./app.scss";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="app">
      {/* <header>
        <NavBar/>
      </header> */}
      <main>
        {/* <Home /> */}
        <Login/>
      </main>
    </div>
  );
}

export default App;
