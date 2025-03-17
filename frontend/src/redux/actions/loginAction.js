import { axiosInstance } from "../../utils/axiosInstance";

const getLoginData = (data) => {
  return {
    type: "login",
    payload: data,
  };
};

export const handleLogin = (formState, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(
        import.meta.env.VITE_LOGIN,
        formState
      );
      console.log(res);
      if (res.status === 200) {
        dispatch(getLoginData(res.data.message));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
