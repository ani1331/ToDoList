import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, Menu, Switch, Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import NewsContext from '../contexts/newsContext';

const StyledSettingsIcon = styled(SettingsIcon)(({ theme }) => ({
  fontSize: '30px',
  color: `${theme.palette.main}`
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: '50px',
  marginLeft: '50px',
  '& .MuiList-root': {
    fontSize: '21px',
    color: `${theme.palette.main}`,
    fontWeight: 'bold',
    background: `${theme.palette.backgroundMain}`,
    boxShadow: `${theme.shadows[0]}`,
    padding: 15
  }
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SettingsMenu = () => {
  const { showNews, setShowNews } = useContext(NewsContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const toggleOpenSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSettings = () => {
    setAnchorEl(null);
  };

  const toggleShowMenu = () => {
    setShowNews(!showNews);
  };

  return (
    <Box>
      <Tooltip title='Open settings'>
        <IconButton onClick={toggleOpenSettings}>
          <StyledSettingsIcon />
        </IconButton>
      </Tooltip>
      <StyledMenu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseSettings}
      >
        <span>
          {showNews ? 'Hide ' : 'Show '}
          News
        </span>
        <Switch {...label} defaultChecked onChange={toggleShowMenu} />
      </StyledMenu>
    </Box>
  );
};

export default SettingsMenu;
