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
 * description  : devops ci/cd pipeline result
 **/
import {
    Grid, Typography, TextareaAutosize, Link
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {_fileDownload, _jsonToYaml} from "../../../lib/common";
import {config_cricleci} from "../../../lib/mod/conf/circleci";
import {useSelector} from "react-redux";

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
    paper: {
        padding: theme.spacing(1),
        width: '100%',
        height: '300px',
        justifyContent : "center",
        overflow: 'auto',
        alignContent : "center"
    },
}));

const Result = () => {
    const classes = useStyles();

    const circleci = useSelector((state) => state.cricleci);

    const handleDownload = () => {
        let value = _jsonToYaml(config_cricleci(circleci.info));
        let name = 'config.yml';
        _fileDownload(name, value);
    };

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom spacing={2}>
                Check out the results. That's easy, right?
            </Typography>
            <Grid container
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={12}>
                    <TextareaAutosize
                        maxRows={20}
                        variant="outlined"
                        className={classes.paper}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue={_jsonToYaml(config_cricleci(circleci.info))}
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                        ● It's done. You create a circle.yml file and write the result data. And put it in the GIT root. And use CircleCI.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        ● click here >> <Link href="#" onClick={handleDownload} >"file download"</Link>
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Result;
