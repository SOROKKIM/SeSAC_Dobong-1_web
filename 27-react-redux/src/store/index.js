import { combineReducers } from "redux";
import { bankReducer } from "./module/bankReducer";
import { counterReducer } from "./module/counterReducer";
import { isDataReducer } from "./module/isDataReducer";

// 여러개의 리듀서를 하나로 합쳐주는 combineReducers
const rootReducer = combineReducers({
  isData: isDataReducer,
  counter: counterReducer,
  bank: bankReducer,
});

export default rootReducer;
