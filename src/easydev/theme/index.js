import { colors } from '@material-ui/core';
import { createTheme  } from '@material-ui/core/styles';
import typography from './typography';
import shadows from './shadows';

const theme = createTheme ({
    palette: {
        background: {
            // dark: '#F4F6F8',
            default: colors.common.white,
            paper: colors.common.white
        },
        primary: {
            main: colors.indigo[500]
        },
        secondary: {
            main: colors.red[500]
        },
        success: {
            main: colors.green['A400']
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600]
        }
    },
    overrides: {
        MuiTab: {
            root: {
                width: 130
            },
        },
        MuiTextField: {
            root: {
                fontSize: 12
            },
        },
        MuiInputBase: {
            root: {
                fontSize: 12
            }
        },
        MuiInputLabel: {
            shrink: {
                fontSize: 12,
                color: colors.green[900]
            },
            root: {
                fontSize: 12,
                color: colors.green[900]
            },
        },
        MuiSelect: {
            root: {
                fontSize: 12,
            },
        },
        MuiFormLabel: {
            root: {
                fontSize: 12,
                color: colors.green[900]
            },
        },
        MuiFormControlLabel: {
            label: {
                fontSize: 12,
                color: colors.green[900]
            },
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: 1200
            }
        },
        MuiCardMedia: {
            root: {
                width: '100%'
            }
        },
        MuiCardHeader: {
            root: {
                padding: 0,
                alignItems: 'flex-start',
            },
            title: {
                fontSize: 10,
                color: colors.deepOrange[900]
            },
            action: {
                fontSize: 10,
                marginTop: 0,
                marginRight: 4,
                color: colors.deepOrange[900]
            }
        },
    },
    shadows,
    typography
});

export default theme;