import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTitle = styled('span')({
  fontWeight: 'bold',
  fontSize: '36px'
});

const Title = ({ title }) => (
  <Box>
    <StyledTitle>{title}</StyledTitle>
  </Box>
);

export default Title;
