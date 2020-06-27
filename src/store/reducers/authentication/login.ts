import { ILoginReduxState } from '../../../common';

const initialState: ILoginReduxState = {
  username: '',
  loggedIn: false,
  accessToken: '',
};

const actionHandlers = {
  LOGIN: (state: ILoginReduxState) => ({
    ...state,
    loggedIn: true,
    accessToken: '',
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
