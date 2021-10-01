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
 * description  : devops ci/cd pipeline workflows
 **/
import {
    Grid, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {_isEmpty} from "../../../lib/common";
import FormText from "../../form/FormText";
import FormSelect from "../../form/FormSelect";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        marginTop: 0,
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    title: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const Workflows = forwardRef((props, ref) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const circleci = useSelector((state) => state.cricleci);

    const formRef = useRef(null);
    useImperativeHandle(ref, () => formRef.current);

    const handleInit = useCallback(() => {
        let payload = {};

        if (!circleci.info.hasOwnProperty('git_develop_name')
            || !circleci.info.hasOwnProperty('git_release_name')
            || !circleci.info.hasOwnProperty('git_master_name')
            || !circleci.info.hasOwnProperty('jobs_test_used')) {
            payload = circleci.info;
            payload['git_develop_name'] = '';
            payload['git_release_name'] = '';
            payload['git_master_name'] = '';
            payload['jobs_test_used'] = '02';
            payload['jobs_mvn_used'] = '02';
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
        payload['git_develop_name'] = v.git_develop_name;
        payload['git_release_name'] = v.git_release_name;
        payload['git_master_name'] = v.git_master_name;
        payload['jobs_test_used'] = v.jobs_test_used;
        payload['jobs_mvn_used'] = v.jobs_mvn_used;
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
                    git_develop_name: _isEmpty(circleci.info.git_develop_name) ? '' : circleci.info.git_develop_name,
                    git_release_name: _isEmpty(circleci.info.git_release_name) ? '' : circleci.info.git_release_name,
                    git_master_name: _isEmpty(circleci.info.git_master_name) ? '' : circleci.info.git_master_name,
                    jobs_test_used: _isEmpty(circleci.info.jobs_test_used) ? '02' : circleci.info.jobs_test_used,
                    jobs_mvn_used: _isEmpty(circleci.info.jobs_mvn_used) ? '02' : circleci.info.jobs_mvn_used
                }}
                validationSchema={Yup.object().shape({
                    git_develop_name: Yup.string().required('Please enter your git branch(develop) name information to checkout.')
                })}
                onSubmit={(v) => {
                    handleNext(v);
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, touched, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Typography variant="h4" gutterBottom spacing={2}>
                            Please enter information for GIT access.
                        </Typography>
                        <Grid container
                              className={classes.root}
                              marginTop={1}
                              spacing={4}
                              justifyContent="center"
                              alignItems="center"
                        >
                            <Grid item xs={12}>
                                <FormText
                                    required={true}
                                    id={"git_develop_name"}
                                    label={"branch name(develop)"}
                                    placeholder={"develop"}
                                    value={values.git_develop_name}
                                    touched={touched.git_develop_name}
                                    errors={errors.git_develop_name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormText
                                    id={"git_release_name"}
                                    label={"branch name(release)"}
                                    placeholder={"release"}
                                    //helperText="Please enter your git branch(release) name information to checkout."
                                    value={values.git_release_name}
                                    touched={touched.git_release_name}
                                    errors={errors.git_release_name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormText
                                    id={"git_master_name"}
                                    label={"branch name(master)"}
                                    placeholder={"master"}
                                    //helperText="Please enter your git branch(master) name information to checkout."
                                    value={values.git_master_name}
                                    touched={touched.git_master_name}
                                    errors={errors.git_master_name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormSelect
                                    id={"jobs_test_used"}
                                    label={"JUnit Test"}
                                    placeholder={"master"}
                                    firstDefault={false}
                                    item={[{"code":"01", "name":"use"},{"code":"02", "name":"do not used"}]}
                                    value={values.jobs_test_used}
                                    touched={touched.jobs_test_used}
                                    errors={errors.jobs_test_used}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormSelect
                                    id={"jobs_mvn_used"}
                                    label={"Maven"}
                                    placeholder={"master"}
                                    firstDefault={false}
                                    item={[{"code":"01", "name":"use"},{"code":"02", "name":"do not used"}]}
                                    value={values.jobs_mvn_used}
                                    touched={touched.jobs_mvn_used}
                                    errors={errors.jobs_mvn_used}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    ● Workflows - Development / staging / production environment configuration is provided at the same time. Optional for staging/production configurations.
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
});

export default Workflows;
