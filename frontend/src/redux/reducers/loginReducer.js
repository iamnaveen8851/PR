const initialState = {
  isLoggedIn: false,
  message: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action) {
    case "login":
      return {
        ...state,
        isLoggedIn: true,
        message: action.payload,
      };

    default:
      return state;
  }
};
