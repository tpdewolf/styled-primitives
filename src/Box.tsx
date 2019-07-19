import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

type BoxDoczProps = BackgroundProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  SpaceProps &
  TypographyProps

export const BoxDocz: React.FC<BoxDoczProps> = () => <div />

export type BoxProps = BoxDoczProps & HTMLAttributes<any>

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${compose(
    background,
    color,
    flexbox,
    layout,
    opacity,
    position,
    space,
    typography
  )}
`
