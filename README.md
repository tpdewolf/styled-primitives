# Styled Primitives

This library is basicly a implementation of [jxnblk](https://github.com/jxnblk)'s [styled-system](https://styled-system.com/) and very similar to [rebassjs](https://github.com/rebassjs/rebass), but with typescript types built in, an added grid system and without the `Img`, `Link` and `Button` components.

## Configuration

Your styled components theme needs a `breakpoints` and a `grid` property:

```ts
export const theme: DefaultTheme = {
  breakpoints: ["40em", "52em", "64em", "80em"],
  grid: {
    gutter: [15, null, 30], // responsive styles based on your breakpoints
    container: {
      maxWidth: 1280,
      padding: [15, null, 30],
    },
  },
};
```

## Usage

Read the documentation from rebass for more information about the `Box`, `Flex`, `Card`, `Text` and `Heading` component.

The grid has 3 components: `Contain`, `Row` and `Column`. Example of grid:

```tsx
<Contain>
  <Row>
    <Column col={4}>First column</Column>
    <Column col={4}>Second column</Column>
    <Column col={4}>Third column</Column>
  </Row>

  <Row gutter={40}>
    <Column col={[12, null, 6]}>
      With gutter overwrite and responsive styles
    </Column>
    <Column col={[12, null, 6]}>
      I'm 12 columns on mobile and 6 columns on laptop
    </Column>
  </Row>
</Contain>
```
