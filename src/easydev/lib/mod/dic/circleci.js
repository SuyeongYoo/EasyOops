/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : dictionary (CircleCI)
 **/
export const workflows = (_obj, _val) => {
    // _val process

    _obj['workflows'] = _val;
    return _obj;
};

export const version = (_obj, _val) => {
    // _val process

    _obj['version'] = _val;
    return _obj;
};

export const workflow = (_obj, _val) => {
    // _val process

    _obj['workflow'] = _val;
    return _obj;
};

export const jobs = (_obj, _val) => {
    // _val process
    let jsonArr = [];
    let jsonObj = {};

    // if Run STG HOTFIX Build
    jsonObj['▷ Run STG HOTFIX Build'] = '';
    jsonObj['type'] = 'approval';
    jsonObj['filters'] = '';
    jsonObj['branches'] = '';
    jsonObj['only'] = 'master';
    jsonArr.push(jsonObj);

    // if STG_build
    jsonObj = {}
    jsonObj['STG_build'] = '';
    jsonObj['requires'] = '';
    jsonArr.push(jsonObj);

    // if STG_upload
    jsonObj = {}
    jsonObj['context'] = 'AWS_Credentials';
    jsonObj['requires'] = '';
    jsonArr.push(jsonObj);

    _obj['jobs'] = jsonArr;
    return _obj;
};
