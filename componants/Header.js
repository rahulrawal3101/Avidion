'use client';
import { Grid, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({drawerHandler}) => {
    
  return (
    <Grid container sx={{bgcolor:'#121d32', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center' , position:'sticky', top:'0px'}}>
    <Typography sx={{fontSize:'25px', color:'white', fontWeight:700, ml:'20px'}}>Avidion</Typography>
     <MenuIcon sx={{ color: 'white', display: {lg:'none', md:'none', sm:'block', xs:'block'}, mr: '10px' }} onClick={drawerHandler} />

    </Grid>
  )
}

export default Header