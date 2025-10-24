'use client';

import { Campaign } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CreateNewCampModal from './CreateNewCampModal';
import axios from 'axios';

const SecondScreen = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);

    const CampaignList = [
        {
            name: 'Product Launched',
            status: 'Active',
            sent: '1200',
            replies: '200',
            createdAt: '10 oct 2025',
        },
        {
            name: 'Product Launched',
            status: 'Active',
            sent: '1200',
            replies: '200',
            createdAt: '10 oct 2025',
        },
        {
            name: 'Product Launched',
            status: 'Active',
            sent: '1200',
            replies: '200',
            createdAt: '10 oct 2025',
        },
        {
            name: 'Product Launched',
            status: 'Active',
            sent: '1200',
            replies: '200',
            createdAt: '10 oct 2025',
        },
        {
            name: 'Product Launched',
            status: 'Active',
            sent: '1200',
            replies: '200',
            createdAt: '10 oct 2025',
        }
    ];

    const fetchCampData = async()=>{
        try{
           const campaignData = await axios.get('/api/allcampagin')
           console.log('camp', campaignData);
           if(campaignData.data.message == 'Data Fetch Successfully'){
            setData(campaignData.data.resp);
           }
        }catch(err){
            console.log(err);
        }
    };

     useEffect(()=>{
      fetchCampData();
     },[])
  const openModal=()=>{
      setOpen(true);
  }

    return (
        <Grid container >
            <Grid size={12} sx={{ bgcolor: '#21314b', p: '20px' }}>
                <Typography sx={{ color: '#eef0f0', fontSize: {lg:'25px', md:'25px', sm:'20px', xs:'20px'}, userSelect: 'none' }}>Dashboard</Typography>
            </Grid>

            <Grid container size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Grid size={10}>
                    <Paper sx={{ mt: '20px', p: '20px', borderRadius: '10px' }} elevation={4}>
                       
                        <Typography sx={{ fontSize: '27px', fontWeight: 'bold', mb: '20px', userSelect: 'none' }}>Campaign List</Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent:'right',alignItems: 'center', width: '100%',  mb:'20px' }}>
                            <Button sx={{ bgcolor: '#21314b', color: 'white', p: '10px' }} onClick={openModal}>Create new Campaign</Button>
                        </Box>
                        <Box>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                    <TableHead sx={{ bgcolor: 'grey' }}>
                                        <TableRow >
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' , userSelect: 'none'}}>S.No</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800', userSelect: 'none' }} >Name</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800', userSelect: 'none' }}>Status</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800', userSelect: 'none' }}>Sent</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800', userSelect: 'none' }}>Replies</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800', userSelect: 'none' }}>Created At</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody >

                                        {
                                            data.map((ele, index) => {
                                                return <TableRow key={index} >
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none' }}>{index + 1}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none' }}>{ele.name} </TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none', color:ele.status === 'Active'? 'orange': ele.status == 'Meeting Booked'?'green':'red' }}>{ele.status}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none' }}>{ele.sent}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none' }}>{ele.replies}</TableCell>
                                                    <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold', userSelect: 'none' }}>{ele.createdAt.slice(8, 10)}/{ele.createdAt.slice(5, 7)}/{ele.createdAt.slice(0, 4)}</TableCell>

                                                </TableRow>
                                            })
                                        }

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>

                    </Paper>



                </Grid>
            </Grid>
        <CreateNewCampModal open={open} setOpen={setOpen} fetchCampData={fetchCampData}/>
        </Grid>

    )

}

export default SecondScreen