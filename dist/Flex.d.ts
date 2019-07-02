import React from 'react';
import { AlignItemsProps, FlexDirectionProps, FlexWrapProps, JustifyContentProps } from 'styled-system';
import { BoxProps } from './Box';
declare type FlexDoczProps = AlignItemsProps & FlexDirectionProps & FlexWrapProps & JustifyContentProps;
export declare type FlexProps = BoxProps & FlexDoczProps;
export declare const FlexDocz: React.FC<FlexDoczProps>;
export declare const Flex: import("styled-components").StyledComponent<"div", any, FlexProps, never>;
export {};
