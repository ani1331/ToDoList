import React from 'react';
import { Box, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import Separator from './Separator';
import CustomSwitch from './CustomSwitch';

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const InfoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column'
});

const Description = styled(Box)({
  fontSize: '14px',
  color: 'rgba(255, 255, 255, 0.6)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '200px',
  textOverflow: 'ellipsis'
});

const Title = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'done'
})(({ done }) => ({
  textAlign: 'initial',
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: done ? 'line-through' : 'none'
}));

const StyledLabel = styled(FormControlLabel)({
  margin: 'unset',
  justifyContent: 'flex-end'
});

const TodoItem = ({ id, title, desc, color, done }) => (
  <StyledBox mt={2}>
    <StyledBox>
      <Separator color={color} />
      <InfoContainer>
        <Title done={done}>{title}</Title>
        <Description>{desc}</Description>
      </InfoContainer>
    </StyledBox>
    <StyledLabel control={<CustomSwitch id={id} />} label='' />
  </StyledBox>
);

export default TodoItem;
