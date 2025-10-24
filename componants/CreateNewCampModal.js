'use client';
import { Button, FormControl, Grid, InputLabel, MenuItem, Modal, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const CreateNewCampModal = ({ open, setOpen ,fetchCampData}) => {
    const [campData, setCampData] = useState([]);

    const [inputData, setInputData] = useState({
        name: "",
        status: '',
        sent: 0,
        replies: 0,
    });
    // console.log('check data', inputData)
    const addNewCampaign = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };
    const handleClose = () => {
        setOpen(false)
    };
    const submitHandler = async () => {
        if (inputData.name !== '' && inputData.status !== '' && inputData.sent !== '' && inputData.replies) {
            try {
                const createCamp = await axios.post('/api/createnewcampaign', inputData);
                // console.log('check data s', createCamp);
                if (createCamp.data.message == 'Campaign Created Successfully') {
                    setCampData(createCamp.data.resp);
                    setOpen(false);
                    fetchCampData();

                }
            } catch (err) {
                console.log(err)
            }
        }else{
        alert('Please fill the required field');
    };


    }
    console.log(campData)

    return (
        <>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid size={{ lg: 3.5, md: 4, sm: 8, xs: 10 }} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}>

                        <Paper sx={{ borderRadius: '15px', border: '2px solid #21314b' }}>
                            <Grid container sx={{ p: '10px 15px' }}>
                                <Grid size={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mt: '10px' }}>
                                    <CloseIcon sx={{ fontSize: '23px', color: 'maroon', cursor: 'pointer' }} onClick={() => { setOpen(false) }} />

                                </Grid>
                                <Grid size={12} sx={{ mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', color: '#21314b', fontWeight: 'bold' }}>Name</Typography>
                                    <TextField placeholder="Title" fullWidth size="small" sx={{ mt: '10px' }} onChange={addNewCampaign} value={inputData.name} name="name" />
                                </Grid>

                                <Grid size={12} sx={{ mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', color: '#21314b', fontWeight: 'bold' }}>Status</Typography>
                                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                                        {/* <InputLabel id="demo-simple-select-standard-label">Status</InputLabel> */}
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={inputData.status}
                                            onChange={addNewCampaign}
                                            name="status"
                                            label="Select"
                                        >

                                            <MenuItem value={'Active'}>Active</MenuItem>
                                            <MenuItem value={'Paused'}>Paused</MenuItem>
                                            <MenuItem value={'Meeting Booked'}>Meeting Booked</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={12} sx={{ mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', color: '#21314b', fontWeight: 'bold' }}>Sent</Typography>
                                    <TextField placeholder="Title" type='Number' fullWidth size="small" sx={{ mt: '10px' }} onChange={addNewCampaign} value={inputData.sent} name="sent" />
                                </Grid>
                                <Grid size={12} sx={{ mt: '10px' }}>
                                    <Typography sx={{ fontSize: '17px', color: '#21314b', fontWeight: 'bold' }}>Replies</Typography>
                                    <TextField placeholder="Title" type='Number' fullWidth size="small" sx={{ mt: '10px' }} onChange={addNewCampaign} value={inputData.replies} name="replies" />
                                </Grid>

                                <Button sx={{ width: '100%', bgcolor: '#21314b', p: '7px', mt: '20px', mb: '20px', color: 'white' }} onClick={submitHandler}>Create New Campaign</Button>


                            </Grid>


                        </Paper>

                    </Grid>
                </Grid>


            </Modal>
        </>
    )
}

export default CreateNewCampModal