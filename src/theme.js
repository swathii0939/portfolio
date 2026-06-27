import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B0F19',
      paper: '#131829',
    },
    primary: {
      main: '#7C9EFF',
    },
    secondary: {
      main: '#5EEAD4',
    },
    text: {
      primary: '#F4F2ED',
      secondary: '#9AA3B8',
    },
    divider: 'rgba(244,242,237,0.08)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Fraunces", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
})

export default theme
