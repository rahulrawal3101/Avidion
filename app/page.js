'use client';

import Header from "@/componants/Header";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import FirstScreen from "@/componants/FirstScreen";
import SecondScreen from "@/componants/SecondScreen";
import ThirdScreen from "@/componants/ThirdScreen";
import { useEffect, useState } from "react";
import SideDrawer from "@/componants/sideDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "@/componants/SideBar";

export default function Home() {
  const [dashName, setDashName] = useState('Dashboard');
  const [open, setOpen] = useState(false);

  // const DashboardData = [
  //   {
  //     icon: <DashboardIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
  //     name: 'Dashboard',
  //   },
  //   {
  //     icon: <EventIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
  //     name: 'Campaign',
  //   },
  //   {
  //     icon: <SettingsIcon sx={{ color: '#bbbdc5', fontSize: '19px', mr: '5px' }} />,
  //     name: 'Settings',
  //   },
  // ]

  // const screenHandler = (name) => {
  //   console.log('chek e', name);
  //   if (name == 'Dashboard') {
  //     setDashName('Dashboard');
  //   }
  //   if (name == 'Campaign') {
  //     setDashName('Campaign')
  //   }
  //   if (name == 'Settings') {
  //     setDashName('Settings')
  //   }

  // }

  const drawerHandler = () => {
    setOpen(!open)
  }

  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  // ✅ Automatically trigger drawerHandler when screen size changes
  useEffect(() => {
    if (!isSmallScreen) {
      setOpen(false)  // open/close drawer for small screen
    }
  }, [isSmallScreen]);



  return (
    <>
      <Header drawerHandler={drawerHandler} />
      <Container disableGutters maxWidth='xl'>

        <Grid container sx={{  }}>
          <Grid size={{ lg: 2.5, md: 3, sm: 0, xs: 0 }} sx={{ bgcolor: '#121d32',  display: { xs: 'none', md: "block" } }}>
            <SideBar dashName={dashName} setDashName={setDashName} />



          </Grid>
          <Grid size={{ lg: 9.5, md: 9, sm: 12, xs: 12 }} >
            {
              dashName === 'Dashboard' ? (
                <FirstScreen />
              ) : dashName === 'Campaign' ? (
                <SecondScreen />
              ) : (
                <ThirdScreen />
              )
            }
          </Grid>
          <SideDrawer dashName={dashName} setDashName={setDashName} open={open} setOpen={setOpen} />
        </Grid>

      </Container>

    </>
  );
}
