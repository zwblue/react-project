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