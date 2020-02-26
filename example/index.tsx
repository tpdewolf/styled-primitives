import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '../src/Box'
import { Contain } from '../src/Contain'
import { Row } from '../src/Row'
import { Column } from '../src/Column'
import { Heading } from '../src/Heading'
import { Text, Paragraph } from '../src/Text'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Contain>
          <Heading>Grid</Heading>
          <Text textStyle="caps">Dit is een all caps ding</Text>
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
                <Paragraph>This should be a paragraph</Paragraph>
              </Box>
            </Column>
          </Row>

          <Row>
            <Column>Bla</Column>
            {[].length > 2 && <Column>2</Column>}
            <Column>3</Column>
            <Column>4</Column>
          </Row>

          <Box variant="primary" as="button">
            dfgdfgf
          </Box>
        </Contain>
      </>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
