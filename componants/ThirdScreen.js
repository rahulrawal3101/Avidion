'use client';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const ThirdScreen = () => {
    return (
        <Grid container  >
            <Grid size={12} sx={{ bgcolor: '#21314b', p: '20px' }}>
                <Typography sx={{ color: '#eef0f0', fontSize: {lg:'25px', md:'25px', sm:'20px', xs:'20px'} }}>Dashboard</Typography>
            </Grid>
            <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'649px' }}>
                <SettingsIcon sx={{ fontSize: {lg:'400px', md:'300px', sm:'200px', xs:'150px'}, color:'lightgray' }} />
            </Grid>






        </Grid>

    )
}

export default ThirdScreen