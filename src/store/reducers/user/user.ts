import { IUserReduxState } from '../../../common';

const initialState: IUserReduxState = {
  username: '',
  userThumbnail: 'https://picsum.photos/50/50',
};

const actionHandlers = {
  LOGIN: (state: IUserReduxState) => ({
    ...state,
    username: 'Test User',
  }),

  LOGOUT: (state: IUserReduxState, payload: number) => ({
    ...state,
    ...initialState,
  }),
};

const reducer = (
  state: IUserReduxState = initialState,
  action: {
    type: 'LOGIN' | 'LOGOUT';
    payload: any;
  }
) => {
  const { type, payload } = action;

  const handler = actionHandlers[type];
  if (typeof handler === 'function') {
    return handler(state, payload);
  }

  return state;
};

export default reducer;
