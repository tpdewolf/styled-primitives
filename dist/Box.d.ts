import React, { HTMLAttributes } from 'react';
import { BackgroundProps, BottomProps, ColorProps, DisplayProps, FlexProps, FontSizeProps, FontWeightProps, HeightProps, JustifyContentProps, LeftProps, MaxHeightProps, MaxWidthProps, MinHeightProps, MinWidthProps, OpacityProps, OrderProps, PositionProps, RightProps, SpaceProps, TextAlignProps, TopProps, WidthProps, ZIndexProps } from 'styled-system';
declare type BoxDoczProps = BackgroundProps & BottomProps & ColorProps & DisplayProps & FlexProps & FontSizeProps & FontWeightProps & HeightProps & JustifyContentProps & LeftProps & MaxHeightProps & MaxWidthProps & MinHeightProps & MinWidthProps & OpacityProps & OrderProps & PositionProps & RightProps & SpaceProps & TextAlignProps & TopProps & WidthProps & ZIndexProps;
export declare const BoxDocz: React.FC<BoxDoczProps>;
export declare type BoxProps = BoxDoczProps & HTMLAttributes<any>;
export declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export {};
