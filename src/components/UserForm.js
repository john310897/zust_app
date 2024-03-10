import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import { userFormStore } from '../store/appStore';
import { useNavigate } from 'react-router-dom';
export default function UserForm() {
    const [form, setForm] = useState({})
    const navigate = useNavigate();
    const updateState = userFormStore(state => state.updateFormState)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }
    
    const handleSubmit = () => {
        updateState(form)
        navigate('/summary')
    }
    
    return (
        <Box sx={{ width: '100%' }} >
            <Grid container spacing={2}>
                <Grid item lg={4}>
                    <TextField label="First Name" variant="outlined" name='first_name' onChange={handleChange} />
                </Grid>
                <Grid item lg={4}>
                    <TextField label="Middle Name" variant="outlined" name='middle_name' onChange={handleChange} />
                </Grid>
                <Grid item lg={4}>
                    <TextField label="Last Name" variant="outlined" name='last_name' onChange={handleChange} />
                </Grid>

                <Grid item lg={4}>
                    <TextField label="Phone Number" variant="outlined" name='phone' onChange={handleChange} />
                </Grid>
                <Grid item lg={4}>
                    <TextField label="Email" variant="outlined" name='email' onChange={handleChange} />
                </Grid>
                <Grid item lg={4}>
                    <TextField label="Age" variant="outlined" name='age' onChange={handleChange} />
                </Grid>
                <Grid item lg={12}>
                    <Button color='primary' variant='contained' onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
}