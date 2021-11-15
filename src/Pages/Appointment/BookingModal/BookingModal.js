import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ bookingOpen, handleBookingClose, timeSlot, date, setBookingSuccess }) => {

    const { name, time, price } = timeSlot;
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, patientEmail: user.email, phoneNumber: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handelBookSubmit = (e) => {
        const appointment = {
            ...bookingInfo,
            serviceName: name,
            time,
            price,
            date: date.toLocaleDateString()
        }
        fetch('https://stormy-mesa-33638.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose()
                }
            })
        e.preventDefault()

    };

    const handelOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPatientInfo = { ...bookingInfo }
        newPatientInfo[field] = value;
        setBookingInfo(newPatientInfo)
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={bookingOpen}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={bookingOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ mb: 3, textAlign: 'center', color: '#42D7E1' }}>
                            {name}
                        </Typography>
                        <form onClick={handelBookSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                name='patientName'
                                onBlur={handelOnBlur}
                                defaultValue={user.displayName}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                name='patientEmail'
                                onBlur={handelOnBlur}
                                type='email'
                                defaultValue={user.email}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                name='price'
                                onBlur={handelOnBlur}
                                type='number'
                                defaultValue={price}
                                size="small"
                            />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                onBlur={handelOnBlur}
                                name='phoneNumber'
                                type='number'
                                placeholder='Phone Number'
                                size="small"
                            />
                            <TextField
                                disabled
                                sx={{ width: '100%', m: 1 }}
                                id="outlined-size-small"
                                defaultValue={date.toDateString()}
                                size="small"
                            />
                            <Button type='submit' variant='contained' sx={{ my: 2, backgroundColor: '#42D7E1', borderRadius: 0 }}>send</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>

    );
};

export default BookingModal;