import styled, { css } from 'styled-components';
import { display, DisplayProps, height, HeightProps } from 'styled-system';

type ContainProps = DisplayProps & HeightProps;

export const Contain = styled.div<ContainProps>`
  max-width: ${({ theme }) =>
    (theme &&
      theme.grid &&
      theme.grid.container &&
      theme.grid.container.maxWidth) ||
    1280}px;
  margin: 0 auto;
  padding: 0 ${({ theme }) =>
    (theme &&
      theme.grid &&
      theme.grid.container &&
      theme.grid.container.padding) ||
    60}px;
  ${display}
  ${height}

  ${({ theme }) =>
    theme.breakpoints &&
    theme.breakpoints[1] &&
    css`
      @media (min-width: ${theme.breakpoints[1]}) {
        padding: 0
          ${({ theme }) =>
            (theme &&
              theme.grid &&
              theme.grid.container &&
              theme.grid.container.paddingSmall) ||
            15}px;
      }
    `}
`;
