import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: '#131313',
  inactive: '#808080'
}
const theme = extendTheme({ colors })

export default theme
