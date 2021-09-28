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
    Grid, Typography, TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {useCallback, useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {_isEmpty} from "../../../lib/common";

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

        if (!circleci.info.hasOwnProperty('s3_access')
            || !circleci.info.hasOwnProperty('aws_region')
            || !circleci.info.hasOwnProperty('aws_instance')) {
            payload = circleci.info;
            payload['s3_access'] = '';
            payload['aws_region'] = '';
            payload['aws_instance'] = '';
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
        payload['s3_access'] = v.s3_access;
        payload['aws_region'] = v.aws_region;
        payload['aws_instance'] = v.aws_instance;
        dispatch({
            type:'CIRCLECI_GET_INFO',
            payload: payload
        });
        dispatch({type:'CIRCLECI_STEP', step: (circleci.step+1)});
    },[circleci.info, circleci.step, dispatch]);

    return (
        <React.Fragment>
            <Formik
                innerRef={formRef}
                enableReinitialize
                initialValues={{
                    s3_access: _isEmpty(circleci.info.s3_access) ? '' : circleci.info.s3_access,
                    aws_region: _isEmpty(circleci.info.aws_region) ? '' : circleci.info.aws_region,
                    aws_instance: _isEmpty(circleci.info.aws_instance) ? '' : circleci.info.aws_instance
                }}
                validationSchema={Yup.object().shape({
                    s3_access: Yup.string().required('Please enter your s3 access information to upload.'),
                    aws_region: Yup.string().required('Please enter your aws region information to deploy.'),
                    aws_instance: Yup.string().required('Please enter your aws instance information to deploy.')
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
                              spacing={4}
                              justifyContent="center"
                              alignItems="center"
                        >
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="s3_access"
                                    label="S3(access)"
                                    placeholder="s3://st-gk-deploy/eu-central-1/CircleCI/"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    value={values.s3_access}
                                    error={Boolean(touched.s3_access && errors.s3_access)}
                                    helperText={touched.s3_access && errors.s3_access}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="aws_region"
                                    label="AWS(region)"
                                    placeholder="eu-central-1"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    value={values.aws_region}
                                    error={Boolean(touched.s3_access && errors.s3_access)}
                                    helperText={touched.s3_access && errors.s3_access}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="aws_instance"
                                    label="AWS(instance)"
                                    placeholder="i-032445019bed09dfb"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    value={values.aws_instance}
                                    error={Boolean(touched.s3_access && errors.s3_access)}
                                    helperText={touched.s3_access && errors.s3_access}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    ● Jobs - To create a pipeline, each configuration definition is required for build, test, upload, and deploy.
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
