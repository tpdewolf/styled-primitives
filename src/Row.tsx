import * as React from 'react'
import { useTheme } from 'styled-components'
import { SpaceProps, WidthProps, FlexboxProps } from 'styled-system'

import { Flex } from './Flex'
import { Space } from './Space'

interface GutterProps {
  gutter?: any[] | number
}

type RowProps = FlexboxProps & GutterProps & SpaceProps & WidthProps

export const Row: React.FC<RowProps> = ({ gutter, children, ...props }) => {
  const themeContext = useTheme()

  if (!gutter && themeContext && themeContext.grid) {
    gutter = themeContext.grid.gutter
  }

  if (!gutter) {
    gutter = 15
  }

  const spacing =
    gutter && Array.isArray(gutter)
      ? gutter.map(space => space && space / 2)
      : (gutter as number) / 2

  const mx =
    gutter && Array.isArray(gutter)
      ? gutter.map(space => space && (space / 2) * -1)
      : ((gutter as number) / 2) * -1

  return (
    <Flex mx={mx} flexWrap="wrap" {...props}>
      <Space px={spacing}>{children}</Space>
    </Flex>
  )
}

Row.displayName = 'Row'
