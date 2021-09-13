/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : redux Action
 **/
import { _ajaxPostJsonAsync } from "../../axios/axios";
import {
    SAMPLE_ADD,
    SAMPLE_DEL,
    SAMPLE_FAIL,
    SAMPLE_GET,
    SAMPLE_GET_INFO,
    SAMPLE_UPD
} from "../types";

/* api path */
const API_PATH = "/api/v1/";

/* list */
export const getSample = async (body) => {
    body['limit'] = '1000';
    return await _ajaxPostJsonAsync("post", API_PATH+"/search/", body, SAMPLE_GET, SAMPLE_FAIL);
}

/* select */
export const getSampleInfo = async (body) => {
    body['limit'] = '1';
    return await _ajaxPostJsonAsync("post", API_PATH+"/search/", body, SAMPLE_GET_INFO, SAMPLE_FAIL);
}

/* insert */
export const addSample = async (d) => {
    return await _ajaxPostJsonAsync("post", API_PATH+"/", d, SAMPLE_ADD, SAMPLE_FAIL);
}

/* update */
export const updSample = async (d) => {
    return await _ajaxPostJsonAsync("put", API_PATH+"/"+d, d, SAMPLE_UPD, SAMPLE_FAIL);
}

/* delete */
export const delSample = async (d) => {
    return await _ajaxPostJsonAsync("delete", API_PATH+"/"+d, d, SAMPLE_DEL, SAMPLE_FAIL);
}