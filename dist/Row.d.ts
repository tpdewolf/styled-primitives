import { FC } from 'react'
import { FlexProps, SpaceProps, WidthProps } from 'styled-system'
interface GutterProps {
  gutter?: any[] | number
}
declare type RowProps = FlexProps & GutterProps & SpaceProps & WidthProps
export declare const Row: FC<RowProps>
export {}
