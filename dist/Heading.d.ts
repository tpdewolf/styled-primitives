import React, { HTMLAttributes } from 'react';
import { TextProps } from './Text';
export declare type HeadingProps = TextProps & HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export declare const Heading: React.FC<HeadingProps>;
