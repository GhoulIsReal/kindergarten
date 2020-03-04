import { css } from 'styled-components'
const sizes = {
   ipadLandscape: 1366,
   ipadPortrait: 1024,
   mobileL: 426,
   mobileM: 375,
   mobileS: 320
}
export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})