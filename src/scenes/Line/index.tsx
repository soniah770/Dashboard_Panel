import React from 'react';

import { Box } from '@mui/material';

import { Header } from '../../components';
import { LineChart } from '../../components/LineChart';

export const Line = () => (
  <Box m='20px'>
    <Header title='Pie Chart' subtitle='Simple Pie Chart' />
    <Box height='75vh'>
      <LineChart />
    </Box>
  </Box>
);
