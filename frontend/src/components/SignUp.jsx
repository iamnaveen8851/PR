import { useState } from "react";
import styles from "../styles/signup.module.css";
import axios from "axios";
import { handleSignUp } from "../redux/actions/signUpAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(handleSignUp(formState, navigate));
  };
  return (
    <>
      <div className={styles.signUpContainer}>
        <form className={styles.signUpForm} onSubmit={handleSubmit}>
          <p className={styles.heading}>SIGN UP</p>

          <p className={styles.para}>
            Please fill in this form to create an account.
          </p>
          <label>Username</label>
          <input
            className={styles.inputBox}
            type="text"
            name="username"
            value={formState.username}
            placeholder="Enter Username"
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value,
              })
            }
            required
          />

          <label>Email</label>
          <input
            className={styles.inputBox}
            type="email"
            name="email"
            value={formState.email}
            placeholder="Enter Email"
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
            placeholder="Enter Password"
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            required
          />
          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
