import styled, { DefaultTheme } from 'styled-components'
import {
  background,
  BackgroundImageProps,
  BackgroundPositionProps,
  BackgroundProps,
  BackgroundSizeProps,
  border,
  BorderColorProps,
  BorderRadiusProps,
  BordersProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  DisplayProps,
  flexbox,
  FlexboxProps,
  FlexDirectionProps,
  FontSizeProps,
  FontWeightProps,
  grid,
  GridProps,
  HeightProps,
  layout,
  LayoutProps,
  LetterSpacingProps,
  LineHeightProps,
  MaxHeightProps,
  MaxWidthProps,
  MinHeightProps,
  MinWidthProps,
  OpacityProps,
  OverflowProps,
  position,
  PositionProps,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps as SSTypographyProps,
  WidthProps,
} from 'styled-system'
import extraConfig from './config'

type CSS = React.CSSProperties

type borderRadius = BorderRadiusProps['borderRadius']
type borderColor = BorderColorProps['borderColor']

export interface CustomConfig {
  // Custom borderRadius alias
  rounded?: borderRadius
  roundedTop?: borderRadius
  roundedBottom?: borderRadius
  roundedLeft?: borderRadius
  roundedRight?: borderRadius
  roundedTopRight?: borderRadius
  roundedTopLeft?: borderRadius
  roundedBottomRight?: borderRadius
  roundedBottomLeft?: borderRadius

  // Custom borderColor alias
  borderBottomColor?: borderColor
  borderTopColor?: borderColor
  borderRightColor?: borderColor
  borderLeftColor?: borderColor

  // Custom width alias
  w?: WidthProps['width']
  minW?: MinWidthProps['minWidth']
  maxW?: MaxWidthProps['maxWidth']

  // Custom height alias
  h?: HeightProps['height']
  minH?: MinHeightProps['minHeight']
  maxH?: MaxHeightProps['maxHeight']

  // Custom display alias
  d?: DisplayProps['display']

  // Custom background alias
  backgroundAttachment?: ResponsiveValue<CSS['backgroundAttachment']>
  bgImg?: BackgroundImageProps['backgroundImage']
  bgImage?: BackgroundImageProps['backgroundImage']
  bgSize?: BackgroundSizeProps['backgroundSize']
  bgPos?: BackgroundPositionProps['backgroundPosition']
  pos?: PositionProps['position']
  flexDir?: FlexDirectionProps['flexDirection']

  // CSS properties
  textDecoration?: ResponsiveValue<CSS['textDecoration']>
  textDecor?: ResponsiveValue<CSS['textDecoration']>
  textTransform?: ResponsiveValue<CSS['textTransform']>
  overflowX?: OverflowProps['overflow']
  overflowY?: OverflowProps['overflow']
  appearance?: ResponsiveValue<CSS['appearance']>
  transform?: ResponsiveValue<CSS['transform']>
  transformOrigin?: ResponsiveValue<CSS['transformOrigin']>
  animation?: ResponsiveValue<CSS['animation']>
  userSelect?: ResponsiveValue<CSS['userSelect']>
  pointerEvents?: ResponsiveValue<CSS['pointerEvents']>
  boxSizing?: ResponsiveValue<CSS['boxSizing']>
  cursor?: ResponsiveValue<CSS['cursor']>
  resize?: ResponsiveValue<CSS['resize']>
  transition?: ResponsiveValue<CSS['transition']>
  objectFit?: ResponsiveValue<CSS['objectFit']>
  objectPosition?: ResponsiveValue<CSS['objectPosition']>
  visibility?: ResponsiveValue<CSS['visibility']>

  // Ellipsis alias
  wordBreak?: ResponsiveValue<CSS['wordBreak']>
  overflowWrap?: ResponsiveValue<CSS['overflowWrap']>
  whiteSpace?: ResponsiveValue<CSS['whiteSpace']>

  // SVG color properties
  fill?: ColorProps['color']
  stroke?: ColorProps['color']

  bgAttachment?: ResponsiveValue<CSS['backgroundAttachment']>
  shadow?: BoxShadowProps['boxShadow']

  // List properties
  listStyleType?: ResponsiveValue<CSS['listStyleType']>
  listStylePosition?: ResponsiveValue<CSS['listStylePosition']>
  listStyleImage?: ResponsiveValue<CSS['listStyleImage']>
  listStyleImg?: ResponsiveValue<CSS['listStyleImage']>
  listStylePos?: ResponsiveValue<CSS['listStylePosition']>

  // Outline prop
  outline?: ResponsiveValue<CSS['outline']>
  float?: ResponsiveValue<CSS['float']>
  willChange?: ResponsiveValue<CSS['willChange']>

  // Border Width props
  borderTopWidth?: ResponsiveValue<CSS['borderTopWidth']>
  borderBottomWidth?: ResponsiveValue<CSS['borderBottomWidth']>
  borderLeftWidth?: ResponsiveValue<CSS['borderLeftWidth']>
  borderRightWidth?: ResponsiveValue<CSS['borderRightWidth']>
}

type FontSizes = keyof DefaultTheme['fontSizes']

export interface FontSize {
  fontSize?: ResponsiveValue<FontSizes> | FontSizeProps['fontSize']
}

type FontWeights = keyof DefaultTheme['fontWeights']

export interface FontWeight {
  fontWeight?: ResponsiveValue<FontWeights> | FontWeightProps['fontWeight']
}

type LineHeights = keyof DefaultTheme['lineHeights']

export interface LineHeight {
  lineHeight?: ResponsiveValue<LineHeights> | LineHeightProps['lineHeight']
}

type LetterSpacings = keyof DefaultTheme['letterSpacings']

export interface LetterSpacing {
  letterSpacing?:
    | ResponsiveValue<LetterSpacings>
    | LetterSpacingProps['letterSpacing']
}

type TypographyProps = Omit<
  SSTypographyProps,
  'fontWeight' | 'lineHeight' | 'fontSize' | 'letterSpacing'
>

export interface Truncated {
  /**
   * If `true`, the text will be truncated
   */
  isTruncated?: boolean
}

type StyledSystemProps = LayoutProps &
  ColorProps &
  SpaceProps &
  BordersProps &
  BackgroundProps &
  PositionProps &
  FlexboxProps &
  ShadowProps &
  GridProps &
  OpacityProps &
  OverflowProps

type ModifiedStyledSystemProps = TypographyProps &
  FontSize &
  LetterSpacing &
  FontWeight &
  LineHeight &
  CustomConfig

type BoxHTMLProps = React.RefAttributes<any> & React.HTMLAttributes<any>

export type BoxProps = BoxHTMLProps &
  StyledSystemProps &
  ModifiedStyledSystemProps &
  Truncated

export const truncate = (props: BoxProps) => {
  if (props.isTruncated) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
  }

  return null
}

export const boxStyles = compose(
  layout,
  color,
  space,
  background,
  border,
  grid,
  position,
  shadow,
  typography,
  flexbox,
  extraConfig
)

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  boxStyles
)

Box.displayName = 'Box'
