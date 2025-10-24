'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
const SideBar = ({dashName, setDashName}) => {
     const DashboardData = [
    {
      icon: <DashboardIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
      name: 'Dashboard',
    },
    {
      icon: <EventIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
      name: 'Campaign',
    },
    {
      icon: <SettingsIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
      name: 'Settings',
    },
  ]

  const screenHandler = (name) => {
    console.log('chek e', name);
    if (name == 'Dashboard') {
      setDashName('Dashboard');
    }
    if (name == 'Campaign') {
      setDashName('Campaign')
    }
    if (name == 'Settings') {
      setDashName('Settings')
    }

  }
  return (


    
       <Box sx={{ p:"10px" }}>
              {
                DashboardData.map((ele, index) => {
                  return (
                    <Box key={index} sx={{ mt: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: '5px', borderRadius: '7px', cursor: 'pointer', '&:hover': { bgcolor: dashName == 'Dashboard' ? '' : '#21314b' } }} onClick={() => { screenHandler(ele.name) }}>
                      <Typography sx={{ color: '#bbbdc5', ml: '5px', fontSize: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap', userSelect: 'none' }} >{ele.icon}{ele.name}</Typography>
                    </Box>
                  )
                })
              }
            </Box> 
    
  )
}

export default SideBar