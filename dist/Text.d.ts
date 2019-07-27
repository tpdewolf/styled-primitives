import React, { HTMLAttributes } from 'react'
import { TypographyProps } from 'styled-system'
import { BoxProps } from './Box'
declare type TextDoczProps = TypographyProps & {
  as?:
    | 'p'
    | 'small'
    | 'strong'
    | 'em'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
  target?: string
  singleLine?: boolean
}
export declare type TextProps = BoxProps &
  TextDoczProps &
  HTMLAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLLabelElement>
export declare const TextDocz: React.FC<TextDoczProps>
export declare const Text: import('styled-components').StyledComponent<
  'div',
  any,
  TextProps,
  never
>
export {}
