import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './fontawesome-free-5.15.4-web/css/fontawesome.min.css'
import md5 from "md5"
import "./App.css";
import "./util.css";
import Background from './imagens/bg-01.jpg';
import Axios from "axios";


export default function App() {
  const [values, setValues] = useState();

  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/search", {
      username: values.username,
      password: md5(values.password),
    }).then();
  };

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
        <div className="limiter">
          <div className="container-login100" style={{ backgroundImage: `url(${Background})` }}>
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape"></i>
                </span>
                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                  <input className="input100" type="text" name="username" placeholder="Username" onChange={handleaddValues} />
                  
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input className="input100" type="password" name="password" placeholder="Password" onChange={handleaddValues} />
                  
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" onClick={handleRegisterGame}>
                    Login
                  </button>
                </div>
                <div className="text-center p-t-90">
                  <a className="txt1" href="#top">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
  );
}
