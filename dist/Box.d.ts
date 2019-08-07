import React, { HTMLAttributes } from 'react'
import {
  BackgroundProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  TextStyleProps,
  ColorStyleProps,
  ButtonStyleProps,
} from 'styled-system'
declare type BoxDoczProps = BackgroundProps &
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
export declare const BoxDocz: React.FC<BoxDoczProps>
export declare type BoxProps = BoxDoczProps & HTMLAttributes<any>
export declare const Box: import('styled-components').StyledComponent<
  'div',
  any,
  BoxProps,
  never
>
export {}
