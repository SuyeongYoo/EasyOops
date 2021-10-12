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
 * description  : devops ci/cd pipeline jobs define
 **/
import {
    Grid, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {useCallback, useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {_isEmpty} from "../../../lib/common";
import FormText from "../../form/FormText";
import FormOption from "../../form/FormOption";

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

const Jobs = forwardRef((props, ref)  => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const circleci = useSelector((state) => state.cricleci);

    const formRef = useRef(null);
    useImperativeHandle(ref, () => formRef.current);

    const handleInit = useCallback(() => {
        let payload = {};

        if (!circleci.info.hasOwnProperty('deploy_svr_host')
            || !circleci.info.hasOwnProperty('deploy_svr_port')
            || !circleci.info.hasOwnProperty('deploy_svr_path')
            || !circleci.info.hasOwnProperty('deploy_was_start')
            || !circleci.info.hasOwnProperty('deploy_was_stop')) {
            payload = circleci.info;
            payload['jobs_deploy_type'] = '01';
            payload['deploy_svr_host'] = '';
            payload['deploy_svr_port'] = '';
            payload['deploy_svr_path'] = '';
            payload['deploy_was_start'] = '';
            payload['deploy_was_stop'] = '';
            dispatch({
                type:'CIRCLECI_GET_INFO',
                payload: payload
            });
        }
    },[circleci.info, dispatch]);

    useEffect(() => {
        handleInit();
    }, [handleInit]);

    const handleNext = useCallback((v) => {
        let payload = {}
        payload = circleci.info;
        payload['jobs_deploy_type'] = v.jobs_deploy_type;
        payload['deploy_svr_host'] = v.deploy_svr_host;
        payload['deploy_svr_port'] = v.deploy_svr_port;
        payload['deploy_svr_path'] = v.deploy_svr_path;
        payload['deploy_was_start'] = v.deploy_was_start;
        payload['deploy_was_stop'] = v.deploy_was_stop;
        dispatch({
            type:'CIRCLECI_GET_INFO',
            payload: payload
        });
        dispatch({type:'CIRCLECI_STEP', step: (circleci.step+1)});
    },[circleci.info, circleci.step, dispatch]);

    const handleChangeDeploy = (_val,_touched,_errors,_onBlur,_onChange) => {
        let layer;

        if(_val.jobs_deploy_type === '01') {
            layer = <React.Fragment>
                        <Grid item xs={8}>
                            <FormText
                                id={"deploy_svr_host"}
                                label={"SSH(HOST)"}
                                placeholder={"user@192.168.1.100"}
                                value={_val.deploy_svr_host}
                                touched={_touched.deploy_svr_host}
                                errors={_errors.deploy_svr_host}
                                onBlur={_onBlur}
                                onChange={_onChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormText
                                id={"deploy_svr_port"}
                                label={"SSH(PORT)"}
                                placeholder={"21"}
                                value={_val.deploy_svr_port}
                                touched={_touched.deploy_svr_port}
                                errors={_errors.deploy_svr_port}
                                onBlur={_onBlur}
                                onChange={_onChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormText
                                id={"deploy_svr_path"}
                                label={"SERVER(Deploy Path)"}
                                placeholder={"/home/was/"}
                                value={_val.deploy_svr_path}
                                touched={_touched.deploy_svr_path}
                                errors={_errors.deploy_svr_path}
                                onBlur={_onBlur}
                                onChange={_onChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormText
                                id={"deploy_was_start"}
                                label={"WAS(START)"}
                                placeholder={"./service_start.sh"}
                                value={_val.deploy_was_start}
                                touched={_touched.deploy_was_start}
                                errors={_errors.deploy_was_start}
                                onBlur={_onBlur}
                                onChange={_onChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormText
                                id={"deploy_was_stop"}
                                label={"WAS(STOP)"}
                                placeholder={"./service_stop.sh"}
                                value={_val.deploy_was_stop}
                                touched={_touched.deploy_was_stop}
                                errors={_errors.deploy_was_stop}
                                onBlur={_onBlur}
                                onChange={_onChange}
                            />
                        </Grid>
                    </React.Fragment>
        } else if(_val.jobs_deploy_type === '02') {
            layer = <React.Fragment>
                <Grid item xs={8}>
                    <FormText
                        id={"deploy_svr_host"}
                        label={"SSH(HOST)"}
                        placeholder={"user@192.168.1.100"}
                        value={_val.deploy_svr_host}
                        touched={_touched.deploy_svr_host}
                        errors={_errors.deploy_svr_host}
                        onBlur={_onBlur}
                        onChange={_onChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <FormText
                        id={"deploy_svr_port"}
                        label={"SSH(PORT)"}
                        placeholder={"21"}
                        value={_val.deploy_svr_port}
                        touched={_touched.deploy_svr_port}
                        errors={_errors.deploy_svr_port}
                        onBlur={_onBlur}
                        onChange={_onChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormText
                        id={"deploy_svr_path"}
                        label={"SERVER(Deploy Path)"}
                        placeholder={"/home/was/"}
                        value={_val.deploy_svr_path}
                        touched={_touched.deploy_svr_path}
                        errors={_errors.deploy_svr_path}
                        onBlur={_onBlur}
                        onChange={_onChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormText
                        id={"deploy_was_start"}
                        label={"WAS(START)"}
                        placeholder={"./service_start.sh"}
                        value={_val.deploy_was_start}
                        touched={_touched.deploy_was_start}
                        errors={_errors.deploy_was_start}
                        onBlur={_onBlur}
                        onChange={_onChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormText
                        id={"deploy_was_stop"}
                        label={"WAS(STOP)"}
                        placeholder={"./service_stop.sh"}
                        value={_val.deploy_was_stop}
                        touched={_touched.deploy_was_stop}
                        errors={_errors.deploy_was_stop}
                        onBlur={_onBlur}
                        onChange={_onChange}
                    />
                </Grid>
            </React.Fragment>
        }

        return layer;
    }

    return (
        <React.Fragment>
            <Formik
                innerRef={formRef}
                enableReinitialize
                initialValues={{
                    /* deploy */
                    jobs_deploy_type: _isEmpty(circleci.info.jobs_deploy_type) ? '01' : circleci.info.jobs_deploy_type,
                    aws_region: _isEmpty(circleci.info.aws_region) ? '' : circleci.info.aws_region,
                    aws_instance: _isEmpty(circleci.info.aws_instance) ? '' : circleci.info.aws_instance,
                    deploy_svr_host: _isEmpty(circleci.info.deploy_svr_host) ? '' : circleci.info.deploy_svr_host,
                    deploy_svr_port: _isEmpty(circleci.info.deploy_svr_port) ? '' : circleci.info.deploy_svr_port,
                    deploy_svr_path: _isEmpty(circleci.info.deploy_svr_path) ? '' : circleci.info.deploy_svr_path,
                    deploy_was_start: _isEmpty(circleci.info.deploy_was_start) ? '' : circleci.info.deploy_was_start,
                    deploy_was_stop: _isEmpty(circleci.info.deploy_was_stop) ? '' : circleci.info.deploy_was_stop
                }}
                validationSchema={Yup.object().shape({
                    //s3_access: Yup.string().required('Please enter your s3 access information to upload.'),
                    //aws_region: Yup.string().required('Please enter your aws region information to deploy.'),
                    //aws_instance: Yup.string().required('Please enter your aws instance information to deploy.')
                })}
                onSubmit={(v) => {
                    handleNext(v);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4" gutterBottom spacing={2}>
                            Please enter some information to define the job.
                        </Typography>
                        <Grid container
                              className={classes.root}
                              marginTop={1}
                              spacing={3}
                              justifyContent="center"
                              alignItems="center"
                        >
                            <Grid item xs={12}>
                                <Typography variant="h4" color={"darkblue"} spacing={1}>
                                    [STEP2] Deploy
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormOption
                                    id={"jobs_deploy_type"}
                                    item={[{"value":"01", "label":"SERVER"},{"value":"02", "label":"AWS(EC2)"}]}
                                    value={values.jobs_deploy_type}
                                    touched={touched.jobs_deploy_type}
                                    errors={errors.jobs_deploy_type}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            {handleChangeDeploy(values, touched, errors, handleBlur, handleChange)}
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    ● Jobs - To create a pipeline, each configuration definition is required for build, test, upload, and deploy.
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    ● If you feel the disclosure of information is risky, write a random value only known to you in the text area. And edit the file later.
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
});

export default Jobs;