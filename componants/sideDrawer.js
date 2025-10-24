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
        sx: { width: { lg: '0%', md: '28%', sm: '45%', xs: '80%' },  margin: 'auto',  }
      }}
    >
       <Grid container sx={{ height: '100vh', border:'1px solid red' ,}}>
          <Grid size={{  xs: 12 }} sx={{ bgcolor: '#121d32',border:"2px solid green", }}>

            {/* <Box sx={{ display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },p:"10px" }}>
              {
                DashboardData.map((ele, index) => {
                  return (
                    <Box key={index} sx={{ mt: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', p: '5px', borderRadius: '7px', cursor: 'pointer', '&:hover': { bgcolor: dashName == 'Dashboard' ? '' : '#21314b' } }} onClick={() => { screenHandler(ele.name) }}>
                      <Typography sx={{ color: '#bbbdc5', ml: '5px', fontSize: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap', userSelect: 'none' }} >{ele.icon}{ele.name}</Typography>
                    </Box>
                  )
                })
              }
            </Box> */}
            <SideBar dashName={dashName} setDashName={setDashName}/>



          </Grid>
       
        


      </Grid>
      

    </Drawer>
  )
}

export default SideDrawer