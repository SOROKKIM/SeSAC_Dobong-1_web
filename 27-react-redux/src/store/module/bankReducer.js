const initialState = 0;

const DEPOSIT = "bank/DEPOSIT";
const WITHDRAW = "bank/WITHDRAW";

export const deposit = (amount) => ({
  type: DEPOSIT,
  payload: amount,
});

export const withdraw = (amount) => ({
  type: WITHDRAW,
  payload: amount,
});

export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};
