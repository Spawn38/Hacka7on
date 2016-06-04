import {ColorManipulator,Spacing,zIndex}  from 'material-ui';

import {cyan500,cyan700,lightBlack,pinkA200,grey100,grey500,grey300,white,darkBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator'

const MyTheme ={
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#90AA75',
    primary2Color: cyan700,
    primary3Color: lightBlack,
    accent1Color: '#DDEEAA',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    floatingLabel: cyan500
  }
};

export default  MyTheme;