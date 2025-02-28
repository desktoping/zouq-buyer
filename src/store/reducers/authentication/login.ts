import { ILoginReduxState } from '../../../common';

const initialState: ILoginReduxState = {
  username: '',
  loggedIn: true,
  accessToken: '',
  show: false,
};

const actionHandlers = {
  LOGIN: (state: ILoginReduxState) => ({
    ...state,
    loggedIn: true,
    accessToken: '',
  }),

  OPEN_LOGIN: (state: ILoginReduxState) => ({
    ...state,
    show: true,
  }),

  CLOSE_LOGIN: (state: ILoginReduxState) => ({
    ...state,
    show: false,
  }),

  LOGOUT: (state: ILoginReduxState, payload: number) => ({
    ...state,
    ...initialState,
  }),
};

const reducer = (
  state: ILoginReduxState = initialState,
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
