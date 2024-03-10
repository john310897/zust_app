import { useState } from 'react'
import { userFormStore } from '../store/appStore'
import { Box, Grid, TextField } from '@mui/material'
export default function SummaryForm() {
    const store = userFormStore(state => state.obj)
    const [form,] = useState(store)
    return (
        <Box sx={{ width: '100%' }} >
            <Grid container spacing={2}>
                {Object.keys(form)?.map((field, index) => (
                    <Grid item lg={4} key={index}>
                        <TextField label="First Name" value={form?.[field]} variant="outlined" />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}