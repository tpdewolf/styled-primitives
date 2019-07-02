import { FC } from 'react';
import { BoxProps } from './Box';
declare type ColumnProps = Omit<BoxProps, 'width'> & {
    col?: number | (number | null | string)[];
    inset?: number | (number | null | string)[];
};
export declare const Column: FC<ColumnProps>;
export {};
