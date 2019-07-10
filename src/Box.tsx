import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system'

type BoxDoczProps = BackgroundProps &
  ColorProps &
  FlexProps &
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
    flex,
    layout,
    opacity,
    position,
    space,
    typography
  )}
`
