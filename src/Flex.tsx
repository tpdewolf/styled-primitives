import React from 'react'
import styled from 'styled-components'
import { FlexProps as FlexPropsSS } from 'styled-system'

import { Box, BoxProps } from './Box'

export type FlexProps = BoxProps

export const FlexDocz: React.FC<FlexPropsSS> = () => <div />

export const Flex = styled(Box)<FlexProps>`
  display: flex;
`
