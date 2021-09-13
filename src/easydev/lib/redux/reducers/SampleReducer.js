/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : redux store
 **/
import {
    SAMPLE_ADD,
    SAMPLE_DEL,
    SAMPLE_FAIL,
    SAMPLE_GET,
    SAMPLE_GET_INFO,
    SAMPLE_UPD
} from "../types";
import { _isEmpty } from "./../../common";

// init
const initialState = {
    rows:[],
    info:{},
    isEdit: false
};
// store status
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SAMPLE_GET:         // get list
            return {
                ...state,
                rows: action.payload
            };
        case SAMPLE_GET_INFO:    // get info
            return {
                ...state,
                info: action.payload[0],
                isEdit: _isEmpty(action.payload) ? false : true
            };
        case SAMPLE_ADD:         // inset
            return {
                ...state,
                info: action.payload,
                isOpen: false,
                isEdit: _isEmpty(action.payload) ? false : true
            };
        case SAMPLE_UPD:         // update
            return {
                ...state,
                info: action.payload,
                isOpen: false,
                isEdit: _isEmpty(action.payload) ? false : true
            };
        case SAMPLE_DEL:         // delete
            return {
                ...state
            };
        case SAMPLE_FAIL:        // fail
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default reducers;