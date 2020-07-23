import { IVerificationModalReduxState } from '../../../common';
import { closeVerificationModal, openVerificationModal } from '../../actions';

const initialState: IVerificationModalReduxState = {
  open: false,
};

const actionHandlers = {
  [`${closeVerificationModal}`]: (state: IVerificationModalReduxState) => ({
    ...state,
    open: false,
  }),

  [`${openVerificationModal}`]: (state: IVerificationModalReduxState) => ({
    ...state,
    open: true,
  }),
};

const reducer = (
  state: IVerificationModalReduxState = initialState,
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
