import { TYPE } from '../../types';

const initialState = {
  token: null,
  isAuthenticated: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return Object.assign({}, state, {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: true,
        userId: action.payload.user.id,
        role: action.payload.user.role,
        errorMsg: '',
      });
    case TYPE.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return Object.assign({}, state, {
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        role: null,
        errorMsg: '',
      });

    default:
      return state;
  }
};
