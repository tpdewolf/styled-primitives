import styled from 'styled-components'
import {
  backgroundImage,
  BackgroundImageProps,
  backgroundPosition,
  BackgroundPositionProps,
  backgroundRepeat,
  BackgroundRepeatProps,
  backgroundSize,
  BackgroundSizeProps,
  border,
  borderBottom,
  BorderBottomProps,
  borderColor,
  BorderColorProps,
  borderLeft,
  BorderLeftProps,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  borderRight,
  BorderRightProps,
  borderTop,
  BorderTopProps,
  boxShadow,
  BoxShadowProps,
} from 'styled-system'

import { Box } from './Box'

type CardProps = BackgroundImageProps &
  BackgroundPositionProps &
  BackgroundRepeatProps &
  BackgroundSizeProps &
  BorderBottomProps &
  BorderColorProps &
  BorderLeftProps &
  BorderProps &
  BorderRadiusProps &
  BorderRightProps &
  BorderTopProps &
  BoxShadowProps

export const Card = styled(Box)<CardProps>`
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${border}
  ${borderBottom}
  ${borderColor}
  ${borderLeft}
  ${borderRadius}
  ${borderRight}
  ${borderTop}
  ${boxShadow}
`
