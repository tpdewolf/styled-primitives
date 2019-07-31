import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '../src/Box'
import { Contain } from '../src/Contain'
import { Row } from '../src/Row'
import { Column } from '../src/Column'
import { Heading } from '../src/Heading'
import { Text } from '../src/Text'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Contain>
          <Heading>Grid</Heading>
          <Row>
            <Column col={[12, 6]}>
              <Box bg="#ccc" p={10}>
                <Heading>Hello</Heading>
                <Text>Test</Text>
              </Box>
            </Column>
            <Column col={[12, 6]}>
              <Box bg="#ccc" p={10}>
                <Heading>Hello</Heading>
                <Text>Test</Text>
              </Box>
            </Column>
          </Row>
        </Contain>
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
