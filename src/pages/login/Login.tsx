import { useRef, useState } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import { login, reset } from "../../components/featured/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const handleLogin = (e: any) => {
    e.preventDefault();

    const userData = { email, password };
    console.log(userData);

    dispatch(login(userData));
    history.push('/')
  };
  return (
    <div className="login">
      <div className="top">
        <img className="logo-netflix" src="/assets/logoNetflix.png" alt="" />
      </div>
      <div className="container">
        <form className="form-content">
          <h1>Accedi</h1>
          <div className="inputs">
            <input type="email" placeholder="Email o numero di telefono" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Accedi</button>
          </div>

          <div className="form-bottom">
            <span>
              Prima volta su Netflix?{" "}
              <b>
                <Link to={"/register"}>Registrati ora.</Link>
              </b>
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
