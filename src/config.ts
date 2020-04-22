import { Config, get, system } from 'styled-system'

const isNumber = (n: any) => typeof n === 'number' && !isNaN(n)
const getWidth = (n: any, scale: any) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')

export const config: Config = {
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii',
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii',
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii',
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii',
  },
  d: {
    property: 'display',
  },
  w: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  h: {
    property: 'height',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  bgImg: {
    property: 'backgroundImage',
  },
  bgImage: {
    property: 'backgroundImage',
  },
  bgSize: {
    property: 'backgroundSize',
  },
  bgPos: {
    property: 'backgroundPosition',
  },
  bgRepeat: {
    property: 'backgroundRepeat',
  },
  pos: {
    property: 'position',
  },
  flexDir: {
    property: 'flexDirection',
  },
  shadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textDecoration: { property: 'textDecoration' },
  overflowX: true,
  overflowY: true,
  textTransform: true,
  animation: true,
  appearance: true,
  transform: true,
  transformOrigin: true,
  visibility: true,
  whiteSpace: true,
  userSelect: true,
  pointerEvents: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  boxSizing: true,
  cursor: true,
  resize: true,
  transition: true,
  listStyleType: true,
  listStylePosition: true,
  listStyleImage: true,
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  objectFit: true,
  objectPosition: true,
  backgroundAttachment: {
    property: 'backgroundAttachment',
  },
  outline: true,
  float: true,
  willChange: true,
}

config.bgAttachment = config.backgroundAttachment
config.textDecor = config.textDecoration
config.listStylePos = config.listStylePosition
config.listStyleImg = config.listStyleImage

const extraConfig = system(config)

export default extraConfig

// Create an issue on @styled-system/css to allow custom alias to be passed to the `css` function

// Transform the custom alias to a format that styled-system CSS supports
const transformAlias = (prop: string, propValue: any) => {
  const configKeys = Object.keys(config)
  const result: any = {}

  if (configKeys.includes(prop)) {
    const { properties, property } = config[prop] as any
    if (properties) {
      properties.forEach((_cssProp: any) => (result[_cssProp] = propValue))
    }
    if (property) {
      result[property] = propValue
    }
    if (config[prop] === true) {
      result[prop] = propValue
    }
  } else {
    result[prop] = propValue
  }
  return result
}

export const transformAliasProps = (props: any) => {
  let result = {}
  for (const prop in props) {
    if (typeof props[prop] === 'object' && !Array.isArray(props[prop])) {
      result = { ...result, [prop]: transformAliasProps(props[prop]) }
    } else {
      result = { ...result, ...transformAlias(prop, props[prop]) }
    }
  }
  return result
}
