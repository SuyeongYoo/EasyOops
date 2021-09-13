/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : common util
 **/
/* get windows session */
import YAML from "yaml";

export const _getSession = (_key) => {
    let rtn = window.sessionStorage.getItem(_key);
    if(_isEmpty(rtn)) {
        rtn = '';
    } else {
        rtn = JSON.parse(rtn);
    }
    return rtn;
}

/* set windows session */
export const _setSession = (_key, _val) => {
    _val = JSON.stringify(_val)
    return window.sessionStorage.setItem(_key, _val);
}

/* remove windows session */
export const _removeSession = (_key) => {
    return window.sessionStorage.removeItem(_key);
}

/* all remove windows session */
export const _clearSession = () => {
    return window.sessionStorage.clear();
}

/* null check */
export const _isEmpty = (_data) => {

    let rtn = false;

    if(_data === null) {                          // server side
        rtn = true;
    } else if(_data === undefined) {              // script
        rtn = true;
    } else if(_data === 'undefined') {            // script
        rtn = true;
    } else if(_data === '') {                     // string
        rtn = true;
    } else if(Object.keys(_data).length === 0) {  // json type
        rtn = true;
    }
    return rtn;
}

/* yaml to json */
export const _yamlToJson = (yaml) => {
    let yaml_obj = YAML.parse(yaml);
    let json_str = JSON.stringify(yaml_obj);
    return json_str;
}

/* json to yaml */
export const _jsonToYaml = (json) => {
    // let json_obj = JSON.parse(json);
    let yaml_str = YAML.stringify(json);
    return yaml_str;
}