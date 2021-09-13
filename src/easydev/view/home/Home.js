/**
 * date         : 2021.09.10
 * creater      : suyeong.yoo
 * description  : home page
 **/
import {
    Button, Box, makeStyles, Container, Grid, TextField, FormControl, InputLabel, Select
} from '@material-ui/core';
import React from 'react';
import Page from '../Page';
import {workflows, version, workflow, jobs} from "../../lib/mod/dic/circleci";
import {_jsonToYaml} from "../../lib/common"
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

const Main = () => {
    const classes = useStyles();

    let jsonObj = {};

    workflows(jsonObj, '');
    version(jsonObj, '');
    workflow(jsonObj, '');
    jobs(jsonObj, '');

    console.log(jsonObj);
    console.log(_jsonToYaml(jsonObj));

    return (
        <React.Fragment>
            <Page
                className={classes.root}
                title="Main"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    height="100%"
                    alignItems="flex-start"
                >
                    <Container maxWidth="xl">
                        <Box
                            justifyContent="center"
                        >
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary">
                                        CircleCI Create
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <Grid
                                        container
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs={1}>
                                            <div className={classes.title}>[STEP1] BUILD</div>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Repository</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'repository',
                                                        id: 'repository',
                                                    }}
                                                >
                                                    <option value={10}>GITHub</option>
                                                    <option value={20}>SVN</option>
                                                    <option value={30}>CodeCommit</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <TextField id="name" label="name" placeholder={"BUILD"} margin="normal"
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }} />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'type',
                                                        id: 'type',
                                                    }}
                                                >
                                                    <option value={10}>approval</option>
                                                    <option value={20}>auto</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs={1}>
                                            <div className={classes.title}>[STEP2] CODE Coverage</div>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Tool</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'tool',
                                                        id: 'tool',
                                                    }}
                                                >
                                                    <option value={10}>Sonarqube</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <TextField id="name" label="name" placeholder={"CODE Coverage"} margin="normal"
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }} />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'type',
                                                        id: 'type',
                                                    }}
                                                >
                                                    <option value={10}>approval</option>
                                                    <option value={20}>auto</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs={1}>
                                            <div className={classes.title}>[STEP3] TEST</div>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Tool</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'tool',
                                                        id: 'tool',
                                                    }}
                                                >
                                                    <option value={10}>JUnit</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <TextField id="name" label="name" placeholder={"TEST"} margin="normal"
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }} />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'type',
                                                        id: 'type',
                                                    }}
                                                >
                                                    <option value={10}>approval</option>
                                                    <option value={20}>auto</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs={1}>
                                            <div className={classes.title}>[STEP4] UPLOAD</div>
                                        </Grid>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Storage</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'tool',
                                                        id: 'tool',
                                                    }}
                                                >
                                                    <option value={10}>Server</option>
                                                    <option value={20}>AWS S3</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <TextField id="name" label="name" placeholder={"UPLOAD"} margin="normal"
                                                       InputLabelProps={{
                                                           shrink: true,
                                                       }} />
                                        </Grid>
                                        <Grid item xs={1}></Grid>
                                        <Grid item xs={2}>
                                            <FormControl className={classes.formControl}>
                                                <InputLabel htmlFor="age-native-simple">Type</InputLabel>
                                                <Select
                                                    native
                                                    // value={state.age}
                                                    // onChange={handleChange}
                                                    inputProps={{
                                                        name: 'type',
                                                        id: 'type',
                                                    }}
                                                >
                                                    <option value={10}>approval</option>
                                                    <option value={20}>auto</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </form>
                                </Grid>
                                <Grid item xs={12}>
                                    <div>
                                     <textarea
                                         rows="25"
                                         // onChange={log}
                                         defaultValue={'### .circleci.yml\n' +
                                         'workflows:\n' +
                                         '  version: 2\n' +
                                         '  # Define dependencies between separated jobs in workflows\n' +
                                         '  DEV_workflow:\n' +
                                         '    jobs:\n' +
                                         '      - DEV_build:\n' +
                                         '          context: AWS_Credentials\n' +
                                         '          filters:\n' +
                                         '            branches:\n' +
                                         '              only: develop'}
                                         style={{width: '100%'}}>
                                     </textarea>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Page>
        </React.Fragment>
    );
};

export default Main;
