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
 * description  : CircleCI jobs define
 **/
import {
    steps_checkout,
    steps_restore_cache,
    steps_save_cache,
    steps_attach_workspace,
    steps_run_maven_off,
    steps_run_maven_clean,
    steps_run_integration_test,
    steps_s3_upload,
    steps_ec2_deploy,
    steps_store_test_results,
    steps_store_artifacts,
    steps_persist_to_workspace
} from "./steps";
import {
    defaults_main
} from "./defaults";

/* jobs >> main */
export const jobs_main = () => {

    let jsonjobs = {};

    jsonjobs['build'] = jobs_build();
    jsonjobs['test'] = jobs_test();
    jsonjobs['upload'] = jobs_upload();
    jsonjobs['deploy'] = jobs_deploy();

    return jsonjobs;
}

/* jobs >> build */
export const jobs_build = () => {

    let jsonObj = {};
    let jsonArr = [];

    jsonArr.push(steps_checkout());
    jsonArr.push(steps_restore_cache());
    jsonArr.push(steps_run_maven_off());
    jsonArr.push(steps_save_cache());
    jsonArr.push(steps_run_maven_clean());
    jsonArr.push(steps_store_artifacts('target/circleci-0.0.1-SNAPSHOT.jar'));
    jsonArr.push(steps_persist_to_workspace());

    jsonObj = defaults_main(jsonObj);
    jsonObj['steps'] = jsonArr;

    return jsonObj;
};

/* jobs >> test */
export const jobs_test = () => {

    let jsonObj = {};
    let jsonArr = [];

    jsonArr.push(steps_checkout());
    jsonArr.push(steps_restore_cache());
    jsonArr.push(steps_attach_workspace());
    jsonArr.push(steps_run_integration_test());
    jsonArr.push(steps_store_test_results());

    jsonObj = defaults_main(jsonObj);
    jsonObj['steps'] = jsonArr;

    return jsonObj;
};

/* jobs >> upload */
export const jobs_upload = () => {

    let jsonObj = {};
    let jsonArr = [];

    jsonArr.push(steps_attach_workspace());
    jsonArr.push(steps_s3_upload());

    jsonObj = defaults_main(jsonObj);
    jsonObj['steps'] = jsonArr;

    return jsonObj;
};

/* jobs >> deploy */
export const jobs_deploy = () => {

    let jsonObj = {};
    let jsonArr = [];

    jsonArr.push(steps_attach_workspace());
    jsonArr.push(steps_ec2_deploy());
    jsonArr.push(steps_store_artifacts('result.txt'));

    jsonObj = defaults_main(jsonObj);
    jsonObj['steps'] = jsonArr;

    return jsonObj;
};