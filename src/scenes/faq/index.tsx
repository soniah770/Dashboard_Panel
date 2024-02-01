import React from 'react';

import {
  Box,
  useTheme,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Header } from '../../components';

import { tokens } from '../../theme';

export const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Question Page' />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question #1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi iure maxime
            sed beatae dignissimos facilis eaque temporibus aliquid perferendis quos minus
            consequatur possimus inventore ad, est odio laudantium delectus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question #2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi iure maxime
            sed beatae dignissimos facilis eaque temporibus aliquid perferendis quos minus
            consequatur possimus inventore ad, est odio laudantium delectus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question #3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi iure maxime
            sed beatae dignissimos facilis eaque temporibus aliquid perferendis quos minus
            consequatur possimus inventore ad, est odio laudantium delectus!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question #4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sequi iure maxime
            sed beatae dignissimos facilis eaque temporibus aliquid perferendis quos minus
            consequatur possimus inventore ad, est odio laudantium delectus!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
