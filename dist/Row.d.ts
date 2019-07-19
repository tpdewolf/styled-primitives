import { FC } from 'react'
import { FlexProps } from './Flex'
interface GutterProps {
  gutter?: any[] | number
}
declare type RowProps = FlexProps & GutterProps
export declare const Row: FC<RowProps>
export {}
