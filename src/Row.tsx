import React, { FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { flexWrap, style } from 'styled-system'

import { Flex, FlexProps } from './Flex'
import { Space } from './Space'

interface GutterProps {
  gutter?: any[] | number
}

type RowProps = FlexProps & GutterProps

const gutterLeft = style({
  prop: 'gutter',
  cssProperty: 'marginLeft',
  transformValue: n => {
    return (Number(n) / 2) * -1
  },
})

const gutterRight = style({
  prop: 'gutter',
  cssProperty: 'marginRight',
  transformValue: n => {
    return (Number(n) / 2) * -1
  },
})

const StyledRow = styled(Flex)<RowProps>`
  flex-wrap: wrap;
  ${flexWrap}
  ${gutterLeft}
  ${gutterRight}
`

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

  return (
    <StyledRow gutter={gutter} {...props}>
      <Space px={spacing}>{children}</Space>
    </StyledRow>
  )
}
