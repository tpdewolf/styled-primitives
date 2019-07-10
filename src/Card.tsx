import styled from 'styled-components'
import { border, BorderProps, ShadowProps, shadow } from 'styled-system'

import { Box } from './Box'

type CardProps = BorderProps & ShadowProps

export const Card = styled(Box)<CardProps>`
  ${border}
  ${shadow}
`
