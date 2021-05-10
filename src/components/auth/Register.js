// import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import domain from "../../util/domain";
import { createUser } from "./authActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const { getLoggedIn, loggedIn } = useContext(AuthContext);

  const history = useHistory();
  const register = async (e) => {
    e.preventDefault();
    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await createUser(registerData).then((userObject) => {
        console.log("createUser userObject", userObject.user.user.uid);
        getLoggedIn()
          .then(() => {
            history.push(`/user`);
          })
          .catch((error) => {
            console.log("createUser error", error);
          });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          valie={password}
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
