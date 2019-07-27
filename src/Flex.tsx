import React from 'react'
import styled from 'styled-components'
import { FlexboxProps } from 'styled-system'

import { Box, BoxProps } from './Box'

export type FlexProps = BoxProps

export const FlexDocz: React.FC<FlexboxProps> = () => <div />

export const Flex = styled(Box)({})

Flex.defaultProps = {
  display: 'flex',
}
