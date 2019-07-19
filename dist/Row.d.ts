import { FC } from 'react'
import { SpaceProps, WidthProps, FlexboxProps } from 'styled-system'
interface GutterProps {
  gutter?: any[] | number
}
declare type RowProps = FlexboxProps & GutterProps & SpaceProps & WidthProps
export declare const Row: FC<RowProps>
export {}
