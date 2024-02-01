import React from 'react';

import { Typography, Box, useTheme } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';

import { mockDataTeam } from '../../data/mockData';

import { tokens } from '../../theme';

import { Header } from '../../components';

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left'
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width='60%'
          m='0 auto'
          p='5px'
          display='flex'
          justifyContent='center'
          bgcolor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
          borderRadius='4px'
        >
          {access === 'admin' && <AdminPanelSettingsIcon />}
          {access === 'manager' && <SecurityIcon />}
          {access === 'user' && <LockOpenIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {access}
          </Typography>
        </Box>
      )
    }
  ];

  return (
    <Box m='20px'>
      <Header title='TEAM' subtitle='Managing the Team Members' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none'
          },
          '& .MuiDataGrid-root .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300]
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400]
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none'
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
