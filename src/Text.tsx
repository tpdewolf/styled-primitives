import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { TypographyProps } from 'styled-system'

import { Box, BoxProps } from './Box'

type TextDoczProps = TypographyProps & {
  as?:
    | 'p'
    | 'small'
    | 'strong'
    | 'em'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
  target?: string
  singleLine?: boolean
}

export type TextProps = BoxProps &
  TextDoczProps &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLLabelElement>

export const TextDocz: React.FC<TextDoczProps> = () => <div />

const StyledText = styled(Box)<TextProps>`
  ${props =>
    props.singleLine &&
    css`
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`

export const Text: React.FC<TextProps> = ({
  as = 'span',
  children,
  ...props
}) => (
  <StyledText as={as} {...props}>
    {children}
  </StyledText>
)
