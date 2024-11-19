const initialState = {
  token: null,
  isAuthenticated: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGOUT_REQUEST':
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        ...state,
        errorMsg: '',
      });

    default:
      return state;
  }
};
