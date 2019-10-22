import React, { FC, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { SpaceProps, WidthProps, FlexboxProps } from 'styled-system'

import { Flex } from './Flex'
import { Space } from './Space'

interface GutterProps {
  gutter?: any[] | number
}

type RowProps = FlexboxProps & GutterProps & SpaceProps & WidthProps

export const Row: FC<RowProps> = ({ gutter, children, ...props }) => {
  const themeContext = useContext(ThemeContext)

  if (!gutter && themeContext && themeContext.grid) {
    gutter = themeContext.grid.gutter
  }

  if (!gutter) {
    gutter = 15
  }

  const spacing =
    gutter && Array.isArray(gutter)
      ? gutter.map(space => space && space / 2)
      : gutter / 2

  const mx =
    gutter && Array.isArray(gutter)
      ? gutter.map(space => space && (space / 2) * -1)
      : (gutter / 2) * -1

  // const filteredChildren = React.Children.toArray(children).filter(Boolean)

  return (
    <Flex mx={mx} flexWrap="wrap" {...props}>
      <Space px={spacing}>{children}</Space>
    </Flex>
  )
}
