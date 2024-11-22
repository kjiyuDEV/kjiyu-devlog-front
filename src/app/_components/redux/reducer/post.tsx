const initialState = {
  postList: [],
  originPostList: [],
};

export const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        postList: action.postList,
        originPostList: action.originPostList || state.originPostList,
      };
    default:
      return state;
  }
};
