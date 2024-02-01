import React from 'react';

import { Box } from '@mui/material';

import { Header } from '../../components';
import { BarChart } from '../../components/BarChart';

export const Bar = () => (
  <Box m='20px'>
    <Header title='Bar Chart' subtitle='Simple Bar Chart' />
    <Box height='75vh'>
      <BarChart />
    </Box>
  </Box>
);
