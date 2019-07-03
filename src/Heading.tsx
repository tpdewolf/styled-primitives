import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  color,
  fontSize,
  fontWeight,
  opacity,
  space,
  width,
} from 'styled-system'

import { Text, TextProps } from './Text'

export type HeadingProps = TextProps &
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }

const StyledHeading = styled(Text)<HeadingProps>`
  margin: 0px;
  line-height: 1.2;
  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}
  ${width}
  ${opacity}
`

export const Heading: React.FC<HeadingProps> = ({
  as = 'h2',
  children,
  ...props
}) => (
  <StyledHeading as={as} {...props}>
    {children}
  </StyledHeading>
)
