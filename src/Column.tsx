import React, { FC } from 'react'
import styled from 'styled-components'
import { style } from 'styled-system'

import { Box, BoxProps } from './Box'

type ColumnProps = Omit<BoxProps, 'width'> & {
  col?: number | (number | null | string)[]
  inset?: number | (number | null | string)[]
}

function transformValue(n: string | number) {
  if (!n || isNaN(n as any)) {
    return n
  }

  const cols = Number(n)
  return (cols / 12) * 100 + '%'
}

const inset = style({
  prop: 'inset',
  cssProperty: 'marginLeft',
  transformValue,
})

const col = style({
  prop: 'col',
  cssProperty: 'width',
  transformValue,
})

const StyledColumn = styled(Box)<ColumnProps>`
  ${col}
  ${inset}
`

export const Column: FC<ColumnProps> = props => {
  return <StyledColumn {...props}>{props.children}</StyledColumn>
}
