import React, { useMemo, useState } from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';

import ListTitle from './ListTitle';
import TodoItem from './TodoItem';
import { ToDosProvider } from '../contexts/todosContext';

const StyledAccordion = styled(Accordion)(({ theme, expanded }) => ({
  marginTop: '32px',
  backgroundColor: expanded ? 'transparent' : `${theme.palette.backgroundMain}`,
  boxShadow: expanded ? 'unset' : `${theme.shadows[0]}`,
  color: `${theme.palette.main}`,
  borderRadius: '40px !important',
  '& .MuiCollapse-root': {
    color: `${theme.palette.main}`,
    borderRadius: '40px',
    backgroundColor: `${theme.palette.backgroundMain}`,
    boxShadow: `${theme.shadows[0]}`
  }
}));

const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '0 25px 18px 17px'
});

const CustomAccordion = ({ title, data }) => {
  const [expanded, setExpanded] = useState(false);
  const [todos, setTodos] = useState(data);

  const value = useMemo(() => ({ todos, setTodos }), [todos]);

  const toggleExpanded = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <ToDosProvider value={value}>
      <StyledAccordion onChange={toggleExpanded} expanded={expanded}>
        <AccordionSummary
          expandIcon={!expanded && <ExpandCircleDownIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <ListTitle title={title} expanded={expanded} />
        </AccordionSummary>
        <StyledAccordionDetails>
          {todos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              done={item.done}
              color={item.color}
            />
          ))}
        </StyledAccordionDetails>
      </StyledAccordion>
    </ToDosProvider>
  );
};

export default CustomAccordion;
