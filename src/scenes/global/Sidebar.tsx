import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

import { Box, IconButton, useTheme, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/HomeOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import ContactsIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptIcon from '@mui/icons-material/ReceiptOutlined';
import PersoneIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpIcon from '@mui/icons-material/HelpOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import PieChartIcon from '@mui/icons-material/PieChartOutlined';
import TimeLineIcon from '@mui/icons-material/TimelineOutlined';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import MapIcon from '@mui/icons-material/MapOutlined';

import { tokens } from '../../theme';

import 'react-pro-sidebar/dist/css/styles.css';

const Item: React.FC<IItemProps> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important'
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important'
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important'
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important'
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography variant='h3' color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile-user'
                  width='100px'
                  height='100px'
                  src='assets/user.png'
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0' }}
                >
                 Sonia Hos
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Contacts Information'
              to='/contacts'
              icon={<ContactsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Invoices Balances'
              to='/invoices'
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Pages
            </Typography>
            <Item
              title='Profile Form'
              to='/form'
              icon={<PersoneIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Charts
            </Typography>
            <Item
              title='Bar Chart'
              to='/bar'
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Pie Chart'
              to='/pie'
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Line Chart'
              to='/line'
              icon={<TimeLineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Geography Chart'
              to='/geography'
              icon={<MapIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
