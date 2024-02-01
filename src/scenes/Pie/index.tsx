import React from 'react';

import { Box } from '@mui/material';

import { Header } from '../../components';
import { PieChart } from '../../components/PieChart';

export const Pie = () => (
  <Box m='20px'>
    <Header title='Pie Chart' subtitle='Simple Pie Chart' />
    <Box height='75vh'>
      <PieChart />
    </Box>
  </Box>
);
