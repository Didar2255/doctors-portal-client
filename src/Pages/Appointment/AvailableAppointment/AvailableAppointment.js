import { Alert, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';

const booking = [
    { id: 1, name: 'Teeth Orthodontics', time: '8:00 AM - 9:00 AM', spaces: 10 },
    { id: 2, name: 'Cosmetic Dentistry', time: '9:05 AM - 10:30 AM', spaces: 10 },
    { id: 3, name: 'Teeth Cleaning', time: '11:00 AM - 12:00 PM', spaces: 10 },
    { id: 4, name: 'Cavity Protection', time: '3:00 PM - 4:00 AM', spaces: 10 },
    { id: 5, name: 'Oral Dental', time: '4:10 PM - 5:30 PM', spaces: 10 },
    { id: 6, name: 'Teeth Surgery', time: '6:00 PM - 8:00 PM', spaces: 10 },
]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{ color: '#42D7E1', my: 5, fontWeight: 'bold' }}>Appointment Available On : {date.toDateString()} </Typography>
            {
                bookingSuccess && <Alert severity="success">Appointment Booked SuccessFully</Alert>
            }

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        booking.map(timeSlot => <Booking
                            setBookingSuccess={setBookingSuccess}
                            date={date}
                            key={timeSlot.id}
                            timeSlot={timeSlot}
                        ></Booking>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default AvailableAppointment;