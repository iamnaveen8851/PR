const initialState = {
  isSignedUp: false,
  message: null,
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_DATA":
      return {
        ...state,
        isSignedUp: true,
        message: action.payload
      };
    default:
      return state;
  }
};
