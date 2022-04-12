import React, { useState } from "react";
import Axios from "axios";
import md5 from "md5"


export default function Login() {

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
        <form>
            <h3>Entrar</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={handleaddValues} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleRegisterGame}>Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#top">password?</a>
            </p>
        </form>
    );
}

