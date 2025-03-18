import { axiosInstance } from "../../utils/axiosInstance";

const signUpData = (data) => {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: data,
  };
};

export const handleSignUp = (formState, navigate) => {
  return async (dispatch) => {
    dispatch({ type: "SIGN_UP_REQUEST" });
    try {
      const res = await axiosInstance.post(
        import.meta.env.VITE_SIGNUP,
        formState
      );
      if (res.status === 201) {
        dispatch(signUpData(res.data.message));
        navigate("/");
      }
    } catch (error) {
      dispatch({ type: "SIGN_UP_ERROR", payload: error.message });
      console.error(error);
    }
  };
};
