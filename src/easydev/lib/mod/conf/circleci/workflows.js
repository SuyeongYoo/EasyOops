/**
 * -----------------------------------------------------------------------------
 * MIT License
 * Copyright (c) 2021 EasyOops
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * -----------------------------------------------------------------------------
 *
 * date         : 2021.09.01
 * creater      : EasyOops
 * description  : CircleCI workflows define
 **/

/* workflows >> main */
export const workflows_main = () => {

    let jsonjobs = {};
    jsonjobs['version'] = 2;
    // temp data config
    jsonjobs['develop'] = workflows_jobs_main('01','develop');
    jsonjobs['staging'] = workflows_jobs_main('02','release');
    jsonjobs['production'] = workflows_jobs_main('03','master');

    return jsonjobs;
}

/* workflows >> jobs >> main */
export const workflows_jobs_main = (_type, _in) => {

    let jsonjobs = {};
    let jsonArr = [];

    // temp data config
    if(_type === '01') {         // develop
        jsonArr.push(workflows_jobs_build(_in));
        jsonArr.push(workflows_jobs_test());
        jsonArr.push(workflows_jobs_upload(_type));
        jsonArr.push(workflows_jobs_deploy(_type));
    } else if(_type === '02') {  // release
        jsonArr.push(workflows_jobs_build(_in));
        jsonArr.push(workflows_jobs_upload(_type));
        jsonArr.push(workflows_jobs_hold(_type));
        jsonArr.push(workflows_jobs_deploy(_type));
    } else if(_type === '03') {  // master
        jsonArr.push(workflows_jobs_build(_in));
        jsonArr.push(workflows_jobs_upload(_type));
        jsonArr.push(workflows_jobs_hold(_type));
        jsonArr.push(workflows_jobs_deploy(_type));
    }

    jsonjobs['jobs'] = jsonArr;
    return jsonjobs;
}

/* workflows >> jobs >> build */
export const workflows_jobs_build = (_in) => {

    let jsonObj = {};
    let jsonfilters = {};
    let jsonbranches = {};
    let jsononly = {};

    jsononly['only'] = _in;
    jsonbranches['branches'] = jsononly;
    jsonfilters['filters'] = jsonbranches;
    jsonObj['build'] = jsonfilters;

    return jsonObj;
};

/* workflows >> jobs >> test */
export const workflows_jobs_test = () => {

    let jsonObj = {};
    let jsonrequires = {};
    let jsonbuild = [];

    jsonbuild.push('build');
    jsonrequires['requires'] = jsonbuild;
    jsonObj['test'] = jsonrequires;

    return jsonObj;
};

/* workflows >> jobs >> upload */
export const workflows_jobs_upload = (_type) => {

    let jsonObj = {};
    let jsonrequires = {};
    let jsonbuild = [];

    jsonbuild.push('build');
    if(_type === '01') {
        jsonbuild.push('test');
    }
    jsonrequires['requires'] = jsonbuild;
    jsonObj['upload'] = jsonrequires;

    return jsonObj;
};

/* workflows >> jobs >> hold */
export const workflows_jobs_hold = (_type) => {

    let jsonObj = {};
    let jsonrequires = {};
    let jsonbuild = [];

    jsonrequires['type'] = 'approval';
    jsonbuild.push('build');
    if(_type === '01') {
        jsonbuild.push('test');
    }
    jsonrequires['requires'] = jsonbuild;

    jsonObj['hold'] = jsonrequires;

    return jsonObj;
};

/* workflows >> jobs >> deploy */
export const workflows_jobs_deploy = (_type) => {

    let jsonObj = {};
    let jsonrequires = {};
    let jsonbuild = [];

    jsonbuild.push('build');
    if(_type === '01') {
        jsonbuild.push('test');
    }
    jsonbuild.push('upload');
    jsonrequires['requires'] = jsonbuild;

    jsonObj['deploy'] = jsonrequires;

    return jsonObj;
};