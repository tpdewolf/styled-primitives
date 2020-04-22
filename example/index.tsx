import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Box } from '../src/Box'
import { PseudoBox } from '../src/PseudoBox'
import { Row } from '../src/Row'
import { Grid } from '../src/Grid'
import { Column } from '../src/Column'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid>
          <Box as="h1">Grid</Box>
          <Box as="p" textTransform="uppercase">
            Dit is een all caps ding
          </Box>
          <Row>
            <Column col={[12, 6]}>
              <PseudoBox bg="#ccc" p={10} _hover={{ bg: 'red' }}>
                <Box as="h1">Hello</Box>
                <Box as="p">Test</Box>
              </PseudoBox>
            </Column>
            <Column col={[12, 6]}>
              <Box bg="#ccc" p={10}>
                <Box as="h1">Hello</Box>
                <Box as="span">Test</Box>
                <Box as="p">This should be a paragraph</Box>
              </Box>
            </Column>
          </Row>

          <Row>
            <Column>Bla</Column>
            {[].length > 2 && <Column>2</Column>}
            <Column>3</Column>
            <Column>4</Column>
          </Row>
        </Grid>
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
