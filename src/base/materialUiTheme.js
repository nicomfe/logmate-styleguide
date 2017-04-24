import { spacing, getMuiTheme } from 'material-ui/styles'

const materialUiTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#005c95',
    primary2Color: 'rgba(0,0,0,.54)',
    primary3Color: '#fff',
    accent1Color: '#5cb85c',
    textColor: '#333333',
    borderColor: '#e7e7e7',
    disabledColor: '#e7e7e7',
  },
  snackbar: {
    textColor: 'inherit',
    backgroundColor: 'inherit',
  },
}

// Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(materialUiTheme)
