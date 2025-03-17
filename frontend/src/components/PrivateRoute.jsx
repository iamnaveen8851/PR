import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { isSignedUp } = useSelector((state) => state.signUpReducer);
  const { isLoggedIn } = useSelector((state) => state.loginReducer);
  if (isLoggedIn) {
    return children;
  } else if (isSignedUp) {
    return children;
  } else {
    return <Navigate to="/users/login" />;
  }
};

export default PrivateRoute;
