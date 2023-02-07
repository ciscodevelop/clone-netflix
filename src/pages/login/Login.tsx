import { useRef, useState } from "react";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="top">
        <img className="logo-netflix" src="/assets/logoNetflix.png" alt="" />
      </div>
      <div className="container">
        <form className="form-content">
          <h1>Accedi</h1>
          <div className="inputs">
            <input type="email" placeholder="Email o numero di telefono" />
            <input type="password" placeholder="Password" />
            <button>Accedi</button>
          </div>

          <div className="form-bottom">
            <span>
              Prima volta su Netflix? <b>Registrati ora.</b>
            </span>
            <span>
              Questa pagina è protetta da Google reCAPTCHA per garantire che tu
              non sia un bot. 
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
