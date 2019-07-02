export * from './Box'
export * from './Card'
export * from './Column'
export * from './Contain'
export * from './Flex'
export * from './Heading'
export * from './Row'
export * from './Space'
export * from './Text'

export interface ThemeGridContainer {
  maxWidth: number
  padding: number | any[]
}

export interface ThemeGrid {
  gutter: number | any[]
  container: ThemeGridContainer
}
