import { axiosInstance } from "../../utils/axiosInstance";

const signUpData = (data) => {
  return {
    type: "SIGN_UP_DATA",
    payload: data,
  };
};

export const handleSignUp = (formState, navigate) => {
  return async (dispatch) => {
    try {
      // const res = await axios.post(
      //   "http://localhost:8080/users/signup",
      //   formState
      // );

      const res = await axiosInstance.post(
        import.meta.env.VITE_SIGNUP,
        formState
      );
      if (res.status === 201) {
        dispatch(signUpData(res.data.message));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
