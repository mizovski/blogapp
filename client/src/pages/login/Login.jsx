import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="loginTittles">
      <span className="loginTitle">Welcome to Baby's</span>
      <span className="loginText">All the Lorem Ipsum generators on the internet
         tend to repeat predefiened chunks as necessary,
         making this the first true generator on the Internet.
         It uses a dictionary of over 200 Latin words,
         combined with a handful model sentence structures 
         to generate Lorem Ipsum which looks reasonable.
         The generated Lorem Ipsum is therefore always free 
         from repetition,injected humour
         ,or non-characteristic words etc.</span>
         </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="email@email.com"
          ref={emailRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="*****"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      
    </div>
  );
}
