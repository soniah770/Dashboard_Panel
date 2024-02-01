import React, { useState } from 'react';

import FullCalendar from '@fullcalendar/react';
import { EventApi, DateSelectArg, DateInput, formatDate, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlagin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { Header } from '../../components';

import { tokens } from '../../theme';

export const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const init: EventApi[] = [];

  const [currentEvents, setCurrentEvents] = useState(init);

  const handleDateClick = (selected: DateSelectArg) => {
    // eslint-disable-next-line
    const title = prompt('Please enter a new title for event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      });
    }
  };

  const handleEventClick = (selected: EventClickArg) => {
    // eslint-disable-next-line
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}' ?`)) {
      selected.event.remove();
    }
  };

  return (
    <Box m='20px'>
      <Header title='CALENDAR' subtitle='Calendar Interactive Page' />
      <Box display='flex' justifyContent='space-between'>
        {/* CALENDAR SIDEBAR */}
        <Box flex='1 1 20%' bgcolor={colors.primary[400]} p='15px' borderRadius='4px'>
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: '10px 0',
                  borderRadius: '2px'
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start as DateInput, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR} */}
        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlagin, listPlugin]}
            headerToolbar={{
              left: 'prev,next,today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView='dayGridMonth'
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2023-02-12'
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2023-02-12'
              }
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};
