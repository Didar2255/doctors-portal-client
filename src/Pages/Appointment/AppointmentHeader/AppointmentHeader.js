import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import Calendar from '../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container sx={{ my: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" component="div">
                        Appointment
                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Typography>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;