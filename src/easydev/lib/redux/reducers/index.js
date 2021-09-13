/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : redux store combined
**/
import { combineReducers } from "redux";
import sample from "./SampleReducer";

const rootReducer = combineReducers({
    sample
});

export default rootReducer;