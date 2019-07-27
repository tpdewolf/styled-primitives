import React from 'react'
import styled from 'styled-components'
import { FlexboxProps, compose, display } from 'styled-system'

import { Box, BoxProps } from './Box'

export type FlexProps = BoxProps

export const FlexDocz: React.FC<FlexboxProps> = () => <div />

const flexStyles = compose(display)

export const Flex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  flexStyles
)
