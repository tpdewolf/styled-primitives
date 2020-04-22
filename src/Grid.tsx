import { useTheme } from 'styled-components'
import { DisplayProps, HeightProps } from 'styled-system'
import { Box } from './Box'
import * as React from 'react'

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
