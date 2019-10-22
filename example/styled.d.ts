// import original module declarations
import 'styled-components'

import { ThemeGrid } from '../src'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[]
    grid: ThemeGrid
    textStyles?: any
    colorStyles?: any
    buttonStyles?: any
  }
}
