import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import md5 from "md5"
import "./App.css";

import Axios from "axios";

export default function App() {
  const [values, setValues] = useState();

  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
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
    <html>
      <body class="text-center">

        <main class="form-signin">
          <form>
            <h1 class="h3 mb-3 fw-normal">Por favor cadastre-se</h1>

            <div className="form-floating">
              <input type="text" className="form-control" name="firstname" placeholder="First name" onChange={handleaddValues} />
              <label for="floatingInput">First name</label>
            </div>

            <div className="form-floating">
              <input type="text" className="form-control" name="lastname" placeholder="Last name" onChange={handleaddValues} />
              <label for="floatingInput">Last name</label>
            </div>

            <div class="form-floating">
              <input type="email" class="form-control" name="email" placeholder="name@example.com" onChange={handleaddValues} />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleaddValues} />
              <label for="floatingPassword">Password</label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={handleRegisterGame}>Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
          </form>
        </main>
      </body>
    </html>
  );
}
