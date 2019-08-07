import { DefaultTheme } from 'styled-components'

export const grid = {
  gutter: [15, null, 30],
  container: {
    maxWidth: 1280,
    padding: [15, null, 30],
  },
}

export const theme: DefaultTheme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  grid,
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
}
