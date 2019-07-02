import { FC } from 'react';
import { AlignItemsProps, FlexDirectionProps, FlexProps, FlexWrapProps, JustifyContentProps, SpaceProps, WidthProps } from 'styled-system';
interface GutterProps {
    gutter?: any[] | number;
}
declare type RowProps = AlignItemsProps & FlexDirectionProps & FlexProps & FlexWrapProps & GutterProps & JustifyContentProps & SpaceProps & WidthProps;
export declare const Row: FC<RowProps>;
export {};
