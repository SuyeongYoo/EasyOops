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
 * description  : devops ci/cd pipeline select
 **/
import {
    Grid, Typography, ToggleButtonGroup, ToggleButton
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

const Start = () => {
    const classes = useStyles();

    const [alignment, setAlignment] = React.useState('01');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom spacing={2}>
                What DevOps tools will you use?
            </Typography>
            <Grid container
                  className={classes.root}
                  marginTop={1}
                  spacing={4}
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={5}>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        size={"large"}
                        onChange={handleChange}
                    >
                        <ToggleButton value="01">CircleCI</ToggleButton>
                        <ToggleButton value="02">Jenkins</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                        ● CircleCI - There is a cost to use the service. It provides easy UI/UX.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                        ● Jenkins - You need a server to use it. Jenkins must be installed on the server. Expansion is advantageous.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Start;
