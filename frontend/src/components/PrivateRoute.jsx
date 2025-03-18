import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { isSignedUp } = useSelector((state) => state.signUpReducer);
  const { isLoggedIn, message } = useSelector((state) => state.loginReducer);
  console.log("isLogged in:", isLoggedIn, message);
  if (isLoggedIn) {
    return children;
  } else if (isSignedUp) {
    return children;
  } else {
    return <Navigate to="/users/login" />;
  }
};

export default PrivateRoute;
