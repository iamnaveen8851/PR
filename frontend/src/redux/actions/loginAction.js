import { axiosInstance } from "../../utils/axiosInstance";

const getLoginData = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const handleLogin = (formState, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const res = await axiosInstance.post(
        import.meta.env.VITE_LOGIN,
        formState
      );
      // console.log(res);
      if (res.status === 200) {
        // console.log(res, "-----d");

        dispatch(getLoginData(res.data));
        navigate("/");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      console.log(error.message);
    }
  };
};
