import { IReadyModalReduxState } from '../../../common';
import { closeReadyModal, openReadyModal } from '../../actions';

const initialState: IReadyModalReduxState = {
  open: false,
};

const actionHandlers = {
  [`${closeReadyModal}`]: (state: IReadyModalReduxState) => ({
    ...state,
    open: false,
  }),

  [`${openReadyModal}`]: (state: IReadyModalReduxState) => ({
    ...state,
    open: true,
  }),
};

const reducer = (
  state: IReadyModalReduxState = initialState,
  action: {
    type: any;
  }
) => {
  const { type } = action;

  const handler = actionHandlers[type];
  if (typeof handler === 'function') {
    return handler(state);
  }

  return state;
};

export default reducer;
