// @flow
import theme from './default'
import { createMuiTheme } from '@material-ui/core/styles'

const MuiTheme = createMuiTheme({
  typography: {
    fontFamily: theme.fonts.primary,
  },
  palette: {
    primary: {
      light: theme.palette.primary.lighter,
      main: theme.palette.primary.main,
      dark: theme.palette.primary.darker,
      contrastText: theme.palette.primary.contrastText,
    },
    secondary: {
      light: theme.palette.secondary.lighter,
      main: theme.palette.secondary.main,
      dark: theme.palette.secondary.darker,
      contrastText: theme.palette.secondary.contrastText,
    },
    error: {
      light: theme.palette.error.lighter,
      main: theme.palette.error.main,
      dark: theme.palette.error.darker,
      contrastText: theme.palette.error.contrastText,
    },

    text: {
      primary: theme.palette.text.primary,
      secondary: theme.palette.text.secondary,
    },
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true,
    },
    MuiTextField: {
      variant: 'filled',
    },
    MuiButton: {
      size: 'large',
      variant: 'contained',
      color: 'secondary',
    },
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!,
      variant: 'contained',
    },
  },
  overrides: {
    MuiButton: {
      root: { borderRadius: 15, textTransform: 'none' },
      contained: {
        boxShadow: 'none !important',
      },
    },
    MuiTypography: {
      root: { color: theme.palette.text.primary },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: theme.palette.primary.darker + 11,
        backdropFilter: 'blur(10px)',
      },
    },
    MuiDrawer: {
      paper: {
        boxShadow: theme.shadows.strong,
      },
    },
    MuiChip: {
      root: {
        borderRadius: 12,
      },
    },
    MuiList: {
      root: {
        padding: '0 !important',
        borderRadius: 20,
        overflow: 'hidden',
      },
    },
    MuiDialogTitle: {
      root: {
        textAlign: 'center',
      },
    },
    MuiInput: {
      root: {},
      underline: {
        '&:not($error):after': {
          borderColor: theme.palette.text.primary,
        },
        '&:hover:not($error):after': {
          borderColor: theme.palette.text.primary,
        },
      },
    },
    MuiFilledInput: {
      root: {
        borderRadius: '15px !important',
        background: 'transparent !important',
        border: `${theme.palette.background.lightgrey} 2px solid`,
        // '&$focused': {
        //   border: `${theme.palette.primary.lighter} 2px solid `,
        // },
      },
      input: {
        padding: '1.325rem .625rem .325rem',
      },
      multiline: {
        padding: '1.325rem .625rem .325rem !important',
      },
    },
    MuiTooltip: {
      tooltip: {
        // color: 'white',
        fontWeight: 600,
        borderRadius: 4,
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.contrastText,
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          background: `${theme.palette.background.lightgrey} !important`,
        },
      },
    },
    MuiTabs: {
      root: {
        minHeight: 44,
      },
      scrollable: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: theme.palette.secondary.main,
        },
      },
    },
    MuiTab: {
      root: {
        padding: 0,
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 500,
        fontSize: '0.825rem !important',
        letterSpacing: '0.125rem',
        minWidth: 'unset !important',
        marginRight: '2rem',
        minHeight: 44,
        '&:focus': {
          opacity: 1,
        },
        '&:hover': {
          opacity: 1,
          color: theme.palette.primary.main,
        },
      },
      labelContainer: {
        padding: '0 !important',
      },
    },
  },
})

export default MuiTheme
