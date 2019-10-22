import styled from 'styled-components'
import {
  border,
  BorderProps,
  ShadowProps,
  shadow,
  compose,
} from 'styled-system'

import { Box } from './Box'

export type CardProps = BorderProps & ShadowProps

export const Card = styled(Box)<CardProps>(
  compose(
    border,
    shadow
  )
)
