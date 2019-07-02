// import original module declarations
import 'styled-components';

export interface ThemeGridContainer {
  maxWidth: number;
  padding: number | any[];
}

export interface ThemeGrid {
  gutter: number | any[];
  container: ThemeGridContainer;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[];
    grid: ThemeGrid;
  }
}
