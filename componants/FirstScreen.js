'use client';
import { Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const FirstScreen = () => {
    const [data, setData] = useState([]);
    // const pdata = [
    //     {
    //         Date: '20 Oct',
    //         EmailSent: 13,
    //         Replies: 10
    //     },
    //     {
    //         Date: '21 Oct',
    //         EmailSent: 15,
    //         Replies: 12
    //     },
    //     {
    //         Date: '22 Oct',
    //         EmailSent: 5,
    //         Replies: 10
    //     },
    //     {
    //         Date: '23 Oct',
    //         EmailSent: 10,
    //         Replies: 5
    //     },
    //     {
    //         Date: '24 Oct',
    //         EmailSent: 9,
    //         Replies: 4
    //     },
    //     {
    //         date: '25 Oct',
    //         EmailSent: 8,
    //         Replies: 8
    //     },
    // ];
    // const list = [
    //     {
    //         num: 4,
    //         name: 'Active Campaign',
    //     },
    //     {
    //         num: 2047,
    //         name: 'Email Sent',
    //     },
    //     {
    //         num: 134,
    //         name: 'Replies',
    //     },
    //     {
    //         num: 12,
    //         name: 'Meeting Booked',
    //     }
    // ];

    const fetchData = async () => {
        try {
            const campaignData = await axios.get('/api/allcampagin')
            console.log('camp', campaignData);
            if (campaignData.data.message == 'Data Fetch Successfully') {
                setData(campaignData.data.resp);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    console.log('first page', data);

    const activeCampaigns = data.filter(item => item.status === "Active").length;
    const totalSent = data.reduce((sum, item) => sum + item.sent, 0);
    const totalReplies = data.reduce((sum, item) => sum + item.replies, 0);
    const meetingsBooked = data.filter(item => item.status === "Meeting Booked").length;
    const chartData = data.map(item => ({
        Date: new Date(item.createdAt).toLocaleDateString('en-GB'), // "dd/mm/yyyy"
        sent: item.sent,
        replies: item.replies
    }));
    return (
        <Grid container size={{ lg: 12, md: 12, sm: 12, xs: 12 }} >
            <Grid size={12} sx={{ bgcolor: '#21314b', p: '20px' }}>
                <Typography sx={{ color: '#eef0f0', fontSize: { lg: '25px', md: '25px', sm: '20px', xs: '20px' }, userSelect: 'none' }}>Dashboard</Typography>
            </Grid>
            <Grid size={12} container sx={{  p:{lg: '30px', md:'30px', sm:'20px', xs:'10px'}, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', }} spacing={2}>

                <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}  >
                    <Paper sx={{ p: '10px 15px', borderRadius: '10px' }} elevation={5}>
                        <Typography sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: 'bold' }}>{activeCampaigns}</Typography>
                        <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '15px', xs: '15px' }, whiteSpace: 'nowrap', color: '#9ca1af', userSelect: 'none' }}>Active Campaign</Typography>
                    </Paper>
                </Grid>
                <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
                    <Paper sx={{ p: '10px 15px', borderRadius: '10px' }} elevation={5}>
                        <Typography sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: 'bold' }}>{totalSent}</Typography>
                        <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '15px', xs: '15px' }, whiteSpace: 'nowrap', color: '#9ca1af', userSelect: 'none' }}>Emails Sent</Typography>
                    </Paper>
                </Grid>
                <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }} >
                    <Paper sx={{ p: '10px 15px', borderRadius: '10px' }} elevation={5}>
                        <Typography sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: 'bold' }}>{totalReplies}</Typography>
                        <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '15px', xs: '15px' }, whiteSpace: 'nowrap', color: '#9ca1af', userSelect: 'none' }}>Replies</Typography>
                    </Paper>
                </Grid>
                <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }} >
                    <Paper sx={{ p: '10px 15px', borderRadius: '10px' }} elevation={5}>
                        <Typography sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: 'bold' }}>{meetingsBooked}</Typography>
                        <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '15px', xs: '15px' }, whiteSpace: 'nowrap', color: '#9ca1af', userSelect: 'none' }}>meetings Booked</Typography>
                    </Paper>
                </Grid>


            </Grid>
            <Grid container size={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', p:{lg: '30px', md:'30px', sm:'20px', xs:'10px'} }}>
                <Grid size={12}>
                    <Paper sx={{ borderRadius: '10px' }} elevation={4}>
                        <Typography sx={{ fontSize: { lg: '30px', md: '25px', sm: '20px', xs: '20px' }, fontWeight: 'bold', userSelect: 'none' , p:'20px'}}>Campaign Performance</Typography>
                       


                        <ResponsiveContainer
                            width="100%"
                            // increase height by reducing aspect ratio on small screens
                            aspect={isSmallScreen ? 1.2 : 2.5}
                           
                        >
                            <LineChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="Date"
                                    tick={{ fontSize: isSmallScreen ? 10 : 12 }}
                                    interval="preserveStartEnd"
                                />
                                <YAxis tick={{ fontSize: isSmallScreen ? 10 : 12 }} />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', fontSize: 12 }} />
                                <Legend wrapperStyle={{ fontSize: isSmallScreen ? 10 : 12 }} />
                                <Line
                                    type="monotone"
                                    dataKey="sent"
                                    stroke="#ff4d4f"
                                    strokeWidth={2}
                                    activeDot={{ r: 6 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="replies"
                                    stroke="#00b96b"
                                    strokeWidth={2}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                    </Paper>



                </Grid>
            </Grid>

        </Grid>
    )
}

export default FirstScreen