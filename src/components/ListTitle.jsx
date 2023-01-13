import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Separator from './Separator';
import CustomCheckbox from './CustomCheckbox';

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});

const Title = styled('span')({
  fontSize: '24px',
  fontWeight: 'bold'
});

const ListTitle = ({ title, expanded }) => (
  <StyledBox>
    {expanded ? <CustomCheckbox /> : <Separator />}
    <Title>
      {title}
      {expanded && ':'}
    </Title>
  </StyledBox>
);

export default ListTitle;
