import React from 'react';

import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { ColorModeContext, useMode } from './theme';

import { Topbar, Sidebar } from './scenes/global';

import {
  Dashboard,
  Team,
  Contacts,
  Invoices,
  Form,
  Calendar,
  FAQ,
  Bar,
  Pie,
  Line,
  Geography
} from './scenes';

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as IColorMode}>
      <ThemeProvider theme={theme as Partial<Theme>}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/geography' element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
