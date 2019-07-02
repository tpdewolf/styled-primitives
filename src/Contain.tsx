import { ThemeContext } from 'styled-components';
import { DisplayProps, HeightProps } from 'styled-system';
import { Box } from './Box';
import { useContext } from 'react';
import React from 'react';

type ContainProps = DisplayProps & HeightProps;

export const Contain: React.FC<ContainProps> = props => {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <Box
      margin="0 auto"
      padding={
        themeContext &&
        themeContext.grid &&
        themeContext.grid.container &&
        themeContext.grid.container.padding
      }
      maxWidth={
        themeContext &&
        themeContext.grid &&
        themeContext.grid.container &&
        themeContext.grid.container.maxWidth
      }
      {...props}
    />
  );
};
