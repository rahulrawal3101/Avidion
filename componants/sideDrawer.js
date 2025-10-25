'use client'
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Drawer, Grid, Typography } from '@mui/material';

import { useState } from 'react';
import SideBar from './SideBar';


const SideDrawer = ({ open, setOpen,dashName , setDashName}) => {
  const [change, setChange] = useState('menu')
  const closeHandler = () => {
    setOpen(false)
  }
// const changeHandler=(ele)=>{
//   console.log(ele);
//   setChange(ele)
// }

  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={() => { setOpen(false) }}
      PaperProps={{
        sx: { width: { lg: '0%', md: '28%', sm: '45%', xs: '60%' },  margin: 'auto',  }
      }}
    >
       <Grid container sx={{ height: '100vh',}}>
          <Grid size={{  xs: 12 }} sx={{ bgcolor: '#121d32',}}>
            <SideBar dashName={dashName} setDashName={setDashName} open={open} setOpen={setOpen}/>
          </Grid>
       
        


      </Grid>
      

    </Drawer>
  )
}

export default SideDrawer