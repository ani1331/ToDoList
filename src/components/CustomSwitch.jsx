import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';

import ToDosContext from '../contexts/todosContext';
import Helpers from '../utils/Helpers';

const MaterialUISwitch = styled(Switch)(({ theme, checked }) => ({
  padding: 5,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translate(25%, 25%)',
    '&.Mui-checked': {
      transform: 'translate(100%, 25%)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          `${theme.palette.backgroundSecondary}`
        )}" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: checked
          ? `${theme.palette.checked}`
          : `${theme.palette.notChecked}`
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: `${theme.palette.main}`,
    width: 25,
    height: 25,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: '-2px',
      top: '-2px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        `${theme.palette.backgroundSecondary}`
      )}" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    width: 50,
    height: 30,
    opacity: 1,
    backgroundColor: '#366EFF',
    borderRadius: 20
  }
}));

const CustomSwitch = ({ id }) => {
  const { todos, setTodos } = useContext(ToDosContext);

  const item = Helpers.findElementById(todos, id);

  const handleChange = (e) => {
    const updatedTodos = todos.map((el) =>
      el.id === id ? { ...el, done: e.target.checked } : el
    );
    setTodos(updatedTodos);
  };

  return (
    <MaterialUISwitch
      sx={{ m: 1 }}
      checked={item.done}
      onChange={handleChange}
    />
  );
};

export default CustomSwitch;
