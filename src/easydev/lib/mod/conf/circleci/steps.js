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
 * description  : CircleCI steps define
 **/

/* steps >> checkout */
export const steps_checkout = () => {
    return "checkout";
};

/* steps >> restore_cache */
export const steps_restore_cache = () => {

    let jsonObj = {};
    let jsonObj2 = {};
    let jsonArr = [];

    jsonArr.push('gk-admin-{{ checksum "pom.xml" }}');
    jsonArr.push('gk-admin-');

    jsonObj2['keys'] = jsonArr;
    jsonObj['restore_cache'] = jsonObj2;

    return jsonObj;
};

/* steps >> save_cache */
export const steps_save_cache = () => {

    let jsonObj = {};
    let jsonObj2 = {};
    let jsonArr = [];

    jsonArr.push('~/.m2');

    jsonObj2['key'] = 'gk-admin-{{ checksum "pom.xml" }}';
    jsonObj2['paths'] = jsonArr;
    jsonObj['save_cache'] = jsonObj2;

    return jsonObj;
};

/* steps >> attach_workspace */
export const steps_attach_workspace = () => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['at'] = '.';
    jsonObj['attach_workspace'] = jsonObj2;

    return jsonObj;
};

/* steps >> run_maven_off */
export const steps_run_maven_off = () => {

    let jsonObj = {};

    jsonObj['run'] = 'mvn dependency:go-offline';

    return jsonObj;
};

/* steps >> run_maven_clean */
export const steps_run_maven_clean = () => {

    let jsonObj = {};

    jsonObj['run'] = 'mvn -Dmaven.test.skip=true clean package';

    return jsonObj;
};

/* steps >> run_integration_test */
export const steps_run_integration_test = () => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['name'] = 'Test';
    jsonObj2['command'] = 'mvn integration-test';
    jsonObj['run'] = jsonObj2;

    return jsonObj;
};

/* steps >> s3_upload */
export const steps_s3_upload = () => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['name'] = 'Upload to S3';
    jsonObj2['command'] = 'aws s3 cp target/*.jar s3://st-gk-deploy/eu-central-1/CircleCI/';
    jsonObj['run'] = jsonObj2;

    return jsonObj;
};

/* steps >> ec2_deploy */
export const steps_ec2_deploy = () => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['name'] = 'Deploy to Ec2';
    jsonObj2['command'] = 'aws configure set region eu-central-1\naws ssm send-command --document-name "AWS-RunShellScript" --comment "s3get" --instance-ids "i-032445019bed09dfb" --parameters commands=["aws s3 cp s3://st-gk-deploy/eu-central-1/CircleCI/circleci-0.0.1-SNAPSHOT.jar /home/jinkyu.id/","echo $?"] --output text > result.txt\ncat result.txt\n';
    jsonObj['run'] = jsonObj2;

    return jsonObj;
};

/* steps >> store_test_results */
export const steps_store_test_results = () => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['path'] = './gk-admin/test-reports';
    jsonObj['store_test_results'] = jsonObj2;

    return jsonObj;
};

/* steps >> store_artifacts */
export const steps_store_artifacts = (_in) => {

    let jsonObj = {};
    let jsonObj2 = {};

    jsonObj2['path'] = _in;
    jsonObj['store_artifacts'] = jsonObj2;

    return jsonObj;
};

/* steps >> persist_to_workspace */
export const steps_persist_to_workspace = () => {

    let jsonObj = {};
    let jsonObj2 = {};
    let jsonArr = [];

    jsonArr.push('.');

    jsonObj2['root'] = '.';
    jsonObj2['paths'] = jsonArr;
    jsonObj['persist_to_workspace'] = jsonObj2;

    return jsonObj;
};