import React from 'react';

import { Box } from '@mui/material';

import { Header } from '../../components';
import { GeoChart } from '../../components/GeoChart';

export const Geography = () => (
  <Box m='20px'>
    <Header title='Geography Chart' subtitle='Simple Geography Chart' />
    <Box height='75vh'>
      <GeoChart />
    </Box>
  </Box>
);
