import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import Title from './Title';
import todos from '../data/todos.json';
import CustomAccordion from './CustomAccordion';
import Helpers from '../utils/Helpers';
import SettingsMenu from './SettingsMenu';

const Container = styled(Box)({
  backgroundColor: '#222222',
  borderRadius: 30,
  padding: '13px 20px',
  maxWidth: 390,
  maxHeight: 844,
  overflow: 'scroll'
});

const TitleContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 17px'
});

const ToDoContainer = () => {
  const dates = Helpers.getDates();

  return (
    <Container>
      <TitleContainer>
        <Title title='To Do' />
        <SettingsMenu />
      </TitleContainer>
      {todos.map((list) => (
        <CustomAccordion
          key={list.id}
          data={list.todos}
          title={`${dates[list.id - 1]} Tasks`}
        />
      ))}
    </Container>
  );
};

export default ToDoContainer;
