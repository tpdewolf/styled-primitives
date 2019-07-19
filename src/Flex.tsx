import React from 'react'
import styled from 'styled-components'
import { FlexboxProps, flex, compose } from 'styled-system'

import { Box, BoxProps } from './Box'

export type FlexProps = BoxProps

export const FlexDocz: React.FC<FlexboxProps> = () => <div />

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${compose(flex)}
`
