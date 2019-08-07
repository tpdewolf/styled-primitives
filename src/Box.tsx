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
  textStyle,
  buttonStyle,
  colorStyle,
  TextStyleProps,
  ColorStyleProps,
  ButtonStyleProps,
} from 'styled-system'

type BoxDoczProps = BackgroundProps &
  ButtonStyleProps &
  ColorProps &
  ColorStyleProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps

export const BoxDocz: React.FC<BoxDoczProps> = () => <div />

export type BoxProps = BoxDoczProps & HTMLAttributes<any>

const boxStyles = compose(
  background,
  buttonStyle,
  color,
  colorStyle,
  flexbox,
  layout,
  opacity,
  position,
  space,
  textStyle,
  typography
)

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  boxStyles
)
