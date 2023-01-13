import React, { useContext, useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

import ToDosContext from '../contexts/todosContext';
import Helpers from '../utils/Helpers';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 5,
  width: 23,
  height: 23,
  boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
  backgroundColor: `${theme.palette.backgroundSecondary}`,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: `${theme.palette.main}`
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(57,75,89,.5)'
  }
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: `${theme.palette.main}`,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 23,
    height: 23,
    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
      `${theme.palette.backgroundSecondary}`
    )}" d="M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z"/></svg>')`,
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: `${theme.palette.main}`
  }
}));

const CustomCheckbox = () => {
  const { todos, setTodos } = useContext(ToDosContext);
  const isDailyTasksDone = Helpers.getIsDailyTasksDone(todos);

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);

    const updatedTodos = todos.map((el) => ({ ...el, done: e.target.checked }));
    setTodos(updatedTodos);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setChecked(isDailyTasksDone);
  }, [isDailyTasksDone]);

  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' }
      }}
      disableRipple
      color='default'
      onClick={handleClick}
      onChange={handleChange}
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      checked={checked}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};

export default CustomCheckbox;
