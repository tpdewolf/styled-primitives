export interface ThemeGridContainer {
  maxWidth: number
  padding: number | any[]
}
export interface ThemeGrid {
  gutter: number | any[]
  container: ThemeGridContainer
}
export declare const defaultGrid: {
  gutter: (number | null)[]
  container: {
    maxWidth: number
    padding: (number | null)[]
  }
}
