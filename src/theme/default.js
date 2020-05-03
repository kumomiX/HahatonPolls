// @flow

const theme: Object = {}

theme.palette = {
  primary: {
    lighter: '#67578A',
    main: '#2F195F',
    contrastText: '#ffffff',
    darker: '#1E103D',
    gradient: 'linear-gradient(180deg, #584288 0%, #2F195F 100%)',
  },
  secondary: {
    main: '#B1F8F2',
    contrastText: '#2F195F',
    darker: '#A1E2DC',
    lighter: '#e2fffd',
  },
  error: {
    main: '#BA274A',
    lighter: '#BA274A',
    darker: '#881D36',
    contrastText: '#fff',
  },
  success: {
    main: '#136F63',
    contrastText: '#fff',
  },
  text: {
    primary: '#02111B',
    secondary: '#6B717E77',
  },
  background: {
    lightgrey: '#F7F6FB',
    grey: '#e2e1e8',
    primary: '#ffffff',
  },
}

theme.fonts = {
  primary:
    '"Futura PT", "Source Sans Pro", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
}

theme.shadows = {
  main: '0 3px 15px 2px rgba(0, 0, 0, 0.05)',
  strong: 'rgba(0, 0, 0, 0.2) 0px 35px 50px -30px',
  buttonPrimary: '0 4px 12px #B1F8F235',
  card: '0 4px 20px #2F195F33',
}

theme.sizes = {
  maxWidth: '97.5%',
  bigFont: '1.6071428571428572rem',
  mediumFont: '1rem',
  smallFont: '.825rem',
  tinyFont: '.625rem',
  scale: [
    '0.125rem',
    '0.325rem',
    '0.625rem',
    '0.825rem',
    '1rem',
    '1.125rem',
    '1.325rem',
    '1.625rem',
    '2rem',
    '2.625rem',
    '4rem',
  ],
  tablet: '768px',
  screen: '1024px',
  bigScreen: '1366px',
  wideScreen: '1690px',
  borderRadius: '8px',
}

export default theme
