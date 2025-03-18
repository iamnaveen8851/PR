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
          <p className={styles.heading}>Login</p>
          <p className={styles.para}>
            Please fill in this form to login your account.
          </p>
          <label>Email</label>
          <input
            className={styles.inputBox}
            type="email"
            name="email"
            value={formState.email}
            placeholder="Enter your email address"
            onChange={(e) =>
              setFormState({
                ...formState,
                email: e.target.value,
              })
            }
            required
          />

          <label>Password</label>
          <input
            className={styles.inputBox}
            type="password"
            name="password"
            value={formState.password}
            placeholder="Enter your password"
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            required
          />

          <label>
            <input type="checkbox" name="rememberMe" id="" />
            Remember me
          </label>

          <button className={styles.btn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
