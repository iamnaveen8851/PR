import { useState } from "react";
import styles from "../styles/login.module.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { handleLogin } from "../redux/actions/loginAction";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(handleLogin(formState, navigate));
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Login</h3>

          <label>email</label>
          <input
            className={styles.inputBox}
            type="email"
            name="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            required
          />

          <label>password</label>
          <input
            className={styles.inputBox}
            type="password"
            name="password"
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            required
          />
          <button className={styles.btn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
