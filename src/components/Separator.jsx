import React from 'react';
import { styled } from '@mui/material/styles';

const StyledSeparator = styled('span')(({ theme }) => ({
  minWidth: '5px',
  height: '40px',
  borderRadius: '3px',
  backgroundColor: `${theme.palette.backgroundSecondary}`,
  marginRight: '14px'
}));

const Separator = ({ color }) => (
  <StyledSeparator style={{ backgroundColor: color }} />
);

export default Separator;
