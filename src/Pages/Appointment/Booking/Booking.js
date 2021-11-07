import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ timeSlot, date, setBookingSuccess }) => {
    const { name, time, spaces } = timeSlot;
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{ mb: 3 }} >
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#42D7E1' }} component='div'>
                        {name}
                    </Typography>
                    <Typography variant="body1" gutterBottom component='div' sx={{ fontWeight: 'bold' }}>
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', my: 1 }} component='div' >
                        {spaces} SPACES AVAILABLE
                    </Typography>
                    <Button variant="contained" sx={{ my: 2, backgroundColor: '#42D7E1', borderRadius: 0 }} onClick={handleBookingOpen}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                setBookingSuccess={setBookingSuccess}
                date={date}
                timeSlot={timeSlot}
                bookingOpen={bookingOpen}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;