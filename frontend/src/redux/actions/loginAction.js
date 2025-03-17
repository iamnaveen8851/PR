import axios from "axios";

const getLoginData = (data) => {
  return {
    type: "login",
    payload: data,
  };
};

export const handleLogin = (formState,navigate ) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/users/login`,
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
