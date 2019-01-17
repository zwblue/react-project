import {Dimensions} from 'react-native';

/**
* ==============================================================================
* @param {string.<justifyContent>} 
* @param {string.<alignItems>} 
* @return {CSS}
* ==============================================================================
*/
export function rowFlex ( justifyContent, alignItems ) {
  return {
    display: 'flex',
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'flex-start' ,
    flexDirection: 'row',
  }
}


const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 750;
export default function px2dp(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx;
}

export function bd ( width, color, direction = 'all', style = 'solid', ) {
  let direc  = ''
  switch (direction) {
    case 'left': 
      direc = 'Left'
      break;
    case 'right': 
      direc = 'Right'
      break;
    case 'top': 
      direc = 'Top'
      break;
    case 'bottom': 
      direc = 'Bottom'
      break;
    direc = ''
  }
  return {
    [`border${direc}Width`]: width,
    [`border${direc}Color`]: color,
    [`borderStyle`]: style
  }
}
export function mg ( size1, size2, direction = 'row') {
  return direction === 'row' ? {
    marginLeft: size1,
    marginRight : size2 || size1
  } : { 
    marginTop: size1,
    marginBottom: size2 || size1
  }
}
