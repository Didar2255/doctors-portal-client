import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date())
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calendar
                        date={date}
                        setDate={setDate}
                    ></Calendar>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Appointments
                        date={date}
                    ></Appointments>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHome;