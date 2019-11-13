import { HTMLAttributes } from 'react'
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
  colorStyle,
  TextStyleProps,
  ColorStyleProps,
  ButtonStyleProps,
  variant,
} from 'styled-system'

export type BoxProps = BackgroundProps &
  ButtonStyleProps &
  ColorProps &
  ColorStyleProps &
  FlexboxProps &
  LayoutProps &
  OpacityProps &
  PositionProps &
  SpaceProps &
  TextStyleProps &
  TypographyProps &
  HTMLAttributes<any>

const boxStyles = compose(
  background,
  color,
  colorStyle,
  flexbox,
  layout,
  opacity,
  position,
  space,
  textStyle,
  typography,
  variant({
    prop: 'variant',
    scale: 'buttons',
    variants: {
      primary: {},
    },
  })
)

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  boxStyles
)
