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
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

const Jobs = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
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
                        helperText="Please enter your s3 access information to upload."
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
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
                        helperText="Please enter your aws region information to deploy."
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="aws_instance"
                        label="AWS(instance)"
                        placeholder="i-032445019bed09dfb"
                        helperText="Please enter your aws instance information to deploy."
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
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
        </React.Fragment>
    );
};

export default Jobs;
