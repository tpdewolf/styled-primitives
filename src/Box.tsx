import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  bottom,
  BottomProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  flex,
  FlexProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  height,
  HeightProps,
  justifyContent,
  JustifyContentProps,
  left,
  LeftProps,
  maxHeight,
  MaxHeightProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  minWidth,
  MinWidthProps,
  opacity,
  OpacityProps,
  order,
  OrderProps,
  position,
  PositionProps,
  right,
  RightProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

type BoxDoczProps = BackgroundProps &
  BottomProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  FontSizeProps &
  FontWeightProps &
  HeightProps &
  JustifyContentProps &
  LeftProps &
  MaxHeightProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  OpacityProps &
  OrderProps &
  PositionProps &
  RightProps &
  SpaceProps &
  TextAlignProps &
  TopProps &
  WidthProps &
  ZIndexProps;

export const BoxDocz: React.FC<BoxDoczProps> = () => <div />;

export type BoxProps = BoxDoczProps & HTMLAttributes<any>;

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${background}
  ${bottom}
  ${color}
  ${display}
  ${flex}
  ${fontSize}
  ${fontWeight}
  ${height}
  ${justifyContent}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`;
