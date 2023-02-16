import { useRef, useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
 
import {   register,reset } from "../../components/featured/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const dispatch = useAppDispatch();
  function handleStart() {
    setEmail(emailRef.current?.value);
    console.log(password);
  }
  function handleRegister(e:any) {
    e.preventDefault();
    setUsername(usernameRef.current?.value);
    setPassword(passwordRef.current?.value);
    const userData = { username, email, password };
    console.log(userData);
    
    dispatch(register(userData))
 
  }
  return (
    <div className="register">
      <div className="top">
        <img src="/assets/logoNetflix.png" alt="" />
        <Link to={"/login"}>
          <button>Accedi</button>
        </Link>
      </div>
      <div className="container">
        <div className="content-text">
          <h1>Film, serie TV e tanto altro. Senza limiti.</h1>
          <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
          <h3>
            Vuoi guardare Netflix? Inserisci l'indirizzo email per abbonarti o
            riattivare il tuo abbonamento.
          </h3>
        </div>
        {!email ? (
          <div className="content-form">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button onClick={handleStart}>Inizia</button>
          </div>
        ) : (
          <form className="content-form">
            <input type="text" placeholder="Username"  value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder="password"  value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button onClick={handleRegister}>Registra</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
