// import React from 'react';
import { Box, IconButton, useTheme, InputBase } from '@mui/material';
import React, { useContext } from 'react';

import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';

import { ColorModeContext, tokens } from '../../theme';

export const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const onUnrealisedFeatureClick = () => {
    // eslint-disable-next-line
    alert('Feature in progress! Hold on...');
  };

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box display='flex' borderRadius='3px' bgcolor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='search' />
        <IconButton type='button' sx={{ p: 1 }} onClick={onUnrealisedFeatureClick}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        <IconButton onClick={onUnrealisedFeatureClick}>
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={onUnrealisedFeatureClick}>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={onUnrealisedFeatureClick}>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
