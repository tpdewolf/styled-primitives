import { useTheme } from 'styled-components'
import { DisplayProps, HeightProps } from 'styled-system'
import { Box } from './Box'
import * as React from 'react'

export interface ThemeGridContainer {
  maxWidth: number
  padding: number | any[]
}

export interface ThemeGrid {
  gutter: number | any[]
  container: ThemeGridContainer
}

export const defaultGrid = {
  gutter: [15, null, 30],
  container: {
    maxWidth: 1280,
    padding: [15, null, 60],
  },
}

export type GridProps = DisplayProps & HeightProps

export const Grid: React.FC<GridProps> = props => {
  const themeContext = useTheme()

  return (
    <Box
      mx="auto"
      px={themeContext?.grid?.container?.padding}
      maxWidth={themeContext?.grid?.container?.maxWidth}
      {...props}
    />
  )
}

Grid.displayName = 'Grid'
